import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { notify } from 'src/app/shared/global-notify';
import { API_BASE } from 'src/app/shared/api.config';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { OverlayModule, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Subscription, forkJoin } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  DateRangePickerDialogComponent,
  DateRangeDialogResult,
} from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';

@Component({
  selector: 'app-category',
  standalone: true,
  // imports: [CommonModule, SharedModule, FormsModule, RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatSelectModule, MatSlideToggleModule, MatSortModule, HttpClientModule],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatPaginatorModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTooltipModule,
    OverlayModule,
    PortalModule,
  ],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, AfterViewInit, OnDestroy {
  filter = '';
  name = '';
  description = '';
  // filters
  filterName = '';
  categoryOptions: Array<{ id: string; name: string }> = [];
  selectedCategory: any = null;
  editing = false;
  selectedInstitute: string | null = null;
  instituteSearch = '';
  instituteSearchTerm = '';
  selectedInstitutes: string[] = [];
  instituteFilterSearch = '';
  selectedDepartments: string[] = [];
  selectedTeams: string[] = [];
  // location / industry filters that scope the Institute list (mirrors view-institutes.component.ts cascade)
  filterCountry: string = '';
  filterCity: string = '';
  filterIndustry: string = '';
  filterSector: string = '';
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

  // Multi-select state arrays
  selectedCountries: string[] = [];
  selectedIndustries: string[] = [];
  selectedSectors: string[] = [];
  selectedCategoryNames: string[] = [];

  // Filter search terms
  countrySearch = '';
  industrySearch = '';
  sectorSearch = '';
  categorySearch = '';
  // additional filters
  filterCreationDateAfter: Date | null = null;
  filterCreationDate: Date | null = null;
  filterActiveStatus: boolean | null = null;
  // checkbox filters
  filterCreatedByMe: boolean = false; // if true, only categories created by current user
  filterPublicAccess: boolean | null = null; // tri-state: null = any, true = public, false = restricted
  // role
  isSuperAdmin: boolean = false;
  isGlobalInstituteActive = false;
  // Country/City/Industry/Sector are Super Admin-only, and are further hidden while the
  // Super Admin has a Global Filter institute active (that institute already scopes the page).
  get showLocationAndIndustryFilters(): boolean {
    return this.isSuperAdmin && !this.isGlobalInstituteActive;
  }

  get isInstituteSelected(): boolean {
    if (!this.isSuperAdmin) return true;
    return (this.selectedInstitutes && this.selectedInstitutes.length > 0) || !!this.selectedInstitute;
  }
  private loginInstituteId: string | null = null;
  private _globalInstituteSub: Subscription | null = null;
  private activeInstituteId = '';
  institutes: Array<{ institute_id: string; institute_name: string; short_name: string }> = [];
  private allInstitutes: Array<{
    institute_id: string;
    institute_name: string;
    short_name: string;
  }> = [];
  departments: Array<{ id: string; name: string }> = [];
  teams: Array<{ id: string; name: string }> = [];

  categories: Array<{
    id: string;
    name: string;
    description?: string;
    institute?: any;
    departments?: any[];
    teams?: any[];
  }> = [];
  dataSource = new MatTableDataSource<any>([]);
  columns = ['sno', 'name', 'description', 'active', 'actions'];
  hasAppliedFilters = false;
  selectedQuestionTypes: string[] = [];
  selectedCities: string[] = [];
  citySearch: string = '';

  private filtersOverlayRef: OverlayRef | null = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private loader: LoaderService,
    private pageMeta: PageMetaService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private confirmService: ConfirmService,
    private globalInstituteContext: GlobalInstituteContextService,
    private dialog: MatDialog
  ) { }

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
        this.onQuestionBankParentFilterChange();
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

  ngOnInit(): void {
    this.pageMeta.setMeta('Question Banks', 'View and manage question banks');

    // try to auto-select institute based on logged-in user
    try {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      if (raw) {
        const obj = JSON.parse(raw);
        // detect super admin role
        const role = obj?.role || obj?.user_role || obj?.role_name || '';
        const normalizedRole = String(role || '').toLowerCase();
        this.isSuperAdmin = ['super_admin', 'superadmin', 'super-admin'].includes(normalizedRole);
        // if user belongs to an institute, pre-select it
        const iid =
          sessionStorage.getItem('global_institute_id') ||
          obj?.institute_id ||
          obj?.instituteId ||
          obj?.institute?.institute_id ||
          obj?.institute?.id ||
          (typeof obj?.institute === 'string' ? obj.institute : null);
        if (iid) {
          this.loginInstituteId = String(iid);
          this.selectedInstitute = this.isSuperAdmin
            ? this.selectedInstitute
            : this.loginInstituteId;
        }
      }
    } catch (e) {
      /* ignore */
    }
    this.loadFilterLists();
    this.loadCountries();
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
    this.restoreCategoryReturnState();
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;

  get pageIndex(): number {
    return this.paginator?.pageIndex || 0;
  }

  get pageSize(): number {
    return this.paginator?.pageSize || 25;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    try {
      this._globalInstituteSub?.unsubscribe();
    } catch (e) {
      /* ignore */
    }
    this.saveCategoryReturnState();
  }

  get filteredInstitutesForFilter() {
    const term = (this.instituteFilterSearch || '').trim().toLowerCase();
    let list = this.institutes || [];
    if (term) {
      list = list.filter(
        (i) =>
          (i.institute_name || (i as any).name || '').toLowerCase().includes(term) ||
          (!!i.institute_id && this.selectedInstitutes.includes(i.institute_id))
      );
    }
    return [...list].sort((a, b) => {
      const aSel = !!a.institute_id && this.selectedInstitutes.includes(a.institute_id);
      const bSel = !!b.institute_id && this.selectedInstitutes.includes(b.institute_id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.institute_name || (a as any).name || '').localeCompare(
        b.institute_name || (b as any).name || ''
      );
    });
  }

  isAllInstitutesSelected(): boolean {
    const ids: string[] = (this.filteredInstitutesForFilter || [])
      .map((i) => i.institute_id || '')
      .filter((id): id is string => !!id);
    return ids.length > 0 && ids.every((id) => (this.selectedInstitutes || []).includes(id));
  }

  toggleSelectAllInstitutes() {
    const ids: string[] = (this.filteredInstitutesForFilter || [])
      .map((i) => i.institute_id || '')
      .filter((id): id is string => !!id);
    if (this.isAllInstitutesSelected()) {
      this.selectedInstitutes = [];
    } else {
      this.selectedInstitutes = [...ids];
    }
    this.onInstituteSelectionChange();
  }

  onInstituteSelectionChange() {
    const instIds =
      this.selectedInstitutes && this.selectedInstitutes.length
        ? this.selectedInstitutes.join(',')
        : null;
    const iid = this.selectedInstitutes[0] || null;
    this.selectedInstitute = iid;
    this.selectedCategoryNames = [];
    this.onInstituteChange(instIds);
  }

  onQuestionBankParentFilterChange(): void {
    this.selectedCategoryNames = [];
    this.categorySearch = '';
    this.loadCategoryOptions();
  }

  onQuestionTypeChange(): void {
    this.onQuestionBankParentFilterChange();
  }

  onDepartmentFilterChange(): void {
    this.selectedTeams = [];
    this.onQuestionBankParentFilterChange();
  }

  refresh() {
    if (!this.hasAppliedFilters) {
      try {
        notify('Apply filters to fetch question banks', 'info');
      } catch (e) { }
      return;
    }
    this.fetchCategories();
  }

  addCategory() {
    const title = (this.name || '').trim();
    if (!title) return;
    const id = Date.now().toString();
    this.categories.unshift({ id, name: title, description: (this.description || '').trim() });
    this.dataSource.data = this.categories;
    this.name = '';
    this.description = '';
  }

  openFiltersOverlay() {
    if (!this.filtersBtn) return;
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (e) { }
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
      } catch (e) { }
      this.filtersOverlayRef = null;
    }
  }

  applyFilter(value: any) {
    const q = (value || '').trim().toLowerCase();
    this.filter = q;
    // this.dataSource.filterPredicate = (d: categories, filter: string) => {
    //   return (d.name || '').toLowerCase().includes(filter) || (d.description || '').toLowerCase().includes(filter);
    // };
    this.dataSource.filter = q;
  }
  get appliedFilterChips(): Array<{
    key: string;
    label: string;
    removable: boolean;
    tooltip?: string;
  }> {
    if (!this.hasAppliedFilters) return [];
    const chips: Array<{ key: string; label: string; removable: boolean; tooltip?: string }> = [];
    if (this.selectedInstitutes && this.selectedInstitutes.length) {
      if (this.selectedInstitutes.length === 1) {
        const instName = this.getInstituteLabel(this.selectedInstitutes[0]);
        chips.push({
          key: 'selectedInstitutes',
          label: `Institute: ${instName}`,
          removable: true,
          tooltip: instName,
        });
      } else {
        const instNames = this.selectedInstitutes
          .map((id) => this.getInstituteLabel(id))
          .filter(Boolean);
        chips.push({
          key: 'selectedInstitutes',
          label: `Institutes: ${this.selectedInstitutes.length} selected`,
          removable: true,
          tooltip: instNames.join(', '),
        });
      }
    } else {
      const scopedInstitute = this.getScopedInstituteId();
      if (scopedInstitute && !scopedInstitute.includes(',')) {
        const instituteName = this.getInstituteLabel(scopedInstitute);
        if (instituteName)
          chips.push({
            key: 'institute',
            label: `Institute: ${instituteName}`,
            removable: this.isSuperAdmin,
            tooltip: instituteName,
          });
      }
    }

    if (this.selectedCountries.length)
      chips.push({
        key: 'country',
        label: `Country: ${this.selectedCountries.join(', ')}`,
        removable: true,
      });
    else if (this.filterCountry)
      chips.push({
        key: 'country',
        label: `Country: ${this.getSelectedName(
          this.countries.map((c) => ({ id: c.code, name: c.name })),
          this.filterCountry
        )}`,
        removable: true,
      });

    if (this.selectedCities.length)
      chips.push({ key: 'city', label: `City: ${this.selectedCities.join(', ')}`, removable: true });
    else if (this.filterCity)
      chips.push({ key: 'city', label: `City: ${this.filterCity}`, removable: true });

    if (this.selectedIndustries.length)
      chips.push({
        key: 'industry',
        label: `Industry: ${this.selectedIndustries.join(', ')}`,
        removable: true,
      });
    else if (this.filterIndustry)
      chips.push({ key: 'industry', label: `Industry: ${this.filterIndustry}`, removable: true });

    if (this.selectedSectors.length)
      chips.push({
        key: 'sector',
        label: `Sector: ${this.selectedSectors.join(', ')}`,
        removable: true,
      });
    else if (this.filterSector)
      chips.push({ key: 'sector', label: `Sector: ${this.filterSector}`, removable: true });

    if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
      const typeLabels = this.selectedQuestionTypes.map((t) =>
        t === 'objective' ? 'Objective' : t === 'descriptive' ? 'Descriptive' : t
      );
      chips.push({ key: 'type', label: `Type: ${typeLabels.join(', ')}`, removable: true });
    }

    if (this.selectedCategoryNames.length)
      chips.push({
        key: 'category',
        label: `Question Bank: ${this.selectedCategoryNames.join(', ')}`,
        removable: true,
      });
    else if (this.filterName)
      chips.push({ key: 'category', label: `Question Bank: ${this.filterName}`, removable: true });

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
    if (this.filterActiveStatus !== null && typeof this.filterActiveStatus !== 'undefined')
      chips.push({
        key: 'active_status',
        label: `Status: ${this.filterActiveStatus ? 'Active' : 'Inactive'}`,
        removable: true,
      });
    if (this.filterCreatedByMe)
      chips.push({ key: 'created_by_me', label: 'Created by me', removable: true });
    if (this.filterPublicAccess)
      chips.push({ key: 'public_access', label: 'Public access', removable: true });
    return chips;
  }

  removeAppliedFilter(key: string) {
    if (!key) return;
    if (key === 'selectedInstitutes') this.selectedInstitutes = [];
    else if (key === 'country') {
      this.selectedCountries = [];
      this.selectedCities = [];
      this.filterCountry = '';
      this.filterCity = '';
      this.filterCityOptions = [];
      this.refreshInstituteScope();
    } else if (key === 'city') {
      this.selectedCities = [];
      this.filterCity = '';
      this.refreshInstituteScope();
    } else if (key === 'industry') {
      this.selectedIndustries = [];
      this.selectedSectors = [];
      this.filterIndustry = '';
      this.filterSector = '';
      this.refreshInstituteScope();
    } else if (key === 'sector') {
      this.selectedSectors = [];
      this.filterSector = '';
      this.refreshInstituteScope();
    } else if (key === 'type') {
      this.selectedQuestionTypes = [];
      this.onQuestionTypeChange();
    } else if (key === 'institute' && this.isSuperAdmin) {
      this.selectedInstitute = null;
      this.instituteSearch = '';
      this.selectedDepartments = [];
      this.selectedTeams = [];
      this.loadGlobalDepartmentTeamLists();
      this.loadCategoryOptions();
    } else if (key === 'category') {
      this.selectedCategoryNames = [];
      this.filterName = '';
    } else if (key.startsWith('department:'))
      this.selectedDepartments = this.selectedDepartments.filter(
        (id) => String(id) !== key.split(':')[1]
      );
    else if (key.startsWith('team:'))
      this.selectedTeams = this.selectedTeams.filter((id) => String(id) !== key.split(':')[1]);
    else if (key === 'created_after') this.filterCreationDateAfter = null;
    else if (key === 'created_before') this.filterCreationDate = null;
    else if (key === 'active_status') this.filterActiveStatus = null;
    else if (key === 'created_by_me') this.filterCreatedByMe = false;
    else if (key === 'public_access') this.filterPublicAccess = false;

    if (this.appliedFilterChips.length) {
      this.fetchCategories();
    } else {
      this.hasAppliedFilters = false;
      this.categories = [];
      this.dataSource.data = [];
      if (this.paginator) this.paginator.length = 0;
    }
  }

  clearAppliedFilters() {
    this.onReset();
  }

  private getScopedInstituteId(): string | null {
    if (this.selectedInstitutes && this.selectedInstitutes.length) {
      return this.selectedInstitutes.join(',');
    }
    if (this.isSuperAdmin) return this.selectedInstitute ? String(this.selectedInstitute) : null;
    return this.loginInstituteId || this.selectedInstitute || null;
  }

  private getCategoryInstituteId(item: any): string {
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

  private isAllowedCategoryForInstitute(item: any, scopedInstitute: string | null): boolean {
    if (this.isSuperAdmin || !scopedInstitute) return true;
    const itemInstituteId = this.getCategoryInstituteId(item);
    if (scopedInstitute.includes(',')) {
      const allowedIds = scopedInstitute.split(',').map((s) => s.trim());
      return allowedIds.includes(String(itemInstituteId));
    }
    return itemInstituteId === String(scopedInstitute);
  }

  private getInstituteLabel(id: any): string {
    if (!id) return '';
    const pool: any[] =
      this.allInstitutes && this.allInstitutes.length ? this.allInstitutes : this.institutes;
    const found = (pool || []).find((i: any) => String(i.institute_id || i.id || i._id) === String(id));
    return found?.institute_name || found?.short_name || found?.name || (pool && pool.length ? String(id) : '');
  }

  private getSelectedName(list: Array<{ id: string; name: string }>, selectedId: string): string {
    if (!selectedId || !list || !list.length) return '';
    const found = (list || []).find((item: any) => String(item?.id || item?.dept_id || item?.team_id || item?.deptId || item?.teamId) === String(selectedId));
    return found ? (found.name || (found as any).dept_name || (found as any).team_name || String(selectedId)) : '';
  }

  private formatFilterDate(value: Date): string {
    try {
      return value.toISOString().slice(0, 10);
    } catch (e) {
      return String(value || '');
    }
  }
  deleteCategory(c: any) {
    const id = c.category_id || c.id;
    if (!id) return;
    this.confirmService
      .confirm({
        title: 'Delete Question Bank',
        message: `Delete question bank ${c.name}? This action cannot be undone.`,
        confirmText: 'Delete',
        cancelText: 'Cancel',
      })
      .subscribe((ok) => {
        if (!ok) return;
        // optimistic remove
        const prev = [...this.categories];
        this.categories = this.categories.filter((x) => x.id !== c.id);
        this.dataSource.data = this.categories;
        const current_user = sessionStorage.getItem('user_id');
        const url = `${API_BASE}/delete/category/${encodeURIComponent(String(id))}?current_user=${encodeURIComponent(String(current_user))}`;
        // call backend generic manage route (category/delete)
        this.http.delete<any>(url, {}).subscribe({
          next: (res) => {
            try {
              notify('Question Bank deleted', 'success');
            } catch (e) { }
          },
          error: (err) => {
            console.error('Failed deleting question bank', err);
            try {
              notify('Failed to delete question bank', 'error');
            } catch (e) { }
            this.categories = prev;
            this.dataSource.data = this.categories;
          },
        });
      });
  }

  setName(v: string) {
    this.name = v || '';
  }
  setDescription(v: string) {
    this.description = v || '';
  }

  // load initial lists for institute/department/team filters (best-effort endpoints)
  loadFilterLists() {
    // Load institutes first, then load department/team lists according to the allowed institute scope.
    this.loadInstituteOptions(() => {
      if (this.selectedInstitute) {
        this.onInstituteChange(this.selectedInstitute);
      } else if (this.isSuperAdmin) {
        this.loadGlobalDepartmentTeamLists();
      }
    });
  }

  // load the unscoped institute list (get-institute-list); used at init and whenever
  // Country/City/Industry/Sector filters are cleared back to "Any".
  private loadInstituteOptions(onLoaded?: () => void) {
    this.http.get<any>(`${API_BASE}/get-institute-list`).subscribe({
      next: (res) => {
        const data = Array.isArray(res) ? res : res?.data || [];
        // Prefer the full institute name while retaining the abbreviation as a fallback.
        this.allInstitutes = (data || [])
          .map((i: any) => ({
            institute_id: i.institute_id || i.id || i.instituteId || null,
            institute_name: i.institute_name || i.name || i.short_name || '',
            short_name: i.short_name || i.institute_name || i.name || '',
          }))
          .filter((i: any) => !!i.institute_id);
        this.institutes = [...this.allInstitutes];
        this.syncInstituteSearch();
        if (onLoaded) onLoaded();
      },
      error: () => { },
    });
  }

  // ---- Country / City / Industry / Sector cascade (mirrors view-institutes.component.ts) ----

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
  }

  // --- Sector Multi-Select & Sorting Logic ---
  private get scopedSectorsList(): string[] {
    if (!this.selectedIndustries || this.selectedIndustries.length === 0) {
      return [];
    }
    const sectorsSet = new Set<string>();
    for (const ind of this.selectedIndustries) {
      const list = this.sectorMap[ind] || [];
      list.forEach((s) => sectorsSet.add(s));
    }
    return Array.from(sectorsSet);
  }

  // Sectors scoped to the selected industry; empty until an industry is selected.
  private get scopedSectors(): string[] {
    if (!this.filterIndustry) return [];
    return this.sectorMap[this.filterIndustry] || [];
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
  }

  // --- Question Bank Name Multi-Select & Sorting Logic ---
  get filteredCategoryOptions(): Array<{ id: string; name: string }> {
    const term = (this.categorySearch || '').trim().toLowerCase();
    let list = this.categoryOptions || [];
    if (term) {
      list = list.filter(
        (c) =>
          (c.name || '').toLowerCase().includes(term) ||
          (this.selectedCategoryNames || []).includes(c.name)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedCategoryNames || []).includes(a.name);
      const bSel = (this.selectedCategoryNames || []).includes(b.name);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllCategoriesSelected(): boolean {
    const items = this.filteredCategoryOptions || [];
    return (
      items.length > 0 && items.every((c) => (this.selectedCategoryNames || []).includes(c.name))
    );
  }

  toggleSelectAllCategories(): void {
    const items = this.filteredCategoryOptions || [];
    if (this.isAllCategoriesSelected()) {
      this.selectedCategoryNames = [];
    } else {
      this.selectedCategoryNames = items.map((c) => c.name);
    }
  }

  // --- City Multi-Select & Sorting Logic ---
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

  onFilterSelectOpened(opened: boolean, field: 'country' | 'city' | 'industry' | 'sector' | 'questionBank') {
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
                  .replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
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

  onIndustryFilterChange() {
    this.filterSector = '';
    this.selectedSectors = [];
    this.refreshInstituteScope();
  }

  onSectorFilterChange() {
    this.refreshInstituteScope();
  }

  // Keep the full Institute list visible in the autocomplete like the Users module.
  // Scope the institute dropdown the same way the Users module does:
  // ask the backend for institutes matching the current Country / City / Industry / Sector filters.
  private refreshInstituteScope() {
    if (!this.isSuperAdmin && this.loginInstituteId) return;

    const params: any = { _ts: Date.now() };
    if (this.selectedCountries && this.selectedCountries.length)
      params.country = this.selectedCountries.join(',');
    else if (this.filterCountry) params.country = this.filterCountry;

    if (this.selectedCities && this.selectedCities.length) {
      const cityCodes = this.selectedCities
        .map((name) => this.resolveCityId(name) || name)
        .filter(Boolean);
      if (cityCodes.length) params.city = cityCodes.join(',');
    } else {
      const cityCode = this.resolveCityId(this.filterCity);
      if (cityCode) params.city = cityCode;
    }

    if (this.selectedIndustries && this.selectedIndustries.length)
      params.industry = this.selectedIndustries.join(',');
    else if (this.filterIndustry) params.industry = this.filterIndustry;

    if (this.selectedSectors && this.selectedSectors.length)
      params.sector = this.selectedSectors.join(',');
    else if (this.filterSector) params.sector = this.filterSector;

    const hasScope = !!(params.country || params.city || params.industry || params.sector);
    if (!hasScope) {
      this.institutes = [...this.allInstitutes];
      this.syncInstituteSearch();
      return;
    }

    this.http.get<any>(`${API_BASE}/get-institutes`, { params }).subscribe({
      next: (res) => {
        try {
          const data = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
          this.institutes = data
            .map((r: any) => ({
              institute_id: r.institute_id || r.id || r._id || '',
              institute_name: r.institute_name || r.name || r.short_name || '',
              short_name: r.short_name || r.institute_name || r.name || '',
            }))
            .filter((i: any) => !!i.institute_id);
        } catch (e) {
          this.institutes = [];
        }

        if (this.selectedInstitutes && this.selectedInstitutes.length) {
          this.selectedInstitutes = this.selectedInstitutes.filter((id) =>
            this.institutes.some((i) => String(i.institute_id) === String(id))
          );
          this.selectedInstitute = this.selectedInstitutes[0] || null;
        }

        if (
          this.selectedInstitute &&
          !this.institutes.some((i) => String(i.institute_id) === String(this.selectedInstitute))
        ) {
          this.onInstituteAutocompleteSelected(null);
        } else {
          this.syncInstituteSearch();
        }
      },
      error: () => {
        this.institutes = [];
      },
    });
  }

  private loadGlobalDepartmentTeamLists() {
    if (!this.isSuperAdmin) return;
    this.http.get<any>(`${API_BASE}/get-department-list`).subscribe({
      next: (res) => {
        const data = Array.isArray(res) ? res : res?.data || [];
        this.departments = (data || []).map((d: any) => ({
          id: d.department_id || d.dept_id || d.id || d.deptId,
          name: d.department_name || d.dept_name || d.name,
        }));
      },
      error: () => {
        this.departments = [];
      },
    });
    this.http.get<any>(`${API_BASE}/get-teams-list`).subscribe({
      next: (res) => {
        const data = Array.isArray(res) ? res : res?.data || [];
        this.teams = (data || []).map((t: any) => ({
          id: t.team_id || t.id || t.teamId,
          name: t.team_name || t.name,
        }));
      },
      error: () => {
        this.teams = [];
      },
    });
  }
  loadCategoryOptions() {
    const scopedInstitute = this.getScopedInstituteId();
    // Do NOT fetch options when no institute is selected
    if (!scopedInstitute) {
      this.categoryOptions = [];
      return;
    }

    let params = new HttpParams();
    params = params.set('institute_id', scopedInstitute);

    if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
      params = params.set('type', this.selectedQuestionTypes.join(','));
    }

    if (this.selectedDepartments && this.selectedDepartments.length) {
      params = params.set('departments', this.selectedDepartments.join(','));
    }

    if (this.selectedTeams && this.selectedTeams.length) {
      params = params.set('teams', this.selectedTeams.join(','));
    }

    if (this.filterCreationDateAfter) {
      params = params.set(
        'created_after',
        this.filterCreationDateAfter.toISOString().slice(0, 10)
      );
    }

    if (this.filterCreationDate) {
      params = params.set('created_before', this.filterCreationDate.toISOString().slice(0, 10));
    }

    this.http.get<any>(`${API_BASE}/category-details`, { params }).subscribe({
      next: (res) => {
        const items = Array.isArray(res) ? res : res?.data || [];
        this.categoryOptions = (items || [])
          .filter((it: any) => {
            if (!this.isAllowedCategoryForInstitute(it, scopedInstitute)) return false;
            if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
              const catType = (it.type || '').toLowerCase();
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
            return true;
          })
          .map((it: any, idx: number) => ({
            id: it.category_id || it.id || it._id || String(idx),
            name: it.name || it.category_name || '',
          }))
          .filter((c: any) => !!c.name);
      },
      error: () => {
        this.categoryOptions = [];
      },
    });
  }

  displayInstitute = (value: string | null): string => {
    if (!value) return '';
    const found = this.institutes.find((i) => String(i.institute_id) === String(value));
    return found ? found.institute_name : String(value);
  };

  filteredInstitutes() {
    const q = (this.instituteSearchTerm || '').trim().toLowerCase();
    if (!q) return this.institutes;
    return this.institutes.filter((i: any) =>
      (i.institute_name || i.short_name || '').toLowerCase().includes(q)
    );
  }

  onInstituteAutocompleteSelected(id: string | null) {
    if (!this.isSuperAdmin && this.loginInstituteId) {
      id = this.loginInstituteId;
    }
    this.selectedInstitute = id;
    this.syncInstituteSearch();
    this.instituteSearchTerm = '';
    this.onInstituteChange(id);
  }

  private syncInstituteSearch() {
    const found = this.institutes.find(
      (i) => String(i.institute_id) === String(this.selectedInstitute || '')
    );
    this.instituteSearch = found ? found.institute_name : '';
  }

  onInstituteSearchInput(value: string) {
    this.instituteSearch = value || '';
    this.instituteSearchTerm = value || '';
  }

  onInstituteChange(iid: any) {
    if (!this.isSuperAdmin && this.loginInstituteId) {
      iid = this.loginInstituteId;
      this.selectedInstitute = this.loginInstituteId;
    }
    if (iid && typeof iid === 'string' && !iid.includes(',') && (!this.selectedInstitutes || !this.selectedInstitutes.length)) {
      this.selectedInstitutes = [iid];
    }
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.filterName = '';
    this.categoryOptions = [];
    // Replace lines 880-887 with:
    if (!iid) {
      this.departments = [];
      this.teams = [];
      this.selectedCategoryNames = [];
      this.categoryOptions = []; // Clear question bank options when no institute selected
      if (this.isSuperAdmin) {
        this.loadGlobalDepartmentTeamLists();
      }
      return;
    }

    this.loadCategoryOptions();
    // departments
    this.http
      .get<any>(`${API_BASE}/get-department-list`, { params: { institute_id: iid } })
      .subscribe({
        next: (res) => {
          const data = Array.isArray(res) ? res : res?.data || [];
          this.departments = (data || []).map((d: any) => ({
            id: d.department_id || d.dept_id || d.id || d.deptId,
            name: d.department_name || d.dept_name || d.name,
          }));
        },
        error: () => {
          this.departments = [];
        },
      });
    // teams
    this.http.get<any>(`${API_BASE}/get-teams-list`, { params: { institute_id: iid } }).subscribe({
      next: (res) => {
        const data = Array.isArray(res) ? res : res?.data || [];
        this.teams = (data || []).map((t: any) => ({
          id: t.team_id || t.id || t.teamId,
          name: t.team_name || t.name,
        }));
      },
      error: () => {
        this.teams = [];
      },
    });
  }

  // fetch categories, optionally with current filter values
  fetchCategories() {
    this.loader.show();
    let params = new HttpParams();
    const scopedInstitute = this.getScopedInstituteId();
    if (this.selectedInstitutes && this.selectedInstitutes.length)
      params = params.set('institute_id', this.selectedInstitutes.join(','));
    else if (scopedInstitute) params = params.set('institute_id', scopedInstitute);

    if (this.selectedCountries && this.selectedCountries.length)
      params = params.set('country', this.selectedCountries.join(','));
    else if (this.filterCountry) params = params.set('country', this.filterCountry);

    if (this.selectedIndustries && this.selectedIndustries.length)
      params = params.set('industry', this.selectedIndustries.join(','));
    else if (this.filterIndustry) params = params.set('industry', this.filterIndustry);

    if (this.selectedSectors && this.selectedSectors.length)
      params = params.set('sector', this.selectedSectors.join(','));
    else if (this.filterSector) params = params.set('sector', this.filterSector);

    if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
      params = params.set('type', this.selectedQuestionTypes.join(','));
    }

    if (this.selectedCategoryNames && this.selectedCategoryNames.length)
      params = params.set('name', this.selectedCategoryNames.join(','));
    else if (this.filterName) params = params.set('name', this.filterName);

    if (this.selectedDepartments && this.selectedDepartments.length)
      params = params.set('departments', this.selectedDepartments.join(','));
    if (this.selectedTeams && this.selectedTeams.length)
      params = params.set('teams', this.selectedTeams.join(','));
    // optional date filters
    if (this.filterCreationDateAfter) {
      try {
        params = params.set(
          'created_after',
          (this.filterCreationDateAfter as Date).toISOString().slice(0, 10)
        );
      } catch (e) { }
    }
    if (this.filterCreationDate) {
      try {
        params = params.set(
          'created_before',
          (this.filterCreationDate as Date).toISOString().slice(0, 10)
        );
      } catch (e) { }
    }
    if (this.filterActiveStatus !== null && typeof this.filterActiveStatus !== 'undefined') {
      params = params.set('active_status', String(this.filterActiveStatus));
    }
    // created-by-me filter (boolean flag)
    if (this.filterCreatedByMe) {
      // Assign current login user's user_id for created_by filter
      try {
        const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
        if (raw) {
          const obj = JSON.parse(raw);
          const userId = obj?.user_id || obj?.id || obj?._id;
          if (userId) {
            params = params.set('created_by', String(userId));
          }
        }
      } catch (e) { }
    }
    // public access checkbox — only add param when checked (true)
    if (this.filterPublicAccess) {
      params = params.set('public_access', 'true');
    }

    this.http.get<any>(`${API_BASE}/category-details`, { params }).subscribe({
      next: (res) => {
        // response may be array or {data: array}
        const items = Array.isArray(res) ? res : res?.data || [];
        const scopedInstitute = this.getScopedInstituteId();
        // normalize items
        this.categories = items
          .filter((it: any) => this.isAllowedCategoryForInstitute(it, scopedInstitute))
          .map((it: any, idx: number) => ({
            category_id: it.category_id || it.id || it._id || String(idx),
            id: it.category_id || it.id || it._id || String(idx),
            name: it.name || it.category_name || '',
            description: it.description || '',
            answer_by: it.answer_by || '',
            type: it.type || '',
            evaluation: it.evaluation || '',
            mark_each_question:
              typeof it.mark_each_question !== 'undefined'
                ? it.mark_each_question
                : (it.mark_for_each_question ?? null),
            active_status:
              typeof it.active_status !== 'undefined' ? it.active_status : (it.active ?? false),
            active:
              typeof it.active_status !== 'undefined' ? it.active_status : (it.active ?? false),
            public_access:
              typeof it.public_access !== 'undefined' ? it.public_access : (it.public ?? false),
            institute:
              it.institute && typeof it.institute === 'object'
                ? {
                  institute_id: it.institute.institute_id || it.institute.id || null,
                  institute_name: it.institute.institute_name || it.institute.name || null,
                }
                : typeof it.institute === 'string'
                  ? { institute_id: null, institute_name: it.institute }
                  : it.institute || null,
            // normalize departments/teams to arrays (handles {} or arrays)
            departments: this.iterableList(it.departments || it.department_ids),
            teams: this.iterableList(it.teams || it.team_ids),
            created_by: it.created_by,
            updated_by: it.updated_by,
            created_date: it.created_date,
            updated_date: it.updated_date,
            // keep full raw item for reference if needed
            raw: it,
          }));
        this.loader.hide();
        this.dataSource.data = this.categories;
      },
      error: (err) => {
        console.error('Failed to load categories', err);
        this.categories = [];
        this.dataSource.data = this.categories;
      },
      complete: () => {
        this.loader.hide();
      },
    });
  }
  private hasFilterValues(): boolean {
    return !!(
      (this.selectedInstitutes && this.selectedInstitutes.length) ||
      (this.selectedCountries && this.selectedCountries.length) ||
      (this.selectedIndustries && this.selectedIndustries.length) ||
      (this.selectedSectors && this.selectedSectors.length) ||
      (this.selectedQuestionTypes && this.selectedQuestionTypes.length) ||
      (this.selectedCategoryNames && this.selectedCategoryNames.length) ||
      this.filterCountry ||
      this.filterCity ||
      this.filterIndustry ||
      this.filterSector ||
      this.filterName ||
      this.selectedInstitute ||
      this.selectedDepartments.length ||
      this.selectedTeams.length ||
      this.filterCreationDateAfter ||
      this.filterCreationDate ||
      this.filterActiveStatus !== null ||
      this.filterCreatedByMe ||
      this.filterPublicAccess !== null
    );
  }

  onApply() {
    if (this.isSuperAdmin && !this.isGlobalInstituteActive && (!this.selectedInstitutes || !this.selectedInstitutes.length) && !this.selectedInstitute) {
      try {
        notify('Please select an institute', 'info');
      } catch (e) { }
      return;
    }
    if (!this.hasFilterValues()) {
      try {
        notify('Please add filters in the filter form.', 'info');
      } catch (e) { }
      return;
    }
    this.hasAppliedFilters = true;
    this.fetchCategories();
    this.closeFiltersOverlay();
  }

  onReset() {
    this.selectedCountries = [];
    this.selectedIndustries = [];
    this.selectedSectors = [];
    this.selectedQuestionTypes = [];
    this.selectedCategoryNames = [];
    this.selectedInstitutes = [];
    this.filterName = '';
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.filterActiveStatus = null;
    this.filterCreatedByMe = false;
    this.filterPublicAccess = null;
    this.filterCountry = '';
    this.filterCity = '';
    this.filterIndustry = '';
    this.filterSector = '';
    this.filterCityOptions = [];
    this.countrySearch = '';
    this.industrySearch = '';
    this.sectorSearch = '';
    this.categorySearch = '';
    if (this.isSuperAdmin) {
      // Institute is the top of the Institute -> Question Bank -> Department/Team chain;
      // it must be cleared here so those dependents reload unscoped instead of staying
      // pinned to whatever institute was previously selected.
      this.selectedInstitute = null;
      this.instituteSearch = '';
      this.departments = [];
      this.teams = [];
      this.loadGlobalDepartmentTeamLists();
      this.loadInstituteOptions();
    }
    this.loadCategoryOptions();
    this.filter = '';
    this.dataSource.filter = '';
    this.categories = [];
    this.dataSource.data = [];
    this.hasAppliedFilters = false;

    // --- Close filter overlay modal ---
    this.closeFiltersOverlay();
  }

  // toggle active state locally and try to persist to server (best-effort)
  toggleActive(element: any) {
    const newState = !element.active;
    const action = newState ? 'activate' : 'deactivate';
    this.confirmService
      .confirm({
        title: `${action[0].toUpperCase() + action.slice(1)} Question Bank`,
        message: `${action[0].toUpperCase() + action.slice(1)} question bank ${element.name}?`,
        confirmText: action[0].toUpperCase() + action.slice(1),
        cancelText: 'Cancel',
      })
      .subscribe((ok) => {
        if (!ok) return;
        const prev = element.active;
        element.active = newState;
        element.active_status = newState;
        const id = element.category_id || element.id;
        if (!id) {
          element.active = prev;
          return;
        }
        const url = `${API_BASE}/category/${action}/${encodeURIComponent(String(id))}`;
        this.http
          .put<any>(url, {
            current_user: sessionStorage.getItem('user_id') || sessionStorage.getItem('user') || '',
          })
          .subscribe({
            next: () => {
              try {
                notify(`Question Bank ${action}d`, 'success');
              } catch (e) { }
            },
            error: (err) => {
              console.error('Failed updating category state', err);
              try {
                notify('Failed to update question bank status', 'error');
              } catch (e) { }
              element.active = prev;
              element.active_status = prev;
            },
          });
      });
  }

  viewDetails(element: any) {
    const id = element.category_id || element.id;
    if (!id) return;
    this.selectedCategory = element;
    // The list can be restored from session storage after returning from the edit
    // page. Read the current record before displaying its details so recently
    // updated fields (notably the question-bank type) cannot remain stale.
    this.http
      .get<any>(`${API_BASE}/category-details`, { params: { category_id: String(id) } })
      .subscribe({
        next: (res) => {
          const items = Array.isArray(res) ? res : res?.data || [];
          const selectedId = this.selectedCategory?.category_id || this.selectedCategory?.id;
          if (!items.length || String(selectedId || '') !== String(id)) return;
          const current = items[0];
          this.selectedCategory = {
            ...element,
            ...current,
            category_id: current.category_id || current.id || id,
            id: current.category_id || current.id || id,
            departments: this.iterableList(current.departments || current.department_ids),
            teams: this.iterableList(current.teams || current.team_ids),
            active:
              typeof current.active_status !== 'undefined' ? current.active_status : element.active,
          };
        },
        error: (err) => console.warn('Failed to refresh question bank details', err),
      });
  }

  EditCategory(element: any) {
    const id = element?.category_id || element?.id;
    if (!id) return;
    this.loader.show();
    this.http
      .get<any>(`${API_BASE}/category-details`, { params: { category_id: String(id) } })
      .subscribe({
        next: (res) => {
          const items = Array.isArray(res) ? res : res?.data || [];
          const category = items && items.length ? items[0] : element;
          this.saveCategoryReturnState();
          try {
            sessionStorage.setItem('edit_category', JSON.stringify(category));
          } catch (e) { }
          this.router.navigate(['/category/create']);
        },
        error: () => {
          this.saveCategoryReturnState();
          try {
            sessionStorage.setItem('edit_category', JSON.stringify(element));
          } catch (e) { }
          this.router.navigate(['/category/create']);
        },
        complete: () => {
          this.loader.hide();
        },
      });
  }

  closeModal() {
    this.selectedCategory = null;
    this.editing = false;
  }

  // utility used by template: return numeric length for arrays or object keys
  keysLength(v: any): number {
    if (!v) return 0;
    if (Array.isArray(v)) return v.length;
    if (typeof v === 'object') return Object.keys(v).length;
    return 0;
  }

  // helper to normalize iterable departments/teams for *ngFor if backend sometimes returns an object
  iterableList(v: any): any[] {
    if (!v) return [];
    if (Array.isArray(v)) return v;
    if (typeof v === 'object') return Object.keys(v).map((k) => v[k]);
    return [];
  }
  openCreateCategory(): void {
    this.saveCategoryReturnState();
    this.router.navigate(['/category/create']);
  }

  saveCategoryReturnState(): void {
    try {
      sessionStorage.setItem(
        'category_return_state',
        JSON.stringify({
          instituteId:
            this.globalInstituteContext.activeInstituteId || this.selectedInstitute || '',
          globalInstituteActive: this.globalInstituteContext.isGlobalFilterActive(),
          filter: this.filter,
          filterCountry: this.filterCountry,
          filterCity: this.filterCity,
          filterIndustry: this.filterIndustry,
          filterSector: this.filterSector,
          filterName: this.filterName,
          selectedInstitute: this.selectedInstitute,
          selectedInstitutes: this.selectedInstitutes,
          selectedCountries: this.selectedCountries,
          selectedCities: this.selectedCities,
          selectedIndustries: this.selectedIndustries,
          selectedSectors: this.selectedSectors,
          selectedQuestionTypes: this.selectedQuestionTypes,
          selectedCategoryNames: this.selectedCategoryNames,
          instituteSearch: this.instituteSearch,
          selectedDepartments: this.selectedDepartments,
          selectedTeams: this.selectedTeams,
          filterCreationDateAfter: this.filterCreationDateAfter
            ? this.filterCreationDateAfter.toISOString()
            : null,
          filterCreationDate: this.filterCreationDate
            ? this.filterCreationDate.toISOString()
            : null,
          filterActiveStatus: this.filterActiveStatus,
          filterCreatedByMe: this.filterCreatedByMe,
          filterPublicAccess: this.filterPublicAccess,
          hasAppliedFilters: this.hasAppliedFilters,
          categories: this.categories,
        })
      );
    } catch (e) { }
  }

  private restoreCategoryReturnState(): void {
    try {
      const raw = sessionStorage.getItem('category_return_state');
      if (!raw) return;
      sessionStorage.removeItem('category_return_state');
      const state = JSON.parse(raw);
      const activeInstituteId = this.globalInstituteContext.activeInstituteId;
      if (activeInstituteId && String(state?.instituteId || '') !== String(activeInstituteId))
        return;
      if (activeInstituteId && state?.globalInstituteActive !== true) return;
      if (!activeInstituteId && state?.globalInstituteActive === true) return;
      if (
        !activeInstituteId &&
        typeof state?.globalInstituteActive === 'undefined' &&
        state?.instituteId
      )
        return;
      this.filter = state?.filter || '';
      this.filterCountry = state?.filterCountry || '';
      this.filterCity = state?.filterCity || '';
      this.filterIndustry = state?.filterIndustry || '';
      this.filterSector = state?.filterSector || '';
      this.filterName = state?.filterName || '';
      this.selectedInstitute = state?.selectedInstitute || this.selectedInstitute;
      this.selectedInstitutes = Array.isArray(state?.selectedInstitutes) && state.selectedInstitutes.length
        ? state.selectedInstitutes
        : (this.selectedInstitute ? [this.selectedInstitute] : []);
      this.selectedCountries = Array.isArray(state?.selectedCountries) ? state.selectedCountries : [];
      this.selectedCities = Array.isArray(state?.selectedCities) ? state.selectedCities : [];
      this.selectedIndustries = Array.isArray(state?.selectedIndustries) ? state.selectedIndustries : [];
      this.selectedSectors = Array.isArray(state?.selectedSectors) ? state.selectedSectors : [];
      this.selectedQuestionTypes = Array.isArray(state?.selectedQuestionTypes) ? state.selectedQuestionTypes : [];
      this.selectedCategoryNames = Array.isArray(state?.selectedCategoryNames) ? state.selectedCategoryNames : [];
      this.instituteSearch = state?.instituteSearch || '';
      this.instituteSearchTerm = state?.instituteSearchTerm || '';
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
      this.categories = Array.isArray(state?.categories) ? state.categories : [];
      this.dataSource.data = this.categories;
      if (this.filterCountry) this.loadCitiesForCountry(this.filterCountry);
      if (this.filterCountry || this.filterCity || this.filterIndustry || this.filterSector)
        this.refreshInstituteScope();
      this.applyFilter(this.filter || '');
      // The saved rows predate any changes made on the edit page. Refresh them so
      // the details modal and status toggle reflect the values persisted by the API.
      if (this.hasAppliedFilters) this.fetchCategories();
    } catch (e) {
      try {
        sessionStorage.removeItem('category_return_state');
      } catch (_) { }
    }
  }

  private resetForInstituteChange(instituteId: string): void {
    this.activeInstituteId = instituteId;
    this.selectedInstitute = instituteId;
    // Clear institute-specific state immediately to prevent cross-institute data leakage.
    this.categories = [];
    this.dataSource.data = [];
    this.departments = [];
    this.teams = [];
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.filter = '';
    this.filterName = '';
    this.hasAppliedFilters = false;
    try {
      sessionStorage.removeItem('category_return_state');
    } catch (e) { }
    // Reload filter options only; records remain empty until the user applies filters.
    this.onInstituteChange(instituteId);
  }

  private resetAfterGlobalInstituteClear(): void {
    this.activeInstituteId = '';
    this.selectedInstitute = null;
    this.instituteSearch = '';
    // Clear every institute-derived UI value so no global-scope data remains visible.
    this.categories = [];
    this.dataSource.data = [];
    this.categoryOptions = [];
    this.departments = [];
    this.teams = [];
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.filter = '';
    this.filterName = '';
    this.dataSource.filter = '';
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
    this.selectedCategory = null;
    this.editing = false;
    if (this.paginator) {
      this.paginator.firstPage();
      this.paginator.length = 0;
    }
    this.closeFiltersOverlay();
    try {
      sessionStorage.removeItem('category_return_state');
    } catch (e) { }
    this.loadFilterLists();
    this.loadCategoryOptions();
  }
}
