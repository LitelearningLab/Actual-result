import {
  Component,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { AuthService } from 'src/app/home/service/auth.service';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';
import { Subscription, forkJoin } from 'rxjs';
import { API_BASE } from 'src/app/shared/api.config';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';
import {
  DateRangePickerDialogComponent,
  DateRangeDialogResult,
} from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { notify } from 'src/app/shared/global-notify';
import { MatTooltipModule } from '@angular/material/tooltip';

export type QuestionType = 'MCQ' | 'Subjective';

export interface QuestionOption {
  option_id?: string | number;
  text: string;
  is_correct?: boolean;
}
export interface QuestionRow {
  id: string | number;
  question: string;
  category?: string;
  category_description?: string;
  category_id?: string | number;
  institute_id?: string | number;
  exam_id?: string | number;
  type: QuestionType | string;
  originalType?: string;
  options?: QuestionOption[]; // for MCQ
  answer?: string; // for subjective or correct answer
  marks?: number;
}

@Component({
  selector: 'app-view-questions',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatDatepickerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSortModule,
    MatTooltipModule,
    OverlayModule,
    PortalModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.scss'],
})
export class ViewQuestionsComponent implements OnDestroy, OnInit {
  // currently selected question for the details modal
  viewedQuestion: any = null;
  filter = '';
  institutes: Array<{ name: string; institute_id?: string }> = [];
  private allInstitutes: Array<{ name: string; institute_id?: string }> = [];
  exams: Array<{ title: string; exam_id?: string }> = [];
  selectedInstitute = '';
  selectedInstitutes: string[] = [];
  instituteFilterSearch = '';
  departmentFilterSearch = '';
  teamFilterSearch = '';

  filterQuestionType: string = '';

  selectedQuestionTypes: string[] = [];

  get isInstituteSelected(): boolean {
    if (!this.isSuperAdmin) return true;
    return !!this.getScopedInstituteId();
  }

  instituteSearch = '';
  instituteSearchTerm = '';
  // multi-select categories with search
  selectedCategories: string[] = [];
  categoryFilterName = '';
  categorySearch = '';
  // value used for the "select all" pseudo-option
  selectAllValue = '__SELECT_ALL_CATEGORIES__';
  questions: QuestionRow[] = [];
  displayedColumns: string[] = [
    'select',
    'sno',
    'question',
    'category',
    'type',
    'marks',
    'actions',
  ];
  dataSource = new MatTableDataSource<QuestionRow>([]);
  hasAppliedFilters = false;
  // selection for batch operations
  selectedQuestionIds = new Set<string | number>();
  targetCategories: Array<{ name: string; category_id?: string }> = [];
  copyMoveInProgress = false;
  selectedTargetCategory: string | null = null;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;

  private _subs: Subscription | null = null;
  private _globalInstituteSub: Subscription | null = null;
  private activeInstituteId = '';

  private institutesUrl = `${API_BASE}/get-institute-list`;
  private examsUrl = `${API_BASE}/get-exams-list`;
  private questionsUrl = `${API_BASE}/get-questions-details`;
  private categoryDetailsUrl = `${API_BASE}/category-details`;
  private readonly questionsReturnStateKey = 'questions_return_state';
  categories: Array<any> = [];
  private questionBankMarksById = new Map<string, number>();
  private questionBankMarksByName = new Map<string, number>();
  categoryCtrl = new FormControl({ value: '', disabled: true });
  filteredCategories$: Observable<any[]> = of([]);
  departments: Array<any> = [];
  teams: Array<any> = [];
  // extra filters
  selectedDepartments: string[] = [];
  selectedTeams: string[] = [];
  filterCreationDateAfter: Date | null = null;
  filterCreationDate: Date | null = null;
  filterActiveStatus: boolean | null = null;
  filterCreatedByMe: boolean = false;
  filterPublicAccess: boolean | null = null;
  // location / industry filters that scope the Institute list (mirrors view-institutes.component.ts cascade)
  filterCountry: string = '';
  filterCity: string = '';
  filterIndustry: string = '';
  filterSector: string = '';
  selectedCountries: string[] = [];
  selectedCities: string[] = [];
  citySearch: string = '';
  selectedIndustries: string[] = [];
  selectedSectors: string[] = [];
  countries: Array<{ code: string; name: string }> = [];
  filterCityOptions: Array<{ code: string; name: string }> = [];
  private locationHierarchyRaw: any[] = [];
  industryTypes = ['School', 'College', 'BPO', 'Bank', 'IT'];
  industrySectors = ['School', 'Engineering', 'Arts', 'Healthcare', 'Finance', 'Banking', 'IT'];
  // Industry -> Sector dependency map (mirrors institute-register.component.ts / view-institutes.component.ts)
  private sectorMap: Record<string, string[]> = {
    School: ['School'],
    College: ['Engineering', 'Arts'],
    BPO: ['Healthcare', 'Finance'],
    Bank: ['Bank'],
    IT: ['IT'],
  };
  countrySearch = '';
  industrySearch = '';
  sectorSearch = '';

  get filteredInstitutesForFilter(): Array<{ name: string; institute_id?: string }> {
    const term = (this.instituteFilterSearch || '').trim().toLowerCase();
    let list = this.institutes || [];
    if (term) {
      list = list.filter(
        (i) =>
          (i.name || '').toLowerCase().includes(term) ||
          (i.institute_id && this.selectedInstitutes.includes(i.institute_id))
      );
    }
    return [...list].sort((a, b) => {
      const aSel = a.institute_id ? this.selectedInstitutes.includes(a.institute_id) : false;
      const bSel = b.institute_id ? this.selectedInstitutes.includes(b.institute_id) : false;
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  get filteredDepartmentsForFilter(): Array<{ id: string; name: string }> {
    const term = (this.departmentFilterSearch || '').trim().toLowerCase();
    let list = this.departments || [];
    if (term) {
      list = list.filter(
        (d) =>
          (d.name || '').toLowerCase().includes(term) || this.selectedDepartments.includes(d.id)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = this.selectedDepartments.includes(a.id);
      const bSel = this.selectedDepartments.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  get filteredTeamsForFilter(): Array<{
    id: string;
    name: string;
    department_id?: string | null;
    department_name?: string | null;
  }> {
    const term = (this.teamFilterSearch || '').trim().toLowerCase();
    let list = this.teams || [];

    // Filter by selected departments if any are selected in filter
    const deptsArr: string[] = (Array.isArray(this.selectedDepartments)
      ? this.selectedDepartments
      : [this.selectedDepartments]
    )
      .filter(Boolean)
      .map((v: any) => String(v));

    if (deptsArr.length > 0) {
      const selectedDeptObjs = (this.departments || []).filter(
        (d) => deptsArr.includes(String(d.id)) || deptsArr.includes(d.name)
      );
      const deptNames = selectedDeptObjs.map((d) => (d.name || '').toLowerCase().trim());
      deptsArr.forEach((val) => {
        if (typeof val === 'string' && val.trim()) deptNames.push(val.toLowerCase().trim());
      });

      list = list.filter((t: any) => {
        if (Array.isArray(this.selectedTeams) && this.selectedTeams.includes(t.id)) return true;

        const teamDeptId = t.department_id ? String(t.department_id) : '';
        const teamDeptName = t.department_name
          ? (t.department_name || '').toLowerCase().trim()
          : '';

        if (teamDeptId && deptsArr.includes(teamDeptId)) return true;
        if (teamDeptName && deptNames.includes(teamDeptName)) return true;

        return false;
      });
    }

    if (term) {
      list = list.filter(
        (t) => (t.name || '').toLowerCase().includes(term) || this.selectedTeams.includes(t.id)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = this.selectedTeams.includes(a.id);
      const bSel = this.selectedTeams.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  // --- Country Multi-Select & Sorting Logic ---
  get filteredCountries(): Array<{ code: string; name: string }> {
    const term = (this.countrySearch || '').trim().toLowerCase();
    let list = this.countries || [];
    if (term) {
      list = list.filter(
        (c) =>
          (c.name || '').toLowerCase().includes(term) ||
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
    const items = this.filteredCountries || [];
    return items.length > 0 && items.every((c) => (this.selectedCountries || []).includes(c.code));
  }
  toggleSelectAllCountries(): void {
    const items = this.filteredCountries || [];
    if (this.isAllCountriesSelected()) {
      this.selectedCountries = [];
    } else {
      this.selectedCountries = items.map((c) => c.code);
    }
    this.onCountryFilterChange();
  }

  // --- Industry Multi-Select & Sorting Logic ---
  get filteredIndustryTypes(): string[] {
    const term = (this.industrySearch || '').trim().toLowerCase();
    let list = this.industryTypes || [];
    if (term) {
      list = list.filter(
        (t) => t.toLowerCase().includes(term) || (this.selectedIndustries || []).includes(t)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedIndustries || []).includes(a);
      const bSel = (this.selectedIndustries || []).includes(b);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.localeCompare(b);
    });
  }
  isAllIndustriesSelected(): boolean {
    const items = this.filteredIndustryTypes || [];
    return items.length > 0 && items.every((t) => (this.selectedIndustries || []).includes(t));
  }
  toggleSelectAllIndustries(): void {
    const items = this.filteredIndustryTypes || [];
    if (this.isAllIndustriesSelected()) {
      this.selectedIndustries = [];
    } else {
      this.selectedIndustries = [...items];
    }
    this.onIndustryFilterChange();
  }

  // --- Sector Multi-Select & Sorting Logic ---
  private get scopedSectorsList(): string[] {
    if (this.selectedIndustries && this.selectedIndustries.length > 0) {
      const sectorsSet = new Set<string>();
      for (const ind of this.selectedIndustries) {
        const list = this.sectorMap[ind] || [];
        list.forEach((s) => sectorsSet.add(s));
      }
      return Array.from(sectorsSet);
    }
    if (this.filterIndustry) {
      return this.sectorMap[this.filterIndustry] || [];
    }
    return [];
  }

  get filteredSectors(): string[] {
    const scoped = this.scopedSectorsList || [];
    const term = (this.sectorSearch || '').trim().toLowerCase();
    let list = scoped;
    if (term) {
      list = list.filter(
        (s) => s.toLowerCase().includes(term) || (this.selectedSectors || []).includes(s)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedSectors || []).includes(a);
      const bSel = (this.selectedSectors || []).includes(b);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.localeCompare(b);
    });
  }
  isAllSectorsSelected(): boolean {
    const items = this.filteredSectors || [];
    return items.length > 0 && items.every((s) => (this.selectedSectors || []).includes(s));
  }
  toggleSelectAllSectors(): void {
    const items = this.filteredSectors || [];
    if (this.isAllSectorsSelected()) {
      this.selectedSectors = [];
    } else {
      this.selectedSectors = [...items];
    }
    this.onSectorFilterChange();
  }

  // --- Question Bank Multi-Select & Sorting Logic ---
  get filteredCategoriesForFilter(): Array<any> {
    const term = (this.categorySearch || '').trim().toLowerCase();
    let list = this.categories || [];
    if (term) {
      list = list.filter(
        (c) =>
          (c.name || c.category_name || '').toLowerCase().includes(term) ||
          (this.selectedCategories || []).includes(String(c.id || c.category_id || c._id))
      );
    }
    return [...list].sort((a, b) => {
      const idA = String(a.id || a.category_id || a._id);
      const idB = String(b.id || b.category_id || b._id);
      const aSel = (this.selectedCategories || []).includes(idA);
      const bSel = (this.selectedCategories || []).includes(idB);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || a.category_name || '').localeCompare(b.name || b.category_name || '');
    });
  }

  get filteredCategories() {
    const q = (this.categorySearch || '').toLowerCase();
    if (!q) return this.categories;
    return this.categories.filter(
      (c: any) =>
        (c.name || '').toLowerCase().includes(q) ||
        (c.category_name || '').toLowerCase().includes(q)
    );
  }

  // --- Select All: Institute ---
  isAllInstitutesSelected(): boolean {
    const ids = (this.filteredInstitutesForFilter || [])
      .map((i) => i.institute_id!)
      .filter(Boolean);
    return ids.length > 0 && ids.every((id) => (this.selectedInstitutes || []).includes(id));
  }
  toggleSelectAllInstitutes() {
    const ids = (this.filteredInstitutesForFilter || [])
      .map((i) => i.institute_id!)
      .filter(Boolean);
    if (this.isAllInstitutesSelected()) {
      this.selectedInstitutes = [];
    } else {
      this.selectedInstitutes = [...ids];
    }
    this.onInstituteSelectionChange();
  }

  // --- Select All: Department ---
  isAllDepartmentsSelected(): boolean {
    const ids = (this.filteredDepartmentsForFilter || []).map((d) => d.id).filter(Boolean);
    return ids.length > 0 && ids.every((id) => (this.selectedDepartments || []).includes(id));
  }

  toggleSelectAllDepartments() {
    const ids = (this.filteredDepartmentsForFilter || []).map((d) => d.id).filter(Boolean);
    if (this.isAllDepartmentsSelected()) {
      this.selectedDepartments = [];
    } else {
      this.selectedDepartments = [...ids];
    }
    this.onDepartmentSelectionChange();
  }

  // --- Select All: Team ---
  isAllTeamsSelected(): boolean {
    const ids = (this.filteredTeamsForFilter || []).map((t) => t.id).filter(Boolean);
    return ids.length > 0 && ids.every((id) => (this.selectedTeams || []).includes(id));
  }

  toggleSelectAllTeams() {
    const ids = (this.filteredTeamsForFilter || []).map((t) => t.id).filter(Boolean);
    if (this.isAllTeamsSelected()) {
      this.selectedTeams = [];
    } else {
      this.selectedTeams = [...ids];
    }
    this.onTeamSelectionChange();
  }

  private filtersOverlayRef: OverlayRef | null = null;

  ngOnInit(): void {
    this.pageMeta.setMeta('Question Banks', 'Browse and review question bank');
    this.restoreQuestionsReturnState();
    try {
      this._globalInstituteSub = this.globalInstituteContext.activeInstitute$.subscribe(
        (context) => {
          this.isGlobalInstituteActive = this.globalInstituteContext.isGlobalFilterActive();
          const instituteId = context?.institute_id || '';
          if (instituteId) {
            if (instituteId === this.activeInstituteId) return;
            this.resetForInstituteChange(instituteId);
            return;
          }
          if (this.activeInstituteId) this.resetAfterGlobalInstituteClear();
        }
      );
    } catch (e) {
      /* ignore in tests */
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    try {
      this.dataSource.paginator = this.paginator;
      if (this.questions && this.questions.length) {
        this.dataSource.data = [...this.questions];
      }
    } catch (e) {
      /* ignore during tests */
    }
  }

  isSuperAdmin = false;
  isGlobalInstituteActive = false;
  get showLocationAndIndustryFilters(): boolean {
    return this.isSuperAdmin && !this.isGlobalInstituteActive;
  }
  private loginInstituteId: string | null = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private loading: LoaderService,
    private auth: AuthService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private pageMeta: PageMetaService,
    private confirmService: ConfirmService,
    private globalInstituteContext: GlobalInstituteContextService,
    private dialog: MatDialog
  ) {
    this.initializeInstituteScopeFromSession();

    // subscribe to isSuperAdmin observable so UI stays reactive to role changes
    try {
      this._subs = this.auth.user$.subscribe((user: any) => {
        this.isSuperAdmin =
          !!user &&
          ['super_admin', 'superadmin', 'super-admin'].includes((user.role || '').toLowerCase());
        if (!this.isSuperAdmin && user) {
          const instId =
            sessionStorage.getItem('global_institute_id') ||
            user?.institute_id ||
            user?.instituteId ||
            user?.institute?.institute_id ||
            user?.institute?.id ||
            (typeof user?.institute === 'string' ? user.institute : '');
          if (instId) {
            this.loginInstituteId = String(instId);
            this.selectedInstitute = this.loginInstituteId;
            this.instituteSearch = '';
            this.syncInstituteSearch();
          }
        }
      });
    } catch (e) {
      /* ignore in tests */
    }

    // http is optional for tests; if present, load institutes
    if (this.http) this.loadInstitutes();
    if (this.http) this.loadCountries();

    // also load categories list for the Category filter, scoped for admins
    if (this.http) this.loadCategories(this.getScopedInstituteId());
  }

  openCreatedDateRangePicker(): void {
    const dialogRef = this.dialog.open(DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.filterCreationDateAfter,
        endDate: this.filterCreationDate,
      },
    });

    dialogRef.afterClosed().subscribe((res: DateRangeDialogResult | undefined) => {
      if (res) {
        this.filterCreationDateAfter = res.startDate;
        this.filterCreationDate = res.endDate;
      }
    });
  }

  getCreatedDateRangeDisplay(): string {
    const start = this.filterCreationDateAfter;
    const end = this.filterCreationDate;
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

  ngOnDestroy(): void {
    try {
      this._subs?.unsubscribe();
    } catch (e) {
      /* ignore */
    }
    try {
      this._globalInstituteSub?.unsubscribe();
    } catch (e) {
      /* ignore */
    }
    this.saveQuestionsReturnState();
  }

  get appliedFilterChips(): Array<{
    key: string;
    label: string;
    removable: boolean;
    tooltip?: string;
  }> {
    if (!this.hasAppliedFilters) return [];
    const chips: Array<{ key: string; label: string; removable: boolean; tooltip?: string }> = [];

    // Country
    if (this.selectedCountries && this.selectedCountries.length) {
      if (this.selectedCountries.length === 1) {
        const cName = this.getSelectedName(
          this.countries.map((c) => ({ id: c.code, name: c.name })),
          this.selectedCountries[0]
        );
        chips.push({ key: 'country', label: `Country: ${cName}`, removable: true, tooltip: cName });
      } else {
        const cNames = this.selectedCountries
          .map((code) =>
            this.getSelectedName(
              this.countries.map((c) => ({ id: c.code, name: c.name })),
              code
            )
          )
          .filter(Boolean);
        chips.push({
          key: 'country',
          label: `Country: ${this.selectedCountries.length} selected`,
          removable: true,
          tooltip: cNames.join(', '),
        });
      }
    } else if (this.filterCountry) {
      const cName = this.getSelectedName(
        this.countries.map((c) => ({ id: c.code, name: c.name })),
        this.filterCountry
      );
      chips.push({ key: 'country', label: `Country: ${cName}`, removable: true, tooltip: cName });
    }

    if (this.selectedCities && this.selectedCities.length) {
      chips.push({
        key: 'city',
        label: `City: ${this.selectedCities.join(', ')}`,
        removable: true,
        tooltip: this.selectedCities.join(', '),
      });
    } else if (this.filterCity) {
      chips.push({
        key: 'city',
        label: `City: ${this.filterCity}`,
        removable: true,
        tooltip: this.filterCity,
      });
    }

    // Industry
    if (this.selectedIndustries && this.selectedIndustries.length) {
      if (this.selectedIndustries.length === 1) {
        chips.push({
          key: 'industry',
          label: `Industry: ${this.selectedIndustries[0]}`,
          removable: true,
          tooltip: this.selectedIndustries[0],
        });
      } else {
        chips.push({
          key: 'industry',
          label: `Industry: ${this.selectedIndustries.length} selected`,
          removable: true,
          tooltip: this.selectedIndustries.join(', '),
        });
      }
    } else if (this.filterIndustry) {
      chips.push({
        key: 'industry',
        label: `Industry: ${this.filterIndustry}`,
        removable: true,
        tooltip: this.filterIndustry,
      });
    }

    // Sector
    if (this.selectedSectors && this.selectedSectors.length) {
      if (this.selectedSectors.length === 1) {
        chips.push({
          key: 'sector',
          label: `Sector: ${this.selectedSectors[0]}`,
          removable: true,
          tooltip: this.selectedSectors[0],
        });
      } else {
        chips.push({
          key: 'sector',
          label: `Sector: ${this.selectedSectors.length} selected`,
          removable: true,
          tooltip: this.selectedSectors.join(', '),
        });
      }
    } else if (this.filterSector) {
      chips.push({
        key: 'sector',
        label: `Sector: ${this.filterSector}`,
        removable: true,
        tooltip: this.filterSector,
      });
    }

    // Institute
    if (this.selectedInstitutes && this.selectedInstitutes.length) {
      if (this.selectedInstitutes.length === 1) {
        const instName = this.getInstituteLabel(this.selectedInstitutes[0]);
        chips.push({
          key: 'institute',
          label: `Institute: ${instName}`,
          removable: this.isSuperAdmin && !this.isGlobalInstituteActive,
          tooltip: instName,
        });
      } else {
        const instNames = this.selectedInstitutes
          .map((id) => this.getInstituteLabel(id))
          .filter(Boolean);
        chips.push({
          key: 'institute',
          label: `Institutes: ${this.selectedInstitutes.length} selected`,
          removable: this.isSuperAdmin && !this.isGlobalInstituteActive,
          tooltip: instNames.join(', '),
        });
      }
    } else if (this.selectedInstitute && !this.isGlobalInstituteActive) {
      const instName = this.getInstituteLabel(this.selectedInstitute);
      if (instName) {
        chips.push({
          key: 'institute',
          label: `Institute: ${instName}`,
          removable: this.isSuperAdmin,
          tooltip: instName,
        });
      }
    }

    // Question Bank (Category)
    if (this.selectedCategories && this.selectedCategories.length) {
      if (this.selectedCategories.length === 1) {
        const catName = this.getCategoryLabel(this.selectedCategories[0]);
        chips.push({
          key: 'category',
          label: `Question Bank: ${catName}`,
          removable: true,
          tooltip: catName,
        });
      } else {
        const catNames = this.selectedCategories
          .map((id) => this.getCategoryLabel(id))
          .filter(Boolean);
        chips.push({
          key: 'category',
          label: `Question Banks: ${this.selectedCategories.length} selected`,
          removable: true,
          tooltip: catNames.join(', '),
        });
      }
    } else if (this.categoryFilterName) {
      chips.push({
        key: 'category_name',
        label: `Question Bank: ${this.categoryFilterName}`,
        removable: true,
        tooltip: this.categoryFilterName,
      });
    }

    (this.selectedDepartments || []).forEach((id) =>
      chips.push({
        key: `department:${id}`,
        label: `Department: ${this.getSelectedName(this.departments, id)}`,
        removable: true,
      })
    );
    (this.selectedTeams || []).forEach((id) =>
      chips.push({
        key: `team:${id}`,
        label: `Team: ${this.getSelectedName(this.teams, id)}`,
        removable: true,
      })
    );
    if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
      const labels = this.selectedQuestionTypes.map((t) =>
        t === 'objective' ? 'Objective' : t === 'descriptive' ? 'Descriptive' : t
      );
      chips.push({
        key: 'question_type',
        label: `Type: ${labels.join(', ')}`,
        removable: true,
        tooltip: labels.join(', '),
      });
    } else if (this.filterQuestionType) {
      const typeLabel =
        this.filterQuestionType === 'objective'
          ? 'Objective'
          : this.filterQuestionType === 'descriptive'
            ? 'Descriptive'
            : this.filterQuestionType;
      chips.push({
        key: 'question_type',
        label: `Type: ${typeLabel}`,
        removable: true,
        tooltip: typeLabel,
      });
    }
    if (this.filterCreationDateAfter)
      chips.push({
        key: 'created_after',
        label: `Created after: ${this.formatFilterDate(this.filterCreationDateAfter)}`,
        removable: true,
      });
    if (this.filterCreationDate)
      chips.push({
        key: 'created_before',
        label: `Created before: ${this.formatFilterDate(this.filterCreationDate)}`,
        removable: true,
      });
    if (this.filterCreatedByMe)
      chips.push({ key: 'created_by_me', label: 'Created by me', removable: true });

    return chips;
  }

  removeAppliedFilter(key: string) {
    if (!key) return;
    if (key === 'country') {
      this.filterCountry = '';
      this.selectedCountries = [];
      this.selectedCities = [];
      this.filterCity = '';
      this.filterCityOptions = [];
      this.refreshInstituteScope();
    } else if (key === 'city') {
      this.selectedCities = [];
      this.filterCity = '';
      this.refreshInstituteScope();
    } else if (key === 'industry') {
      this.selectedIndustries = [];
      this.filterIndustry = '';
      this.selectedSectors = [];
      this.filterSector = '';
      this.refreshInstituteScope();
    } else if (key === 'sector') {
      this.selectedSectors = [];
      this.filterSector = '';
      this.refreshInstituteScope();
    } else if (key === 'institute' && this.isSuperAdmin) {
      this.selectedInstitutes = [];
      this.selectedInstitute = '';
      this.instituteSearch = '';
      this.selectedCategories = [];
      this.selectedQuestionTypes = [];
      this.categoryFilterName = '';
      this.categorySearch = '';
      this.categoryCtrl.setValue('');
      this.categoryCtrl.disable({ emitEvent: false });
      this.departments = [];
      this.teams = [];
      this.loadCategories();
    } else if (key === 'category' || key === 'category_name') {
      this.selectedCategories = [];
      this.categoryFilterName = '';
      this.categorySearch = '';
    } else if (key.startsWith('category:'))
      this.selectedCategories = this.selectedCategories.filter(
        (id) => String(id) !== key.substring('category:'.length)
      );
    else if (key.startsWith('department:'))
      this.selectedDepartments = this.selectedDepartments.filter(
        (id) => String(id) !== key.substring('department:'.length)
      );
    else if (key.startsWith('team:'))
      this.selectedTeams = this.selectedTeams.filter(
        (id) => String(id) !== key.substring('team:'.length)
      );
    else if (key === 'question_type') {
      this.filterQuestionType = '';
      this.selectedQuestionTypes = [];
    } else if (key === 'created_after') this.filterCreationDateAfter = null;
    else if (key === 'created_before') this.filterCreationDate = null;
    else if (key === 'created_by_me') this.filterCreatedByMe = false;
    else if (key === 'public_access') this.filterPublicAccess = null;
    this.refreshAfterFilterChipChange();
  }

  clearAppliedFilters() {
    this.onReset();
  }

  private refreshAfterFilterChipChange() {
    if (this.appliedFilterChips.length) this.loadQuestions();
    else {
      this.hasAppliedFilters = false;
      this.questions = [];
      this.dataSource.data = [];
      this.selectedQuestionIds.clear();
    }
  }

  private initializeInstituteScopeFromSession(): void {
    try {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      const user = raw ? JSON.parse(raw) : null;
      const role = String(user?.role || user?.user_role || user?.role_name || '').toLowerCase();
      this.isSuperAdmin =
        ['super_admin', 'superadmin', 'super-admin'].includes(role) ||
        user?.is_super_admin === true ||
        !!user?.isSuperAdmin;
      const instId =
        sessionStorage.getItem('global_institute_id') ||
        user?.institute_id ||
        user?.instituteId ||
        user?.institute?.institute_id ||
        user?.institute?.id ||
        (typeof user?.institute === 'string' ? user.institute : '');
      if (instId) {
        this.loginInstituteId = String(instId);
        if (!this.isSuperAdmin) {
          this.selectedInstitute = this.loginInstituteId;
          this.instituteSearch = '';
        }
      }
    } catch (e) {
      /* ignore */
    }
  }

  private getScopedInstituteId(instId?: string): string {
    if (this.selectedInstitutes && this.selectedInstitutes.length) {
      return this.selectedInstitutes.join(',');
    }
    if (!this.isSuperAdmin && this.loginInstituteId) return String(this.loginInstituteId);
    return String(instId || this.selectedInstitute || '');
  }

  private getItemInstituteId(item: any): string {
    return String(
      item?.institute_id ??
        item?.instituteId ??
        item?.institute?.institute_id ??
        item?.institute?.id ??
        item?.institutes?.institute_id ??
        item?.institutes?.id ??
        ''
    );
  }

  private isAllowedForInstitute(item: any, scopedInstitute: string): boolean {
    if (this.isSuperAdmin || !scopedInstitute) return true;
    const itemInstId = this.getItemInstituteId(item);
    if (scopedInstitute.includes(',')) {
      const allowed = scopedInstitute.split(',').map((s) => s.trim());
      return allowed.includes(String(itemInstId));
    }
    return itemInstId === String(scopedInstitute);
  }
  private getInstituteLabel(id: any): string {
    if (!id) return '';
    const found: any = (this.institutes || []).find(
      (i: any) => String(i.institute_id || i.id || i._id) === String(id)
    );
    if (found?.name || found?.institute_name || found?.short_name) {
      return found.name || found.institute_name || found.short_name;
    }
    const globalContext = this.globalInstituteContext?.activeContext;
    if (globalContext && String(globalContext.institute_id) === String(id) && globalContext.institute_name) {
      return globalContext.institute_name;
    }
    return String(id || '');
  }
  private getCategoryLabel(id: any): string {
    if (!id) return '';
    const found = (this.categories || []).find(
      (c: any) => String(c.category_id || c.id || c._id) === String(id)
    );
    return (
      found?.name ||
      found?.category_name ||
      (this.categories && this.categories.length ? String(id || '') : '')
    );
  }
  private getSelectedName(list: any[], selectedId: any): string {
    if (!selectedId || !list || !list.length) return '';
    const found = (list || []).find(
      (item) =>
        String(item?.id || item?.dept_id || item?.team_id || item?.deptId || item?.teamId) ===
        String(selectedId)
    );
    return found ? found.name || found.dept_name || found.team_name || String(selectedId) : '';
  }
  private formatFilterDate(value: Date): string {
    try {
      return value.toISOString().slice(0, 10);
    } catch (e) {
      return String(value || '');
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

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.filtersBtn)
      .withPositions([
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 8 },
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

  refresh() {
    if (!this.hasAppliedFilters) {
      try {
        notify('Apply filters to fetch questions', 'info');
      } catch (e) {}
      return;
    }
    this.loadQuestions();
  }

  onQuestionTypeChange() {
    this.selectedCategories = [];
    this.loadCategories(this.getScopedInstituteId());
  }

  onDepartmentSelectionChange() {
    this.selectedCategories = [];
    this.loadCategories(this.getScopedInstituteId());
  }

  onTeamSelectionChange() {
    this.selectedCategories = [];
    this.loadCategories(this.getScopedInstituteId());
  }

  loadInstitutes() {
    this.http!.get<any>(this.institutesUrl).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res && Array.isArray(res.data) ? res.data : [];
        // Prefer the full API name; short_name remains a fallback for legacy responses.
        this.institutes = arr.map((r: any) => ({
          name: r.institute_name || r.name || r.short_name || '',
          institute_id: r.institute_id || r.id,
        }));
        this.allInstitutes = [...this.institutes];
        // If a selectedInstitute is already set (e.g. via route/session), prefer that
        try {
          if (this.selectedInstitute) {
            const found = this.institutes.find(
              (i) => String(i.institute_id) === String(this.selectedInstitute)
            );
            if (found) {
              // ensure exact match type/value and load schedules
              this.selectedInstitute = found.institute_id as any;
              this.syncInstituteSearch();
              this.categoryCtrl.enable({ emitEvent: false });
              // load dependent lists scoped to the institute
              this.loadDepartments(this.selectedInstitute);
              this.loadTeams(this.selectedInstitute);
              return;
            }
          }
        } catch (e) {
          /* ignore */
        }

        // Fallback: try reading user's institute from sessionStorage and apply it
        try {
          const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
          if (!this.isSuperAdmin && raw) {
            const u = JSON.parse(raw);
            const instId =
              sessionStorage.getItem('global_institute_id') ||
              u?.institute_id ||
              u?.instituteId ||
              u?.institute?.institute_id ||
              u?.institute?.id ||
              (typeof u?.institute === 'string' ? u.institute : '');
            if (instId) {
              const found = this.institutes.find((i) => String(i.institute_id) === String(instId));
              if (found) {
                this.selectedInstitute = found.institute_id as any;
                this.syncInstituteSearch();
                this.categoryCtrl.enable({ emitEvent: false });
                // ensure departments/teams also load for this institute
                this.loadDepartments(this.selectedInstitute);
                this.loadTeams(this.selectedInstitute);
                // this.loadQuestions(this.selectedInstitute);
              }
            }
          }
        } catch (e) {
          /* ignore malformed session data */
        }
      },
      error: (err) => console.warn('Failed to load institutes', err),
    });
  }

  // ---- Country / City / Industry / Sector cascade (mirrors view-institutes.component.ts / category.component.ts) ----

  onFilterSelectOpened(
    opened: boolean,
    field: 'country' | 'city' | 'industry' | 'sector' | 'questionBank'
  ) {
    if (opened) {
      setTimeout(() => {
        try {
          const input = document.querySelector(
            '.cdk-overlay-pane .select-search-input'
          ) as HTMLInputElement | null;
          input?.focus();
        } catch (e) {
          /* ignore non-browser environments */
        }
      });
      return;
    }
    if (field === 'country') this.countrySearch = '';
    else if (field === 'city') this.citySearch = '';
    else if (field === 'industry') this.industrySearch = '';
    else if (field === 'sector') this.sectorSearch = '';
    else if (field === 'questionBank') this.categorySearch = '';
  }

  stopFilterSearchEvent(event: Event) {
    event.stopPropagation();
  }

  // Only show countries that have at least one registered institute (mirrors
  // view-institutes.component.ts loadRegisteredInstituteCountries), not the full world hierarchy.
  loadCountries() {
    this.http.get<any>(`${API_BASE}/registered-countries`).subscribe({
      next: (res) => {
        const list = Array.isArray(res?.data) ? res.data : [];
        if (list.length > 0) {
          this.countries = list;
          return;
        }
        this.fallbackLoadCountries();
      },
      error: () => {
        this.fallbackLoadCountries();
      },
    });
  }

  private fallbackLoadCountries() {
    const url = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        try {
          const countries = res?.data?.countries || res?.countries || res?.data || [];
          this.locationHierarchyRaw = Array.isArray(countries) ? countries : [];
          this.loadRegisteredInstituteCountries(this.locationHierarchyRaw);
        } catch (e) {
          this.countries = [];
        }
      },
      error: () => {
        this.countries = [];
      },
    });
  }

  private loadRegisteredInstituteCountries(locationCountries: any[]) {
    this.countries = [];
    this.http.get<any>(`${API_BASE}/get-institutes`).subscribe({
      next: (res) => {
        try {
          const institutes = Array.isArray(res?.data) ? res.data : [];
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
        this.countries = [];
      },
    });
  }

  private loadCitiesForCountry(countryCodes: string | string[]) {
    this.filterCityOptions = [];
    const codes = (Array.isArray(countryCodes) ? countryCodes : [countryCodes]).filter(Boolean);
    if (!codes.length) return;

    const requests = codes.map((code) =>
      this.http.get<any>(`${API_BASE}/location-hierarchy`, { params: { country_id: code } })
    );

    forkJoin(requests).subscribe({
      next: (responses) => {
        try {
          const uniqueSet = new Map<string, { code: string; name: string }>();
          responses.forEach((res, idx) => {
            const countryCode = codes[idx];
            let citiesRaw = res?.data?.cities || res?.cities || res?.data || [];
            if (!Array.isArray(citiesRaw) || !citiesRaw.length) {
              const countries = res?.data?.countries || res?.countries || [];
              if (Array.isArray(countries) && countries.length > 0) {
                const foundCountry = countries.find(
                  (ct: any) =>
                    String(ct.id || ct.country_id || ct.country_code || ct.code) ===
                    String(countryCode)
                );
                if (foundCountry && Array.isArray(foundCountry.cities)) {
                  citiesRaw = foundCountry.cities;
                }
              }
            }
            (Array.isArray(citiesRaw) ? citiesRaw : []).forEach((c: any) => {
              const rawName = c.city_name || c.name || c.city || '';
              if (rawName) {
                const formattedName = rawName
                  .trim()
                  .replace(
                    /\w\S*/g,
                    (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
                  );
                if (!uniqueSet.has(formattedName.toLowerCase())) {
                  uniqueSet.set(formattedName.toLowerCase(), {
                    code: String(c.city_code || c.code || c.id || formattedName),
                    name: formattedName,
                  });
                }
              }
            });
          });
          this.filterCityOptions = Array.from(uniqueSet.values()).sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        } catch (e) {
          this.filterCityOptions = [];
        }
      },
      error: () => {
        this.filterCityOptions = [];
      },
    });
  }

  // City is a free-text field holding the display name; resolve it back to its code
  // (the backend's city filter expects an id) before sending it to get-institutes.
  private resolveCityId(cityName: string): string {
    const name = String(cityName || '')
      .trim()
      .toLowerCase();
    if (!name) return '';
    const found = this.filterCityOptions.find(
      (c) =>
        String(c.name || '')
          .trim()
          .toLowerCase() === name
    );
    return found ? String(found.code) : cityName;
  }

  onCountryFilterChange() {
    this.filterCity = '';
    this.selectedCities = [];
    const countryCodes = this.selectedCountries?.length
      ? this.selectedCountries
      : this.filterCountry
        ? [this.filterCountry]
        : [];
    this.loadCitiesForCountry(countryCodes);
    this.refreshInstituteScope();
  }

  onCityFilterChange() {
    this.refreshInstituteScope();
  }

  get filteredCities(): Array<{ code: string; name: string }> {
    const term = (this.citySearch || '').trim().toLowerCase();
    let list = this.filterCityOptions || [];
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

  onIndustryFilterChange() {
    this.filterSector = '';
    this.selectedSectors = [];
    this.refreshInstituteScope();
  }

  onSectorFilterChange() {
    this.refreshInstituteScope();
  }

  onFilterInstituteOpenedChange(opened: boolean) {
    if (opened) {
      setTimeout(() => {
        try {
          const input = document.querySelector(
            '.cdk-overlay-pane .select-search-input'
          ) as HTMLInputElement | null;
          input?.focus();
        } catch (e) {}
      });
    } else {
      this.instituteFilterSearch = '';
    }
  }

  onFilterDepartmentOpenedChange(opened: boolean) {
    if (opened) {
      setTimeout(() => {
        try {
          const input = document.querySelector(
            '.cdk-overlay-pane .select-search-input'
          ) as HTMLInputElement | null;
          input?.focus();
        } catch (e) {}
      });
    } else {
      this.departmentFilterSearch = '';
    }
  }

  onFilterTeamOpenedChange(opened: boolean) {
    if (opened) {
      setTimeout(() => {
        try {
          const input = document.querySelector(
            '.cdk-overlay-pane .select-search-input'
          ) as HTMLInputElement | null;
          input?.focus();
        } catch (e) {}
      });
    } else {
      this.teamFilterSearch = '';
    }
  }

  onInstituteSelectionChange() {
    const institutes = this.selectedInstitutes || [];
    this.selectedInstitute = institutes[institutes.length - 1] || '';

    if (!institutes.length) {
      this.departments = [];
      this.teams = [];
      this.loadCategories(undefined);
      return;
    }

    this.loadCategories(institutes.join(','));

    const deptRequests = institutes.map((id) =>
      this.http.get<any>(`${API_BASE}/get-department-list`, { params: { institute_id: id } })
    );
    forkJoin(deptRequests).subscribe({
      next: (responses) => {
        let combined: any[] = [];
        responses.forEach((res) => {
          const arr = Array.isArray(res) ? res : res?.data || [];
          combined = combined.concat(arr);
        });
        const seen = new Set();
        this.departments = combined
          .map((d: any) => ({
            id: d.dept_id || d.id || d.deptId || '',
            name: d.name || d.dept_name || '',
          }))
          .filter((d) => d.id && !seen.has(d.id) && seen.add(d.id));
      },
      error: () => {
        this.departments = [];
      },
    });

    const teamRequests = institutes.map((id) =>
      this.http.get<any>(`${API_BASE}/get-teams-list`, { params: { institute_id: id } })
    );
    forkJoin(teamRequests).subscribe({
      next: (responses) => {
        let combined: any[] = [];
        responses.forEach((res) => {
          const arr = Array.isArray(res) ? res : res?.data || [];
          combined = combined.concat(arr);
        });
        const seen = new Set();
        this.teams = combined
          .map((t: any) => ({
            id: t.team_id || t.id || t.teamId || '',
            name: t.name || t.team_name || '',
            department_id: t.department_id || t.departmentId || t.dept_id || null,
            department_name: t.department_name || t.department || null,
          }))
          .filter((t) => t.id && !seen.has(t.id) && seen.add(t.id));
      },
      error: () => {
        this.teams = [];
      },
    });
  }

  // Reload the Institute options scoped to the currently selected Country/City/Industry/Sector.
  // Falls back to the full institute list (get-institute-list) when none of those are selected.
  private refreshInstituteScope() {
    if (!this.isSuperAdmin) return;
    const params: any = {};
    if (this.selectedCountries && this.selectedCountries.length)
      params.country = this.selectedCountries.join(',');
    else if (this.filterCountry) params.country = this.filterCountry;

    if (this.selectedCities && this.selectedCities.length) {
      const cityCodes = this.selectedCities
        .map((name) => this.resolveCityId(name) || name)
        .filter(Boolean);
      if (cityCodes.length) params.city = cityCodes.join(',');
    } else {
      const cityId = this.resolveCityId(this.filterCity);
      if (cityId) params.city = cityId;
    }

    if (this.selectedIndustries && this.selectedIndustries.length)
      params.industry = this.selectedIndustries.join(',');
    else if (this.filterIndustry) params.industry = this.filterIndustry;

    if (this.selectedSectors && this.selectedSectors.length)
      params.sector = this.selectedSectors.join(',');
    else if (this.filterSector) params.sector = this.filterSector;

    const clearStaleInstituteSelection = () => {
      if (
        this.selectedInstitute &&
        !this.institutes.some((i) => String(i.institute_id) === String(this.selectedInstitute))
      ) {
        this.onInstituteAutocompleteSelected('');
      }
    };

    if (!Object.keys(params).length) {
      this.loadInstitutes();
      return;
    }

    this.http.get<any>(`${API_BASE}/get-institutes`, { params }).subscribe({
      next: (res) => {
        const data = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.institutes = (data || [])
          .map((r: any) => ({
            name: r.institute_name || r.name || r.short_name || '',
            institute_id: r.institute_id || r.id || r._id || '',
          }))
          .filter((i: any) => !!i.institute_id);

        if (this.selectedInstitutes && this.selectedInstitutes.length) {
          this.selectedInstitutes = this.selectedInstitutes.filter((id) =>
            this.institutes.some((i) => String(i.institute_id) === String(id))
          );
          this.selectedInstitute = this.selectedInstitutes[0] || '';
        }
        clearStaleInstituteSelection();
      },
      error: () => {
        this.institutes = [];
      },
    });
  }

  loadExams(instId: string) {
    if (!instId) {
      this.exams = [];
      return;
    }
    const url = `${this.examsUrl}?institute_id=${encodeURIComponent(instId)}`;
    this.http!.get<any>(url).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res && Array.isArray(res.data) ? res.data : [];
        this.exams = arr.map((e: any) => ({
          title: e.title || e.name || '',
          exam_id: e.exam_id || e.id || e.examId,
        }));
      },
      error: (err) => {
        console.warn('Failed to load tests', err);
        this.exams = [];
      },
    });
  }

  onInstituteChange(value: any) {
    const v = value !== undefined && value !== null ? String(value) : '';
    this.selectedInstitute = v;
    if (v && !v.includes(',') && (!this.selectedInstitutes || !this.selectedInstitutes.length)) {
      this.selectedInstitutes = [v];
    }
    this.syncInstituteSearch();
    this.selectedCategories = [];
    this.categoryFilterName = '';
    this.categorySearch = '';
    this.categoryCtrl.setValue('', { emitEvent: false });
    if (v) {
      this.categoryCtrl.enable({ emitEvent: false });
      this.loadCategories(v);
      this.loadDepartments(v);
      this.loadTeams(v);
    } else {
      this.categoryCtrl.disable({ emitEvent: false });
      this.categories = [];
      this.filteredCategories$ = of([]);
      this.departments = [];
      this.teams = [];
      this.selectedDepartments = [];
      this.selectedTeams = [];
      this.loadCategories();
    }
  }

  loadDepartments(instId?: string) {
    if (!instId) {
      this.departments = [];
      return;
    }
    const url = `${API_BASE}/get-department-list`;
    this.http!.get<any>(url, { params: { institute_id: instId } }).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res && Array.isArray(res.data) ? res.data : [];
        this.departments = arr.map((d: any) => ({
          id: d.dept_id || d.id || d.deptId,
          name: d.name || d.dept_name || d.title || '',
        }));
      },
      error: (err) => {
        console.warn('Failed to load departments', err);
        this.departments = [];
      },
    });
  }

  loadTeams(instId?: string) {
    if (!instId) {
      this.teams = [];
      return;
    }
    const url = `${API_BASE}/get-teams-list`;
    this.http!.get<any>(url, { params: { institute_id: instId } }).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res && Array.isArray(res.data) ? res.data : [];
        this.teams = arr.map((t: any) => ({
          id: t.team_id || t.id || t.teamId,
          name: t.name || t.team_name || t.title || '',
          department_id: t.department_id || t.departmentId || t.dept_id || null,
          department_name: t.department_name || t.department || null,
        }));
      },
      error: (err) => {
        console.warn('Failed to load teams', err);
        this.teams = [];
      },
    });
  }

  onCategoryChange(value: any) {
    // value for multi-select will be array when multiple selected
    if (Array.isArray(value)) {
      // filter out any internal sentinel values (like selectAllValue)
      this.selectedCategories = value.filter((v) => v !== this.selectAllValue);
    } else {
      this.selectedCategories = value ? [value].filter((v) => v !== this.selectAllValue) : [];
    }
  }

  isAllCategoriesSelected(): boolean {
    const ids = (this.filteredCategories || []).map((c: any) =>
      String(c.category_id || c.id || c._id)
    );
    if (!ids.length) return false;
    const sel = (this.selectedCategories || []).map(String);
    return ids.every((id) => sel.includes(id));
  }

  isPartialCategorySelection(): boolean {
    const ids = (this.filteredCategories || []).map((c: any) =>
      String(c.category_id || c.id || c._id)
    );
    const sel = (this.selectedCategories || []).map(String);
    return sel.length > 0 && sel.length < ids.length;
  }

  toggleSelectAllCategories() {
    const ids = (this.filteredCategories || []).map((c: any) =>
      String(c.category_id || c.id || c._id)
    );
    if (!ids.length) return;
    if (this.isAllCategoriesSelected()) {
      // deselect all filtered
      this.selectedCategories = (this.selectedCategories || []).filter(
        (s) => !ids.includes(String(s))
      );
    } else {
      // select all filtered (merge)
      const set = new Set<string>((this.selectedCategories || []).map(String));
      ids.forEach((id) => set.add(id));
      this.selectedCategories = Array.from(set);
    }
  }

  loadQuestions(instId?: string) {
    this.loading.show();
    // if an institute id was supplied, prefer that and keep component state in sync
    if (instId !== undefined && instId !== null && instId !== '') {
      this.selectedInstitute = instId as any;
    }
    // build query params from selected filters; call API only when Apply/Reset triggers
    const params: string[] = [];
    const scopedInstitute = this.getScopedInstituteId();
    if (scopedInstitute) params.push(`institute_id=${encodeURIComponent(scopedInstitute)}`);
    if (this.selectedCategories && this.selectedCategories.length)
      params.push(`category_id=${encodeURIComponent(this.selectedCategories.join(','))}`);
    else if (this.categoryFilterName)
      params.push(`category_name=${encodeURIComponent(this.categoryFilterName)}`);
    if (this.selectedDepartments && this.selectedDepartments.length)
      params.push(`departments=${encodeURIComponent(this.selectedDepartments.join(','))}`);
    if (this.selectedTeams && this.selectedTeams.length)
      params.push(`teams=${encodeURIComponent(this.selectedTeams.join(','))}`);
    if (this.filterCreationDateAfter)
      params.push(
        `created_after=${encodeURIComponent((this.filterCreationDateAfter as Date).toISOString().slice(0, 10))}`
      );
    if (this.filterCreationDate)
      params.push(
        `created_before=${encodeURIComponent((this.filterCreationDate as Date).toISOString().slice(0, 10))}`
      );

    if (this.filterCreatedByMe) {
      try {
        const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
        if (raw) {
          const obj = JSON.parse(raw);
          const userId = obj?.user_id || obj?.id || obj?._id;
          if (userId) {
            params.push(`created_by=${encodeURIComponent(String(userId))}`);
          }
        }
      } catch (e) {}
    }

    if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
      params.push(`type=${encodeURIComponent(this.selectedQuestionTypes.join(','))}`);
    } else if (this.filterQuestionType) {
      params.push(`type=${encodeURIComponent(this.filterQuestionType)}`);
    }
    if (this.filterPublicAccess) params.push('public_access=true');
    params.push(`_ts=${Date.now()}`);
    const url = `${this.questionsUrl}?${params.join('&')}`;
    this.http!.get<any>(url).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res && Array.isArray(res.data) ? res.data : [];
        const scopedInstitute = this.getScopedInstituteId();
        const filteredArr = arr.filter((q: any) => {
          const itemInstituteId = this.getItemInstituteId(q);
          return !itemInstituteId || this.isAllowedForInstitute(q, scopedInstitute);
        });
        this.refreshQuestionBankMarkLookup(() => {
          this.questions = filteredArr.map((q: any, i: number) => this.mapQuestionRow(q, i));
          this.dataSource.data = this.questions;
          this.loading.hide();
        });
      },
      error: (err) => {
        console.warn('Failed to load questions', err);
        this.questions = [];
        this.dataSource.data = [];
        this.loading.hide();
      },
    });
  }

  private mapQuestionRow(q: any, i: number): QuestionRow {
    const row: QuestionRow = {
      ...q,
      id: q.id || q.question_id || q._id || i + 1,
      question: q.question || q.text || q.title || '',
      type: (q.type || q.question_type || q.original_type || 'Subjective') as QuestionType,
      originalType: q.type || q.original_type || q.question_type,
      options: q.options || q.choices || [],
      answer: this.getAnswerText(q),
      category: q.category || q.category_name || '',
      category_description: q.category_description || '',
      category_id:
        q.category_id ||
        q.categoryId ||
        q.categoryID ||
        q.category?.category_id ||
        q.category?.id ||
        q.category?._id ||
        '',
      institute_id:
        q.institute_id ||
        q.instituteId ||
        q.instituteID ||
        q.institute?.institute_id ||
        q.institute?.id ||
        q.institute?._id ||
        this.selectedInstitute ||
        '',
      exam_id:
        q.exam_id || q.examId || q.examID || q.exam?.exam_id || q.exam?.id || q.exam?._id || '',
    };
    const bankMark = this.resolveQuestionBankMark(row);
    row.marks = bankMark ?? this.toNumber(q.marks ?? q.points) ?? 0;
    return row;
  }

  private refreshQuestionBankMarkLookup(done: () => void): void {
    const params: string[] = [];
    const scopedInstitute = this.getScopedInstituteId();
    if (scopedInstitute) params.push(`institute_id=${encodeURIComponent(scopedInstitute)}`);
    if (this.categoryFilterName) params.push(`name=${encodeURIComponent(this.categoryFilterName)}`);
    const url = params.length
      ? `${this.categoryDetailsUrl}?${params.join('&')}&_ts=${Date.now()}`
      : `${this.categoryDetailsUrl}?_ts=${Date.now()}`;
    this.http!.get<any>(url).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res && Array.isArray(res.data) ? res.data : [];
        const scopedInstitute = this.getScopedInstituteId();
        const normalized = arr
          .filter((c: any) => this.isAllowedForInstitute(c, scopedInstitute))
          .map((c: any) => ({
            name: c.name || c.category_name || '',
            category_id: c.category_id || c.id || c._id,
            mark_each_question:
              typeof c.mark_each_question !== 'undefined'
                ? c.mark_each_question
                : (c.mark_for_each_question ?? c.question_mark ?? c.marks ?? null),
            mark_for_each_question:
              c.mark_for_each_question ??
              c.mark_each_question ??
              c.question_mark ??
              c.marks ??
              null,
            institute: c.institute || { institute_id: c.institute_id || c.instituteId || null },
          }));
        this.rebuildQuestionBankMarkLookup(normalized);
      },
      error: (err) => {
        console.warn('Failed to load question bank marks', err);
        done();
      },
      complete: () => done(),
    });
  }

  private rebuildQuestionBankMarkLookup(categories: any[]): void {
    this.questionBankMarksById.clear();
    this.questionBankMarksByName.clear();
    (categories || []).forEach((category: any) => {
      const mark = this.getQuestionBankMark(category);
      if (mark === null) return;
      const id = category?.category_id || category?.id || category?._id;
      const name = category?.name || category?.category_name;
      if (id !== undefined && id !== null && id !== '')
        this.questionBankMarksById.set(String(id), mark);
      if (name) this.questionBankMarksByName.set(String(name).trim().toLowerCase(), mark);
    });
  }

  private resolveQuestionBankMark(q: any): number | null {
    const direct = this.getQuestionBankMark(q);
    if (direct !== null) return direct;
    const id =
      q?.category_id ||
      q?.categoryId ||
      q?.categoryID ||
      q?.category?.category_id ||
      q?.category?.id ||
      q?.category?._id;
    if (id !== undefined && id !== null && this.questionBankMarksById.has(String(id)))
      return this.questionBankMarksById.get(String(id)) ?? null;
    const name = q?.category || q?.category_name || q?.category?.name;
    if (name) return this.questionBankMarksByName.get(String(name).trim().toLowerCase()) ?? null;
    return null;
  }

  private getQuestionBankMark(value: any): number | null {
    const raw =
      value?.mark_each_question ??
      value?.mark_for_each_question ??
      value?.question_mark ??
      value?.category_mark ??
      value?.category_marks ??
      value?.marks_per_question ??
      null;
    return this.toNumber(raw);
  }

  private toNumber(value: any): number | null {
    if (value === null || value === undefined || value === '') return null;
    const num = Number(value);
    return Number.isFinite(num) ? num : null;
  }
  displayInstitute = (value: string | null): string => {
    if (!value) return '';
    const found = this.institutes.find((i) => String(i.institute_id) === String(value));
    return found ? found.name : String(value);
  };
  filteredInstitutes() {
    const q = (this.instituteSearchTerm || '').trim().toLowerCase();
    if (!q) return this.institutes;
    return this.institutes.filter((i: any) => (i.name || '').toLowerCase().includes(q));
  }

  onInstituteAutocompleteSelected(id: string) {
    this.selectedInstitute = id || '';
    this.syncInstituteSearch();
    this.instituteSearchTerm = '';
    this.onInstituteChange(this.selectedInstitute);
  }

  private syncInstituteSearch() {
    const found = this.institutes.find(
      (i) => String(i.institute_id) === String(this.selectedInstitute || '')
    );
    this.instituteSearch = found ? found.name : '';
  }

  onInstituteSearchChange(val: string) {
    this.instituteSearch = val || '';
    this.instituteSearchTerm = val || '';
  }

  loadCategories(instId?: string) {
    const scopedInstitute = this.getScopedInstituteId(instId);
    if (this.isSuperAdmin && !scopedInstitute) {
      this.categories = [];
      this.rebuildQuestionBankMarkLookup([]);
      this.categoryCtrl.setValue('', { emitEvent: false });
      this.categoryCtrl.disable({ emitEvent: false });
      this.filteredCategories$ = of([]);
      return;
    }
    let url = this.categoryDetailsUrl;
    if (scopedInstitute) url += `?institute_id=${encodeURIComponent(scopedInstitute)}`;

    if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
      url +=
        (url.includes('?') ? '&' : '?') +
        `type=${encodeURIComponent(this.selectedQuestionTypes.join(','))}`;
    }
    if (this.selectedDepartments && this.selectedDepartments.length) {
      url +=
        (url.includes('?') ? '&' : '?') +
        `department_id=${encodeURIComponent(this.selectedDepartments.join(','))}`;
    }
    if (this.selectedTeams && this.selectedTeams.length) {
      url +=
        (url.includes('?') ? '&' : '?') +
        `team_id=${encodeURIComponent(this.selectedTeams.join(','))}`;
    }

    this.http!.get<any>(url).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res && Array.isArray(res.data) ? res.data : [];
        this.categories = arr
          .filter((c: any) => {
            if (!this.isAllowedForInstitute(c, scopedInstitute)) return false;

            // Client-side filter for selected question type(s)
            if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
              const catType = (c.type || '').toLowerCase();
              const matchesType = this.selectedQuestionTypes.some((selectedType) => {
                const st = selectedType.toLowerCase();
                if (st === 'objective') {
                  return ['objective', 'choose', 'multi', 'fill', 'mcq'].some((t) =>
                    catType.includes(t)
                  );
                }
                if (st === 'descriptive') {
                  return ['descriptive', 'paragraph', 'subjective'].some((t) =>
                    catType.includes(t)
                  );
                }
                return catType.includes(st);
              });
              if (!matchesType) return false;
            }

            // Client-side filter for selected department(s)
            if (this.selectedDepartments && this.selectedDepartments.length) {
              const deptList = Array.isArray(c.departments || c.department_ids)
                ? c.departments || c.department_ids
                : typeof c.departments === 'object' && c.departments
                  ? Object.values(c.departments)
                  : [];
              const deptIds = deptList.map((d: any) =>
                String(d?.id || d?.department_id || d?.dept_id || d)
              );
              const matchesDept = this.selectedDepartments.some((id) =>
                deptIds.includes(String(id))
              );
              if (!matchesDept) return false;
            }

            // Client-side filter for selected team(s)
            if (this.selectedTeams && this.selectedTeams.length) {
              const teamList = Array.isArray(c.teams || c.team_ids)
                ? c.teams || c.team_ids
                : typeof c.teams === 'object' && c.teams
                  ? Object.values(c.teams)
                  : [];
              const teamIds = teamList.map((t: any) => String(t?.id || t?.team_id || t));
              const matchesTeam = this.selectedTeams.some((id) => teamIds.includes(String(id)));
              if (!matchesTeam) return false;
            }

            return true;
          })
          .map((c: any) => ({
            name: c.name || c.category_name || '',
            category_id: c.category_id || c.id || c._id,
            mark_each_question:
              typeof c.mark_each_question !== 'undefined'
                ? c.mark_each_question
                : (c.mark_for_each_question ?? c.question_mark ?? c.marks ?? null),
            mark_for_each_question:
              c.mark_for_each_question ??
              c.mark_each_question ??
              c.question_mark ??
              c.marks ??
              null,
          }));
        this.rebuildQuestionBankMarkLookup(this.categories);
        this.categoryCtrl.enable({ emitEvent: false });
        try {
          this.filteredCategories$ = this.categoryCtrl.valueChanges.pipe(
            startWith(''),
            map((val: any) => {
              if (val && typeof val === 'object') return (this.categories || []).slice();
              const q = String(val || '').toLowerCase();
              return (this.categories || []).filter((c: any) =>
                (c.name || '').toLowerCase().includes(q)
              );
            })
          );
        } catch (e) {
          this.filteredCategories$ = of(this.categories || []);
        }
      },
      error: (err) => {
        console.warn('Failed to load categories', err);
        this.categories = [];
        this.filteredCategories$ = of([]);
      },
    });
  }

  toggleQuestionSelection(q: QuestionRow, checked: boolean) {
    const id = (q as any).id ?? (q as any).question_id ?? (q as any)._id;
    if (checked) this.selectedQuestionIds.add(id as any);
    else this.selectedQuestionIds.delete(id as any);
  }

  async copySelectedQuestionsToCategory(categoryId: string | null) {
    if (!categoryId || !this.selectedQuestionIds.size) return;
    const ids = Array.from(this.selectedQuestionIds).map(String);
    this.copyMoveInProgress = true;
    try {
      const url = `${API_BASE}/copy-questions-to-category`;
      await this.http
        .post<any>(url, { question_ids: ids, target_category_id: categoryId })
        .toPromise();
      try {
        notify('Questions copied', 'success');
      } catch (e) {}
      this.selectedQuestionIds.clear();
      this.loadQuestions();
    } catch (e) {
      console.warn('Failed to copy questions', e);
      try {
        notify('Failed to copy questions', 'error');
      } catch (e) {}
    } finally {
      this.copyMoveInProgress = false;
    }
  }

  async moveSelectedQuestionsToCategory(categoryId: string | null) {
    if (!categoryId || !this.selectedQuestionIds.size) return;
    const ids = Array.from(this.selectedQuestionIds).map(String);
    this.copyMoveInProgress = true;
    try {
      const url = `${API_BASE}/move-questions-to-category`;
      await this.http
        .post<any>(url, { question_ids: ids, target_category_id: categoryId })
        .toPromise();
      try {
        notify('Questions moved', 'success');
      } catch (e) {}
      this.selectedQuestionIds.clear();
      this.loadQuestions();
    } catch (e) {
      console.warn('Failed to move questions', e);
      try {
        notify('Failed to move questions', 'error');
      } catch (e) {}
    } finally {
      this.copyMoveInProgress = false;
    }
  }

  // Template-friendly wrappers to avoid passing nullable values directly from the template
  copySelected() {
    this.copySelectedQuestionsToCategory(this.selectedTargetCategory);
  }
  moveSelected() {
    this.moveSelectedQuestionsToCategory(this.selectedTargetCategory);
  }

  toggleSelectAll(checked: boolean) {
    if (checked) {
      (this.dataSource.data || []).forEach((r) => this.selectedQuestionIds.add(r.id as any));
    } else {
      (this.dataSource.data || []).forEach((r) => this.selectedQuestionIds.delete(r.id as any));
    }
  }

  displayCategory(c: any) {
    return c ? c.name || c.category_name || '' : '';
  }

  isQuestionSectionSelected(c: any): boolean {
    const current =
      this.selectedCategories && this.selectedCategories.length
        ? String(this.selectedCategories[0])
        : '';
    const catId = String(c?.category_id || c?.id || c?._id || '');
    return !!current && !!catId && current === catId;
  }

  onCategorySelected(c: any) {
    if (!c) return;
    if (typeof c === 'string') {
      this.selectedCategories = [];
      this.categoryFilterName = c.trim();
      return;
    }
    const categoryId = c.category_id || c.id || c._id || '';
    if (categoryId) {
      this.selectedCategories = [String(categoryId)];
      this.categoryFilterName = '';
      try {
        this.categoryCtrl.setValue(c, { emitEvent: false });
      } catch (e) {}
      return;
    }
    this.selectedCategories = [];
    this.categoryFilterName = (c.name || c.category_name || '').trim();
  }

  editQuestion(q: QuestionRow) {
    // store the question into session storage and navigate to the editor
    this.saveQuestionsReturnState();
    try {
      sessionStorage.setItem('edit_question', JSON.stringify(q));
    } catch (e) {
      /* ignore */
    }
    this.viewedQuestion = null;
    // navigate to the questions editor route - reuse same route as Insert Question
    if (this.router) {
      this.router.navigate(['/questions']);
    } else {
      try {
        notify('Open the question editor to edit this question.', 'info');
      } catch (e) {}
    }
  }

  deleteQuestion(q: QuestionRow) {
    this.confirmService
      .confirm({
        title: 'Delete Question',
        message: 'Delete this question? This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
      })
      .subscribe((ok) => {
        if (!ok) return;
        const url = `${API_BASE}/delete/question/${encodeURIComponent(String(q.id))}`;
        this.http!.delete<any>(url).subscribe({
          next: (res) => {
            // remove from local array
            this.questions = this.questions.filter((x) => x.id !== q.id);
            try {
              notify('Question deleted', 'success');
              this.loadQuestions();
            } catch (e) {}
          },
          error: (err) => {
            console.warn('Failed to delete question', err);
            try {
              notify('Failed to delete question', 'error');
            } catch (e) {}
          },
        });
      });
  }

  // Apply fetches with filters; reset clears filters and leaves the table empty.
  private hasFilterValues(): boolean {
    const rawCategoryCtrlVal =
      typeof this.categoryCtrl?.value === 'string' ? this.categoryCtrl.value.trim() : '';
    return !!(
      this.filterCountry ||
      (this.selectedCountries && this.selectedCountries.length) || // Add this line
      this.filterCity ||
      this.filterIndustry ||
      (this.selectedIndustries && this.selectedIndustries.length) || // Add this line
      this.filterSector ||
      (this.selectedSectors && this.selectedSectors.length) || // Add this line
      (this.selectedInstitutes && this.selectedInstitutes.length) ||
      this.selectedInstitute ||
      this.selectedCategories.length ||
      this.categoryFilterName ||
      this.categorySearch ||
      rawCategoryCtrlVal ||
      this.selectedDepartments.length ||
      this.selectedTeams.length ||
      (this.selectedQuestionTypes && this.selectedQuestionTypes.length) ||
      this.filterQuestionType ||
      this.filterCreationDateAfter ||
      this.filterCreationDate ||
      this.filterActiveStatus !== null ||
      this.filterCreatedByMe ||
      this.filterPublicAccess !== null
    );
  }

  onApply() {
    if (
      this.isSuperAdmin &&
      !this.isGlobalInstituteActive &&
      (!this.selectedInstitutes || !this.selectedInstitutes.length) &&
      !this.selectedInstitute
    ) {
      try {
        notify('Please select an institute', 'info');
      } catch (e) {}
      return;
    }
    if (!this.selectedQuestionTypes?.length) {
      try {
        notify('Please select a type', 'info');
      } catch (e) {}
      return;
    }
    if (!this.selectedDepartments?.length) {
      try {
        notify('Please select a department', 'info');
      } catch (e) {}
      return;
    }
    if (!this.selectedTeams?.length) {
      try {
        notify('Please select a team', 'info');
      } catch (e) {}
      return;
    }
    if (!this.hasFilterValues()) {
      try {
        notify('Please add filters in the filter form.', 'info');
      } catch (e) {}
      return;
    }
    if (!this.selectedCategories.length && typeof this.categoryCtrl?.value === 'string') {
      this.categoryFilterName = this.categoryCtrl.value.trim();
    }
    // Mark these values as applied so the existing Applied Filters chips are rendered.
    this.hasAppliedFilters = true;
    this.loadQuestions();
    this.closeFiltersOverlay();
  }

  onReset() {
    this.selectedCategories = [];
    this.categoryFilterName = '';
    this.categorySearch = '';
    this.categoryCtrl.setValue('');
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.filterQuestionType = '';
    this.selectedQuestionTypes = [];
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.filterActiveStatus = null;
    this.filterCreatedByMe = false;
    this.filterPublicAccess = null;
    this.filterCountry = '';
    this.filterCity = '';
    this.filterIndustry = '';
    this.filterSector = '';
    this.selectedCountries = [];
    this.selectedCities = [];
    this.selectedIndustries = [];
    this.selectedSectors = [];
    this.filterCityOptions = [];
    this.countrySearch = '';
    this.industrySearch = '';
    this.sectorSearch = '';
    try {
      sessionStorage.removeItem(this.questionsReturnStateKey);
    } catch (e) {}
    if (this.isSuperAdmin) {
      this.selectedInstitute = '';
      this.selectedInstitutes = [];
      this.instituteFilterSearch = '';
      this.departmentFilterSearch = '';
      this.teamFilterSearch = '';
      this.instituteSearch = '';
      this.categoryCtrl.disable({ emitEvent: false });
      this.departments = [];
      this.teams = [];
      this.loadInstitutes();
    }
    this.loadCategories(this.getScopedInstituteId());
    this.filter = '';
    this.dataSource.filter = '';
    this.questions = [];
    this.dataSource.data = this.questions;
    this.selectedQuestionIds.clear();
    this.hasAppliedFilters = false;

    // --- Close filter overlay modal ---
    this.closeFiltersOverlay();
  }

  get filtered() {
    const q = (this.filter || '').toLowerCase();
    if (!q) return this.questions;
    return this.questions.filter(
      (x) => x.question.toLowerCase().includes(q) || (x.type || '').toLowerCase().includes(q)
    );
  }

  applyFilter(value: string) {
    const q = (value || '').trim().toLowerCase();
    this.filter = q;
    this.dataSource.filterPredicate = (d: QuestionRow, filter: string) => {
      return (
        (d.question || '').toLowerCase().includes(filter) ||
        (d.type || '').toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = q;
  }

  viewDetails(q: QuestionRow) {
    try {
      sessionStorage.setItem('view_question', JSON.stringify(q));
    } catch (e) {}
    // set the viewed question so the modal in the template becomes visible
    try {
      this.viewedQuestion = (q as any).raw || q || null;
    } catch (e) {
      this.viewedQuestion = q || null;
    }
    try {
      notify(`Q: ${q.question}\nType: ${q.type}\nAnswer: ${q.answer || '—'}`, 'info');
    } catch (e) {
      try {
        console.warn(`Q: ${q.question}\nType: ${q.type}\nAnswer: ${q.answer || '—'}`);
      } catch (_) {}
    }
  }

  closeViewModal() {
    this.viewedQuestion = null;
  }

  formatQuestionType(type: string | undefined | null): string {
    if (!type) return '—';
    const typeMap: { [key: string]: string } = {
      choose: 'Single Choice',
      multi: 'Multiple Choice',
      fill: 'Fill In The Blank',
      descriptive: 'Descriptive',
    };
    const lowerType = type.toLowerCase();
    return typeMap[lowerType] || this.toTitleCase(type);
  }

  isAnswerType(type: string | undefined | null): boolean {
    const normalized = String(type || '').toLowerCase();
    return (
      normalized === 'fill' ||
      normalized === 'descriptive' ||
      normalized === 'subjective' ||
      normalized === 'essay'
    );
  }

  getAnswerText(q: any): string {
    if (!q) return '—';
    if (q.answer) return q.answer;
    if (q.answerText) return q.answerText;
    if (typeof q.correct === 'string' && q.correct) return q.correct;
    if (Array.isArray(q.options) && q.options.length) {
      const first = q.options[0];
      if (typeof first === 'string') return first;
      if (first && typeof first === 'object') {
        const correctOpt = q.options.find(
          (o: any) =>
            o &&
            typeof o === 'object' &&
            (o.is_correct === 1 || o.is_correct === true || o.is_correct === '1')
        );
        return (
          (correctOpt
            ? correctOpt.text ||
              correctOpt.option_text ||
              correctOpt.option ||
              correctOpt.value ||
              ''
            : '') ||
          first.text ||
          first.option_text ||
          first.option ||
          first.value ||
          ''
        );
      }
    }
    return '—';
  }

  getOptionText(o: any): string {
    if (!o) return '';
    if (typeof o === 'string') return o;
    return o.text || o.option_text || o.option || o.value || '';
  }

  private toTitleCase(str: string): string {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }

  openAddQuestions(): void {
    this.saveQuestionsReturnState();
    this.router.navigate(['/questions']);
  }

  saveQuestionsReturnState(): void {
    try {
      const state = {
        instituteId: this.globalInstituteContext.activeInstituteId || this.selectedInstitute || '',
        globalInstituteActive: this.globalInstituteContext.isGlobalFilterActive(),
        filter: this.filter,
        filterCountry: this.filterCountry,
        filterCity: this.filterCity,
        filterIndustry: this.filterIndustry,
        filterSector: this.filterSector,
        selectedInstitute: this.selectedInstitute,
        selectedInstitutes: this.selectedInstitutes,
        selectedCountries: this.selectedCountries,
        selectedCities: this.selectedCities,
        selectedIndustries: this.selectedIndustries,
        selectedSectors: this.selectedSectors,
        selectedQuestionTypes: this.selectedQuestionTypes,
        selectedCategories: this.selectedCategories,
        categoryFilterName: this.categoryFilterName,
        categorySearch: this.categorySearch,
        selectedDepartments: this.selectedDepartments,
        selectedTeams: this.selectedTeams,
        filterCreationDateAfter: this.filterCreationDateAfter
          ? this.filterCreationDateAfter.toISOString()
          : null,
        filterCreationDate: this.filterCreationDate ? this.filterCreationDate.toISOString() : null,
        filterActiveStatus: this.filterActiveStatus,
        filterCreatedByMe: this.filterCreatedByMe,
        filterPublicAccess: this.filterPublicAccess,
        hasAppliedFilters: this.hasAppliedFilters,
        questions: this.questions,
      };
      sessionStorage.setItem(this.questionsReturnStateKey, JSON.stringify(state));
    } catch (e) {
      /* ignore storage errors */
    }
  }

  private restoreQuestionsReturnState(): void {
    try {
      const raw = sessionStorage.getItem(this.questionsReturnStateKey);
      if (!raw) return;
      const state = JSON.parse(raw);
      sessionStorage.removeItem(this.questionsReturnStateKey);
      const activeInstituteId = this.globalInstituteContext.activeInstituteId;
      if (activeInstituteId && String(state?.instituteId || '') !== String(activeInstituteId))
        return;
      if (activeInstituteId && state?.globalInstituteActive !== true) return;
      if (!activeInstituteId && state?.globalInstituteActive === true) return;
      // Discard legacy institute-bound cache once; newly saved normal-filter state remains restorable.
      if (
        !activeInstituteId &&
        typeof state?.globalInstituteActive === 'undefined' &&
        state?.instituteId
      )
        return;
      this.activeInstituteId = activeInstituteId || '';

      this.filterCountry = state?.filterCountry || '';
      this.filterCity = state?.filterCity || '';
      this.filterIndustry = state?.filterIndustry || '';
      this.filterSector = state?.filterSector || '';
      this.selectedInstitute = state?.selectedInstitute || '';
      this.selectedInstitutes =
        Array.isArray(state?.selectedInstitutes) && state.selectedInstitutes.length
          ? state.selectedInstitutes
          : this.selectedInstitute
            ? [this.selectedInstitute]
            : [];
      this.selectedCountries = Array.isArray(state?.selectedCountries)
        ? state.selectedCountries
        : [];
      this.selectedCities = Array.isArray(state?.selectedCities) ? state.selectedCities : [];
      this.selectedIndustries = Array.isArray(state?.selectedIndustries)
        ? state.selectedIndustries
        : [];
      this.selectedSectors = Array.isArray(state?.selectedSectors) ? state.selectedSectors : [];
      this.selectedQuestionTypes = Array.isArray(state?.selectedQuestionTypes)
        ? state.selectedQuestionTypes
        : [];
      this.instituteSearch = state?.instituteSearch || '';
      this.selectedCategories = Array.isArray(state?.selectedCategories)
        ? state.selectedCategories
        : [];
      this.categoryFilterName = state?.categoryFilterName || '';
      this.categorySearch = state?.categorySearch || '';
      this.categoryCtrl.setValue(this.categoryFilterName || '');
      this.selectedDepartments = Array.isArray(state?.selectedDepartments)
        ? state.selectedDepartments
        : [];
      this.selectedTeams = Array.isArray(state?.selectedTeams) ? state.selectedTeams : [];
      this.filterCreationDateAfter = state?.filterCreationDateAfter
        ? new Date(state.filterCreationDateAfter)
        : null;
      this.filterCreationDate = state?.filterCreationDate
        ? new Date(state.filterCreationDate)
        : null;
      this.filterActiveStatus =
        typeof state?.filterActiveStatus === 'undefined' ? null : state.filterActiveStatus;
      this.filterCreatedByMe = !!state?.filterCreatedByMe;
      this.filterPublicAccess =
        typeof state?.filterPublicAccess === 'undefined' ? null : state.filterPublicAccess;
      this.hasAppliedFilters = !!state?.hasAppliedFilters;
      const rawQuestions = Array.isArray(state?.questions) ? state.questions : [];
      this.questions = rawQuestions.map((q: any) => ({
        ...q,
        question: q.question || q.question_text || q.text || '',
      }));
      this.dataSource.data = this.questions;

      this.selectedQuestionIds.clear();
      if (this.selectedInstitute) {
        this.categoryCtrl.enable({ emitEvent: false });
        this.loadDepartments(this.selectedInstitute);
        this.loadTeams(this.selectedInstitute);
      } else {
        this.categoryCtrl.disable({ emitEvent: false });
      }
      if (this.filterCountry) this.loadCitiesForCountry(this.filterCountry);
      if (this.filterCountry || this.filterCity || this.filterIndustry || this.filterSector)
        this.refreshInstituteScope();
      this.applyFilter(state?.filter || '');
    } catch (e) {
      try {
        sessionStorage.removeItem(this.questionsReturnStateKey);
      } catch (_) {}
    }
  }

  private resetForInstituteChange(instituteId: string): void {
    this.activeInstituteId = instituteId;
    this.selectedInstitute = instituteId;
    // Clear institute-specific state immediately to prevent cross-institute data leakage.
    this.questions = [];
    this.dataSource.data = [];
    this.selectedQuestionIds.clear();
    this.selectedCategories = [];
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.departments = [];
    this.teams = [];
    this.categoryFilterName = '';
    this.categorySearch = '';
    this.hasAppliedFilters = false;
    try {
      sessionStorage.removeItem(this.questionsReturnStateKey);
    } catch (e) {}
    this.categoryCtrl.enable({ emitEvent: false });
    // Reload filter options only; records remain empty until the user applies filters.
    this.loadDepartments(instituteId);
    this.loadTeams(instituteId);
    this.loadCategories(instituteId);
  }

  private resetAfterGlobalInstituteClear(): void {
    this.activeInstituteId = '';
    this.selectedInstitute = '';
    this.instituteSearch = '';
    // Clear only global-scope UI state so normal Super Admin filtering remains available.
    this.questions = [];
    this.dataSource.data = [];
    this.selectedQuestionIds.clear();
    this.selectedCategories = [];
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.categories = [];
    this.departments = [];
    this.teams = [];
    this.filter = '';
    this.dataSource.filter = '';
    this.categoryFilterName = '';
    this.categorySearch = '';
    this.filterCountry = '';
    this.filterCity = '';
    this.filterIndustry = '';
    this.filterSector = '';
    this.filterCityOptions = [];
    this.countrySearch = '';
    this.industrySearch = '';
    this.sectorSearch = '';
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.filterActiveStatus = null;
    this.filterCreatedByMe = false;
    this.filterPublicAccess = null;
    this.hasAppliedFilters = false;
    this.viewedQuestion = null;
    this.categoryCtrl.setValue('', { emitEvent: false });
    this.categoryCtrl.disable({ emitEvent: false });
    if (this.paginator) {
      this.paginator.firstPage();
      this.paginator.length = 0;
    }
    this.closeFiltersOverlay();
    try {
      sessionStorage.removeItem(this.questionsReturnStateKey);
    } catch (e) {}
    this.loadInstitutes();
    this.loadCategories();
  }
}
