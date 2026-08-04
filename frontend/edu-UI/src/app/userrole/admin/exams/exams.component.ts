import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/home/service/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { API_BASE } from 'src/app/shared/api.config';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { notify } from 'src/app/shared/global-notify';
import { Overlay, OverlayRef, OverlayModule } from '@angular/cdk/overlay';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';
import { Subscription } from 'rxjs';
import { DateRangePickerDialogComponent, DateRangeDialogResult } from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';

@Component({
  selector: 'app-admin-exams',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatTooltipModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatListModule, MatTabsModule, MatDatepickerModule, MatCheckboxModule, OverlayModule, PortalModule, DirectivesModule],
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class AdminExamsComponent implements AfterViewInit, OnInit, OnDestroy {
  institutes: Array<{ institute_name: string; short_name: string; institute_id?: string }> = [];
  private allInstitutes: Array<{ institute_name: string; short_name: string; institute_id?: string }> = [];
  selectedInstitute = '';
  instituteSearch = '';
  instituteSearchTerm = '';
  filter = '';
  // new filter fields
  filterName: string = '';
  selectedDepartments: string[] = [];
  selectedTeams: string[] = [];
  filterCreationDateAfter: Date | null = null;
  filterCreationDate: Date | null = null;
  filterActiveStatus: boolean | null = null;
  filterCreatedByMe: boolean = false;
  // location / industry / org filters
  filterCountry: string = '';
  filterCity: string = '';
  filterIndustry: string = '';
  filterSector: string = '';
  countries: Array<{ code: string; name: string }> = [];
  filterCityOptions: Array<{ code: string; name: string }> = [];
  private locationHierarchyRaw: any[] = [];
  industryTypes: string[] = ['School', 'College', 'BPO', 'Bank', 'IT'];
  private sectorMap: Record<string, string[]> = {
    'School': ['School'],
    'College': ['Engineering', 'Arts'],
    'BPO': ['Healthcare', 'Finance'],
    'Bank': ['Bank'],
    'IT': ['IT']
  };
  countrySearch = '';
  industrySearch = '';
  sectorSearch = '';
  testOptions: Array<{ id: string; title: string }> = [];
  testSearch = '';
  testSearchTerm = '';
  // department/team lists used by the filters
  departments: Array<{ id: string; name: string }> = [];
  teams: Array<{ id: string; name: string }> = [];
  departmentSearch = '';
  teamSearch = '';
  exams: any[] = [];
  // modal state for viewing exam details
  selectedExam: any = null;
  showModal = false;
  displayedColumns: string[] = ['sno', 'title', 'description', 'total_questions', 'duration_mins', 'number_of_attempts', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  hasAppliedFilters = false;
  private shouldLoadTestsAfterInstitutes = false;
  private activeInstituteId = '';
  private globalInstituteSub: Subscription | null = null;
  private apiUrl = `${API_BASE}/get-institute-list`;

  isSuperAdmin = false;
  constructor(private http: HttpClient, private auth: AuthService, private loader: LoaderService, private overlay: Overlay, private vcr: ViewContainerRef, private pageMeta: PageMetaService, private confirmService: ConfirmService, private router: Router, private globalInstituteContext: GlobalInstituteContextService, private dialog: MatDialog) {
    // initialize isSuperAdmin from AuthService (synchronous helper)
    try {
      this.isSuperAdmin = !!this.auth.currentUserValue && ['super_admin', 'superadmin', 'super-admin'].includes((this.auth.currentUserValue.role || '').toLowerCase());
    } catch (e) { this.isSuperAdmin = false; }
    // also subscribe to updates in case role changes during runtime
    this.auth.user$.subscribe((user: any) => {
      try {
        this.isSuperAdmin = !!user && ['super_admin', 'superadmin', 'super-admin'].includes((user.role || '').toLowerCase());
      } catch (e) { this.isSuperAdmin = false; }
    });
  }

  openCreatedDateRangePicker(): void {
    const dialogRef = this.dialog.open(DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.filterCreationDateAfter,
        endDate: this.filterCreationDate
      }
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

  clearEditAndCreate() {
    try { sessionStorage.removeItem('edit_exam'); } catch (e) { }
    this.openCreateTest();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;

  refresh() {
    if (!this.hasAppliedFilters) {
      try { notify('Apply filters to fetch tests', 'info'); } catch (e) {}
      return;
    }
    this.loadExamsForInstitute(this.selectedInstitute || undefined);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRowNumber(index: number): number {
    const pageIndex = this.paginator?.pageIndex || 0;
    const pageSize = this.paginator?.pageSize || this.dataSource.filteredData.length || 1;
    return pageIndex * pageSize + index + 1;
  }
  private filtersOverlayRef: OverlayRef | null = null;

  get showLocationAndIndustryFilters(): boolean {
    return this.isSuperAdmin && !this.globalInstituteContext.isGlobalFilterActive();
  }

  get filteredCountries(): Array<{ code: string; name: string }> {
    const term = (this.countrySearch || '').trim().toLowerCase();
    if (!term) return this.countries;
    return this.countries.filter(c => (c.name || '').toLowerCase().includes(term));
  }

  get filteredIndustryTypes(): string[] {
    const term = (this.industrySearch || '').trim().toLowerCase();
    if (!term) return this.industryTypes;
    return this.industryTypes.filter(t => t.toLowerCase().includes(term));
  }

  private get scopedSectors(): string[] {
    if (!this.filterIndustry) return [];
    return this.sectorMap[this.filterIndustry] || [];
  }

  get filteredSectors(): string[] {
    const scoped = this.scopedSectors;
    const term = (this.sectorSearch || '').trim().toLowerCase();
    if (!term) return scoped;
    return scoped.filter(s => s.toLowerCase().includes(term));
  }

  onFilterSelectOpened(opened: boolean, field: 'country' | 'industry' | 'sector') {
    if (opened) {
      setTimeout(() => {
        try {
          const input = document.querySelector('.cdk-overlay-pane .select-search-input') as HTMLInputElement | null;
          input?.focus();
        } catch (e) { }
      });
    }
  }

  stopFilterSearchEvent(event: Event) {
    event.stopPropagation();
  }

  loadCountries() {
    const url = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        try {
          const countries = res?.data?.countries || res?.countries || res?.data || [];
          this.locationHierarchyRaw = Array.isArray(countries) ? countries : [];
          this.loadRegisteredInstituteCountries(this.locationHierarchyRaw);
        } catch (e) { this.countries = []; }
      },
      error: () => { this.countries = []; }
    });
  }

  private loadRegisteredInstituteCountries(locationCountries: any[]) {
    this.countries = [];
    this.http.get<any>(`${API_BASE}/get-institutes`).subscribe({
      next: (res) => {
        try {
          const institutes = Array.isArray(res?.data) ? res.data : [];
          const hierarchyCountries = (locationCountries || []).map((country: any) => ({
            code: country.country_code || country.code || country.id,
            name: country.country_name || country.name || country.country
          })).filter((country: any) => country.code && country.name);
          const registeredCountries: Array<{ code: string; name: string }> = [];
          institutes.forEach((institute: any) => {
            const locations = [institute, ...(Array.isArray(institute?.campuses) ? institute.campuses : [])];
            locations.forEach((location: any) => {
              const rawCountry = location?.country;
              const countryCode = location?.country_id || location?.country_code
                || (typeof rawCountry === 'object' ? rawCountry?.country_id || rawCountry?.id || rawCountry?.country_code || rawCountry?.code : rawCountry);
              const countryName = location?.country_name
                || (typeof rawCountry === 'object' ? rawCountry?.country_name || rawCountry?.name || rawCountry?.country : rawCountry);
              const hierarchyMatch = hierarchyCountries.find((country: any) =>
                (countryCode && String(country.code).toLowerCase() === String(countryCode).toLowerCase())
                || (countryName && String(country.name).trim().toLowerCase() === String(countryName).trim().toLowerCase())
              );
              const resolved = hierarchyMatch || (countryCode && countryName ? { code: countryCode, name: countryName } : null);
              if (resolved) registeredCountries.push({ code: String(resolved.code), name: String(resolved.name).trim() });
            });
          });
          const uniqueByName = new Map<string, { code: string; name: string }>();
          registeredCountries.forEach(country => {
            const key = country.name.toLowerCase();
            if (!uniqueByName.has(key)) uniqueByName.set(key, country);
          });
          this.countries = Array.from(uniqueByName.values()).sort((a, b) => a.name.localeCompare(b.name));
        } catch (e) {
          this.countries = [];
        }
      },
      error: () => { this.countries = []; }
    });
  }

  private loadCitiesForCountry(countryCode: string) {
    this.filterCityOptions = [];
    if (!countryCode) return;
    const url = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(url, { params: { country_id: countryCode } }).subscribe({
      next: (res) => {
        try {
          const data = Array.isArray(res?.data?.cities) ? res.data.cities : [];
          this.filterCityOptions = data.map((city: any) => ({
            code: city.id ?? city.city_id ?? city.city_code ?? city.code,
            name: city.name ?? city.city_name ?? city.city
          })).filter((city: any) => city.code && city.name).sort((a: any, b: any) => a.name.localeCompare(b.name));
        } catch (e) { this.filterCityOptions = []; }
      },
      error: () => { this.filterCityOptions = []; }
    });
  }

  private resolveCityId(cityName: string): string {
    const name = String(cityName || '').trim().toLowerCase();
    if (!name) return '';
    const found = this.filterCityOptions.find(c => String(c.name || '').trim().toLowerCase() === name);
    return found ? String(found.code) : '';
  }

  onCountryFilterChange() {
    this.filterCity = '';
    this.loadCitiesForCountry(this.filterCountry);
    this.refreshInstituteScope();
  }

  onCityFilterChange() {
    this.refreshInstituteScope();
  }

  onIndustryFilterChange() {
    this.filterSector = '';
    this.refreshInstituteScope();
  }

  onSectorFilterChange() {
    this.refreshInstituteScope();
  }

  refreshInstituteScope() {
    if (!this.isSuperAdmin) return;
    const params: any = {};
    if (this.filterCountry) params.country = this.filterCountry;
    const cityId = this.resolveCityId(this.filterCity);
    if (cityId) params.city = cityId;
    if (this.filterIndustry) params.industry = this.filterIndustry;
    if (this.filterSector) params.sector = this.filterSector;

    const clearStaleInstituteSelection = () => {
      if (this.selectedInstitute && !this.institutes.some(i => String(i.institute_id) === String(this.selectedInstitute))) {
        this.onInstituteAutocompleteSelected('');
      }
    };

    if (!Object.keys(params).length) {
      this.loadInstitutes();
      return;
    }

    this.http.get<any>(`${API_BASE}/get-institutes`, { params }).subscribe({
      next: (res) => {
        const data = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []);
        this.institutes = (data || []).map((r: any) => ({
          institute_name: r.institute_name || r.name || r.short_name || '',
          short_name: r.short_name || r.institute_name || r.name || '',
          institute_id: r.institute_id || r.id || r._id || ''
        })).filter((i: any) => !!i.institute_id);
        this.allInstitutes = [...this.institutes];
        clearStaleInstituteSelection();
      },
      error: () => { this.institutes = []; }
    });
  }

  get filteredTestOptions(): Array<{ id: string; title: string }> {
    if (this.isSuperAdmin && !this.selectedInstitute) return [];
    const term = (this.testSearchTerm || this.filterName || '').trim().toLowerCase();
    if (!term) return this.testOptions;
    return this.testOptions.filter(t => t.title.toLowerCase().includes(term));
  }

  loadTestOptions(instId?: string) {
    if (this.isSuperAdmin && !instId) {
      this.testOptions = [];
      return;
    }
    const url = `${API_BASE}/get-exams-list`;
    const params: any = {};
    if (instId) params.institute_id = instId;
    if (this.selectedDepartments && this.selectedDepartments.length) params.departments = this.selectedDepartments.join(',');
    if (this.selectedTeams && this.selectedTeams.length) params.teams = this.selectedTeams.join(',');
    this.http.get<any>(url, { params }).subscribe({
      next: (res) => {
        const arr = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []);
        const mapped = arr.map((x: any) => ({
          id: String(x.test_id || x.exam_id || x.id || ''),
          title: String(x.title || x.name || x.exam_name || '').trim()
        })).filter((x: any) => !!x.title);

        const uniqueMap = new Map<string, { id: string; title: string }>();
        mapped.forEach((item: any) => {
          const key = item.title.toLowerCase();
          if (!uniqueMap.has(key)) uniqueMap.set(key, item);
        });

        this.testOptions = Array.from(uniqueMap.values()).sort((a, b) => a.title.localeCompare(b.title));
      },
      error: (err) => {
        console.warn('Failed to load test options', err);
        this.testOptions = [];
      }
    });
  }

  ngOnInit(): void {
    this.pageMeta.setMeta('Tests', 'Browse and review tests');
    this.loadCountries();
    this.loadInstitutes();
    this.loadTestOptions(this.selectedInstitute);
    this.globalInstituteSub = this.globalInstituteContext.activeInstitute$.subscribe(context => {
      const instituteId = context?.institute_id || '';
      if (instituteId) {
        if (instituteId === this.activeInstituteId) return;
        this.resetForInstituteChange(instituteId);
        return;
      }
      if (this.activeInstituteId) this.resetAfterGlobalInstituteClear();
    });
    const restoredReturnState = this.restoreTestsReturnState();
    try {
      if (!restoredReturnState && sessionStorage.getItem('exams_return_state') === 'true') {
        sessionStorage.removeItem('exams_return_state');
        this.hasAppliedFilters = false;
        this.shouldLoadTestsAfterInstitutes = true;
      }
    } catch (e) { }
  }

  openFiltersOverlay() {
    if (!this.filtersBtn) return;
    if (this.filtersOverlayRef) { try { this.filtersOverlayRef.dispose(); } catch (e) { }; this.filtersOverlayRef = null; }

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.filtersBtn)
      .withPositions([
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 8 }
      ])
      .withPush(true);

    this.filtersOverlayRef = this.overlay.create({ positionStrategy, hasBackdrop: true, backdropClass: 'cdk-overlay-transparent-backdrop', scrollStrategy: this.overlay.scrollStrategies.reposition() });
    this.filtersOverlayRef.backdropClick().subscribe(() => this.closeFiltersOverlay());
    this.filtersOverlayRef.keydownEvents().subscribe((ev: any) => { if (ev.key === 'Escape') this.closeFiltersOverlay(); });

    const portal = new TemplatePortal(this.filtersPanelTpl, this.vcr);
    this.filtersOverlayRef.attach(portal);
  }

  closeFiltersOverlay() { if (this.filtersOverlayRef) { try { this.filtersOverlayRef.dispose(); } catch (e) { }; this.filtersOverlayRef = null; } }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.globalInstituteSub?.unsubscribe();
    this.saveTestsReturnState();
  }

  get appliedFilterChips(): Array<{ key: string; label: string; removable: boolean }> {
    if (!this.hasAppliedFilters) return [];
    const chips: Array<{ key: string; label: string; removable: boolean }> = [];
    if (this.filterCountry) chips.push({ key: 'country', label: `Country: ${this.getCountryLabel(this.filterCountry)}`, removable: true });
    if (this.filterCity) chips.push({ key: 'city', label: `City: ${this.filterCity}`, removable: true });
    if (this.filterIndustry) chips.push({ key: 'industry', label: `Industry: ${this.filterIndustry}`, removable: true });
    if (this.filterSector) chips.push({ key: 'sector', label: `Sector: ${this.filterSector}`, removable: true });
    if (this.selectedInstitute) chips.push({ key: 'institute', label: `Institute: ${this.getInstituteLabel(this.selectedInstitute)}`, removable: this.isSuperAdmin });
    if (this.filterName) chips.push({ key: 'name', label: `Test: ${this.filterName}`, removable: true });
    (this.selectedDepartments || []).forEach(id => chips.push({ key: `department:${id}`, label: `Department: ${this.getSelectedName(this.departments, id)}`, removable: true }));
    (this.selectedTeams || []).forEach(id => chips.push({ key: `team:${id}`, label: `Team: ${this.getSelectedName(this.teams, id)}`, removable: true }));
    if (this.filterCreationDateAfter) chips.push({ key: 'created_after', label: `Created after: ${this.formatFilterDate(this.filterCreationDateAfter)}`, removable: true });
    if (this.filterCreationDate) chips.push({ key: 'created_before', label: `Created before: ${this.formatFilterDate(this.filterCreationDate)}`, removable: true });
    if (this.filterActiveStatus !== null && typeof this.filterActiveStatus !== 'undefined') chips.push({ key: 'active_status', label: `Status: ${this.filterActiveStatus ? 'Active' : 'Inactive'}`, removable: true });
    if (this.filterCreatedByMe) chips.push({ key: 'created_by_me', label: 'Created by me', removable: true });
    return chips;
  }

  removeAppliedFilter(key: string) {
    if (!key) return;
    if (key === 'country') { this.filterCountry = ''; this.filterCity = ''; this.filterCityOptions = []; if (this.isSuperAdmin) this.refreshInstituteScope(); }
    else if (key === 'city') { this.filterCity = ''; if (this.isSuperAdmin) this.refreshInstituteScope(); }
    else if (key === 'industry') { this.filterIndustry = ''; this.filterSector = ''; if (this.isSuperAdmin) this.refreshInstituteScope(); }
    else if (key === 'sector') { this.filterSector = ''; if (this.isSuperAdmin) this.refreshInstituteScope(); }
    else if (key === 'institute' && this.isSuperAdmin) { this.selectedInstitute = ''; this.instituteSearch = ''; this.filterName = ''; this.testOptions = []; this.selectedDepartments = []; this.selectedTeams = []; this.departments = []; this.teams = []; }
    else if (key === 'name') this.filterName = '';
    else if (key.startsWith('department:')) this.selectedDepartments = this.selectedDepartments.filter(id => String(id) !== key.substring('department:'.length));
    else if (key.startsWith('team:')) this.selectedTeams = this.selectedTeams.filter(id => String(id) !== key.substring('team:'.length));
    else if (key === 'created_after') this.filterCreationDateAfter = null;
    else if (key === 'created_before') this.filterCreationDate = null;
    else if (key === 'active_status') this.filterActiveStatus = null;
    else if (key === 'created_by_me') this.filterCreatedByMe = false;
    this.refreshAfterFilterChipChange();
  }

  clearAppliedFilters() { this.onReset(); }
  private refreshAfterFilterChipChange() { if (this.appliedFilterChips.length) this.loadExamsForInstitute(this.selectedInstitute || undefined); else { this.hasAppliedFilters = false; } }
  private getCountryLabel(code: string): string { const found = (this.countries || []).find(c => String(c.code).toLowerCase() === String(code).toLowerCase()); return found?.name || code; }
  private getInstituteLabel(id: any): string { const found = this.institutes.find(i => String(i.institute_id) === String(id)); return found?.institute_name || found?.short_name || String(id || ''); }
  private getSelectedName(list: any[], selectedId: any): string { const found = (list || []).find(item => String(item?.id) === String(selectedId)); return found?.name || String(selectedId || ''); }
  private formatFilterDate(value: Date): string { try { return value.toISOString().slice(0, 10); } catch (e) { return String(value || ''); } }
  private toNumber(value: any): number | null {
    if (value === null || value === undefined || value === '') return null;
    const n = Number(value);
    return isNaN(n) ? null : n;
  }

  private getMarksPerQuestion(value: any): number | null {
    return this.toNumber(
      value?.marks_per_question ??
      value?.marksPerQuestion ??
      value?.mark_each_question ??
      value?.markEachQuestion ??
      value?.mark_for_each_question ??
      value?.marks_for_each_question ??
      value?.marksForEachQuestion ??
      value?.question_mark ??
      value?.question_marks ??
      value?.category_mark ??
      value?.category_marks ??
      value?.marks ??
      value?.mark ??
      value?.points ??
      value?.category?.marks_per_question ??
      value?.category?.mark_each_question ??
      value?.category?.mark_for_each_question ??
      value?.category?.marks ??
      value?.category?.mark
    );
  }

  private getTotalMarks(value: any): number | null {
    return this.toNumber(
      value?.total_marks ??
      value?.totalMarks ??
      value?.total_mark ??
      value?.marks_total ??
      value?.total_score ??
      value?.category?.total_marks
    );
  }

  private getQuestionCount(value: any, questionArray: any[] = []): number {
    const count = this.toNumber(
      (Array.isArray(value?.questions) ? null : value?.questions) ??
      value?.number_of_questions ??
      value?.total_questions ??
      value?.questions_count ??
      value?.question_count ??
      value?.count
    );
    if (count !== null) return count;
    if (Array.isArray(value?.question_ids)) return value.question_ids.length;
    if (Array.isArray(value?.questionIds)) return value.questionIds.length;
    return questionArray.length;
  }

  private calculateTotalMarks(questions: any, marksPerQuestion: any): number | null {
    const questionCount = this.toNumber(questions);
    const marks = this.toNumber(marksPerQuestion);
    return questionCount !== null && marks !== null ? questionCount * marks : null;
  }

  private deriveMarksFromQuestions(questions: any[]): number | null {
    const marks = Array.from(new Set((questions || []).map((q: any) => this.getMarksPerQuestion(q)).filter((v: number | null) => v !== null))) as number[];
    return marks.length === 1 ? marks[0] : null;
  }

  showNotEditablePopup() {
    const message = "This test cannot be edited because it is currently active or is being attended by users.";
    this.confirmService.confirm({
      title: 'Cannot Edit Test',
      message: message,
      confirmText: 'OK',
      cancelText: ''
    }).subscribe();
    try { notify(message, 'error'); } catch (e) {}
  }

  onEdit(e: any) {
    if (e && (e.is_editable === false || e.editable === false)) {
      this.showNotEditablePopup();
      return;
    }
    // If we have an id for the exam, fetch the full exam details from the API
    const examId = e?.test_id || e?.exam_id || e?.id;
    if (examId) {
      const url = `${API_BASE}/get-exams-details?exam_id=${encodeURIComponent(examId)}`;
      this.http.get<any>(url).subscribe({
        next: (res) => {
          const item = Array.isArray(res?.data) && res.data.length ? res.data[0] : (res?.data || res?.item || e);
          if (item && (item.is_editable === false || item.editable === false)) {
            this.showNotEditablePopup();
            return;
          }
          // normalize categories to the flat shape expected by CreateExamComponent.loadEditTest()
          const srcCats = Array.isArray(item.categories) ? item.categories : (Array.isArray(item.category_list) ? item.category_list : []);
          const mapped = srcCats.map((c: any) => {
            // if category is nested under c.category, prefer that
            const catObj = c.category || {};
            const category_id = catObj.category_id || c.category_id || c.id || c._id || '';
            const category_name = catObj.category_name || catObj.name || c.category_name || c.name || '';
            const description = catObj.description || c.description || c.desc || '';
            const questionArray = Array.isArray(c.questions) ? c.questions : (Array.isArray(c.question_list) ? c.question_list : []);
            const question_ids = questionArray.map((q: any) => q.question_id || q.id || q._id || null).filter(Boolean);
            const questionsCount = this.getQuestionCount(c, questionArray);
            const marksPerQuestion = this.getMarksPerQuestion(c) ?? this.deriveMarksFromQuestions(questionArray);
            const randomize = typeof c.randomize_questions === 'boolean' ? c.randomize_questions : (typeof c.randomize === 'boolean' ? c.randomize : false);
            return {
              category_id,
              category_name,
              description,
              questions: Number(questionsCount) || 0,
              question_ids,
              randomize_questions: !!randomize,
              question_type: c.question_type || catObj.question_type || c.type || catObj.type || c.category_type || catObj.category_type || '',
              marks_per_question: marksPerQuestion,
              total_marks: this.getTotalMarks(c) ?? this.calculateTotalMarks(questionsCount, marksPerQuestion)
            };
          });
          const editPayload = { ...item, categories: mapped };
          try { sessionStorage.setItem('edit_exam', JSON.stringify(editPayload)); } catch (_) { }
          this.saveTestsReturnState();
          this.router.navigate(['/create-exam']);
        }, error: () => {
          // fallback: store the row object we already have (try to normalize if possible)
          try {
            const src = e || {};
            const srcCatsFallback = Array.isArray(src.categories) ? src.categories : (Array.isArray(src.category_list) ? src.category_list : []);
            const mappedFallback = srcCatsFallback.map((c: any) => ({
              category_id: c.category_id || c.id || c._id || '',
              category_name: c.category_name || c.name || '',
              description: c.description || c.desc || '',
              questions: this.getQuestionCount(c, Array.isArray(c.questions) ? c.questions : (Array.isArray(c.question_list) ? c.question_list : [])),
              question_ids: Array.isArray(c.question_ids) ? c.question_ids : (Array.isArray(c.questionIds) ? c.questionIds : []),
              randomize_questions: !!c.randomize_questions,
              question_type: c.question_type || c.type || c.category_type || '',
              marks_per_question: this.getMarksPerQuestion(c) ?? this.deriveMarksFromQuestions(Array.isArray(c.questions) ? c.questions : (Array.isArray(c.question_list) ? c.question_list : [])),
              total_marks: this.getTotalMarks(c) ?? this.calculateTotalMarks(this.getQuestionCount(c, Array.isArray(c.questions) ? c.questions : (Array.isArray(c.question_list) ? c.question_list : [])), this.getMarksPerQuestion(c) ?? this.deriveMarksFromQuestions(Array.isArray(c.questions) ? c.questions : (Array.isArray(c.question_list) ? c.question_list : [])))
            }));
            const editPayloadFallback = { ...src, categories: mappedFallback };
            sessionStorage.setItem('edit_exam', JSON.stringify(editPayloadFallback));
          } catch (_) { try { sessionStorage.setItem('edit_exam', JSON.stringify(e)); } catch (_) { } }
          this.saveTestsReturnState();
          this.router.navigate(['/create-exam']);
        }
      });
      return;
    }
    try { sessionStorage.setItem('edit_exam', JSON.stringify(e)); } catch (_) { }
    this.saveTestsReturnState();
    this.router.navigate(['/create-exam']);
  }

  deleteSchedule(row: any) {
    this.confirmService.confirm({ title: 'Delete Scheduled Test', message: 'Delete this scheduled test?', confirmText: 'Delete', cancelText: 'Cancel' }).subscribe(ok => {
      if (!ok) return;
      const id = row.test_id || row.exam_id || row.id;
      if (!id) {
        notify('Unable to delete: test ID not found', 'error');
        return;
      }
      const url = `${API_BASE}/delete-exam?exam_id=${encodeURIComponent(id)}`;
      this.http.delete<any>(url).subscribe({
        next: (res) => {
          try { notify('Scheduled test deleted successfully', 'success'); } catch (e) { }
          // reload exams
          this.loadExamsForInstitute(this.selectedInstitute || undefined);
        }, error: (err) => {
          console.warn('Failed to delete scheduled test', err);
          try { notify('Failed to delete scheduled test. Please try again later.', 'error'); } catch (e) { }
        }
      });
    });
  }

  onView(e: any) {
    // fetch full exam details from API when available, then show modal
    const examId = e?.test_id || e?.exam_id || e?.id;
    if (examId) {
      const url = `${API_BASE}/get-exams-details?exam_id=${encodeURIComponent(examId)}`;
      this.loader.show();
      this.http.get<any>(url).subscribe({
        next: (res) => {
          const item = Array.isArray(res?.data) && res.data.length ? res.data[0] : (res?.data || res || e);
          // normalize categories to the shape used by the template
          const cats = Array.isArray(item.categories) ? item.categories : (Array.isArray(item.category_list) ? item.category_list : []);
          item.categories = cats.map((c: any) => {
            // the API may return category object under `category` and number_of_questions/randomize_questions
            const categoryObj = c.category || { category_id: c.category_id || c.id, category_name: c.category_name || c.name, description: c.description || c.desc };
            return {
              category: categoryObj,
              number_of_questions: c.number_of_questions ?? c.count ?? (Array.isArray(c.questions) ? c.questions.length : 0),
              questions: Array.isArray(c.questions) ? c.questions : (Array.isArray(c.question_list) ? c.question_list : []),
              randomize_questions: typeof c.randomize_questions === 'boolean' ? c.randomize_questions : (c.randomize || false)
            };
          });
          this.selectedExam = item;
          // Normalize institute and user fields for template friendliness
          try {
            // institute may be returned as `institute` object or as `institute_id`/`institute_name` fields
            if (!this.selectedExam.institute && this.selectedExam.institutes) this.selectedExam.institute = this.selectedExam.institutes;
            if (this.selectedExam.institute && typeof this.selectedExam.institute === 'object') {
              this.selectedExam.institute = this.selectedExam.institute;
            }
            // created_by / updated_by may be null, string, or object { name, username }
            const normUser = (u: any) => {
              if (!u && u !== 0) return null;
              if (typeof u === 'string') return u;
              if (typeof u === 'object') return u.name || u.username || u.user_name || u.user || JSON.stringify(u);
              return String(u);
            };
            this.selectedExam.created_by = normUser(this.selectedExam.created_by || this.selectedExam.creator || null);
            this.selectedExam.updated_by = normUser(this.selectedExam.updated_by || this.selectedExam.modifier || null);
            // Add explicit display fields used by the template
            this.selectedExam.display_institute = (this.selectedExam.institute && (this.selectedExam.institute.institute_name || this.selectedExam.institute.name)) || (this.selectedExam.institutes && (this.selectedExam.institutes.institute_name || this.selectedExam.institutes.name)) || this.selectedExam.institute_name || '';
            this.selectedExam.created_by_display = this.selectedExam.created_by || '—';
            this.selectedExam.updated_by_display = this.selectedExam.updated_by || '—';
          } catch (e) { /* ignore normalization errors */ }
          // initialize expanded map
          try { this.selectedExam._expanded = {}; } catch (e) { this.selectedExam._expanded = {}; }
          this.showModal = true;
          try { this.loader.hide(); } catch (err) { }
        }, error: (err) => {
          // fallback to the passed object
          try { sessionStorage.setItem('view_exam', JSON.stringify(e)); } catch (_) { }
          this.selectedExam = e || null;
          try {
            if (this.selectedExam) {
              if (!this.selectedExam.institute && this.selectedExam.institutes) this.selectedExam.institute = this.selectedExam.institutes;
              const normUser = (u: any) => {
                if (!u && u !== 0) return null;
                if (typeof u === 'string') return u;
                if (typeof u === 'object') return u.name || u.username || u.user_name || u.user || JSON.stringify(u);
                return String(u);
              };
              this.selectedExam.created_by = normUser(this.selectedExam.created_by || this.selectedExam.creator || null);
              this.selectedExam.updated_by = normUser(this.selectedExam.updated_by || this.selectedExam.modifier || null);
              this.selectedExam.display_institute = (this.selectedExam.institute && (this.selectedExam.institute.institute_name || this.selectedExam.institute.name)) || (this.selectedExam.institutes && (this.selectedExam.institutes.institute_name || this.selectedExam.institutes.name)) || this.selectedExam.institute_name || '';
              this.selectedExam.created_by_display = this.selectedExam.created_by || '—';
              this.selectedExam.updated_by_display = this.selectedExam.updated_by || '—';
            }
          } catch (e) { }
          this.selectedExam = this.selectedExam || null;
          this.selectedExam._expanded = {};
          this.showModal = true;
          try { this.loader.hide(); } catch (err) { }
        }
      });
      return;
    }
    try { sessionStorage.setItem('view_exam', JSON.stringify(e)); } catch (_) { }
    this.selectedExam = e || null;
    try { this.selectedExam._expanded = {}; } catch (err) { }
    this.showModal = true;
  }

  toggleCategoryQuestions(idx: number) {
    if (!this.selectedExam) return;
    this.selectedExam._expanded = this.selectedExam._expanded || {};
    this.selectedExam._expanded[idx] = !this.selectedExam._expanded[idx];
  }

  closeModal() {
    this.showModal = false;
    this.selectedExam = null;
  }

  loadInstitutes() {
    this.loader.show();
    this.http.get<any>(this.apiUrl).subscribe({
      next: (res) => {
        if (res && res.data && Array.isArray(res.data)) {
          // Prefer the full institute name while retaining the abbreviation as a fallback.
          this.institutes = res.data.map((r: any) => ({ institute_name: r.institute_name || r.name || r.short_name || '', short_name: r.short_name || r.institute_name || r.name || '', institute_id: r.institute_id }));
          this.allInstitutes = [...this.institutes];
          // If a selectedInstitute is already set (e.g. via route/session), prefer that
          try {
            if (this.selectedInstitute) {
              const found = this.institutes.find(i => String(i.institute_id) === String(this.selectedInstitute));
              if (found) {
                // ensure exact match type/value and load schedules
                this.selectedInstitute = found.institute_id as any;
                this.instituteSearch = '';
                // load dependent lists scoped to the institute
                this.loadDepartments(this.selectedInstitute);
                this.loadTeams(this.selectedInstitute);
                this.loadExamsFromReturnState();
                this.loader.hide();
                return;
              }
            }
          } catch (e) { /* ignore */ }

          // Fallback: try reading user's institute from sessionStorage and apply it
          try {
            const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
            if (!this.isSuperAdmin && raw) {
              const u = JSON.parse(raw);
              const instId = u?.institute_id || u?.instituteId || u?.institute || '';
              if (instId) {
                const found = this.institutes.find(i => String(i.institute_id) === String(instId));
                if (found) {
                  this.selectedInstitute = found.institute_id as any;
                  this.instituteSearch = '';
                  // load dependent lists scoped to the institute
                  this.loadDepartments(this.selectedInstitute);
                  this.loadTeams(this.selectedInstitute);
                }
              }
            }
          } catch (e) { /* ignore malformed session data */ }
        }
        this.loadExamsFromReturnState();
        this.loader.hide();
      },
      error: (err) => { console.warn('Failed to load institutes', err); this.loader.hide(); }
    });
  }

  private loadExamsFromReturnState() {
    if (!this.shouldLoadTestsAfterInstitutes) return;
    this.shouldLoadTestsAfterInstitutes = false;
  }

  displayInstitute = (value: string | null): string => {
    if (!value) return '';
    const found = this.institutes.find(i => String(i.institute_id) === String(value));
    return found ? found.institute_name : String(value);
  };
  filteredInstitutes() {
    const q = (this.instituteSearchTerm || '').trim().toLowerCase();
    if (!q) return this.institutes;
    return this.institutes.filter((i: any) => (i.institute_name || i.short_name || '').toLowerCase().includes(q));
  }

  onInstituteAutocompleteSelected(id: string) {
    this.selectedInstitute = id || '';
    this.syncInstituteSearch();
    this.instituteSearchTerm = '';
    this.onInstituteChange(this.selectedInstitute);
  }

  private syncInstituteSearch() {
    const found = this.institutes.find(i => String(i.institute_id) === String(this.selectedInstitute || ''));
    this.instituteSearch = found ? found.institute_name : '';
  }

  onInstituteSearchInput(val: string) {
    this.instituteSearch = val || '';
    this.instituteSearchTerm = val || '';
  }

  onInstituteSearchChange(val: string) {
    this.onInstituteSearchInput(val);
  }
  private hasFilterValues(): boolean {
    return !!(
      this.filterName ||
      this.selectedInstitute ||
      this.filterCountry ||
      this.filterCity ||
      this.filterIndustry ||
      this.filterSector ||
      (this.selectedDepartments && this.selectedDepartments.length) ||
      (this.selectedTeams && this.selectedTeams.length) ||
      this.filterCreationDateAfter ||
      this.filterCreationDate ||
      this.filterActiveStatus !== null ||
      this.filterCreatedByMe
    );
  }

  onApply() {
    if (!this.hasFilterValues()) {
      try { notify('Please add filters in the filter form.', 'info'); } catch (e) {}
      return;
    }
    this.hasAppliedFilters = true;
    this.loadExamsForInstitute(this.selectedInstitute || undefined);
    this.closeFiltersOverlay();
  }
  onReset() {
    // clear filter fields
    this.filterName = '';
    this.testSearch = '';
    this.testSearchTerm = '';
    this.departmentSearch = '';
    this.teamSearch = '';
    this.filterCountry = '';
    this.filterCity = '';
    this.filterIndustry = '';
    this.filterSector = '';
    this.countrySearch = '';
    this.industrySearch = '';
    this.sectorSearch = '';
    this.filterCityOptions = [];
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.filterActiveStatus = null;
    this.filterCreatedByMe = false;
    this.filter = '';
    this.dataSource.filter = '';
    this.exams = [];
    this.dataSource.data = [];
    this.hasAppliedFilters = false;
    if (this.isSuperAdmin) {
      this.refreshInstituteScope();
    }
  }

  loadExamsForInstitute(id?: string) {
    this.loader.show();
    const base = `${API_BASE}/get-exams-details`;
    // build query params based on filters
    const params: string[] = [];
    if (id) params.push(`institute_id=${encodeURIComponent(id)}`);
    if (this.filterName) params.push(`name=${encodeURIComponent(this.filterName)}`);
    if (this.filterCountry) params.push(`country=${encodeURIComponent(this.filterCountry)}`);
    if (this.filterCity) params.push(`city=${encodeURIComponent(this.filterCity)}`);
    if (this.filterIndustry) params.push(`industry=${encodeURIComponent(this.filterIndustry)}`);
    if (this.filterSector) params.push(`sector=${encodeURIComponent(this.filterSector)}`);
    if (this.selectedDepartments && this.selectedDepartments.length) params.push(`departments=${encodeURIComponent(this.selectedDepartments.join(','))}`);
    if (this.selectedTeams && this.selectedTeams.length) params.push(`teams=${encodeURIComponent(this.selectedTeams.join(','))}`);
    if (this.filterCreationDateAfter) params.push(`created_after=${encodeURIComponent((this.filterCreationDateAfter as Date).toISOString().slice(0, 10))}`);
    if (this.filterCreationDate) params.push(`created_before=${encodeURIComponent((this.filterCreationDate as Date).toISOString().slice(0, 10))}`);
    if (this.filterActiveStatus !== null && typeof this.filterActiveStatus !== 'undefined') params.push(`active_status=${encodeURIComponent(String(this.filterActiveStatus))}`);
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
      } catch (e) { }
    }
    const url = params.length ? `${base}?${params.join('&')}` : base;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        const arr = Array.isArray(res?.data) ? res.data : [];
        // normalize each exam to expected display shape
        this.exams = arr.map((x: any) => ({
          test_id: x.test_id || x.id || x.exam_id,
          title: x.title || x.name || '',
          description: x.description || x.desc || '',
          // preserve raw categories if returned by the API so the view modal can show them
          categories: Array.isArray(x.categories) ? x.categories : (Array.isArray(x.category_list) ? x.category_list : (Array.isArray(x.categories_list) ? x.categories_list : [])),
          institute: {
            institute_id: x.institute_id || '',
            institute_name: x.institute_name || ''
          },
          duration_mins: x.duration_mins || x.duration || 0,
          total_questions: x.total_questions || x.questions_count || 0,
          number_of_attempts: x.number_of_attempts || x.attempts || 1,
          pass_mark: x.pass_mark || x.pass_mark || 0,
          public_access: x.public_access || x.public || false,
          created_by: x.created_by || x.creator || '',
          created_date: x.created_date || x.created || '',
          updated_by: x.updated_by || x.modifier || '',
          updated_date: x.updated_date || x.updated || '',
          published: !!x.published
        }));
        this.dataSource.data = this.exams;
        this.dataSource.paginator = this.paginator;

        try { this.loader.hide(); } catch (e) { /* ignore */ }
      },
      error: (err) => {
        console.warn('Failed loading exams', err);
        this.exams = [];
        this.dataSource.data = this.exams;
        this.dataSource.paginator = this.paginator;
        try { this.loader.hide(); } catch (e) { /* ignore */ }
      }
    });
  }

  onInstituteSelected(id: string) {
    this.selectedInstitute = id || '';
    this.loadTestOptions(this.selectedInstitute || undefined);
    if (this.selectedInstitute) {
      this.loadDepartments(this.selectedInstitute);
      this.loadTeams(this.selectedInstitute);
    }
  }

  onInstituteChange(value: any) {
    const v = value !== undefined && value !== null ? value : '';
    this.selectedInstitute = v;
    this.filterName = '';
    this.testSearch = '';
    this.testSearchTerm = '';
    if (this.isSuperAdmin && !this.selectedInstitute) {
      this.testOptions = [];
    } else {
      this.loadTestOptions(this.selectedInstitute || undefined);
    }
    if (this.selectedInstitute) {
      this.loadDepartments(this.selectedInstitute);
      this.loadTeams(this.selectedInstitute);
    } else {
      // clear dependent lists
      this.departments = [];
      this.teams = [];
      this.selectedDepartments = [];
      this.selectedTeams = [];
    }
  }

  // new: load departments scoped to institute
  loadDepartments(instId?: string) {
    if (!instId) { this.departments = []; return; }
    const url = `${API_BASE}/get-department-list`;
    this.http.get<any>(url, { params: { institute_id: instId } }).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : (res && Array.isArray(res.data) ? res.data : []);
        this.departments = arr.map((d: any) => ({ id: d.dept_id || d.id || d.deptId, name: d.name || d.dept_name || d.title || '' }));
        this.loadTestOptions(this.selectedInstitute || undefined);
      }, error: (err) => { console.warn('Failed to load departments', err); this.departments = []; }
    });
  }

  // new: load teams scoped to institute
  loadTeams(instId?: string) {
    if (!instId) { this.teams = []; return; }
    const url = `${API_BASE}/get-teams-list`;
    this.http.get<any>(url, { params: { institute_id: instId } }).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : (res && Array.isArray(res.data) ? res.data : []);
        this.teams = arr.map((t: any) => ({ id: t.team_id || t.id || t.teamId, name: t.name || t.team_name || t.title || '' }));
        this.loadTestOptions(this.selectedInstitute || undefined);
      }, error: (err) => { console.warn('Failed to load teams', err); this.teams = []; }
    });
  }

  onDepartmentsChange() {
    this.loadTestOptions(this.selectedInstitute || undefined);
  }

  onTeamsChange() {
    this.loadTestOptions(this.selectedInstitute || undefined);
  }

  onTestSearchInput(value: string) {
    this.testSearch = value || '';
    this.testSearchTerm = value || '';
  }

  onTestNameSelected(value: string) {
    this.filterName = value || '';
    this.testSearch = value || '';
    this.testSearchTerm = value || '';
  }

  get filteredDepartments(): Array<{ id: string; name: string }> {
    const term = (this.departmentSearch || '').trim().toLowerCase();
    if (!term) return this.departments;
    return this.departments.filter(d => (d.name || '').toLowerCase().includes(term));
  }

  get filteredTeams(): Array<{ id: string; name: string }> {
    const term = (this.teamSearch || '').trim().toLowerCase();
    if (!term) return this.teams;
    return this.teams.filter(t => (t.name || '').toLowerCase().includes(term));
  }
  openCreateTest(): void {
    this.saveTestsReturnState();
    this.router.navigate(['/create-exam']);
  }

  saveTestsReturnState(): void {
    try {
      sessionStorage.setItem('exams_table_return_state', JSON.stringify({
        instituteId: this.globalInstituteContext.activeInstituteId || this.selectedInstitute || '',
        globalInstituteActive: this.globalInstituteContext.isGlobalFilterActive(),
        filter: this.filter,
        selectedInstitute: this.selectedInstitute,
        instituteSearch: this.instituteSearch,
        filterName: this.filterName,
        filterCountry: this.filterCountry,
        filterCity: this.filterCity,
        filterIndustry: this.filterIndustry,
        filterSector: this.filterSector,
        selectedDepartments: this.selectedDepartments,
        selectedTeams: this.selectedTeams,
        filterCreationDateAfter: this.filterCreationDateAfter ? this.filterCreationDateAfter.toISOString() : null,
        filterCreationDate: this.filterCreationDate ? this.filterCreationDate.toISOString() : null,
        filterActiveStatus: this.filterActiveStatus,
        filterCreatedByMe: this.filterCreatedByMe,
        hasAppliedFilters: this.hasAppliedFilters,
        exams: this.exams
      }));
    } catch (e) { }
  }

  private restoreTestsReturnState(): boolean {
    try {
      const raw = sessionStorage.getItem('exams_table_return_state');
      if (!raw) return false;
      sessionStorage.removeItem('exams_table_return_state');
      sessionStorage.removeItem('exams_return_state');
      const state = JSON.parse(raw);
      const activeInstituteId = this.globalInstituteContext.activeInstituteId;
      if (activeInstituteId && String(state?.instituteId || '') !== String(activeInstituteId)) return false;
      if (activeInstituteId && state?.globalInstituteActive !== true) return false;
      if (!activeInstituteId && state?.globalInstituteActive === true) return false;
      if (!activeInstituteId && typeof state?.globalInstituteActive === 'undefined' && state?.instituteId) return false;
      this.filter = state?.filter || '';
      this.selectedInstitute = state?.selectedInstitute || '';
      this.instituteSearch = '';
      this.filterName = state?.filterName || '';
      this.filterCountry = state?.filterCountry || '';
      this.filterCity = state?.filterCity || '';
      this.filterIndustry = state?.filterIndustry || '';
      this.filterSector = state?.filterSector || '';
      this.selectedDepartments = Array.isArray(state?.selectedDepartments) ? state.selectedDepartments : [];
      this.selectedTeams = Array.isArray(state?.selectedTeams) ? state.selectedTeams : [];
      this.filterCreationDateAfter = state?.filterCreationDateAfter ? new Date(state.filterCreationDateAfter) : null;
      this.filterCreationDate = state?.filterCreationDate ? new Date(state.filterCreationDate) : null;
      this.filterActiveStatus = typeof state?.filterActiveStatus === 'undefined' ? null : state.filterActiveStatus;
      this.filterCreatedByMe = !!state?.filterCreatedByMe;
      this.hasAppliedFilters = !!state?.hasAppliedFilters;
      this.exams = Array.isArray(state?.exams) ? state.exams : [];
      this.dataSource.data = this.exams;
      this.applyFilter(this.filter || '');
      return true;
    } catch (e) {
      try { sessionStorage.removeItem('exams_table_return_state'); } catch (_) { }
      return false;
    }
  }

  private resetForInstituteChange(instituteId: string): void {
    this.activeInstituteId = instituteId;
    this.selectedInstitute = instituteId;
    this.instituteSearch = '';
    // Clear institute-specific UI immediately so previous test data cannot remain visible.
    this.exams = []; this.dataSource.data = []; this.departments = []; this.teams = [];
    this.selectedDepartments = []; this.selectedTeams = []; this.filter = ''; this.dataSource.filter = '';
    this.filterName = ''; this.filterCountry = ''; this.filterCity = ''; this.filterIndustry = ''; this.filterSector = '';
    this.filterCreationDateAfter = null; this.filterCreationDate = null;
    this.filterActiveStatus = null; this.filterCreatedByMe = false; this.hasAppliedFilters = false;
    this.selectedExam = null; this.showModal = false;
    if (this.paginator) { this.paginator.firstPage(); this.paginator.length = 0; }
    this.closeFiltersOverlay();
    try { sessionStorage.removeItem('exams_table_return_state'); } catch (e) {}
    this.loadDepartments(instituteId);
    this.loadTeams(instituteId);
    this.syncInstituteSearch();
  }

  private resetAfterGlobalInstituteClear(): void {
    this.activeInstituteId = '';
    this.selectedInstitute = '';
    this.instituteSearch = '';
    this.testSearch = '';
    this.testSearchTerm = '';
    this.departmentSearch = '';
    this.teamSearch = '';
    // Clear all global-scope UI data while preserving the normal filter workflow.
    this.exams = []; this.dataSource.data = []; this.departments = []; this.teams = [];
    this.selectedDepartments = []; this.selectedTeams = []; this.filter = ''; this.dataSource.filter = '';
    this.filterName = ''; this.filterCountry = ''; this.filterCity = ''; this.filterIndustry = ''; this.filterSector = '';
    this.filterCreationDateAfter = null; this.filterCreationDate = null;
    this.filterActiveStatus = null; this.filterCreatedByMe = false; this.hasAppliedFilters = false;
    this.selectedExam = null; this.showModal = false;
    if (this.paginator) { this.paginator.firstPage(); this.paginator.length = 0; }
    this.closeFiltersOverlay();
    try { sessionStorage.removeItem('exams_table_return_state'); } catch (e) {}
    this.loadInstitutes();
  }
}
