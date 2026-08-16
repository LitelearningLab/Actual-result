import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { A11yModule } from '@angular/cdk/a11y';
import { AuthService } from 'src/app/home/service/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { API_BASE } from 'src/app/shared/api.config';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import {
  DateRangePickerDialogComponent,
  DateRangeDialogResult,
} from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';
import { PortalModule } from '@angular/cdk/portal';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatTabsModule } from '@angular/material/tabs';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { notify } from 'src/app/shared/global-notify';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';
import { Subscription, forkJoin } from 'rxjs';

@Component({
  selector: 'app-view-schedule-exam',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    RouterModule,
    HttpClientModule,
    A11yModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatCheckboxModule,
    OverlayModule,
    PortalModule,
    MatTabsModule,
  ],
  templateUrl: './view-schedule-exam.component.html',
  styleUrls: ['./view-schedule-exam.component.scss'],
})
export class ViewScheduleExamComponent implements OnInit, OnDestroy, AfterViewInit {
  search = '';
  institutes: Array<{ name: string; institute_id?: string }> = [];
  private allInstitutes: Array<{ name: string; institute_id?: string }> = [];
  selectedInstitute = '';
  instituteSearch = '';
  instituteSearchTerm = '';
  departmentFilterSearch = '';
  campusFilterSearch = '';
  teamFilterSearch = '';

  selectedInstitutes: string[] = [];
  instituteFilterSearch = '';

  // Location, Industry & Filter fields
  filterCountry = '';
  selectedCountries: string[] = [];
  filterCity = '';
  selectedCities: string[] = [];
  citySearch = '';
  filterIndustry = '';
  filterSector = '';
  countrySearch = '';
  industrySearch = '';
  sectorSearch = '';
  countries: Array<{ code: string; name: string }> = [];
  locationHierarchyRaw: any[] = [];
  filterCityOptions: Array<{ code: string; name: string }> = [];
  industryTypes = ['School', 'College', 'BPO', 'Bank', 'IT'];
  private sectorMap: Record<string, string[]> = {
    School: ['School'],
    College: ['Engineering', 'Arts'],
    BPO: ['Healthcare', 'Finance'],
    Bank: ['Bank'],
    IT: ['IT'],
  };
  isGlobalInstituteActive = false;

  filterName = '';
  scheduleNameOptions: string[] = [];
  selectedDepartments: string[] = [];
  selectedCampuses: string[] = [];
  selectedTeams: string[] = [];
  filterCreationDateAfter: Date | null = null;
  filterCreationDate: Date | null = null;
  filterActiveStatus: boolean | null = null;
  filterCreatedByMe = false;
  departments: Array<{ id: string; name: string }> = [];
  campuses: Array<{ id: string; name: string }> = [];
  teams: Array<{ id: string; name: string }> = [];
  categories: Array<{ id: string; name: string }> = [];
  schedules: any[] = [];
  dataSource = new MatTableDataSource<any>([]);
  hasAppliedFilters = false;
  get displayedColumns(): string[] {
    if (this.isSuperAdmin) {
      return [
        'sno',
        'title',
        'institute',
        'schedule',
        'publish',
        'manual_review',
        'actions',
      ];
    }
    return [
      'sno',
      'title',
      'schedule',
      'publish',
      'manual_review',
      'actions',
    ];
  }
  columns: string[] = [
    'sno',
    'title',
    'institute',
    'schedule',
    'publish',
    'manual_review',
    'actions',
  ];
  selectedSchedule: any = null;

  private baseUrl = API_BASE;
  private apiUrl = `${API_BASE}/get-institutes`;
  private activeInstituteId = '';
  private globalInstituteSub: Subscription | null = null;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;
  @ViewChild('scheduleInstituteInput') scheduleInstituteInput?: ElementRef<HTMLInputElement>;

  isSuperAdmin = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private loader: LoaderService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private pageMeta: PageMetaService,
    private confirmService: ConfirmService,
    private globalInstituteContext: GlobalInstituteContextService,
    private dialog: MatDialog
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

