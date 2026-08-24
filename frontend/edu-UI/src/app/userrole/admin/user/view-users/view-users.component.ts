import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { API_BASE } from 'src/app/shared/api.config';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { notify } from 'src/app/shared/global-notify';
import { AuthService } from 'src/app/home/service/auth.service';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';
import { Subscription, forkJoin, of } from 'rxjs';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { TemplatePortal } from '@angular/cdk/portal';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface UserRow {
  id: string;
  name: string;
  email: string;
  institute?: string;
  active: boolean;
  phone?: string;
  role?: string;
  raw?: any;
  department?: string;
  team?: string;
  privileges?: any[];
  user_privileges?: any[];
}

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    OverlayModule,
    PortalModule,
    SharedModule,
    MatCheckboxModule,
  ],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss'],
})
export class ViewUsersComponent implements OnDestroy, OnInit {
  // loading = false;
  // show full name, institute, role, department, team, active
  columns = ['sno', 'name', 'institute', 'role', 'department', 'team', 'active', 'actions'];
  filter = '';
  selectedInstitute = '';
  instituteSearch = '';
  instituteSearchTerm: string = '';
  users: UserRow[] = [];
  dataSource = new MatTableDataSource<UserRow>([]);
  hasAppliedFilters = false;
  rawRecords: any[] = [];

  // pagination
  pageSize = 25;
  pageIndex = 0; // zero-based index for MatPaginator
  totalCount = 0; // total records from API

  // filter model and lists (match fields in the filters panel)
  filters: any = {
    institute: '',
    name: '',
    department: [],
    team: [],
    joining_from: '',
    joining_to: '',
    active_status: '',
    country: '',
    state: '',
    city: '',
    industry: '',
    sector: '',
  };
  // institutes: Array<{ id: string; name: string }> = [];
  institutes: Array<{ institute_name: string; short_name: string; institute_id?: string }> = [];
  // `code` is the Country table primary key used by /get-users. `countryCode`
  // keeps the ISO/code value only for matching location/institute responses.
  countries: Array<{ code: string; name: string; countryCode?: string }> = [];
  allUserCities: Array<{ code: string; name: string; countryCode: string }> = [];
  states: Array<{ code: string; name: string }> = [];
  cities: Array<{ code: string; name: string }> = [];
  departments: Array<{ id: string; name: string }> = [];
  teams: Array<{
    id: string;
    name: string;
    department_id?: string | null;
    department_name?: string | null;
  }> = [];
  departmentSearch = '';
  teamSearch = '';

  campuses: Array<{ id: string; name: string }> = [];
  selectedCampuses: string[] = [];
  campusFilterSearch = '';
  campusSearch = '';

  selectedInstitutes: string[] = [];
  instituteFilterSearch = '';
  departmentFilterSearch = '';
  teamFilterSearch = '';

  // Industry -> Sector dependency (mirrors view-institutes.component.ts)
  industryTypes = ['School', 'College', 'BPO', 'Bank', 'IT'];
  industrySectors = ['School', 'Engineering', 'Arts', 'Healthcare', 'Finance', 'Banking', 'IT'];
  private sectorMap: Record<string, string[]> = {
    School: ['School'],
    College: ['Engineering', 'Arts'],
    BPO: ['Healthcare', 'Finance'],
    Bank: ['Bank'],
    IT: ['IT'],
  };
  isActive: boolean = true;

  selectedCountries: string[] = [];
  selectedCities: string[] = [];
  selectedIndustries: string[] = [];
  selectedSectors: string[] = [];
  selectedActiveStatuses: boolean[] = [];

  // Filter search terms
  countryFilterSearch = '';
  cityFilterSearch = '';
  industryFilterSearch = '';
  sectorFilterSearch = '';
  activeStatusOptions = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;
  selectedUser: any = null;
  editing = false;
  editableUser: any = null;

  isSuperAdmin = false;
  isGlobalInstituteActive = false;
  // Country/City/Industry/Sector are Super Admin-only, and are further hidden while the
  // Super Admin has a Global Filter institute active (that institute already scopes the page).
  private instituteRequestId = 0;

  get showLocationAndIndustryFilters(): boolean {
    return this.isSuperAdmin && !this.isGlobalInstituteActive;
  }

  get showCountryCityFilters(): boolean {
    return !this.isGlobalInstituteActive;
  }