  // 1. Update Institute Filter Getter
  get filteredInstitutesForFilter(): Array<{ name: string; institute_id?: string }> {
    const term = (this.instituteFilterSearch || '').trim().toLowerCase();
    let list = this.institutes || [];
    if (term) {
      list = list.filter(
        (i: any) =>
          (i.name || i.institute_name || '').toLowerCase().includes(term) ||
          (i.institute_id && (this.selectedInstitutes || []).includes(i.institute_id))
      );
    }
    return [...list].sort((a: any, b: any) => {
      const aSel = a.institute_id
        ? (this.selectedInstitutes || []).includes(a.institute_id)
        : false;
      const bSel = b.institute_id
        ? (this.selectedInstitutes || []).includes(b.institute_id)
        : false;
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || a.institute_name || '').localeCompare(b.name || b.institute_name || '');
    });
  }

  // Focus search input when dropdown opens, and clear search input when closed
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

  onInstituteSelectionChange() {
    const institutes = this.selectedInstitutes || [];
    this.selectedInstitute = institutes[institutes.length - 1] || '';
    this.loadCampuses(institutes);

    if (!institutes.length) {
      this.departments = [];
      this.teams = [];
      return;
    }

    // Fetch departments for ALL selected institutes
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

    // Fetch teams for ALL selected institutes
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
          }))
          .filter((t) => t.id && !seen.has(t.id) && seen.add(t.id));
      },
      error: () => {
        this.teams = [];
      },
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

  private filtersOverlayRef: OverlayRef | null = null;

  get showLocationAndIndustryFilters(): boolean {
    return this.isSuperAdmin && !this.isGlobalInstituteActive;
  }

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

  get filteredIndustryTypes(): string[] {
    const term = (this.industrySearch || '').trim().toLowerCase();
    if (!term) return this.industryTypes;
    return this.industryTypes.filter((t) => t.toLowerCase().includes(term));
  }

  private get scopedSectors(): string[] {
    if (!this.filterIndustry) return [];
    return this.sectorMap[this.filterIndustry] || [];
  }

  get filteredSectors(): string[] {
    const scoped = this.scopedSectors;
    const term = (this.sectorSearch || '').trim().toLowerCase();
    if (!term) return scoped;
    return scoped.filter((s) => s.toLowerCase().includes(term));
  }

  onFilterSelectOpened(opened: boolean, field: 'country' | 'city' | 'industry' | 'sector') {
    if (opened) {
      setTimeout(() => {
        try {
          const input = document.querySelector(
            '.cdk-overlay-pane .select-search-input'
          ) as HTMLInputElement | null;
          input?.focus();
        } catch (e) {}
      });
    }
  }

  // 2. Update Department Filter Getter
  get filteredDepartmentsForFilter(): Array<{ id: string; name: string }> {
    const term = (this.departmentFilterSearch || '').trim().toLowerCase();
    let list = this.departments || [];
    if (term) {
      list = list.filter(
        (d) =>
          (d.name || '').toLowerCase().includes(term) ||
          (this.selectedDepartments || []).includes(d.id)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedDepartments || []).includes(a.id);
      const bSel = (this.selectedDepartments || []).includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  // 3. Update Team Filter Getter
  get filteredTeamsForFilter(): Array<{ id: string; name: string }> {
    const term = (this.teamFilterSearch || '').trim().toLowerCase();
    let list = this.teams || [];
    if (term) {
      list = list.filter(
        (t) =>
          (t.name || '').toLowerCase().includes(term) || (this.selectedTeams || []).includes(t.id)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedTeams || []).includes(a.id);
      const bSel = (this.selectedTeams || []).includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  get filteredCampusesForFilter(): Array<{ id: string; name: string }> {
    const term = (this.campusFilterSearch || '').trim().toLowerCase();
    let list = this.campuses || [];
    if (term) {
      list = list.filter(
        (c) =>
          (c.name || '').toLowerCase().includes(term) ||
          (this.selectedCampuses || []).includes(c.id)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedCampuses || []).includes(a.id);
      const bSel = (this.selectedCampuses || []).includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
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
  }

  isAllCampusesSelected(): boolean {
    const ids = (this.filteredCampusesForFilter || []).map((c) => c.id).filter(Boolean);
    return ids.length > 0 && ids.every((id) => (this.selectedCampuses || []).includes(id));
  }

  toggleSelectAllCampuses() {
    const ids = (this.filteredCampusesForFilter || []).map((c) => c.id).filter(Boolean);
    if (this.isAllCampusesSelected()) this.selectedCampuses = [];
    else this.selectedCampuses = [...ids];
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

  onFilterCampusOpenedChange(opened: boolean) {
    if (opened) {
      setTimeout(() => {
        const input = document.querySelector(
          '.cdk-overlay-pane .select-search-input'
        ) as HTMLInputElement | null;
        input?.focus();
      });
    } else {
      this.campusFilterSearch = '';
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
    this.refreshInstituteScope();
  }

  onSectorFilterChange() {
    this.refreshInstituteScope();
  }

  refreshInstituteScope() {
    if (!this.isSuperAdmin) return;
    const params: any = {};
    if (this.filterCountry) params.country = this.filterCountry;
    if (this.selectedCities && this.selectedCities.length) {
      const cityCodes = this.selectedCities
        .map((name) => this.resolveCityId(name) || name)
        .filter(Boolean);
      if (cityCodes.length) params.city = cityCodes.join(',');
    } else {
      const cityId = this.resolveCityId(this.filterCity);
      if (cityId) params.city = cityId;
    }
    if (this.filterIndustry) params.industry = this.filterIndustry;
    if (this.filterSector) params.sector = this.filterSector;

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
            name: r.name || r.institute_name || r.short_name || '',
            institute_id: r.institute_id || r.id || r._id || '',
          }))
          .filter((i: any) => !!i.institute_id);
        this.allInstitutes = [...this.institutes];
        clearStaleInstituteSelection();
      },
      error: () => {
        this.institutes = [];
      },
    });
  }

  private getCountryLabel(code: string): string {
    const found = this.countries.find((c) => String(c.code) === String(code));
    return found ? found.name : String(code || '');
  }

  ngOnInit(): void {
    this.pageMeta.setMeta('Scheduled Tests', 'Browse and review scheduled tests');
    this.loadCountries();
    this.loadInstitutes();

    // ❌ REMOVE or COMMENT OUT:
    // this.restoreScheduleReturnState();
    this.globalInstituteSub = this.globalInstituteContext.activeInstitute$.subscribe((context) => {
      this.isGlobalInstituteActive = this.globalInstituteContext.isGlobalFilterActive();
      const instituteId = context?.institute_id || '';
      if (this.activeInstituteId === '' && instituteId) {
        this.activeInstituteId = instituteId;
      }
      if (instituteId) {
        if (instituteId === this.activeInstituteId) return;
        this.resetForInstituteChange(instituteId);
        return;
      }
      if (this.activeInstituteId) this.resetAfterGlobalInstituteClear();
    });
  }

  refresh() {
    if (!this.hasAppliedFilters) {
      try {
        notify('Apply filters to fetch scheduled tests', 'info');
      } catch (e) {}
      return;
    }
    this.loadSchedules(this.selectedInstitute || undefined);
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
    if (this.selectedInstitute) {
      this.loadScheduleNameOptions();
    }
  }

  closeFiltersOverlay() {
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (e) {}
      this.filtersOverlayRef = null;
    }
  }

  get appliedFilterChips(): Array<{ key: string; label: string; removable: boolean }> {
    if (!this.hasAppliedFilters && !this.activeInstituteId) return [];
    const chips: Array<{ key: string; label: string; removable: boolean }> = [];
    if (this.filterCountry)
      chips.push({
        key: 'country',
        label: `Country: ${this.getCountryLabel(this.filterCountry)}`,
        removable: true,
      });
    if (this.selectedCities && this.selectedCities.length) {
      chips.push({ key: 'city', label: `City: ${this.selectedCities.join(', ')}`, removable: true });
    } else if (this.filterCity) {
      chips.push({ key: 'city', label: `City: ${this.filterCity}`, removable: true });
    }
    if (this.filterIndustry)
      chips.push({ key: 'industry', label: `Industry: ${this.filterIndustry}`, removable: true });
    if (this.filterSector)
      chips.push({ key: 'sector', label: `Sector: ${this.filterSector}`, removable: true });
    if (this.selectedInstitute && !this.isGlobalInstituteActive) {
      const instName = this.getInstituteLabel(this.selectedInstitute);
      if (instName)
        chips.push({
          key: 'institute',
          label: `Institute: ${instName}`,
          removable: this.isSuperAdmin,
        });
    }

    if (this.filterName)
      chips.push({ key: 'name', label: `Schedule: ${this.filterName}`, removable: true });
    (this.selectedDepartments || []).forEach((id) => {
      const deptName = this.getSelectedName(this.departments, id);
      if (deptName)
        chips.push({ key: `department:${id}`, label: `Department: ${deptName}`, removable: true });
    });
    (this.selectedCampuses || []).forEach((id) => {
      const campusName = this.getSelectedName(this.campuses, id);
      if (campusName)
        chips.push({ key: `campus:${id}`, label: `Campus: ${campusName}`, removable: true });
    });
    (this.selectedTeams || []).forEach((id) => {
      const teamName = this.getSelectedName(this.teams, id);
      if (teamName) chips.push({ key: `team:${id}`, label: `Team: ${teamName}`, removable: true });
    });
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
    return chips;
  }

  removeAppliedFilter(key: string) {
    if (!key) return;
    if (key === 'country') {
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
      this.filterIndustry = '';
      this.filterSector = '';
      this.onIndustryFilterChange();
    } else if (key === 'sector') {
      this.filterSector = '';
      this.onSectorFilterChange();
    } else if (key === 'institute' && this.isSuperAdmin) {
      this.selectedInstitute = '';
      this.instituteSearch = '';
      this.selectedDepartments = [];
      this.selectedTeams = [];
      this.departments = [];
      this.teams = [];
      this.categories = [];
      this.scheduleNameOptions = [];
      this.filterName = '';
    } else if (key === 'name') this.filterName = '';
    else if (key.startsWith('department:'))
      this.selectedDepartments = this.selectedDepartments.filter(
        (id) => String(id) !== key.substring('department:'.length)
      );
    else if (key.startsWith('campus:'))
      this.selectedCampuses = this.selectedCampuses.filter(
        (id) => String(id) !== key.substring('campus:'.length)
      );
    else if (key.startsWith('team:'))
      this.selectedTeams = this.selectedTeams.filter(
        (id) => String(id) !== key.substring('team:'.length)
      );
    else if (key === 'created_after') this.filterCreationDateAfter = null;
    else if (key === 'created_before') this.filterCreationDate = null;
    else if (key === 'active_status') this.filterActiveStatus = null;
    else if (key === 'created_by_me') this.filterCreatedByMe = false;
    this.refreshAfterFilterChipChange();
  }

  clearAppliedFilters() {
    this.onReset();
  }
  private refreshAfterFilterChipChange() {
    if (this.hasAppliedFilters && this.appliedFilterChips.length) {
      this.loadSchedules(this.selectedInstitute || undefined);
    } else {
      this.hasAppliedFilters = false;
      this.schedules = [];
      this.dataSource.data = [];
    }
  }
  private getInstituteLabel(id: any): string {
    if (!id) return '';
    const found = (this.institutes || []).find(
      (i) => String(i.institute_id || (i as any).id || (i as any)._id) === String(id)
    );
    return found?.name || (this.institutes && this.institutes.length ? String(id || '') : '');
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

  private toApiDateString(value: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
  }
  private formatFilterDate(value: Date): string {
    try {
      return this.toApiDateString(value);
    } catch (e) {
      return String(value || '');
    }
  }

  loadInstitutes() {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (res) => {
        if (res && res.data && Array.isArray(res.data)) {
          this.institutes = res.data.map((r: any) => ({
            name: r.name || r.institute_name || r.short_name || '',
            institute_id: r.institute_id,
          }));
          this.allInstitutes = [...this.institutes];
          if (this.isSuperAdmin) {
            const instituteIds = this.institutes
              .map((i) => i.institute_id || '')
              .filter(Boolean);
            this.loadOrganizationOptions(instituteIds);
          }
          try {
            if (this.selectedInstitute) {
              const found = this.institutes.find(
                (i) => String(i.institute_id) === String(this.selectedInstitute)
              );
              if (found) {
                this.selectedInstitute = found.institute_id as any;
                this.syncInstituteSearch();
                this.loadDepartments(this.selectedInstitute);
                this.loadTeams(this.selectedInstitute);
                return;
              }
            }
          } catch (e) {}

          try {
            const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
            if (!this.isSuperAdmin && raw) {
              const u = JSON.parse(raw);
              const instId = u?.institute_id || u?.instituteId || u?.institute || '';
              if (instId) {
                const found = this.institutes.find(
                  (i) => String(i.institute_id) === String(instId)
                );
                if (found) {
                  this.selectedInstitute = found.institute_id as any;
                  this.syncInstituteSearch();
                  this.loadDepartments(this.selectedInstitute);
                  this.loadCampuses([this.selectedInstitute]);
                  this.loadTeams(this.selectedInstitute);
                }
              }
            }
          } catch (e) {}
        }
      },
      error: (err) => console.warn('Failed to load institutes', err),
    });
  }

  private hasFilterValues(): boolean {
    return !!(
      (this.selectedInstitutes && this.selectedInstitutes.length) ||
      this.selectedInstitute ||
      this.instituteSearchTerm.trim() ||
      this.filterCountry ||
      this.filterCity ||
      this.filterIndustry ||
      this.filterSector ||
      this.filterName ||
      this.selectedDepartments.length ||
      this.selectedCampuses.length ||
      this.selectedTeams.length ||
      this.filterCreationDateAfter ||
      this.filterCreationDate ||
      this.filterActiveStatus !== null ||
      this.filterCreatedByMe
    );
  }

  onApply() {
    if (!this.isSuperAdmin && this.instituteSearchTerm.trim()) {
      const typedInstitute = this.instituteSearchTerm.trim().toLowerCase();
      const matchedInstitute = this.institutes.find(
        (institute) => (institute.name || '').trim().toLowerCase() === typedInstitute
      );

      if (!matchedInstitute?.institute_id) {
        try {
          notify('Please select a valid institute from the list.', 'info');
        } catch (e) {}
        return;
      }

      this.selectedInstitute = matchedInstitute.institute_id;
      this.syncInstituteSearch();
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
    this.hasAppliedFilters = true;
    this.loadSchedules(this.selectedInstitute || undefined);
    this.closeFiltersOverlay();
  }

  onReset() {
    this.filterCountry = '';
    this.filterCity = '';
    this.filterIndustry = '';
    this.filterSector = '';
    this.selectedCountries = [];
    this.selectedCities = [];
    this.countrySearch = '';
    this.industrySearch = '';
    this.sectorSearch = '';
    this.selectedInstitute = '';
    this.selectedInstitutes = [];
    this.instituteFilterSearch = '';
    this.instituteSearch = '';
    this.instituteSearchTerm = '';
    this.filterName = '';
    this.scheduleNameOptions = [];
    this.selectedDepartments = [];
    this.selectedCampuses = [];
    this.selectedTeams = [];
    this.campusFilterSearch = '';
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.filterActiveStatus = null;
    this.filterCreatedByMe = false;
    this.search = '';
    this.dataSource.filter = '';
    this.schedules = [];
    this.dataSource.data = [];
    this.hasAppliedFilters = false;
    try {
      if (this.scheduleInstituteInput?.nativeElement) {
        this.scheduleInstituteInput.nativeElement.value = '';
      }
    } catch (e) {
      /* noop */
    }
    try {
      sessionStorage.removeItem('schedule_return_state');
    } catch (e) {}
    this.refreshInstituteScope();
    this.closeFiltersOverlay();
  }

  onInstituteSelected(id: string) {
    this.selectedInstitute = id || '';
  }

  onInstituteChange(id: string) {
    this.selectedInstitute = id || '';
    this.syncInstituteSearch();
    this.loadScheduleNameOptions();
    if (this.selectedInstitute) {
      this.loadDepartments(this.selectedInstitute);
      this.loadCampuses([this.selectedInstitute]);
      this.loadTeams(this.selectedInstitute);
    } else {
      this.scheduleNameOptions = [];
      this.filterName = '';
      this.departments = [];
      this.campuses = [];
      this.teams = [];
      this.categories = [];
    }
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

  filteredScheduleNames() {
    const q = (this.filterName || '').trim().toLowerCase();
    if (!q) return this.scheduleNameOptions;
    return this.scheduleNameOptions.filter((name) =>
      String(name || '')
        .toLowerCase()
        .includes(q)
    );
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

  loadDepartments(instId?: string) {
    if (!instId) {
      this.departments = [];
      return;
    }
    const url = `${API_BASE}/get-department-list`;
    this.http.get<any>(url, { params: { institute_id: instId } }).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.departments = arr.map((d: any) => ({
          id: d.dept_id || d.id || d.deptId || '',
          name: d.name || d.dept_name || '',
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
    this.http.get<any>(url, { params: { institute_id: instId } }).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.teams = arr.map((t: any) => ({
          id: t.team_id || t.id || t.teamId || '',
          name: t.name || t.team_name || '',
        }));
      },
      error: (err) => {
        console.warn('Failed to load teams', err);
        this.teams = [];
      },
    });
  }

  private loadOrganizationOptions(instituteIds: string[]): void {
    const ids = (instituteIds || []).filter(Boolean);
    if (!ids.length) {
      this.departments = [];
      this.campuses = [];
      this.teams = [];
      return;
    }

    const loadUnique = (
      endpoint: string,
      idKeys: string[],
      nameKeys: string[],
      assign: (items: Array<{ id: string; name: string }>) => void
    ) => {
      forkJoin(
        ids.map((id) =>
          this.http.get<any>(`${API_BASE}/${endpoint}`, { params: { institute_id: id } })
        )
      ).subscribe({
        next: (responses) => {
          const unique = new Map<string, { id: string; name: string }>();
          responses.forEach((res) => {
            const records = Array.isArray(res) ? res : res?.data || res?.campuses || [];
            records.forEach((record: any) => {
              const id = String(idKeys.map((key) => record?.[key]).find(Boolean) || '');
              const name = String(nameKeys.map((key) => record?.[key]).find(Boolean) || '');
              if (id && name && !unique.has(id)) unique.set(id, { id, name });
            });
          });
          assign(
            Array.from(unique.values()).sort((a, b) => a.name.localeCompare(b.name))
          );
        },
        error: () => assign([]),
      });
    };

    loadUnique(
      'get-department-list',
      ['department_id', 'dept_id', 'id', 'deptId'],
      ['name', 'department_name', 'dept_name'],
      (items) => (this.departments = items)
    );
    loadUnique(
      'get-campus-list',
      ['campus_id', 'id'],
      ['campus_name', 'name'],
      (items) => (this.campuses = items)
    );
    loadUnique(
      'get-teams-list',
      ['team_id', 'id', 'teamId'],
      ['name', 'team_name'],
      (items) => (this.teams = items)
    );
  }

  private loadCampuses(instituteIds: string[]): void {
    const ids = (instituteIds || []).filter(Boolean);
    if (!ids.length) {
      this.campuses = [];
      return;
    }
    forkJoin(
      ids.map((id) =>
        this.http.get<any>(`${API_BASE}/get-campus-list`, { params: { institute_id: id } })
      )
    ).subscribe({
      next: (responses) => {
        const unique = new Map<string, { id: string; name: string }>();
        responses.forEach((res) => {
          const records = Array.isArray(res) ? res : res?.data || res?.campuses || [];
          records.forEach((campus: any) => {
            const id = String(campus?.campus_id || campus?.id || '');
            const name = String(campus?.campus_name || campus?.name || '');
            if (id && name && !unique.has(id)) unique.set(id, { id, name });
          });
        });
        this.campuses = Array.from(unique.values()).sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      },
      error: () => (this.campuses = []),
    });
  }

  loadScheduleNameOptions() {
    if (!this.selectedInstitute) {
      this.scheduleNameOptions = [];
      return;
    }
    const institute = this.selectedInstitute;
    let url = `${API_BASE}/get-exam-schedule-details?institute_id=${encodeURIComponent(institute)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        const names = arr
          .map((s: any) => String(s.title || s.testName || s.name || '').trim())
          .filter((name: string) => !!name);
        this.scheduleNameOptions = Array.from(new Set(names));
      },
      error: () => {
        this.scheduleNameOptions = [];
      },
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item: any, property: string) =>
      property === 'schedule' ? item.start : item[property];
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.globalInstituteSub?.unsubscribe();
    this.saveScheduleReturnState();
  }

  applyFilter(value: string) {
    const q = (value || '').trim().toLowerCase();
    this.search = q;
    this.dataSource.filterPredicate = (d: any, filter: string) => {
      return (
        (d.title || '').toLowerCase().includes(filter) ||
        (d.institute || '').toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = q;
  }

  loadSchedules(institute?: string) {
    this.loader.show();
    let url = `${API_BASE}/get-exam-schedule-details`;
    const params: string[] = [];
    if (institute) params.push(`institute_id=${encodeURIComponent(institute)}`);
    if (this.filterCountry) params.push(`country=${encodeURIComponent(this.filterCountry)}`);
    if (this.filterCity) params.push(`city=${encodeURIComponent(this.filterCity)}`);
    if (this.filterIndustry) params.push(`industry=${encodeURIComponent(this.filterIndustry)}`);
    if (this.filterSector) params.push(`sector=${encodeURIComponent(this.filterSector)}`);
    if (this.filterName) params.push(`name=${encodeURIComponent(this.filterName)}`);
    if (this.selectedDepartments && this.selectedDepartments.length)
      params.push(`departments=${encodeURIComponent(this.selectedDepartments.join(','))}`);
    if (this.selectedCampuses && this.selectedCampuses.length)
      params.push(`campuses=${encodeURIComponent(this.selectedCampuses.join(','))}`);
    if (this.selectedTeams && this.selectedTeams.length)
      params.push(`teams=${encodeURIComponent(this.selectedTeams.join(','))}`);
    if (this.filterCreationDateAfter)
      params.push(
        `created_after=${encodeURIComponent(this.toApiDateString(this.filterCreationDateAfter as Date))}`
      );
    if (this.filterCreationDate)
      params.push(
        `created_before=${encodeURIComponent(this.toApiDateString(this.filterCreationDate as Date))}`
      );
    if (this.filterActiveStatus !== null && typeof this.filterActiveStatus !== 'undefined') {
      params.push(`active=${encodeURIComponent(String(!this.filterActiveStatus))}`);
    }
    if (this.filterCreatedByMe) {
      try {
        const storedUserId = sessionStorage.getItem('user_id');
        const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
        if (storedUserId) {
          params.push(`created_by=${encodeURIComponent(storedUserId)}`);
        } else if (raw) {
          const obj = JSON.parse(raw);
          const userId = obj?.user_id || obj?.userId || obj?.id || obj?._id;
          if (userId) {
            params.push(`created_by=${encodeURIComponent(String(userId))}`);
          }
        }
      } catch (e) {}
    }
    if (params.length) url += `?${params.join('&')}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.schedules = arr.map((s: any, idx: number) => {
          const instObj = s.institute && typeof s.institute === 'object' ? s.institute : null;
          const instituteName = instObj
            ? instObj.name || instObj.institute_name || ''
            : typeof s.institute === 'string'
              ? s.institute
              : s.institute_name || '';
          const instituteId = instObj
            ? instObj.institute_id || instObj.id || ''
            : s.institute_id || s.instituteId || '';

          const formatDate = (v: any) => {
            if (!v) return '';
            const date = v instanceof Date ? v : new Date(v);
            if (isNaN(date.getTime())) return String(v);
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const months = [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ];
            const dayName = days[date.getDay()];
            const dd = String(date.getDate()).padStart(2, '0');
            const mmm = months[date.getMonth()];
            const yyyy = date.getFullYear();
            const hh = String(date.getHours()).padStart(2, '0');
            const mm = String(date.getMinutes()).padStart(2, '0');
            return `${dayName} ${dd}-${mmm}-${yyyy} ${hh}:${mm}`;
          };

          return {
            id: s.id || s.schedule_id || s._id || String(idx),
            title: s.title || s.testName || s.name || 'Untitled',
            institute: instituteName,
            institute_id: instituteId,
            start: formatDate(s.start_time || s.startDateTime || s.start || null),
            end: formatDate(s.end_time || s.endDateTime || s.end || null),
            publish:
              typeof s.publish !== 'undefined'
                ? s.publish
                : typeof s.published !== 'undefined'
                  ? !!s.published
                  : false,
            manual_review_enabled:
              typeof s.manual_review_enabled !== 'undefined'
                ? !!s.manual_review_enabled
                : typeof s.manualReviewEnabled !== 'undefined'
                  ? !!s.manualReviewEnabled
                  : false,
            review_mode: (s.review_mode || s.reviewMode || s.settings?.review_mode || '')
              .toString()
              .toLowerCase(),
            started_student_count: Number(s.started_student_count ?? 0),
            assigned_users: Array.isArray(s.assigned_users) ? s.assigned_users : [],
            raw: s,
          };
        });

        this.dataSource.data = this.schedules;
        this.dataSource.paginator = this.paginator;
        try {
          this.loader.hide();
        } catch (e) {}
      },
      complete: () => {
        try {
          this.loader.hide();
        } catch (e) {}
      },
      error: (err) => {
        console.error('Failed to load schedules', err);
        this.schedules = [];
        this.dataSource.data = this.schedules;
        this.dataSource.paginator = this.paginator;
        if (err?.status !== 404) {
          const msg = err?.error?.statusMessage || err?.message || 'Failed to load scheduled tests';
          try {
            notify(msg, 'error');
          } catch (e) {}
        }
        try {
          this.loader.hide();
        } catch (e) {}
      },
    });
  }

  viewSchedule(row: any) {
    try {
      const payload = row && row.raw ? row.raw : row;
      this.selectedSchedule = payload;
    } catch (e) {
      this.selectedSchedule = row;
    }
  }

  closeModal() {
    this.selectedSchedule = null;
  }

  getReviewMode(schedule: any): string {
    const configuredMode = (schedule?.review_mode || schedule?.reviewMode || '')
      .toString()
      .toLowerCase();
    if (configuredMode) return configuredMode;
    return schedule?.instant_review || schedule?.user_review ? 'instant' : 'no_review';
  }

  isReviewConfigured(schedule: any): boolean {
    return this.getReviewMode(schedule) !== 'no_review';
  }

  isMultipleReview(schedule: any): boolean {
    if (!schedule) return false;
    const val =
      schedule.multiple_review ??
      schedule.multiplereview ??
      schedule.multipleReview ??
      schedule.is_multiple_review ??
      schedule.settings?.multiple_review;
    if (typeof val === 'boolean') return val;
    if (typeof val === 'number') return val === 1;
    if (typeof val === 'string')
      return ['1', 'true', 'yes', 'on'].includes(val.trim().toLowerCase());
    return !!val;
  }

  formatReviewAvailabilityDate(v: any): string {
    if (!v) return '—';
    try {
      const d = v instanceof Date ? v : new Date(v);
      if (isNaN(d.getTime())) return String(v);
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const dd = String(d.getDate()).padStart(2, '0');
      const mmm = months[d.getMonth()];
      const yyyy = d.getFullYear();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      return `${dd}-${mmm}-${yyyy}, ${hh}:${mm}`;
    } catch (e) {
      return String(v);
    }
  }

  formatScheduleReviewDate(v: any): string {
    if (!v) return '—';
    try {
      const d = v instanceof Date ? v : new Date(v);
      if (isNaN(d.getTime())) return String(v);
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const dd = String(d.getDate()).padStart(2, '0');
      const mmm = months[d.getMonth()];
      const yyyy = d.getFullYear();
      let hours = d.getHours();
      const minutes = String(d.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const hh = String(hours).padStart(2, '0');
      return `${dd}-${mmm}-${yyyy} at ${hh}:${minutes} ${ampm}`;
    } catch (e) {
      return String(v);
    }
  }

  getReviewModeLabel(schedule: any): string {
    const mode = this.getReviewMode(schedule);
    if (mode === 'instant') {
      return 'Instant Review – available immediately after submission';
    }
    if (mode === 'no_review') {
      return 'No Review – results will not be shown to students';
    }
    if (mode === 'after_schedule_ends') {
      const endTime = schedule?.end_time || schedule?.end || schedule?.endDateTime;
      const formattedEnd = endTime ? this.formatReviewAvailabilityDate(endTime) : '—';
      return `Available after the test ends (after ${formattedEnd})`;
    }
    if (mode === 'after_everyone_finishes') {
      return 'Available once all students have completed the test';
    }
    if (mode === 'scheduled') {
      const reviewAt = schedule?.review_at || schedule?.reviewAt;
      const formattedReview = reviewAt ? this.formatScheduleReviewDate(reviewAt) : '—';
      return `Available from ${formattedReview}`;
    }
    if (mode === 'manual') {
      return 'Manual Review – review is given later';
    }
    return mode.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  }

  getReviewDetailsLabel(schedule: any): string {
    const details = [
      schedule?.show_score ? 'Score' : '',
      schedule?.show_correct_answers ? 'Correct answers' : '',
      schedule?.show_student_answers ? 'Student answers' : '',
      schedule?.show_explanations ? 'Explanations' : '',
    ].filter(Boolean);
    return details.length ? details.join(', ') : 'No result details selected';
  }

  formatDate(v: any) {
    if (!v) return '';
    try {
      const d = v instanceof Date ? v : new Date(v);
      if (isNaN(d.getTime())) return String(v);
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const dayName = days[d.getDay()];
      const dd = String(d.getDate()).padStart(2, '0');
      const mmm = months[d.getMonth()];
      const yyyy = d.getFullYear();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      return `${dayName} ${dd}-${mmm}-${yyyy} ${hh}:${mm}`;
    } catch (e) {
      return String(v);
    }
  }

  getAssignedName(u: any): string {
    if (!u && u !== 0) return '';
    if (typeof u === 'string' || typeof u === 'number') return String(u);
    if (typeof u === 'object')
      return u.name || u.user_name || u.full_name || u.userName || u.displayName || '';
    return '';
  }

  getAssignedEmail(u: any): string {
    if (!u && u !== 0) return '';
    if (typeof u === 'string' || typeof u === 'number') return '';
    if (typeof u === 'object')
      return u.email || u.user_email || u.email_address || u.userEmail || '';
    return '';
  }

  private getScheduleId(row: any): any {
    if (!row) return null;
    return (
      row.schedule_id ||
      row.id ||
      row._id ||
      row.scheduleId ||
      row.raw?.schedule_id ||
      row.raw?.id ||
      row.raw?._id ||
      row.raw?.scheduleId ||
      null
    );
  }

  editSchedule(row: any) {
    const id = this.getScheduleId(row);
    if (!id) {
      try {
        notify('Schedule id missing. Unable to edit this schedule.', 'error');
      } catch (e) {}
      return;
    }
    try {
      const source = row && row.raw ? row.raw : row;
      const payload = { ...source, schedule_id: source.schedule_id || id };
      if (typeof row?.publish !== 'undefined') payload.publish = !!row.publish;
      try {
        const normalizeBool = (v: any) => {
          if (typeof v === 'boolean') return v;
          if (typeof v === 'number') return v === 1;
          if (typeof v === 'string') return ['1', 'true', 'yes', 'on'].includes(v.toLowerCase());
          return !!v;
        };
        const pub =
          payload.publish ??
          payload.published ??
          payload.is_published ??
          payload.isPublished ??
          payload.published_flag;
        const rev =
          payload.instant_review ??
          payload.user_review ??
          payload.userreview ??
          payload.review_available ??
          payload.review ??
          payload.allow_review;
        const multipleReview =
          payload.multiple_review ??
          payload.multiplereview ??
          payload.multipleReview ??
          payload.is_multiple_review ??
          payload.settings?.multiple_review;
        if (typeof pub !== 'undefined') payload.publish = normalizeBool(pub);
        if (typeof rev !== 'undefined') {
          payload.instant_review = normalizeBool(rev);
          payload.user_review = normalizeBool(rev);
        }
        if (typeof multipleReview !== 'undefined')
          payload.multiple_review = normalizeBool(multipleReview);

        try {
          const au =
            payload.assigned_users ||
            payload.assignedUsers ||
            payload.assignees ||
            payload.users ||
            [];
          let normalized: string[] = [];
          if (!au) normalized = [];
          else if (Array.isArray(au)) {
            normalized = au
              .map((x: any) => {
                if (!x && x !== 0) return '';
                if (typeof x === 'string' || typeof x === 'number') return String(x);
                if (typeof x === 'object')
                  return String(x.user_id || x.id || x._id || x.uid || x.userId || x.value || '');
                return String(x);
              })
              .filter((v: string) => v && v.length);
          } else if (typeof au === 'string') {
            normalized = au
              .split(',')
              .map((s) => s.trim())
              .filter((s) => s.length);
          } else if (typeof au === 'object') {
            const v = au.user_id || au.id || au._id || au.uid || au.userId || '';
            normalized = v ? [String(v)] : [];
          }
          payload.assigned_users = normalized;
        } catch (e) {
          payload.assigned_users = payload.assigned_users || [];
        }
      } catch (e) {}
      sessionStorage.setItem('edit_exam', JSON.stringify(payload));
    } catch (e) {}
    this.saveScheduleReturnState();
    this.router.navigate(['/schedule-exam']);
  }

  deleteSchedule(row: any) {
    this.confirmService
      .confirm({
        title: 'Delete Scheduled Test',
        message: 'Delete this scheduled test?',
        confirmText: 'Delete',
        cancelText: 'Cancel',
      })
      .subscribe((ok) => {
        if (!ok) return;
        const id = row.id;
        const current_user = sessionStorage.getItem('user_id');
        const url = `${this.baseUrl}/delete/exam-schedule/${encodeURIComponent(id)}?current_user=${encodeURIComponent(String(current_user))}`;
        this.http.delete<any>(url).subscribe({
          next: () => {
            this.schedules = this.schedules.filter((s) => s.id !== id);
            this.dataSource.data = this.schedules;
            try {
              notify('Schedule deleted', 'success');
              this.loadSchedules(this.selectedInstitute || undefined);
            } catch (e) {}
          },
          error: (err) => {
            console.error('Failed to delete schedule', err);
            try {
              notify('Failed to delete schedule', 'error');
            } catch (e) {}
            this.schedules = this.schedules.filter((s) => s.id !== id);
            this.dataSource.data = this.schedules;
          },
        });
      });
  }

  togglePublish(row: any) {
    const newState = !row.publish;
    const startedStudentCount = Number(
      row.started_student_count ?? row.raw?.started_student_count ?? 0
    );
    const hasStartedStudents = !newState && startedStudentCount > 0;
    const studentLabel = startedStudentCount === 1 ? 'student has' : 'students have';
    const message = hasStartedStudents
      ? `${startedStudentCount} ${studentLabel} already started this test.\n\nUnpublishing this schedule will stop their ongoing attempts. To make the test available again, you must create and publish a new test schedule.\n\nAre you sure you want to continue?`
      : `Are you sure you want to ${newState ? 'publish' : 'unpublish'} this schedule?`;

    this.confirmService
      .confirm({
        title: (newState ? 'Publish' : 'Unpublish') + ' Schedule',
        message,
        confirmText: hasStartedStudents ? 'Confirm Unpublish' : newState ? 'Publish' : 'Unpublish',
        cancelText: 'Cancel',
      })
      .subscribe((ok) => {
        if (!ok) return;
        const prev = row.publish;
        row.publish = newState;
        if (row.raw) {
          row.raw.publish = newState;
          row.raw.published = newState;
        }
        const id = row.id || row.schedule_id;
        const action = newState ? 'activate' : 'deactivate';
        const url = `${this.baseUrl}/exam-schedule/${action}/${encodeURIComponent(String(id))}`;
        const payload = {
          current_user: (() => {
            try {
              const raw = sessionStorage.getItem('user');
              return raw ? JSON.parse(raw).user_id || JSON.parse(raw).userId : undefined;
            } catch (e) {
              return undefined;
            }
          })(),
        };
        this.http.put<any>(url, payload).subscribe({
          next: (res) => {
            try {
              notify(res?.statusMessage || 'Schedule updated', 'success');
            } catch (e) {}
          },
          error: (err) => {
            console.error('Failed to update publish', err);
            row.publish = prev;
            if (row.raw) {
              row.raw.publish = prev;
              row.raw.published = prev;
            }
            const msg = err?.error?.statusMessage || err?.message || 'Failed to update schedule';
            try {
              notify(msg, 'error');
            } catch (e) {}
          },
        });
      });
  }

  isManualReview(s: any): boolean {
    const mode = (
      s?.review_mode ||
      s?.reviewMode ||
      s?.raw?.review_mode ||
      s?.raw?.reviewMode ||
      ''
    )
      .toString()
      .toLowerCase();
    return mode === 'manual';
  }

  toggleManualReview(row: any) {
    if (!this.isManualReview(row)) return;

    const newState = !row.manual_review_enabled;
    const prev = row.manual_review_enabled;
    row.manual_review_enabled = newState;
    if (row.raw) {
      row.raw.manual_review_enabled = newState;
    }

    const payload = {
      id: row.id || row.schedule_id || row.raw?.id || row.raw?.schedule_id,
      schedule_id: row.id || row.schedule_id || row.raw?.id || row.raw?.schedule_id,
      manual_review_enabled: newState,
    };

    this.http.post<any>(`${this.baseUrl}/update-exam-schedule`, payload).subscribe({
      next: (res) => {
        try {
          notify(res?.statusMessage || 'Manual review status updated', 'success');
        } catch (e) {}
      },
      error: (err) => {
        console.error('Failed to update manual review status', err);
        row.manual_review_enabled = prev;
        if (row.raw) {
          row.raw.manual_review_enabled = prev;
        }
        const msg =
          err?.error?.statusMessage || err?.message || 'Failed to update manual review status';
        try {
          notify(msg, 'error');
        } catch (e) {}
      },
    });
  }

  openScheduleTest(): void {
    this.saveScheduleReturnState();
    this.router.navigate(['/schedule-exam']);
  }

  saveScheduleReturnState(): void {
    try {
      sessionStorage.setItem(
        'schedule_return_state',
        JSON.stringify({
          instituteId:
            this.globalInstituteContext.activeInstituteId || this.selectedInstitute || '',
          globalInstituteActive: this.globalInstituteContext.isGlobalFilterActive(),
          search: this.search,
          selectedInstitute: this.selectedInstitute,
          instituteSearch: this.instituteSearch,
          filterCountry: this.filterCountry,
          filterCity: this.filterCity,
          filterIndustry: this.filterIndustry,
          filterSector: this.filterSector,
          filterName: this.filterName,
          selectedDepartments: this.selectedDepartments,
          selectedCampuses: this.selectedCampuses,
          selectedTeams: this.selectedTeams,
          filterCreationDateAfter: this.filterCreationDateAfter
            ? this.filterCreationDateAfter.toISOString()
            : null,
          filterCreationDate: this.filterCreationDate
            ? this.filterCreationDate.toISOString()
            : null,
          filterActiveStatus: this.filterActiveStatus,
          filterCreatedByMe: this.filterCreatedByMe,
          hasAppliedFilters: this.hasAppliedFilters,
          schedules: this.schedules,
        })
      );
    } catch (e) {}
  }

  private restoreScheduleReturnState(): void {
    try {
      const raw = sessionStorage.getItem('schedule_return_state');
      if (!raw) return;
      sessionStorage.removeItem('schedule_return_state');
      const state = JSON.parse(raw);
      this.search = state?.search || '';
      this.selectedInstitute = state?.selectedInstitute || '';
      this.activeInstituteId = state?.instituteId || this.selectedInstitute || '';
      this.instituteSearch = '';
      this.filterCountry = state?.filterCountry || '';
      this.filterCity = state?.filterCity || '';
      this.filterIndustry = state?.filterIndustry || '';
      this.filterSector = state?.filterSector || '';
      this.filterName = state?.filterName || '';
      this.selectedDepartments = Array.isArray(state?.selectedDepartments)
        ? state.selectedDepartments
        : [];
      this.selectedCampuses = Array.isArray(state?.selectedCampuses)
        ? state.selectedCampuses
        : [];
      this.selectedTeams = Array.isArray(state?.selectedTeams) ? state.selectedTeams : [];
      this.filterCreationDateAfter = state?.filterCreationDateAfter
        ? new Date(state.filterCreationDateAfter)
        : null;
      this.filterCreationDate = state?.filterCreationDate
        ? new Date(state.filterCreationDate)
        : null;
      this.filterActiveStatus =
        typeof state?.filterActiveStatus === 'boolean'
          ? state.filterActiveStatus
          : state?.filterActiveStatus === null || typeof state?.filterActiveStatus === 'undefined'
            ? true
            : !!state.filterActiveStatus;
      this.filterCreatedByMe = !!state?.filterCreatedByMe;
      this.hasAppliedFilters = true;
      this.schedules = Array.isArray(state?.schedules) ? state.schedules : [];
      this.dataSource.data = this.schedules;
      this.applyFilter(this.search || '');
      const inst =
        this.selectedInstitute ||
        this.activeInstituteId ||
        this.globalInstituteContext.activeInstituteId ||
        undefined;
      this.loadSchedules(inst);
    } catch (e) {
      try {
        sessionStorage.removeItem('schedule_return_state');
      } catch (_) {}
    }
  }

  private resetForInstituteChange(instituteId: string): void {
    this.activeInstituteId = instituteId;
    this.selectedInstitute = instituteId;
    this.instituteSearch = '';
    this.schedules = [];
    this.dataSource.data = [];
    this.departments = [];
    this.campuses = [];
    this.teams = [];
    this.categories = [];
    this.selectedDepartments = [];
    this.selectedCampuses = [];
    this.selectedTeams = [];
    this.search = '';
    this.dataSource.filter = '';
    this.filterCountry = '';
    this.filterCity = '';
    this.filterIndustry = '';
    this.filterSector = '';
    this.filterName = '';
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.filterActiveStatus = null;
    this.filterCreatedByMe = false;
    this.hasAppliedFilters = false;
    this.selectedSchedule = null;

    if (this.paginator) {
      this.paginator.firstPage();
      this.paginator.length = 0;
    }
    this.closeFiltersOverlay();

    try {
      sessionStorage.removeItem('schedule_return_state');
    } catch (e) {}

    this.loadDepartments(instituteId);
    this.loadCampuses([instituteId]);
    this.loadTeams(instituteId);
    this.syncInstituteSearch();
  }

  private resetAfterGlobalInstituteClear(): void {
    this.activeInstituteId = '';
    this.selectedInstitute = '';
    this.instituteSearch = '';
    this.schedules = [];
    this.dataSource.data = [];
    this.departments = [];
    this.campuses = [];
    this.teams = [];
    this.categories = [];
    this.selectedDepartments = [];
    this.selectedCampuses = [];
    this.selectedTeams = [];
    this.search = '';
    this.dataSource.filter = '';
    this.filterCountry = '';
    this.filterCity = '';
    this.filterIndustry = '';
    this.filterSector = '';
    this.filterName = '';
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.filterActiveStatus = null;
    this.filterCreatedByMe = false;
    this.hasAppliedFilters = false;
    this.selectedSchedule = null;
    if (this.paginator) {
      this.paginator.firstPage();
      this.paginator.length = 0;
    }
    this.closeFiltersOverlay();
    try {
      sessionStorage.removeItem('schedule_return_state');
    } catch (e) {}
    this.loadInstitutes();
  }
}