  private _subs: Subscription | null = null;
  private _globalInstituteSub: Subscription | null = null;
  private activeInstituteId = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private loading: LoaderService,
    private auth: AuthService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private pageMeta: PageMetaService,
    private confirmService: ConfirmService,
    public globalInstituteContext: GlobalInstituteContextService,
    private cd: ChangeDetectorRef
  ) {
    // initialize isSuperAdmin from AuthService (synchronous helper)
    try {
      this.isSuperAdmin = this.checkSuperAdmin(this.auth.currentUserValue);
    } catch (e) {
      this.isSuperAdmin = false;
    }
    try {
      this._subs = this.auth.user$.subscribe((user: any) => {
        this.isSuperAdmin = this.checkSuperAdmin(user);
      });
    } catch (e) {
      /* ignore in tests */
    }
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

  private checkSuperAdmin(user: any): boolean {
    try {
      let rawUser = user || this.auth.currentUserValue;
      if (!rawUser) {
        try {
          const profileRaw =
            sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
          if (profileRaw) rawUser = JSON.parse(profileRaw);
        } catch (e) {}
      }
      if (rawUser?.is_super_admin === true || !!rawUser?.isSuperAdmin) return true;
      const role = (
        rawUser?.role ||
        rawUser?.user_role ||
        sessionStorage.getItem('userRole') ||
        sessionStorage.getItem('role') ||
        ''
      )
        .toString()
        .toLowerCase();
      return ['super_admin', 'superadmin', 'super-admin'].includes(role);
    } catch (e) {
      return false;
    }
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
    this.saveUsersReturnState();
  }
  private filtersOverlayRef: OverlayRef | null = null;
  ngOnInit(): void {
    this.isSuperAdmin = this.checkSuperAdmin(this.auth.currentUserValue);
    this.pageMeta.setMeta('Users', 'Manage platform users');
    this.loadInstitutes();
    this.loadCountries();
    this.restoreUsersReturnState();

    if (!this.isSuperAdmin) {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      if (raw) {
        try {
          const u = JSON.parse(raw);
          const instId = u?.institute_id || u?.instituteId || u?.institute || '';
          if (instId) {
            this.selectedInstitute = instId;
            this.filters.institute = instId;
            this.loadCampuses(instId);
            this.loadDepartments(instId);
            this.loadTeams(instId);
          }
        } catch (e) {}
      }
    }
  }

  onInstituteChange(iid: string) {
    try {
      this.selectedInstitute = iid || '';
      this.filters.institute = iid || '';
      this.syncInstituteSearch();
      this.pageIndex = 0;
      // Department depends on Institute, Team depends on Department - clear both downstream.
      this.filters.department = [];
      this.filters.team = [];
      this.departmentSearch = '';
      this.teamSearch = '';

      if (iid) {
        this.loadDepartments(iid);
        this.loadTeams(iid);
        this.loadCampuses(iid);
        this.loadCountries(iid);
      } else {
        // Clear institute filter and reload all users
        this.departments = [];
        this.teams = [];
        this.campuses = [];
        this.loadCountries();
      }
    } catch (e) {}
  }

  onDepartmentFilterChange() {
    if (
      !this.filters.department ||
      (Array.isArray(this.filters.department) && !this.filters.department.length)
    ) {
      this.filters.team = [];
    } else {
      const validTeamIds = (this.filteredTeamsForFilter || []).map((t: any) => t.id);
      if (Array.isArray(this.filters.team)) {
        this.filters.team = this.filters.team.filter((id: string) => validTeamIds.includes(id));
      }
    }
  }

  // --- Memoization cache to prevent change-detection loops ---
  private _memoCache: Record<string, { key: string; result: any }> = {};

  private _memoize<T>(cacheKey: string, depKey: string, computeFn: () => T): T {
    const cached = this._memoCache[cacheKey];
    if (cached && cached.key === depKey) {
      return cached.result;
    }
    const result = computeFn();
    this._memoCache[cacheKey] = { key: depKey, result };
    return result;
  }

  // --- TrackBy Helper Methods ---
  trackByCode(index: number, item: any): string {
    return item?.code || item?.id || item?.name || index;
  }
  trackById(index: number, item: any): string {
    return item?.id || item?.institute_id || item?.dept_id || item?.team_id || item?.name || index;
  }
  trackByValue(index: number, item: any): string {
    return item?.value ?? item ?? index;
  }
  trackByKey(index: number, item: any): string {
    return item?.key || index;
  }
  trackBySno(index: number, item: any): any {
    return item?.id || index;
  }

  // --- Country Logic ---
  get filteredCountriesForFilter() {
    const depKey = `${this.countryFilterSearch}|${this.isSuperAdmin}|${(this.selectedCountries || []).join(',')}|${(this.countries || []).length}|${(this.campuses || []).length}`;
    return this._memoize('filteredCountries', depKey, () => {
      const term = (this.countryFilterSearch || '').trim().toLowerCase();
      let list = this.countries || [];

      if (!this.isSuperAdmin && this.campuses && this.campuses.length > 0) {
        const campusCountryNames = new Set(
          this.campuses.map((c: any) => (c.country_name || c.country_id || '').trim().toLowerCase()).filter(Boolean)
        );
        if (campusCountryNames.size > 0) {
          const filtered = list.filter((c) =>
            campusCountryNames.has(String(c.name || c.code || '').trim().toLowerCase())
          );
          if (filtered.length > 0) {
            list = filtered;
          } else {
            const campusCountriesMap = new Map<string, { code: string; name: string }>();
            this.campuses.forEach((c: any) => {
              if (c.country_name || c.country_id) {
                const name = String(c.country_name || c.country_id).trim();
                const code = String(c.country_id || c.country_name).trim();
                const key = name.toLowerCase();
                if (name && !campusCountriesMap.has(key)) {
                  campusCountriesMap.set(key, { code, name });
                }
              }
            });
            list = Array.from(campusCountriesMap.values());
          }
        }
      }

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
    });
  }

  isAllCountriesSelected(): boolean {
    const items = this.filteredCountriesForFilter || [];
    return items.length > 0 && items.every((c) => (this.selectedCountries || []).includes(c.code));
  }

  toggleSelectAllCountries(): void {
    const items = this.filteredCountriesForFilter || [];
    if (this.isAllCountriesSelected()) {
      this.selectedCountries = [];
    } else {
      this.selectedCountries = items.map((c) => c.code);
    }
    this.onCountryChange();
  }

  get filteredCitiesForFilter(): Array<{ code: string; name: string }> {
    const depKey = `${this.cityFilterSearch}|${this.isSuperAdmin}|${(this.selectedCountries || []).join(',')}|${(this.selectedCities || []).join(',')}|${(this.cities || []).length}|${(this.campuses || []).length}`;
    return this._memoize('filteredCities', depKey, () => {
      const term = (this.cityFilterSearch || '').trim().toLowerCase();
      let list = this.cities || [];

      if (!this.isSuperAdmin && this.campuses && this.campuses.length > 0) {
        const campusCitiesMap = new Map<string, { code: string; name: string }>();
        const selectedCountryCodes = (this.selectedCountries || []).map((c) => String(c).toLowerCase());
        this.campuses.forEach((c: any) => {
          if (selectedCountryCodes.length > 0) {
            const countryId = String(c.country_id || '').toLowerCase();
            const countryName = String(c.country_name || '').toLowerCase();
            const matches = selectedCountryCodes.some((sc) => sc === countryId || sc === countryName);
            if (!matches) return;
          }
          if (c.city_name) {
            const rawName = String(c.city_name).trim();
            if (rawName) {
              const formattedName = rawName.replace(
                /\w\S*/g,
                (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
              );
              const key = formattedName.toLowerCase();
              if (!campusCitiesMap.has(key)) {
                campusCitiesMap.set(key, {
                  code: String(c.city_id || formattedName),
                  name: formattedName,
                });
              }
            }
          }
        });
        const validCampusCities = Array.from(campusCitiesMap.values());
        if (validCampusCities.length > 0 || selectedCountryCodes.length > 0) {
          list = validCampusCities;
        }
      }

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
    });
  }

  isAllCitiesSelected(): boolean {
    const items = this.filteredCitiesForFilter || [];
    return items.length > 0 && items.every((c) => (this.selectedCities || []).includes(c.name));
  }

  toggleSelectAllCities(): void {
    const items = this.filteredCitiesForFilter || [];
    if (this.isAllCitiesSelected()) {
      this.selectedCities = [];
    } else {
      this.selectedCities = items.map((c) => c.name);
    }
    this.onCityFilterChange();
  }

  // --- Industry Logic ---
  get filteredIndustryTypesForFilter(): string[] {
    const depKey = `${this.industryFilterSearch}|${(this.selectedIndustries || []).join(',')}|${(this.industryTypes || []).length}`;
    return this._memoize('filteredIndustryTypes', depKey, () => {
      const term = (this.industryFilterSearch || '').trim().toLowerCase();
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
    });
  }

  isAllIndustriesSelected(): boolean {
    const items = this.filteredIndustryTypesForFilter || [];
    return items.length > 0 && items.every((t) => (this.selectedIndustries || []).includes(t));
  }

  toggleSelectAllIndustries(): void {
    const items = this.filteredIndustryTypesForFilter || [];
    if (this.isAllIndustriesSelected()) {
      this.selectedIndustries = [];
    } else {
      this.selectedIndustries = [...items];
    }
  }

  // --- Sector Logic ---
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

  get filteredSectorsForFilter(): string[] {
    const depKey = `${this.sectorFilterSearch}|${(this.selectedIndustries || []).join(',')}|${(this.selectedSectors || []).join(',')}`;
    return this._memoize('filteredSectors', depKey, () => {
      const scoped = this.scopedSectorsList || [];
      const term = (this.sectorFilterSearch || '').trim().toLowerCase();
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
    });
  }

  isAllSectorsSelected(): boolean {
    const items = this.filteredSectorsForFilter || [];
    return items.length > 0 && items.every((s) => (this.selectedSectors || []).includes(s));
  }

  toggleSelectAllSectors(): void {
    const items = this.filteredSectorsForFilter || [];
    if (this.isAllSectorsSelected()) {
      this.selectedSectors = [];
    } else {
      this.selectedSectors = [...items];
    }
  }

  // --- Active Status Logic ---
  isAllActiveStatusesSelected(): boolean {
    return (
      this.activeStatusOptions.length > 0 &&
      this.activeStatusOptions.every((o) => (this.selectedActiveStatuses || []).includes(o.value))
    );
  }

  toggleSelectAllActiveStatuses(): void {
    if (this.isAllActiveStatusesSelected()) {
      this.selectedActiveStatuses = [];
    } else {
      this.selectedActiveStatuses = this.activeStatusOptions.map((o) => o.value);
    }
  }

  get filteredInstitutesForFilter() {
    const depKey = `${this.instituteFilterSearch}|${(this.selectedInstitutes || []).join(',')}|${(this.institutes || []).length}`;
    return this._memoize('filteredInstitutes', depKey, () => {
      const term = (this.instituteFilterSearch || '').trim().toLowerCase();
      let list = this.institutes || [];
      if (term) {
        list = list.filter((i) =>
          (i.institute_name || (i as any).name || '').toLowerCase().includes(term)
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
    });
  }

  get filteredDepartmentsForFilter() {
    const selectedDepts = Array.isArray(this.filters.department)
      ? this.filters.department.join(',')
      : this.filters.department || '';
    const depKey = `${this.departmentFilterSearch}|${selectedDepts}|${(this.departments || []).length}`;
    return this._memoize('filteredDepartments', depKey, () => {
      const term = (this.departmentFilterSearch || '').trim().toLowerCase();
      let list = this.departments || [];
      if (term) {
        list = list.filter(
          (d) =>
            (d.name || '').toLowerCase().includes(term) ||
            (Array.isArray(this.filters.department) && this.filters.department.includes(d.id))
        );
      }
      return [...list].sort((a, b) => {
        const aSel =
          Array.isArray(this.filters.department) && this.filters.department.includes(a.id);
        const bSel =
          Array.isArray(this.filters.department) && this.filters.department.includes(b.id);
        if (aSel && !bSel) return -1;
        if (!aSel && bSel) return 1;
        return (a.name || '').localeCompare(b.name || '');
      });
    });
  }

  get hasSelectedDepartment(): boolean {
    if (!this.filters.department) return false;
    if (Array.isArray(this.filters.department)) return this.filters.department.length > 0;
    return true;
  }

  get filteredTeamsForFilter() {
    const selectedTeams = Array.isArray(this.filters.team)
      ? this.filters.team.join(',')
      : this.filters.team || '';
    const selectedDepts = Array.isArray(this.filters.department)
      ? this.filters.department.join(',')
      : this.filters.department || '';
    const depKey = `${this.teamFilterSearch}|${selectedTeams}|${selectedDepts}|${(this.teams || []).length}`;
    return this._memoize('filteredTeams', depKey, () => {
      const term = (this.teamFilterSearch || '').trim().toLowerCase();
      let list = this.teams || [];

      // Filter by selected departments if any are selected in filter
      const deptsArr: string[] = (Array.isArray(this.filters.department)
        ? this.filters.department
        : [this.filters.department]
      ).filter(Boolean);

      if (deptsArr.length > 0) {
        const selectedDeptObjs = (this.departments || []).filter(
          (d) => deptsArr.includes(String(d.id)) || deptsArr.includes(d.name)
        );
        const deptNames = selectedDeptObjs.map((d) => (d.name || '').toLowerCase().trim());
        deptsArr.forEach((val) => {
          if (typeof val === 'string' && val.trim()) deptNames.push(val.toLowerCase().trim());
        });

        list = list.filter((t: any) => {
          if (Array.isArray(this.filters.team) && this.filters.team.includes(t.id)) return true;

          const teamDeptId = t.department_id ? String(t.department_id) : '';
          const teamDeptName = t.department_name ? (t.department_name || '').toLowerCase().trim() : '';

          if (teamDeptId && deptsArr.includes(teamDeptId)) return true;
          if (teamDeptName && deptNames.includes(teamDeptName)) return true;

          return false;
        });
      } else {
        list = [];
      }

      if (term) {
        list = list.filter(
          (t) =>
            (t.name || '').toLowerCase().includes(term) ||
            (Array.isArray(this.filters.team) && this.filters.team.includes(t.id))
        );
      }
      return [...list].sort((a, b) => {
        const aSel = Array.isArray(this.filters.team) && this.filters.team.includes(a.id);
        const bSel = Array.isArray(this.filters.team) && this.filters.team.includes(b.id);
        if (aSel && !bSel) return -1;
        if (!aSel && bSel) return 1;
        return (a.name || '').localeCompare(b.name || '');
      });
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

  isAllDepartmentsSelected(): boolean {
    const ids = (this.filteredDepartmentsForFilter || []).map((d) => d.id).filter(Boolean);
    const selected = Array.isArray(this.filters.department) ? this.filters.department : [];
    return ids.length > 0 && ids.every((id) => selected.includes(id));
  }

  toggleSelectAllDepartments() {
    const ids = (this.filteredDepartmentsForFilter || []).map((d) => d.id).filter(Boolean);
    if (this.isAllDepartmentsSelected()) {
      this.filters.department = [];
    } else {
      this.filters.department = [...ids];
    }
  }

  isAllTeamsSelected(): boolean {
    const ids = (this.filteredTeamsForFilter || []).map((t) => t.id).filter(Boolean);
    const selected = Array.isArray(this.filters.team) ? this.filters.team : [];
    return ids.length > 0 && ids.every((id) => selected.includes(id));
  }

  toggleSelectAllTeams() {
    const ids = (this.filteredTeamsForFilter || []).map((t) => t.id).filter(Boolean);
    if (this.isAllTeamsSelected()) {
      this.filters.team = [];
    } else {
      this.filters.team = [...ids];
    }
  }

  get filteredCampusesForFilter() {
    const depKey = `${this.campusFilterSearch}|${this.isSuperAdmin}|${(this.selectedCountries || []).join(',')}|${(this.selectedCities || []).join(',')}|${(this.campuses || []).length}`;
    return this._memoize('filteredCampuses', depKey, () => {
      let result = this.campuses || [];

      if (!this.isSuperAdmin) {
        if (this.selectedCountries && this.selectedCountries.length) {
          const selectedCodes = this.selectedCountries.map((c) => c.toLowerCase());
          result = result.filter((c: any) =>
            selectedCodes.some(
              (sc) =>
                sc === String(c.country_id || '').toLowerCase() ||
                sc === String(c.country_name || '').toLowerCase()
            )
          );
        }
        if (this.selectedCities && this.selectedCities.length) {
          const selectedCityNames = this.selectedCities.map((ct) => ct.toLowerCase());
          result = result.filter((c: any) =>
            selectedCityNames.some(
              (sc) =>
                sc === String(c.city_id || '').toLowerCase() ||
                sc === String(c.city_name || '').toLowerCase()
            )
          );
        }
      }

      const query = (this.campusFilterSearch || '').trim().toLowerCase();
      return query ? result.filter((c) => c.name.toLowerCase().includes(query)) : result;
    });
  }

  isAllCampusesSelected(): boolean {
    const items = this.filteredCampusesForFilter || [];
    return items.length > 0 && items.every((c) => (this.selectedCampuses || []).includes(c.id));
  }

  toggleSelectAllCampuses(): void {
    const items = this.filteredCampusesForFilter || [];
    if (this.isAllCampusesSelected()) {
      this.selectedCampuses = [];
    } else {
      this.selectedCampuses = items.map((c) => c.id);
    }
  }

  onCampusFilterChange() {
    this.pageIndex = 0;
  }

  onInstituteSelectionChange() {
    const iids = (this.selectedInstitutes || []).join(',');
    this.selectedInstitute = this.selectedInstitutes[0] || '';
    this.filters.institute = this.selectedInstitute;
    this.syncInstituteSearch();
    this.pageIndex = 0;
    if (iids) {
      this.loadDepartments(iids);
      this.loadTeams(iids);
      this.loadCampuses(iids);
    } else {
      this.departments = [];
      this.teams = [];
      this.campuses = [];
      this.filters.department = [];
      this.filters.team = [];
      this.selectedCampuses = [];
    }
  }

  filteredDepartments() {
    const query = (this.departmentSearch || '').trim().toLowerCase();
    return query
      ? this.departments.filter((d) => d.name.toLowerCase().includes(query))
      : this.departments;
  }

  filteredTeams() {
    const query = (this.teamSearch || '').trim().toLowerCase();
    return query ? this.teams.filter((t) => t.name.toLowerCase().includes(query)) : this.teams;
  }

  onDepartmentSearchChange() {
    const selected = this.departments.find((d) => String(d.id) === String(this.filters.department));
    if (selected?.name !== this.departmentSearch) {
      this.filters.department = '';
      this.filters.team = '';
      this.teamSearch = '';
    }
  }

  onTeamSearchChange() {
    const selected = this.teams.find((t) => String(t.id) === String(this.filters.team));
    if (selected?.name !== this.teamSearch) this.filters.team = '';
  }

  onDepartmentSelected(departmentName: string | null) {
    if (!departmentName) {
      this.filters.department = '';
      this.departmentSearch = 'Any';
      this.onDepartmentFilterChange();
      return;
    }
    const department = this.departments.find((d) => d.name === departmentName);
    if (!department) return;
    this.filters.department = department.id;
    this.departmentSearch = department.name;
    this.onDepartmentFilterChange();
  }

  onTeamSelected(teamName: string | null) {
    if (!teamName) {
      this.filters.team = '';
      this.teamSearch = 'Any';
      return;
    }
    const team = this.teams.find((t) => t.name === teamName);
    if (!team) return;
    this.filters.team = team.id;
    this.teamSearch = team.name;
  }

  // load departments for the selected institute(s)
  loadDepartments(instituteIdsStr: string) {
    const ids = (instituteIdsStr || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    if (!ids.length) {
      this.departments = [];
      return;
    }
    const requests = ids.map((id) =>
      this.http.get<any>(`${API_BASE}/get-department-list`, { params: { institute_id: id } })
    );
    forkJoin(requests).subscribe({
      next: (responses) => {
        const allDepts: any[] = [];
        responses.forEach((res) => {
          const data = res?.data || [];
          allDepts.push(
            ...data.map((d: any) => ({ id: d.dept_id || d.id || d.deptId, name: d.name }))
          );
        });
        // Deduplicate by department ID
        const unique = new Map<string, any>();
        allDepts.forEach((d) => {
          if (d.id && !unique.has(d.id)) unique.set(d.id, d);
        });
        this.departments = Array.from(unique.values());
      },
      error: () => {
        this.departments = [];
      },
    });
  }

  // load teams for the selected institute(s)
  loadTeams(instituteId: string) {
    const url = `${API_BASE}/get-teams-list`;
    this.http.get<any>(url, { params: { institute_id: instituteId } }).subscribe({
      next: (res) => {
        try {
          const data = res?.data || [];
          this.teams = data.map((t: any) => ({
            id: t.team_id || t.id || t.teamId,
            name: t.name,
            department_id: t.department_id || t.departmentId || t.dept_id || null,
            department_name: t.department_name || t.department || null,
          }));
        } catch (e) {
          this.teams = [];
          this.teamSearch = '';
        }
      },
      error: () => {
        this.teams = [];
      },
    });
  }

  // load campuses for the selected institute(s)
  loadCampuses(instituteIdsStr: string) {
    const ids = (instituteIdsStr || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    if (!ids.length) {
      this.campuses = [];
      return;
    }
    const requests = ids.map((id) =>
      this.http.get<any>(`${API_BASE}/get-campus-list`, { params: { institute_id: id } })
    );
    forkJoin(requests).subscribe({
      next: (responses) => {
        const allCampuses: any[] = [];
        responses.forEach((res) => {
          const data = res?.data || res?.campuses || [];
          allCampuses.push(
            ...data.map((c: any) => ({
              id: String(c.campus_id || c.id),
              name: c.campus_name || c.name,
              country_id: String(c.country?.country_id || c.country_id || ''),
              country_name: String(c.country?.country_name || c.country_name || ''),
              city_id: String(c.city?.city_id || c.city_id || ''),
              city_name: String(c.city?.city_name || c.city_name || ''),
            }))
          );
        });
        const unique = new Map<string, any>();
        allCampuses.forEach((c) => {
          if (c.id && !unique.has(c.id)) unique.set(c.id, c);
        });
        this.campuses = Array.from(unique.values());
      },
      error: () => {
        this.campuses = [];
      },
    });
  }

  ngAfterViewInit(): void {
    try {
      this.dataSource.sort = this.sort;
    } catch (e) {}
  }

  applyFilter(value: string) {
    const q = (value || '').trim().toLowerCase();
    this.dataSource.filter = q;
    this.pageIndex = 0;
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  get filtered() {
    const q = (this.filter || '').toLowerCase();
    if (!q) return this.users;
    return this.users.filter(
      (u) =>
        (u.name || '').toLowerCase().includes(q) ||
        (u.email || '').toLowerCase().includes(q) ||
        (u.institute || '').toLowerCase().includes(q) ||
        (u.phone || '').toLowerCase().includes(q) ||
        (u.role || '').toLowerCase().includes(q)
    );
  }

  get appliedFilterChips(): Array<{
    key: string;
    label: string;
    removable: boolean;
    tooltip?: string;
  }> {
    const deptStr = Array.isArray(this.filters.department)
      ? this.filters.department.join(',')
      : this.filters.department || '';
    const teamStr = Array.isArray(this.filters.team)
      ? this.filters.team.join(',')
      : this.filters.team || '';
    const depKey = `${this.hasAppliedFilters}|${(this.selectedInstitutes || []).join(',')}|${this.filters.institute}|${this.selectedInstitute}|${(this.selectedCountries || []).join(',')}|${this.filters.country}|${(this.selectedIndustries || []).join(',')}|${this.filters.industry}|${(this.selectedSectors || []).join(',')}|${this.filters.sector}|${this.isActive}|${this.filters.name}|${(this.selectedCities || []).join(',')}|${this.filters.city}|${deptStr}|${teamStr}|${(this.selectedCampuses || []).join(',')}|${this.isSuperAdmin}|${(this.institutes || []).length}`;

    return this._memoize('appliedFilterChips', depKey, () => {
      if (!this.hasAppliedFilters) return [];
      const chips: Array<{ key: string; label: string; removable: boolean; tooltip?: string }> = [];

      // Institute Chip
      if (this.selectedInstitutes && this.selectedInstitutes.length) {
        if (this.selectedInstitutes.length === 1) {
          const name = this.getInstituteLabel(this.selectedInstitutes[0]);
          chips.push({
            key: 'institute',
            label: `Institute: ${name}`,
            removable: this.isSuperAdmin,
            tooltip: name,
          });
        } else {
          const labels = this.selectedInstitutes
            .map((id) => this.getInstituteLabel(id))
            .filter(Boolean);
          chips.push({
            key: 'institute',
            label: `Institutes: ${this.selectedInstitutes.length} selected`,
            removable: this.isSuperAdmin,
            tooltip: labels.join(', '),
          });
        }
      } else if (this.filters.institute || this.selectedInstitute) {
        const instId = this.filters.institute || this.selectedInstitute;
        const name = this.getInstituteLabel(instId);
        chips.push({
          key: 'institute',
          label: `Institute: ${name}`,
          removable: this.isSuperAdmin,
          tooltip: name,
        });
      }

      // Country Chip
      if (this.selectedCountries && this.selectedCountries.length) {
        const countryNames = this.selectedCountries.map((code) =>
          this.getSelectedName(this.countries, code, 'code')
        );
        chips.push({
          key: 'country',
          label: `Country: ${countryNames.join(', ')}`,
          removable: true,
        });
      } else if (this.filters.country) {
        chips.push({
          key: 'country',
          label: `Country: ${this.getSelectedName(this.countries, this.filters.country, 'code')}`,
          removable: true,
        });
      }

      // Industry Chip
      if (this.selectedIndustries && this.selectedIndustries.length) {
        chips.push({
          key: 'industry',
          label: `Industry: ${this.selectedIndustries.join(', ')}`,
          removable: true,
        });
      } else if (this.filters.industry) {
        chips.push({
          key: 'industry',
          label: `Industry: ${this.filters.industry}`,
          removable: true,
        });
      }

      // Sector Chip
      if (this.selectedSectors && this.selectedSectors.length) {
        chips.push({
          key: 'sector',
          label: `Sector: ${this.selectedSectors.join(', ')}`,
          removable: true,
        });
      } else if (this.filters.sector) {
        chips.push({ key: 'sector', label: `Sector: ${this.filters.sector}`, removable: true });
      }

      // Active Status Chip
      if (this.isActive) {
        chips.push({
          key: 'active_status',
          label: `Status: Active`,
          removable: true,
        });
      }

      // Name Chip
      if (this.filters.name)
        chips.push({ key: 'name', label: `Name: ${this.filters.name}`, removable: true });

      // City Chip
      if (this.selectedCities && this.selectedCities.length) {
        chips.push({
          key: 'city',
          label: `City: ${this.selectedCities.join(', ')}`,
          removable: true,
        });
      } else if (this.filters.city) {
        chips.push({ key: 'city', label: `City: ${this.filters.city}`, removable: true });
      }

      // Department Chip
      if (Array.isArray(this.filters.department) && this.filters.department.length) {
        const labels = this.filters.department
          .map((id: any) => this.getSelectedName(this.departments, id))
          .filter(Boolean);
        chips.push({
          key: 'department',
          label: `Departments: ${labels.join(', ')}`,
          removable: true,
        });
      }

      // Team Chip
      if (Array.isArray(this.filters.team) && this.filters.team.length) {
        const labels = this.filters.team
          .map((id: any) => this.getSelectedName(this.teams, id))
          .filter(Boolean);
        chips.push({ key: 'team', label: `Teams: ${labels.join(', ')}`, removable: true });
      }

      // Campus Chip
      if (this.selectedCampuses && this.selectedCampuses.length) {
        const labels = this.selectedCampuses
          .map((id: any) => this.getSelectedName(this.campuses, id))
          .filter(Boolean);
        chips.push({ key: 'campus', label: `Campus: ${labels.join(', ')}`, removable: true });
      }

      return chips;
    });
  }

  removeAppliedFilter(key: string) {
    if (!key) return;
    if (key === 'institute' && this.isSuperAdmin) {
      this.selectedInstitutes = [];
      this.selectedInstitute = '';
      this.filters.institute = '';
      this.filters.department = [];
      this.filters.team = [];
      this.instituteSearch = '';
      this.departments = [];
      this.teams = [];
      this.countries = [];
      this.cities = [];
    } else if (key === 'country') {
      this.selectedCountries = [];
      this.selectedCities = [];
      this.filters.country = '';
      this.filters.state = '';
      this.filters.city = '';
      this.states = [];
      this.cities = [];
    } else if (key === 'city') {
      this.selectedCities = [];
      this.filters.city = '';
    } else if (key === 'industry') {
      this.selectedIndustries = [];
      this.selectedSectors = [];
      this.filters.industry = '';
      this.filters.sector = '';
    } else if (key === 'sector') {
      this.selectedSectors = [];
      this.filters.sector = '';
    } else if (key === 'active_status') {
      this.isActive = false;
      this.filters.active_status = '';
    } else if (key === 'name') {
      this.filters.name = '';
    } else if (key === 'department') {
      this.filters.department = [];
      this.filters.team = [];
    } else if (key === 'team') {
      this.filters.team = [];
    } else if (key === 'campus') {
      this.selectedCampuses = [];
      this.filters.campus = '';
    }
    this.pageIndex = 0;
    this.refreshInstituteScope();
    this.refreshAfterFilterChipChange();
  }

  clearAppliedFilters() {
    this.resetFilters();
  }

  private refreshAfterFilterChipChange() {
    if (this.appliedFilterChips.length) this.loadUsers();
    else {
      this.hasAppliedFilters = false;
      this.users = [];
      this.rawRecords = [];
      this.dataSource.data = [];
      this.totalCount = 0;
    }
  }

  private getInstituteLabel(id: any): string {
    if (!id) return '';
    const found = (this.institutes || []).find((i) => String(i.institute_id) === String(id));
    if (found?.institute_name || found?.short_name) {
      return found.institute_name || found.short_name;
    }
    const globalContext = this.globalInstituteContext?.activeContext;
    if (globalContext && String(globalContext.institute_id) === String(id) && globalContext.institute_name) {
      return globalContext.institute_name;
    }
    return String(id || '');
  }

  private getSelectedName(list: any[], selectedId: any, idKey: string = 'id'): string {
    const found = (list || []).find((item) => String(item?.[idKey]) === String(selectedId));
    return found?.name || String(selectedId || '');
  }

  toggleActive(u: UserRow) {
    const newState = !u.active;
    const action = newState ? 'Activate' : 'Deactivate';
    this.confirmService
      .confirm({
        title: `${action} User`,
        message: `${action} user ${u.name}?`,
        confirmText: action,
        cancelText: 'Cancel',
      })
      .subscribe((ok) => {
        if (!ok) return;
        const prev = u.active;
        u.active = newState;
        this.loading.show();
        const id = u.id || (u.raw && (u.raw.user_id || u.raw.id));
        if (!id) {
          try {
            notify('User id missing', 'error');
          } catch (e) {}
          u.active = prev;
          return;
        }
        const url = `${API_BASE}/user/${newState ? 'activate' : 'deactivate'}/${encodeURIComponent(String(id))}`;
        const currentUserRaw =
          sessionStorage.getItem('user') || sessionStorage.getItem('user_profile');
        let current_user: any = null;
        try {
          current_user = currentUserRaw ? JSON.parse(currentUserRaw) : null;
        } catch (e) {
          current_user = currentUserRaw || null;
        }
        this.http.put<any>(url, { current_user: current_user.user_id || '' }).subscribe({
          next: (res) => {
            try {
              notify(`User ${newState ? 'activated' : 'deactivated'}`, 'success');
            } catch (e) {}
          },
          error: (err) => {
            console.error('Failed toggling user active', err);
            try {
              notify('Failed to update user status', 'error');
            } catch (e) {}
            u.active = prev;
          },
          complete: () => this.loading.hide(),
        });
      });
  }

  loadUsers(instituteId?: string) {
    if (typeof instituteId !== 'undefined' && instituteId !== null) {
      try {
        this.selectedInstitute = instituteId as any;
      } catch (e) {}
      try {
        this.filters.institute = String(instituteId);
      } catch (e) {}
    }

    this.loading.show();
    const url = `${API_BASE}/get-users`;
    const params: any = { _ts: Date.now() };
    const instituteParam =
      typeof instituteId !== 'undefined' && instituteId !== null
        ? instituteId
        : this.selectedInstitutes?.length
          ? this.selectedInstitutes.join(',')
          : this.filters.institute ||
            this.selectedInstitute ||
            (this.isGlobalInstituteActive ? this.globalInstituteContext.activeInstituteId : '');
    if (instituteParam) params.institute_id = instituteParam;

    if (this.filters.name) params.name = this.filters.name;
    if (Array.isArray(this.filters.department)) {
      if (this.filters.department.length > 0) params.department = this.filters.department.join(',');
    } else if (this.filters.department) {
      params.department = this.filters.department;
    }
    if (Array.isArray(this.filters.team)) {
      if (this.filters.team.length > 0) params.team = this.filters.team.join(',');
    } else if (this.filters.team) {
      params.team = this.filters.team;
    }
    if (this.selectedCountries && this.selectedCountries.length) {
      params.country = this.selectedCountries.join(',');
    } else if (this.filters.country) {
      params.country = this.filters.country;
    }
    if (this.filters.state) params.state = this.filters.state;
    if (this.selectedCities && this.selectedCities.length)
      params.city = this.selectedCities.join(',');
    else {
      const cityName = String(this.filters.city || '').trim();
      if (cityName) params.city = cityName;
    }
    if (this.selectedCampuses && this.selectedCampuses.length) {
      params.campus = this.selectedCampuses.join(',');
    } else if (this.filters.campus) {
      params.campus = this.filters.campus;
    }
    if (this.filters.joining_from) params.joining_from = this.filters.joining_from;
    if (this.filters.joining_to) params.joining_to = this.filters.joining_to;
    if (this.isActive !== undefined) params.active_status = this.isActive;
    try {
      params.pageNumber = (this.pageIndex || 0) + 1;
      params.pageSize = this.pageSize || 25;
    } catch (e) {}

    this.http.get<any>(url, { params }).subscribe({
      next: (res) => {
        try {
          const dataCandidate = res?.data?.users ?? res?.users ?? res?.data ?? res;
          const data = Array.isArray(dataCandidate) ? dataCandidate : [];
          this.totalCount =
            Number(
              res?.totalCount ??
                res?.total_count ??
                res?.data?.totalCount ??
                res?.data?.total_count ??
                res?.total ??
                data.length
            ) || 0;
          this.rawRecords = data;
          this.users = data.map((u: any) => ({
            id: u.user_id || u.id,
            name:
              u.full_name ||
              u.name ||
              `${u.first_name || ''} ${u.last_name || ''}`.trim() ||
              u.email,
            user_name: u.user_name,
            email: u.email,
            institute:
              (u.institute && (u.institute.institute_name || u.institute.short_name)) ||
              u.institute_name ||
              '',
            active:
              typeof u.active_status === 'boolean'
                ? u.active_status
                : u.active_status === 1 || u.active_status === '1',
            phone: u.contact_no || u.phone || '',
            role: u.user_role || u.role || '',
            joining_date: u.joining_date || u.joining || '',
            department:
              (u.department && (u.department.department_name || u.department.name)) ||
              u.department_name ||
              '',
            team: (u.team && (u.team.team_name || u.team.name)) || u.team_name || '',
            campus: (u.campus && (u.campus.campus_name || u.campus.name)) || u.campus_name || '',
            country:
              (u.country && (u.country.country_name || u.country.name)) || u.country_name || '',
            state: (u.state && (u.state.state_name || u.state.name)) || u.state_name || '',
            city: (u.city && (u.city.city_name || u.city.name)) || u.city_name || '',
            created_by: u.created_by || '',
            created_date: u.created_date || u.created_at || '',
            updated_by: u.updated_by || '',
            updated_date: u.updated_date || u.updated_at || '',
            privileges: (u.user_privileges || u.privileges || []).map((p: any) => ({
              page_id: p.page_id || p.pageId || p.id,
              page_name: p.page_name || p.pageName || p.page || p.name,
              can_add: !!p.can_add,
              can_delete: !!p.can_delete,
              can_edit: !!p.can_edit,
              can_view: !!p.can_view,
              raw: p,
            })),
            user_privileges: u.user_privileges || u.privileges || [],
            raw: u,
          }));
          this.dataSource.data = this.users;
          this.dataSource.filterPredicate = (d: UserRow, filter: string) => {
            const q = (filter || '').toLowerCase();
            return (
              (d.name || '').toLowerCase().includes(q) ||
              (d.email || '').toLowerCase().includes(q) ||
              (d.institute || '').toLowerCase().includes(q) ||
              (d.department || '').toLowerCase().includes(q) ||
              (d.team || '').toLowerCase().includes(q)
            );
          };
        } catch (e) {
          console.error('Error mapping users', e);
          this.users = [];
        }
        this.loading.hide();
      },
      error: (err) => {
        console.error('Failed loading users', err);
        this.loading.hide();
        this.users = [];
        this.rawRecords = [];
        this.dataSource.data = [];
        this.totalCount = 0;
        try {
          notify(err?.error?.statusMessage || 'Failed to load users. Please try again.', 'error');
        } catch (e) {}
      },
    });
  }

  private hasFilterValues(): boolean {
    const hasDept = Array.isArray(this.filters.department)
      ? this.filters.department.length > 0
      : !!this.filters.department;
    const hasTeam = Array.isArray(this.filters.team)
      ? this.filters.team.length > 0
      : !!this.filters.team;
    return !!(
      (this.selectedInstitutes && this.selectedInstitutes.length) ||
      (this.selectedCountries && this.selectedCountries.length) ||
      (this.selectedIndustries && this.selectedIndustries.length) ||
      (this.selectedSectors && this.selectedSectors.length) ||
      (this.selectedActiveStatuses && this.selectedActiveStatuses.length) ||
      (this.selectedCampuses && this.selectedCampuses.length) ||
      this.isActive ||
      this.filters.institute ||
      this.filters.name ||
      hasDept ||
      hasTeam ||
      this.filters.joining_from ||
      this.filters.joining_to ||
      this.filters.active_status !== '' ||
      this.filters.country ||
      this.filters.state ||
      this.filters.city
    );
  }

  applyFilters() {
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
    if (!this.hasFilterValues()) {
      try {
        notify('Please add filters in the filter form.', 'info');
      } catch (e) {}
      return;
    }
    this.pageIndex = 0;
    this.hasAppliedFilters = true;
    this.loadUsers();
    this.closeFiltersOverlay();
  }

  resetFilters() {
    this.pageIndex = 0;
    this.filters = {
      institute: '',
      name: '',
      department: [],
      team: [],
      joining_from: '',
      joining_to: '',
      active_status: '',
      country: '',
      state: '',
      city: '',
      industry: '',
      sector: '',
    };

    this.selectedCountries = [];
    this.selectedIndustries = [];
    this.selectedSectors = [];
    this.selectedInstitutes = [];
    this.selectedActiveStatuses = [];
    this.selectedCampuses = [];
    this.selectedInstitute = '';
    this.isActive = true;

    this.countryFilterSearch = '';
    this.industryFilterSearch = '';
    this.sectorFilterSearch = '';
    this.instituteFilterSearch = '';
    this.departmentFilterSearch = '';
    this.teamFilterSearch = '';
    this.campusFilterSearch = '';
    this.instituteSearch = '';
    this.departmentSearch = '';
    this.teamSearch = '';
    this.campusSearch = '';

    this.filter = '';
    this.dataSource.filter = '';
    this.states = [];
    this.cities = [];
    this.departments = [];
    this.teams = [];
    this.loadInstitutes();
    if (!this.isSuperAdmin) {
      try {
        const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
        const user = raw ? JSON.parse(raw) : null;
        const instId = user?.institute_id || user?.instituteId || user?.institute || '';
        if (instId) {
          this.selectedInstitute = instId;
          this.filters.institute = String(instId);
          this.syncInstituteSearch();
          this.loadDepartments(instId);
          this.loadTeams(instId);
          this.loadCampuses(instId);
          this.loadCountries(instId);
        }
      } catch (e) {
        /* ignore malformed session data */
      }
    }
    this.users = [];
    this.rawRecords = [];
    this.dataSource.data = [];
    this.totalCount = 0;
    this.hasAppliedFilters = false;

    this.closeFiltersOverlay();
  }

  onPageEvent(ev: PageEvent) {
    try {
      this.pageIndex = ev.pageIndex || 0;
      this.pageSize = ev.pageSize || this.pageSize;
      if (!this.hasAppliedFilters) return;
      this.loadUsers();
    } catch (e) {}
  }

  loadCities() {
    this.loading.show();
    this.cities = [];
    const url = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        try {
          let citiesRaw = res?.data?.cities || res?.cities || [];
          if ((!citiesRaw || citiesRaw.length === 0) && (res?.data?.countries || res?.countries)) {
            const countries = res?.data?.countries || res?.countries || [];
            let agg: any[] = [];
            if (Array.isArray(countries)) {
              countries.forEach((c: any) => {
                if (Array.isArray(c.cities)) agg = agg.concat(c.cities);
                if (Array.isArray(c.states))
                  c.states.forEach((s: any) => {
                    if (Array.isArray(s.cities)) agg = agg.concat(s.cities);
                  });
              });
            }
            citiesRaw = agg;
          }
          this.cities = (citiesRaw || []).map((c: any) => ({
            code: c.city_code || c.code || c.id,
            name: c.city_name || c.name || c.city,
          }));
        } catch (e) {
          this.cities = [];
        }
        this.loading.hide();
      },
      error: () => {
        this.cities = [];
        this.loading.hide();
      },
    });
  }

  loadInstitutes() {
    const requestId = ++this.instituteRequestId;
    this.loading.show();
    const url = `${API_BASE}/get-institute-list`;
    const params: any = {};

    if (this.selectedCountries && this.selectedCountries.length) {
      params.country = this.selectedCountries.join(',');
    } else if (this.filters.country) {
      params.country = this.filters.country;
    }

    if (this.selectedCities && this.selectedCities.length) {
      params.city = this.selectedCities.join(',');
    } else if (this.filters.city) {
      params.city = this.filters.city;
    }

    this.http.get<any>(url, { params }).subscribe({
      next: (res) => {
        if (requestId !== this.instituteRequestId) {
          return;
        }

        const data = res?.data || [];
        this.institutes = data.map((i: any) => ({
          institute_id: i.institute_id || i.id || i._id || '',
          institute_name: i.institute_name || i.name || i.short_name || '',
          short_name: i.short_name || i.institute_name || i.name || '',
        }));
        try {
          if (this.selectedInstitute) {
            const found = this.institutes.find(
              (i) => String(i.institute_id) === String(this.selectedInstitute)
            );
            if (found) {
              this.selectedInstitute = found.institute_id as any;
              try {
                this.filters.institute = String(this.selectedInstitute);
              } catch (e) {
                /* ignore */
              }
              this.syncInstituteSearch();
              this.loadDepartments(this.selectedInstitute);
              this.loadTeams(this.selectedInstitute);
              this.loadCampuses(this.selectedInstitute);
              this.loadCountries(this.selectedInstitute);
              this.loading.hide();
              return;
            }
          }
        } catch (e) {
          /* ignore */
        }

        try {
          const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
          if (!this.isSuperAdmin && raw) {
            const u = JSON.parse(raw);
            const instId = u?.institute_id || u?.instituteId || u?.institute || '';
            if (instId) {
              const found = this.institutes.find((i) => String(i.institute_id) === String(instId));
              if (found) {
                this.selectedInstitute = found.institute_id as any;
                try {
                  this.filters.institute = String(this.selectedInstitute);
                } catch (e) {
                  /* ignore */
                }
                this.syncInstituteSearch();
                this.loadDepartments(this.selectedInstitute);
                this.loadTeams(this.selectedInstitute);
                this.loadCampuses(this.selectedInstitute);
                this.loadCountries(this.selectedInstitute);
              } else {
                this.selectedInstitute = instId as any;
                try {
                  this.filters.institute = String(instId);
                } catch (e) {
                  /* ignore */
                }
                this.syncInstituteSearch();
                this.loadCampuses(this.selectedInstitute);
                this.loadCountries(this.selectedInstitute);
              }
            }
          }
        } catch (e) {
          /* ignore malformed session data */
        }
        this.loading.hide();
      },
      error: () => {
        if (requestId !== this.instituteRequestId) {
          return;
        }

        this.institutes = [];
        this.loading.hide();
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

  onInstituteInputFocus() {
    this.instituteSearchTerm = '';
    this.instituteSearch = '';
  }

  onInstituteInputBlur() {
    if (!this.instituteSearchTerm && this.selectedInstitute) {
      this.syncInstituteSearch();
    }
  }

  onFilterSelectOpened(isOpen: boolean, type: string) {
    if (!isOpen) {
      if (type === 'userInstitute') this.instituteSearch = '';
      else if (type === 'city') this.cityFilterSearch = '';
    }
  }
  stopFilterSearchEvent(event: Event) {
    event.stopPropagation();
  }
  onInstituteSearchInput(value: string) {
    this.instituteSearch = value || '';
    this.instituteSearchTerm = value || '';
  }
  onInstituteAutocompleteSelected(id: string) {
    this.selectedInstitute = id || '';
    this.filters.institute = this.selectedInstitute;
    this.syncInstituteSearch();
    this.instituteSearchTerm = '';
    this.onInstituteChange(this.selectedInstitute);
  }

  private syncInstituteSearch() {
    const found = this.institutes.find(
      (i) => String(i.institute_id) === String(this.selectedInstitute || '')
    );
    this.instituteSearch = found ? found.institute_name : '';
  }

  loadAdminUserLocations(): void {
    if (this.isSuperAdmin) return;
    const params: any = { pageNumber: 1, pageSize: 500, _ts: Date.now() };
    const instituteParam =
      this.selectedInstitutes?.length
        ? this.selectedInstitutes.join(',')
        : this.filters.institute ||
          this.selectedInstitute ||
          (this.isGlobalInstituteActive ? this.globalInstituteContext.activeInstituteId : '');
    if (instituteParam) params.institute_id = instituteParam;

    this.http.get<any>(`${API_BASE}/get-users`, { params }).subscribe({
      next: (res) => {
        try {
          const dataCandidate = res?.data?.users ?? res?.users ?? res?.data ?? res;
          const users = Array.isArray(dataCandidate) ? dataCandidate : [];

          const uniqueCountries = new Map<string, { code: string; name: string; countryCode?: string }>();
          const uniqueCities = new Map<string, { code: string; name: string; countryCode: string }>();

          users.forEach((user: any) => {
            const countryCode = String(
              user?.country?.country_id || user?.country_id || user?.country?.country_code || user?.country_code || ''
            ).trim();
            const countryName = String(
              user?.country?.country_name || user?.country_name || user?.country?.name || ''
            ).trim();
            const cityCode = String(
              user?.city?.city_id || user?.city_id || user?.city?.city_name || user?.city_name || ''
            ).trim();
            const cityName = String(
              user?.city?.city_name || user?.city_name || user?.city?.city_id || user?.city_id || ''
            ).trim();

            if (countryName && !uniqueCountries.has(countryName.toLowerCase())) {
              uniqueCountries.set(countryName.toLowerCase(), { code: countryCode || countryName, name: countryName, countryCode: countryCode || countryName });
            }

            if (countryCode && cityName) {
              const cityKey = `${countryCode.toLowerCase()}|${cityName.toLowerCase()}`;
              if (!uniqueCities.has(cityKey)) {
                uniqueCities.set(cityKey, {
                  code: cityCode || cityName,
                  name: cityName,
                  countryCode: countryCode
                });
              }
            }
          });

          if (this.campuses && this.campuses.length > 0) {
            this.campuses.forEach((c: any) => {
              const name = String(c.country_name || c.country_id || '').trim();
              const code = String(c.country_id || c.country_name || '').trim();
              if (name && !uniqueCountries.has(name.toLowerCase())) {
                uniqueCountries.set(name.toLowerCase(), { code, name, countryCode: code });
              }
            });
          }

          this.countries = Array.from(uniqueCountries.values()).sort((a, b) => a.name.localeCompare(b.name));

          if (!this.countries || this.countries.length === 0) {
            this.http.get<any>(`${API_BASE}/registered-countries`).subscribe({
              next: (cRes) => {
                const list = Array.isArray(cRes?.data) ? cRes.data : [];
                this.countries = list;
              },
              error: () => {
                this.countries = [];
              },
            });
          }

          this.allUserCities = Array.from(uniqueCities.values());
          if (this.filters.country) {
            const selected = String(this.filters.country).trim().toLowerCase();
            const canonical = this.countries.find(
              (country) =>
                country.code.toLowerCase() === selected ||
                String(country.countryCode || '').toLowerCase() === selected ||
                country.name.toLowerCase() === selected
            );
            this.filters.country = canonical?.code || '';
          }
          try {
            this.cd.detectChanges();
          } catch (e) {}
        } catch (e) {
          this.countries = [];
          this.allUserCities = [];
        }
      },
      error: () => {
        this.countries = [];
        this.allUserCities = [];
      }
    });
  }

  loadCountries(instituteId?: string) {
    if (!this.isSuperAdmin) {
      this.loadAdminUserLocations();
      return;
    }
    this.countries = [];
    const hierarchyUrl = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(hierarchyUrl).subscribe({
      next: (hierarchyRes) => {
        try {
          const locationCountries =
            hierarchyRes?.data?.countries || hierarchyRes?.countries || hierarchyRes?.data || [];
          const hierarchyCountries = (Array.isArray(locationCountries) ? locationCountries : [])
            .map((country: any) => ({
              id: country.country_id || country.id,
              countryCode: country.country_code || country.code,
              name: country.country_name || country.name || country.country,
            }))
            .filter((country: any) => country.id && country.name);

          this.http.get<any>(`${API_BASE}/get-institutes`).subscribe({
            next: (instituteRes) => {
              try {
                const institutes = Array.isArray(instituteRes?.data) ? instituteRes.data : [];
                const registeredCountries: Array<{
                  code: string;
                  name: string;
                  countryCode?: string;
                }> = [];
                institutes.forEach((institute: any) => {
                  const locations = [
                    institute,
                    ...(Array.isArray(institute?.campuses) ? institute.campuses : []),
                  ];
                  locations.forEach((location: any) => {
                    const rawCountry = location?.country;
                    const countryId =
                      location?.country_id ||
                      (typeof rawCountry === 'object'
                        ? rawCountry?.country_id || rawCountry?.id
                        : null);
                    const countryCode =
                      location?.country_code ||
                      (typeof rawCountry === 'object'
                        ? rawCountry?.country_code || rawCountry?.code
                        : rawCountry);
                    const countryName =
                      location?.country_name ||
                      (typeof rawCountry === 'object'
                        ? rawCountry?.country_name || rawCountry?.name || rawCountry?.country
                        : rawCountry);
                    const hierarchyMatch = hierarchyCountries.find(
                      (country: any) =>
                        (countryId &&
                          String(country.id).toLowerCase() === String(countryId).toLowerCase()) ||
                        (countryCode &&
                          String(country.countryCode).toLowerCase() ===
                            String(countryCode).toLowerCase()) ||
                        (countryName &&
                          String(country.name).trim().toLowerCase() ===
                            String(countryName).trim().toLowerCase())
                    );
                    const resolved =
                      hierarchyMatch ||
                      (countryId && countryName
                        ? { id: countryId, countryCode, name: countryName }
                        : null);
                    if (resolved)
                      registeredCountries.push({
                        code: String(resolved.id),
                        name: String(resolved.name).trim(),
                        countryCode: resolved.countryCode
                          ? String(resolved.countryCode)
                          : undefined,
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
                if (this.filters.country) {
                  const selected = String(this.filters.country).trim().toLowerCase();
                  const canonical = this.countries.find(
                    (country) =>
                      country.code.toLowerCase() === selected ||
                      String(country.countryCode || '').toLowerCase() === selected ||
                      country.name.toLowerCase() === selected
                  );
                  this.filters.country = canonical?.code || '';
                }
              } catch (e) {
                this.countries = [];
              }
            },
            error: () => {
              this.countries = [];
            },
          });
        } catch (e) {
          this.countries = [];
        }
      },
      error: () => {
        this.countries = [];
      },
    });
  }

  onCountryChange() {
    this.states = [];
    this.cities = [];
    this.selectedCities = [];
    this.filters.state = '';
    this.filters.city = '';
    const selectedCountryCodes =
      this.selectedCountries && this.selectedCountries.length
        ? this.selectedCountries
        : this.filters.country
          ? [this.filters.country]
          : [];

    if (!selectedCountryCodes.length) {
      if (this.isSuperAdmin) {
        this.refreshInstituteScope();
      }
      return;
    }

    if (!this.isSuperAdmin && this.allUserCities && this.allUserCities.length > 0) {
      const selectedCodes = selectedCountryCodes.map((c) => String(c).toLowerCase());
      const relevantCities = this.allUserCities.filter((c) =>
        selectedCodes.some(
          (sc) =>
            sc === String(c.countryCode || '').toLowerCase() ||
            sc === String(c.code || '').toLowerCase()
        )
      );
      const uniqueCities = new Map<string, { code: string; name: string }>();
      relevantCities.forEach((c) => {
        if (c.name) {
          const key = c.name.toLowerCase();
          if (!uniqueCities.has(key)) {
            uniqueCities.set(key, { code: c.code || c.name, name: c.name });
          }
        }
      });
      this.cities = Array.from(uniqueCities.values()).sort((a, b) => a.name.localeCompare(b.name));
      const validCityNames = new Set(this.cities.map((c) => c.name));
      this.selectedCities = (this.selectedCities || []).filter((name) => validCityNames.has(name));
      return;
    }

    const requests = selectedCountryCodes.map((code) =>
      this.http.get<any>(`${API_BASE}/location-hierarchy`, { params: { country_id: code } })
    );

    forkJoin(requests).subscribe({
      next: (responses) => {
        try {
          const uniqueStates = new Map<string, { code: string; name: string }>();
          const uniqueCities = new Map<string, { code: string; name: string }>();

          responses.forEach((res, idx) => {
            const selectedCountry = selectedCountryCodes[idx];
            const statesRaw = res?.data?.states || res?.states || [];
            (Array.isArray(statesRaw) ? statesRaw : []).forEach((s: any) => {
              const code = s.state_code || s.code || s.id;
              const name = s.state_name || s.name || s.state;
              if (name && !uniqueStates.has(name.toLowerCase())) {
                uniqueStates.set(name.toLowerCase(), { code, name });
              }
            });

            let citiesRaw = res?.data?.cities || res?.cities || [];
            if (!Array.isArray(citiesRaw) || !citiesRaw.length) {
              const countries = res?.data?.countries || res?.countries || [];
              if (Array.isArray(countries) && countries.length > 0) {
                const foundCountry = countries.find(
                  (ct: any) =>
                    String(ct.id || ct.country_id || ct.country_code || ct.code) ===
                    String(selectedCountry)
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
                if (!uniqueCities.has(formattedName.toLowerCase())) {
                  uniqueCities.set(formattedName.toLowerCase(), {
                    code: String(c.city_code || c.code || c.id || formattedName),
                    name: formattedName,
                  });
                }
              }
            });
          });

          this.states = Array.from(uniqueStates.values()).sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          this.cities = Array.from(uniqueCities.values()).sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        } catch (e) {
          this.states = [];
          this.cities = [];
        }
        if (this.isSuperAdmin) {
          this.refreshInstituteScope();
        } else {
          const validCityNames = new Set((this.filteredCitiesForFilter || []).map((c) => c.name));
          this.selectedCities = (this.selectedCities || []).filter((name) =>
            validCityNames.has(name)
          );
          const validCampusIds = new Set((this.filteredCampusesForFilter || []).map((c) => c.id));
          this.selectedCampuses = (this.selectedCampuses || []).filter((id) =>
            validCampusIds.has(id)
          );
        }
      },
      error: () => {
        this.states = [];
        this.cities = [];
        if (this.isSuperAdmin) {
          this.refreshInstituteScope();
        }
      },
    });
  }

  filteredCities() {
    const q = String(this.filters.city || '')
      .trim()
      .toLowerCase();
    if (!q) return this.cities;
    return this.cities.filter((c) => (c.name || '').toLowerCase().includes(q));
  }

  private resolveCityId(cityName: string): string {
    const name = String(cityName || '')
      .trim()
      .toLowerCase();
    if (!name) return '';
    const found = this.cities.find(
      (c) =>
        String(c.name || '')
          .trim()
          .toLowerCase() === name
    );
    return found ? String(found.code) : '';
  }

  onCityFilterChange() {
    if (this.isSuperAdmin) {
      this.refreshInstituteScope();
    } else {
      const validCampusIds = new Set((this.filteredCampusesForFilter || []).map((c) => c.id));
      this.selectedCampuses = (this.selectedCampuses || []).filter((id) => validCampusIds.has(id));
    }
  }

  onIndustryFilterChange() {
    this.selectedSectors = [];
    this.filters.sector = '';
    this.refreshInstituteScope();
  }

  scopedSectors(): string[] {
    const industry = this.filters.industry;
    if (!industry) return [];
    return this.sectorMap[industry] || [];
  }

  onSectorFilterChange() {
    this.refreshInstituteScope();
  }

  private refreshInstituteScope() {
    if (this.isGlobalInstituteActive && this.activeInstituteId) return;
    const requestId = ++this.instituteRequestId;

    const params: any = { _ts: Date.now() };
    if (this.selectedCountries && this.selectedCountries.length)
      params.country = this.selectedCountries.join(',');
    else if (this.filters.country) params.country = this.filters.country;

    if (this.selectedCities && this.selectedCities.length)
      params.city = this.selectedCities.join(',');
    else {
      const cityName = String(this.filters.city || '').trim();
      if (cityName) params.city = cityName;
    }

    if (this.selectedIndustries && this.selectedIndustries.length)
      params.industry = this.selectedIndustries.join(',');
    else if (this.filters.industry) params.industry = this.filters.industry;

    if (this.selectedSectors && this.selectedSectors.length)
      params.sector = this.selectedSectors.join(',');
    else if (this.filters.sector) params.sector = this.filters.sector;

    if (!Object.keys(params).length) {
      this.loadInstitutes();
      return;
    }

    this.http.get<any>(`${API_BASE}/get-institutes`, { params }).subscribe({
      next: (res) => {
        if (requestId !== this.instituteRequestId) {
          return;
        }

        try {
          const data = Array.isArray(res?.data) ? res.data : [];
          this.institutes = data.map((r: any) => ({
            institute_id: r.institute_id || r.id || r._id || '',
            institute_name: r.institute_name || r.name || r.short_name || '',
            short_name: r.short_name || r.institute_name || r.name || '',
          }));
        } catch (e) {
          this.institutes = [];
        }
        const validInstituteIds = new Set(
          this.institutes.map((institute) => String(institute.institute_id || '')).filter(Boolean)
        );

        this.selectedInstitutes = (this.selectedInstitutes || []).filter((id) =>
          validInstituteIds.has(String(id))
        );

        if (this.selectedInstitute && !validInstituteIds.has(String(this.selectedInstitute))) {
          this.onInstituteChange('');
        }
      },
      error: () => {
        if (requestId !== this.instituteRequestId) {
          return;
        }

        this.institutes = [];
      },
    });
  }

  onStateChange() {
    this.cities = [];
    this.filters.city = '';
    if (!this.filters.state) {
      this.refreshInstituteScope();
      return;
    }
    const url = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(url, { params: { state_id: this.filters.state } }).subscribe({
      next: (res) => {
        try {
          const cities = res?.data?.cities || res?.cities || [];
          this.cities = (Array.isArray(cities) ? cities : []).map((c: any) => ({
            code: c.city_code || c.code || c.id,
            name: c.city_name || c.name || c.city,
          }));
        } catch (e) {
          this.cities = [];
        }
        this.refreshInstituteScope();
      },
      error: () => {
        this.cities = [];
        this.refreshInstituteScope();
      },
    });
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
        notify('Apply filters to fetch users', 'info');
      } catch (e) {}
      return;
    }
    this.loadUsers();
  }

  // Modal / actions
  viewDetails(u: UserRow) {
    const payload: any = { ...u };
    try {
      payload.user_privileges =
        u.privileges && u.privileges.length
          ? u.privileges
          : u.raw && u.raw.user_privileges
            ? u.raw.user_privileges
            : u.user_privileges || [];
    } catch (e) {
      payload.user_privileges = u.user_privileges || [];
    }
    try {
      sessionStorage.setItem('view_user', JSON.stringify(payload));
    } catch (e) {}
    this.selectedUser = payload;
  }

  startEditUser(u: UserRow) {
    try {
      const raw = u.raw || u || {};
      const payload: any = { ...raw };
      payload.campus =
        payload.campus || (payload.campus_id ? { campus_id: payload.campus_id } : payload.campus);

      const fmtDate = (val: any) => {
        if (val == null || val === '') return '';
        try {
          if (val instanceof Date) return val.toISOString().slice(0, 10);
          const s = String(val || '');
          if (s.length >= 10) return s.substring(0, 10);
          return s;
        } catch (e) {
          return val;
        }
      };

      if (!payload.joining_date) {
        payload.joining_date = fmtDate(
          payload.joining_date ||
            payload.joining ||
            payload.joiningDate ||
            payload.joined_at ||
            payload.joinedAt ||
            payload.created_at ||
            payload.createdAt ||
            payload.joined_on ||
            payload.joinedOn ||
            payload.created_date ||
            payload.createdDate ||
            ''
        );
      } else {
        payload.joining_date = fmtDate(payload.joining_date);
      }

      if (!payload.campus && payload.institute_campus) payload.campus = payload.institute_campus;

      const pickId = (obj: any, candidates: string[]) => {
        try {
          for (const k of candidates) {
            const v = obj && obj[k];
            if (v !== undefined && v !== null && String(v) !== '') return String(v);
          }
        } catch (e) {}
        return '';
      };

      if (!payload.country || String(payload.country).length === 0) {
        payload.country = pickId(payload, [
          'country_id',
          'countryCode',
          'country_code',
          'code',
          'id',
        ]);
        if (!payload.country)
          payload.country = pickId(payload.country || payload, [
            'country_id',
            'countryCode',
            'country_code',
            'code',
            'id',
          ]);
        if (!payload.country)
          payload.country = pickId(payload.campus?.country || {}, [
            'country_id',
            'countryCode',
            'country_code',
            'code',
            'id',
          ]);
      }

      if (!payload.state || String(payload.state).length === 0) {
        payload.state = pickId(payload, ['state_id', 'stateCode', 'state_code', 'code', 'id']);
        if (!payload.state)
          payload.state = pickId(payload.state || payload, [
            'state_id',
            'stateCode',
            'state_code',
            'code',
            'id',
          ]);
        if (!payload.state)
          payload.state = pickId(payload.campus?.state || {}, [
            'state_id',
            'stateCode',
            'state_code',
            'code',
            'id',
          ]);
      }

      if (!payload.city || String(payload.city).length === 0) {
        payload.city = pickId(payload, ['city_id', 'cityCode', 'city_code', 'code', 'id']);
        if (!payload.city)
          payload.city = pickId(payload.city || payload, [
            'city_id',
            'cityCode',
            'city_code',
            'code',
            'id',
          ]);
        if (!payload.city)
          payload.city = pickId(payload.campus?.city || {}, [
            'city_id',
            'cityCode',
            'city_code',
            'code',
            'id',
          ]);
      }
      try {
        if (!payload.user_privileges || payload.user_privileges.length === 0)
          payload.user_privileges =
            u.privileges && u.privileges.length
              ? u.privileges
              : raw.user_privileges || raw.privileges || [];
      } catch (e) {
        payload.user_privileges = raw.user_privileges || raw.privileges || [];
      }
      try {
        const ups = payload.user_privileges || [];
        if (Array.isArray(ups) && ups.length > 0) {
          payload.page_access = ups.map((p: any) => ({
            page_key:
              p.page_id || p.pageId || p.page || p.page_key || p.key || p.page_name || p.pageName,
            view: !!(p.can_view || p.canView || p.view),
            add: !!(p.can_add || p.canAdd || p.add),
            edit: !!(p.can_edit || p.canEdit || p.edit),
            delete: !!(p.can_delete || p.canDelete || p.delete),
          }));
          payload.pages = payload.page_access;
        }
      } catch (e) {
        /* ignore privilege shaping errors */
      }

      const normalizeJoiningDate = (val: any) => {
        if (!val && val !== 0) return '';
        try {
          const s = String(val || '').trim();
          if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
          const m1 = s.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);
          if (m1) {
            const d = m1[1].padStart(2, '0');
            const mo = m1[2].padStart(2, '0');
            const y = m1[3];
            return `${y}-${mo}-${d}`;
          }
          const dt = new Date(s);
          if (!isNaN(dt.getTime())) return dt.toISOString().slice(0, 10);
          return s.length >= 10 ? s.substring(0, 10) : s;
        } catch (e) {
          return val;
        }
      };
      try {
        payload.joining_date = normalizeJoiningDate(
          payload.joining_date ||
            payload.joining ||
            payload.joiningDate ||
            payload.joined_at ||
            payload.joinedAt ||
            payload.created_at ||
            payload.createdAt ||
            payload.joined_on ||
            payload.joinedOn ||
            payload.created_date ||
            payload.createdDate ||
            ''
        );
      } catch (e) {
        /* ignore */
      }

      try {
        const campusId =
          (payload.campus && (payload.campus.campus_id || payload.campus.id)) ||
          payload.campus_id ||
          payload.campus ||
          '';
        if (campusId) {
          payload.campus_id = String(campusId);
          if (!payload.campus || typeof payload.campus !== 'object')
            payload.campus = { campus_id: payload.campus_id };
          else
            payload.campus.campus_id =
              payload.campus.campus_id || payload.campus.id || payload.campus_id;
        }

        const countryId =
          (payload.country && (payload.country.country_id || payload.country.id)) ||
          payload.country_id ||
          payload.country ||
          '';
        if (countryId) {
          payload.country_id = String(countryId);
          payload.country = payload.country_id;
        }

        const stateId =
          (payload.state && (payload.state.state_id || payload.state.id)) ||
          payload.state_id ||
          payload.state ||
          '';
        if (stateId) {
          payload.state_id = String(stateId);
          payload.state = payload.state_id;
        }

        const cityId =
          (payload.city && (payload.city.city_id || payload.city.id)) ||
          payload.city_id ||
          payload.city ||
          '';
        if (cityId) {
          payload.city_id = String(cityId);
          payload.city = payload.city_id;
        }
      } catch (e) {
        /* ignore */
      }

      sessionStorage.setItem('edit_user', JSON.stringify(payload));
    } catch (e) {}
    this.saveUsersReturnState();
    this.router.navigate(['/user-register']);
  }

  saveEditUser() {
    if (!this.editableUser) return;
    const idx = this.users.findIndex(
      (x) => x.id === (this.editableUser.user_id || this.editableUser.id)
    );
    if (idx >= 0) {
      this.users[idx] = {
        ...this.users[idx],
        name: this.editableUser.full_name || this.editableUser.display_name || this.editableUser.name || this.editableUser.user_name,
        email: this.editableUser.email,
        phone: this.editableUser.contact_no,
        role: this.editableUser.user_role,
        active: !!this.editableUser.active_status,
        raw: this.editableUser,
      };
    }
    this.closeModal();
  }

  deleteUser(u: UserRow) {
    try {
      this.confirmService
        .confirm({
          title: 'Delete User',
          message: `Delete user ${u.name}? This action cannot be undone.`,
          confirmText: 'Delete',
          cancelText: 'Cancel',
        })
        .subscribe((ok) => {
          if (!ok) return;
          const uuid = u.id || (u.raw && (u.raw.user_id || u.raw.id || u.raw._id));
          if (!uuid) {
            this.users = this.users.filter((x) => x.id !== u.id);
            try {
              notify('User removed locally', 'info');
            } catch (e) {}
            return;
          }
          const current_user = sessionStorage.getItem('user_id');
          const url = `${API_BASE}/delete/user/${encodeURIComponent(String(uuid))}?current_user=${encodeURIComponent(String(current_user))}`;
          try {
            this.loading.show();
          } catch (e) {}
          this.http.delete<any>(url, { observe: 'response' }).subscribe({
            next: (res) => {
              try {
                this.loading.hide();
              } catch (e) {}
              this.users = this.users.filter((x) => x.id !== uuid && x.id !== u.id);
              try {
                notify('User deleted successfully', 'success');
              } catch (e) {}
              try {
                if (this.hasAppliedFilters) this.loadUsers(this.selectedInstitute);
              } catch (e) {}
            },
            error: (err) => {
              try {
                this.loading.hide();
              } catch (e) {}
              console.error('Failed to delete user', err);
              try {
                if (err && (err.status === 0 || err.status === 502 || err.status === 503)) {
                  notify(
                    'Network error: cannot reach backend. Check server and network connection.',
                    'error'
                  );
                } else {
                  notify('Failed to delete user. Please try again later.', 'error');
                }
              } catch (e) {}
            },
          });
        });
    } catch (e) {}
  }

  closeModal() {
    this.selectedUser = null;
    this.editing = false;
    this.editableUser = null;
  }
  openUserRegister(): void {
    this.saveUsersReturnState();
    this.router.navigate(['/user-register']);
  }

  saveUsersReturnState(): void {
    try {
      sessionStorage.setItem(
        'users_return_state',
        JSON.stringify({
          instituteId:
            this.globalInstituteContext.activeInstituteId || this.selectedInstitute || '',
          globalInstituteActive: this.globalInstituteContext.isGlobalFilterActive(),
          filter: this.filter,
          selectedInstitute: this.selectedInstitute,
          instituteSearch: this.instituteSearch,
          filters: this.filters,
          users: this.users,
          rawRecords: this.rawRecords,
          hasAppliedFilters: this.hasAppliedFilters,
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          totalCount: this.totalCount,
        })
      );
    } catch (e) {}
  }

  private restoreUsersReturnState(): void {
    try {
      const raw = sessionStorage.getItem('users_return_state');
      if (!raw) return;
      sessionStorage.removeItem('users_return_state');
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
      const restoredInstitute = state?.filters?.institute || state?.selectedInstitute || '';
      const globalInstitute = this.globalInstituteContext.activeContext;
      const globalInstituteChanged =
        !!globalInstitute?.institute_id &&
        String(restoredInstitute) !== String(globalInstitute.institute_id);
      this.filter = state?.filter || '';
      this.selectedInstitute = state?.selectedInstitute || '';
      this.instituteSearch = state?.instituteSearch || '';
      this.filters = state?.filters || this.filters;
      if (globalInstitute?.institute_id) {
        this.selectedInstitute = globalInstitute.institute_id;
        this.filters.institute = globalInstitute.institute_id;
        this.instituteSearch = globalInstitute.institute_name || '';
      }
      this.users = !globalInstituteChanged && Array.isArray(state?.users) ? state.users : [];
      this.rawRecords =
        !globalInstituteChanged && Array.isArray(state?.rawRecords) ? state.rawRecords : [];
      this.hasAppliedFilters = !!state?.hasAppliedFilters;
      this.pageSize = Number(state?.pageSize || this.pageSize);
      this.pageIndex = Number(state?.pageIndex || 0);
      this.totalCount = Number(state?.totalCount || this.users.length || 0);
      this.dataSource.data = this.users;
      this.applyFilter(this.filter || '');
    } catch (e) {
      try {
        sessionStorage.removeItem('users_return_state');
      } catch (_) {}
    }
  }

  private resetForInstituteChange(instituteId: string): void {
    this.activeInstituteId = instituteId;
    this.selectedInstitute = '';
    this.filters = {
      ...this.filters,
      institute: '',
      name: '',
      department: [],
      team: [],
      joining_from: '',
      joining_to: '',
      active_status: '',
      country: '',
      state: '',
      city: '',
      industry: '',
      sector: '',
    };

    this.users = [];
    this.rawRecords = [];
    this.dataSource.data = [];
    this.totalCount = 0;
    this.departments = [];
    this.teams = [];
    this.departmentSearch = '';
    this.teamSearch = '';
    this.filter = '';
    this.dataSource.filter = '';
    this.pageIndex = 0;
    this.hasAppliedFilters = false;
    this.selectedUser = null;
    this.editing = false;
    this.editableUser = null;

    try {
      sessionStorage.removeItem('users_return_state');
    } catch (e) {}

    this.loadDepartments(instituteId);
    this.loadTeams(instituteId);
    this.loadCampuses(instituteId);
    this.loadCountries(instituteId);
  }

  private resetAfterGlobalInstituteClear(): void {
    this.activeInstituteId = '';
    this.selectedInstitute = '';
    this.instituteSearch = '';
    this.users = [];
    this.rawRecords = [];
    this.dataSource.data = [];
    this.totalCount = 0;
    this.filters = {
      institute: '',
      name: '',
      department: [],
      team: [],
      joining_from: '',
      joining_to: '',
      active_status: '',
      country: '',
      state: '',
      city: '',
      industry: '',
      sector: '',
    };
    this.departments = [];
    this.teams = [];
    this.countries = [];
    this.states = [];
    this.cities = [];
    this.departmentSearch = '';
    this.teamSearch = '';
    this.filter = '';
    this.dataSource.filter = '';
    this.pageIndex = 0;
    this.hasAppliedFilters = false;
    this.selectedUser = null;
    this.editing = false;
    this.editableUser = null;
    if (this.paginator) {
      this.paginator.firstPage();
      this.paginator.length = 0;
    }
    this.closeFiltersOverlay();
    try {
      sessionStorage.removeItem('users_return_state');
    } catch (e) {}
    this.loadInstitutes();
    this.loadCountries();
  }

  getModulePageName(name: string): string {
    if (!name) return '—';
    const key = name.trim().toLowerCase();
    const map: Record<string, string> = {
      'categories': 'Question Banks',
      'category': 'Question Banks',
      'question bank': 'Question Banks',
      'question banks': 'Question Banks',
      'exams': 'Manage test',
      'exam': 'Manage test',
      'manage test': 'Manage test',
      'test': 'Manage test',
      'tests': 'Manage test',
      'schedule exam': 'Schedule Test',
      'schedule': 'Schedule Test',
      'schedule test': 'Schedule Test',
      'scheduled tests': 'Schedule Test',
      'exam reports': 'Test Reports',
      'test reports': 'Test Reports',
      'users': 'Users',
      'user': 'Users',
      'questions': 'Questions',
      'question': 'Questions'
    };
    return map[key] || name;
  }
}
