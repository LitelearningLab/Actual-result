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
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { API_BASE } from 'src/app/shared/api.config';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { notify } from 'src/app/shared/global-notify';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { SharedModule } from 'src/app/shared/shared.module';

export interface Institute {
  id: number;
  name: string;
  short: string;
  city?: string;
  state?: string;
  country?: string;
  active: boolean;
  primary_contact?: string;
  primary_email?: string;
  primary_contact_person?: string;
  primary_contact_email?: string;
  primary_contact_phone?: string;
  website?: string;
  max_users?: number;
  admins_count?: number;
  users_count?: number;
  industry_type?: string;
  industry_sector?: string;
  subscription_start?: string;
  subscription_end?: string;
  active_status?: boolean;
  // internal id from backend (UUID) - not shown in UI but used for actions
  institute_id?: string;
  raw?: any;
}

@Component({
  selector: 'app-view-institutes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    OverlayModule,
    PortalModule,
  ],
  templateUrl: './view-institutes.component.html',
  styleUrls: ['./view-institutes.component.scss'],
})
export class ViewInstitutesComponent implements OnInit, AfterViewInit, OnDestroy {
  // Show only requested columns in list-card table (include subscription dates and active)
  columns = [
    'sno',
    'name',
    'industry_type',
    'industry_sector',
    'primary_contact_person',
    'subscription_start',
    'subscription_end',
    'active',
    'actions',
  ];

  filter = '';
  citySearch = '';

  industryTypes = ['School', 'College', 'BPO', 'Bank', 'IT'];
  industrySectors = ['School', 'Engineering', 'Arts', 'Healthcare', 'Finance', 'Banking', 'IT'];

  // Industry -> Sector dependency map (mirrors institute-register.component.ts)
  private sectorMap: Record<string, string[]> = {
    School: ['School'],
    College: ['Engineering', 'Arts'],
    BPO: ['Healthcare', 'Finance'],
    Bank: ['Bank'],
    IT: ['IT'],
  };

  // filters
  filters: any = { name: '', industry: '', sector: '', country: '', city: '', active_status: '' };
  countries: Array<{ code: string; name: string }> = [];
  states: Array<{ code: string; name: string }> = [];
  cities: Array<{ code: string; name: string }> = [];
  instituteOptions: Array<{ id: string; name: string }> = [];
  loadingCountries = false;
  loadingCities = false;
  loadingInstitutes = false;
  // raw location hierarchy returned by API (countries -> states -> cities)
  private locationHierarchyRaw: any[] = [];
  // City options for the filter dropdown, scoped to the selected country via a server-side
  // location-hierarchy?country_id=... call (mirrors LocationService.getStatesForCountry).
  filterCityOptions: Array<{ code: string; name: string }> = [];

  // search terms for the searchable filter dropdowns
  countrySearch = '';
  industrySearch = '';
  sectorSearch = '';
  instituteFilterSearch = '';
  selectedInstitutes: string[] = [];
  isActive: boolean = true;
  selectedCountries: string[] = [];
  selectedCities: string[] = [];
  selectedActiveStatuses: boolean[] = [];
  activeStatusOptions = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
  ];

  // Replace single string industry/sector selections with arrays:
  selectedIndustries: string[] = [];
  selectedSectors: string[] = [];

  institutes: Institute[] = [];
  dataSource = new MatTableDataSource<Institute>([]);
  hasAppliedFilters = false;
  // keep raw response objects so detail modal can show full fields
  private rawRecords: any[] = [];

  selectedInstitute: any = null; // used for modal detail view

  getTeamsForDept(dept: any): any[] {
    if (!this.selectedInstitute) return [];

    // 1. Direct teams array on department object if present
    if (typeof dept === 'object' && dept && Array.isArray(dept.teams) && dept.teams.length > 0) {
      return dept.teams;
    }

    let deptName = typeof dept === 'string' ? dept : dept?.name || '';
    let deptId = typeof dept === 'object' && dept ? dept?.dept_id || dept?.department_id || '' : '';
    let dNameLower = (deptName || '').toLowerCase().trim();

    // 2. Look up matching department object from selectedInstitute.departments if needed
    const depts = this.selectedInstitute.departments || [];
    const matchedDept = depts.find((d: any) => {
      if (typeof d === 'string') return d.toLowerCase().trim() === dNameLower;
      if (deptId && (d.dept_id === deptId || d.department_id === deptId)) return true;
      return (d.name || '').toLowerCase().trim() === dNameLower;
    });

    if (matchedDept && typeof matchedDept === 'object') {
      if (!deptId) deptId = matchedDept.dept_id || matchedDept.department_id || '';
      if (!deptName) {
        deptName = matchedDept.name || '';
        dNameLower = deptName.toLowerCase().trim();
      }
      if (Array.isArray(matchedDept.teams) && matchedDept.teams.length > 0) {
        return matchedDept.teams;
      }
    }

    // 3. Fall back to matching flat selectedInstitute.teams list
    const teamsList = this.selectedInstitute.teams || [];
    if (!teamsList.length) return [];

    return teamsList.filter((t: any) => {
      if (!t) return false;
      const tName = (typeof t === 'string' ? t : t?.name || '').trim();
      if (!tName) return false;

      let explicitDeptId = '';
      let explicitDeptName = '';
      if (typeof t === 'object' && t) {
        explicitDeptId = t.department_id || t.dept_id || '';
        explicitDeptName =
          typeof t.department_name === 'string'
            ? t.department_name
            : typeof t.department === 'string'
            ? t.department
            : t.department?.name || '';
      }

      if (explicitDeptId && deptId && explicitDeptId === deptId) {
        return true;
      }
      if (explicitDeptName && dNameLower && explicitDeptName.toLowerCase().trim() === dNameLower) {
        return true;
      }
      // If team has no explicit department assigned, fall back to matching it under the department
      if (!explicitDeptId && !explicitDeptName) {
        return true;
      }
      return false;
    });
  }

  showFilters = false; // control visibility of filter-block (mini modal)
  editing = false;
  editableInstitute: any = null;
  // reactive edit form to mirror the register page
  editForm: FormGroup | null = null;

  private apiUrl = `${API_BASE}/get-institutes`;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;

  private filtersOverlayRef: OverlayRef | null = null;
  private appliedStateSnapshot: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private loader: LoaderService,
    private pageMeta: PageMetaService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private confirmService: ConfirmService
  ) {
    this.loadInstituteOptions();
    this.loadCountries();
  }

  // Helpers to resolve campus address fields into user-friendly strings
  campusAddress(cp: any): string {
    return cp?.address || cp?.address_line1 || cp?.address1 || cp?.street || cp?.address_line || '';
  }

  campusCityName(cp: any): string {
    try {
      if (!cp) return '';
      if (cp.city && typeof cp.city === 'object') return cp.city.city_name || cp.city.name || '';
      if (cp.city_name) return cp.city_name;
      const code = cp.city || cp.city_code || cp.cityId || cp.city_id || '';
      if (code) {
        if (this.cities && this.cities.length) {
          const found = this.cities.find(
            (c) => String(c.code) === String(code) || String(c.name) === String(code)
          );
          if (found) return found.name;
        }
        const node = this.findLocationNodeById(code);
        if (node) return node.city_name || node.name || node.city || '';
      }
      return String(cp.city || cp.city_name || '');
    } catch (e) {
      return '';
    }
  }

  campusStateName(cp: any): string {
    try {
      if (!cp) return '';
      if (cp.state && typeof cp.state === 'object')
        return cp.state.state_name || cp.state.name || '';
      if (cp.state_name) return cp.state_name;
      const code = cp.state || cp.state_code || cp.stateId || cp.state_id || '';
      if (code) {
        if (this.states && this.states.length) {
          const found = this.states.find(
            (s) => String(s.code) === String(code) || String(s.name) === String(code)
          );
          if (found) return found.name;
        }
        const node = this.findLocationNodeById(code);
        if (node) return node.state_name || node.name || node.state || '';
      }
      return String(cp.state || cp.state_name || '');
    } catch (e) {
      return '';
    }
  }

  campusCountryName(cp: any): string {
    try {
      if (!cp) return '';
      if (cp.country && typeof cp.country === 'object')
        return cp.country.country_name || cp.country.name || '';
      if (cp.country_name) return cp.country_name;
      const code = cp.country || cp.country_code || cp.countryId || cp.country_id || '';
      if (code) {
        if (this.countries && this.countries.length) {
          const found = this.countries.find(
            (c) => String(c.code) === String(code) || String(c.name) === String(code)
          );
          if (found) return found.name;
        }
        const node = this.findLocationNodeById(code);
        if (node) return node.country_name || node.name || node.country || '';
      }
      return String(cp.country || cp.country_name || '');
    } catch (e) {
      return '';
    }
  }

  // Recursively search loaded location hierarchy for a node matching id/code/name
  private findLocationNodeById(id: any): any {
    try {
      if (!id) return null;
      const needle = String(id).toLowerCase();
      const queue = Array.isArray(this.locationHierarchyRaw) ? [...this.locationHierarchyRaw] : [];
      while (queue.length) {
        const node = queue.shift();
        if (!node) continue;
        const checks = [
          node.country_code,
          node.code,
          node.id,
          node.city_code,
          node.city_name,
          node.name,
          node.state_code,
          node.state_name,
          node.city,
          node.country,
          node.state,
        ];
        for (const v of checks) {
          if (v && String(v).toLowerCase() === needle) return node;
        }
        if (Array.isArray(node.states)) queue.push(...node.states);
        if (Array.isArray(node.cities)) queue.push(...node.cities);
        if (Array.isArray(node.children)) queue.push(...node.children);
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  campusPostal(cp: any): string {
    return cp?.pin_code || cp?.pincode || cp?.pin || cp?.postal_code || '';
  }

  ngOnInit(): void {
    try {
      this.pageMeta.setMeta('Institutes', 'View and manage registered institutes');
    } catch (e) {
      /* ignore if service not available */
    }
    this.restoreInstituteReturnState();
  }
  ngAfterViewInit(): void {
    try {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch (e) { }
  }

  ngOnDestroy(): void {
    this.saveInstituteReturnState();
  }

  applyFilter(value: string) {
    const q = (value || '').trim().toLowerCase();
    this.dataSource.filter = q;
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  get appliedFilterChips(): Array<{ key: string; label: string; removable: boolean }> {
    if (!this.hasAppliedFilters) return [];
    const chips: Array<{ key: string; label: string; removable: boolean }> = [];

    if (this.selectedInstitutes.length)
      chips.push({
        key: 'selectedInstitutes',
        label: `Institutes: ${this.selectedInstitutes.length} selected`,
        removable: true,
      });
    if (this.filters.name)
      chips.push({ key: 'name', label: `Institute: ${this.filters.name}`, removable: true });

    if (this.selectedIndustries && this.selectedIndustries.length) {
      chips.push({
        key: 'industry',
        label: `Industry: ${this.selectedIndustries.join(', ')}`,
        removable: true,
      });
    } else if (this.filters.industry) {
      chips.push({ key: 'industry', label: `Industry: ${this.filters.industry}`, removable: true });
    }

    if (this.selectedSectors && this.selectedSectors.length) {
      chips.push({
        key: 'sector',
        label: `Sector: ${this.selectedSectors.join(', ')}`,
        removable: true,
      });
    } else if (this.filters.sector) {
      chips.push({ key: 'sector', label: `Sector: ${this.filters.sector}`, removable: true });
    }

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

    if (this.selectedActiveStatuses && this.selectedActiveStatuses.length) {
      const statusLabels = this.selectedActiveStatuses.map((s) => (s ? 'Active' : 'Inactive'));
      chips.push({
        key: 'active_status',
        label: `Status: ${statusLabels.join(', ')}`,
        removable: true,
      });
    } else if (this.filters.active_status !== '') {
      chips.push({
        key: 'active_status',
        label: `Status: ${this.filters.active_status ? 'Active' : 'Inactive'}`,
        removable: true,
      });
    }

    if (this.selectedCities && this.selectedCities.length) {
      chips.push({
        key: 'city',
        label: `City: ${this.selectedCities.join(', ')}`,
        removable: true,
      });
    } else if (this.filters.city) {
      chips.push({ key: 'city', label: `City: ${this.filters.city}`, removable: true });
    }
    return chips;
  }

  removeAppliedFilter(key: string) {
    if (!key) return;
    if (key === 'selectedInstitutes') this.selectedInstitutes = [];
    else if (key === 'name') this.filters.name = '';
    else if (key === 'industry') {
      this.selectedIndustries = [];
      this.selectedSectors = [];
      this.filters.industry = '';
      this.filters.sector = '';
    } else if (key === 'sector') {
      this.selectedSectors = [];
      this.filters.sector = '';
    } else if (key === 'country') {
      this.selectedCountries = [];
      this.selectedCities = [];
      this.filters.country = '';
      this.filters.city = '';
      this.filterCityOptions = [];
    } else if (key === 'city') {
      this.selectedCities = [];
      this.filters.city = '';
    }
    else if (key === 'active_status') {
      this.selectedActiveStatuses = [];
      this.filters.active_status = '';
    }
    this.refreshInstituteScope();
    this.refreshAfterFilterChipChange();
  }

  clearAppliedFilters() {
    this.resetFilters();
  }
  private refreshAfterFilterChipChange() {
    if (this.appliedFilterChips.length) this.loadInstitutes();
    else {
      this.hasAppliedFilters = false;
      this.institutes = [];
      this.rawRecords = [];
      this.dataSource.data = [];
    }
  }
  private getSelectedName(list: any[], selectedId: any, idKey: string = 'id'): string {
    const found = (list || []).find((item) => String(item?.[idKey]) === String(selectedId));
    return found?.name || String(selectedId || '');
  }

  // City is now a free-text/autocomplete field holding the display name; the backend's city
  // filter expects an id, so resolve the typed/selected name back to its code here.
  private resolveCityId(cityName: string): string {
    const name = String(cityName || '')
      .trim()
      .toLowerCase();
    if (!name) return '';
    const pool = this.filterCityOptions.length ? this.filterCityOptions : this.cities;
    const found = pool.find(
      (c) =>
        String(c.name || '')
          .trim()
          .toLowerCase() === name
    );
    return found ? String(found.code) : '';
  }

  loadInstitutes() {
    const params: any = {};
    if (this.selectedInstitutes && this.selectedInstitutes.length)
      params.institute_id = this.selectedInstitutes.join(',');
    if (this.filters.name) params.name = this.filters.name;

    if (this.selectedIndustries && this.selectedIndustries.length)
      params.industry = this.selectedIndustries.join(',');
    else if (this.filters.industry) params.industry = this.filters.industry;

    if (this.selectedSectors && this.selectedSectors.length)
      params.sector = this.selectedSectors.join(',');
    else if (this.filters.sector) params.sector = this.filters.sector;

    if (this.selectedCountries && this.selectedCountries.length)
      params.country = this.selectedCountries.join(',');
    else if (this.filters.country) params.country = this.filters.country;

    if (this.selectedCities && this.selectedCities.length)
      params.city = this.selectedCities.join(',');
    else {
      const cityName = String(this.filters.city || '').trim();
      if (cityName) params.city = cityName;
    }

    if (this.selectedActiveStatuses && this.selectedActiveStatuses.length)
      params.active_status = this.selectedActiveStatuses.join(',');
    else if (this.filters.active_status !== '') params.active_status = this.filters.active_status;

    this.loader.show();
    this.http.get<any>(this.apiUrl, { params }).subscribe({
      next: (res) => {
        if (res && res.data && Array.isArray(res.data)) {
          this.rawRecords = res.data;
          this.institutes = res.data.map((r: any, idx: number) => ({
            id: idx + 1,
            name: r.name,
            short: r.short_name || r.short || '',
            city:
              r.city ||
              (r.campuses && r.campuses[0] && r.campuses[0].city && r.campuses[0].city.city_name) ||
              '',
            state:
              r.state ||
              (r.campuses &&
                r.campuses[0] &&
                r.campuses[0].state &&
                r.campuses[0].state.state_name) ||
              '',
            country:
              r.country ||
              (r.campuses &&
                r.campuses[0] &&
                r.campuses[0].country &&
                r.campuses[0].country.country_name) ||
              '',
            primary_contact: r.primary_contact_person || '',
            primary_email: r.primary_contact_email || '',
            primary_contact_phone: r.primary_contact_phone || '',
            subscription_start: r.subscription_start || r.subscriptionStart || '',
            subscription_end: r.subscription_end || r.subscriptionEnd || '',
            industry_type: r.industry_type || r.industry || '', // <--- ADD THIS LINE
            industry_sector: r.industry_sector || r.sector || '', // <--- ADD THIS LINE
            active: !!r.active_status,
            raw: r,
          }));
          this.dataSource.data = this.institutes;
        } else {
          this.institutes = [];
          this.dataSource.data = [];
        }
      },
      error: (err) => {
        console.warn('Failed to load institutes:', err);
        try {
          this.loader.hide();
        } catch (e) { }
      },
      complete: () => {
        try {
          this.loader.hide();
        } catch (e) { }
      },
    });
  }

  private hasFilterValues(): boolean {
    return !!(
      (this.selectedInstitutes && this.selectedInstitutes.length) ||
      (this.selectedCountries && this.selectedCountries.length) ||
      (this.selectedIndustries && this.selectedIndustries.length) ||
      (this.selectedSectors && this.selectedSectors.length) ||
      (this.selectedActiveStatuses && this.selectedActiveStatuses.length) ||
      this.filters.name ||
      this.filters.industry ||
      this.filters.sector ||
      this.filters.country ||
      this.filters.city ||
      this.filters.active_status !== ''
    );
  }

  // --- Industry Select All Logic ---
  isAllIndustriesSelected(): boolean {
    const items = this.filteredIndustryTypes || [];
    return items.length > 0 && items.every((item) => this.selectedIndustries.includes(item));
  }

  toggleSelectAllIndustries(): void {
    const items = this.filteredIndustryTypes || [];
    if (this.isAllIndustriesSelected()) {
      this.selectedIndustries = [];
    } else {
      this.selectedIndustries = [...items];
    }
  }

  // --- Sector Select All Logic ---
  isAllSectorsSelected(): boolean {
    const items = this.filteredSectors || [];
    return items.length > 0 && items.every((item) => this.selectedSectors.includes(item));
  }

  toggleSelectAllSectors(): void {
    const items = this.filteredSectors || [];
    if (this.isAllSectorsSelected()) {
      this.selectedSectors = [];
    } else {
      this.selectedSectors = [...items];
    }
  }

  applyFilters() {
    if (!this.selectedInstitutes || !this.selectedInstitutes.length) {
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
    this.loadInstitutes();
    this.closeFiltersOverlay();
  }

  resetFilters() {
    this.filters = { name: '', industry: '', sector: '', country: '', city: '', active_status: '' };

    // --- Clear multi-select arrays ---
    this.selectedInstitutes = [];
    this.selectedCountries = [];
    this.selectedCities = [];
    this.selectedIndustries = [];
    this.selectedSectors = [];
    this.selectedActiveStatuses = [];

    // --- Clear search inputs ---
    this.instituteFilterSearch = '';
    this.countrySearch = '';
    this.citySearch = '';
    this.industrySearch = '';
    this.sectorSearch = '';
    this.filterCityOptions = [];
    this.cities = [];

    // --- Clear table data & applied filter chips ---
    this.institutes = [];
    this.dataSource.data = [];
    this.hasAppliedFilters = false;

    // --- Close filter overlay modal ---
    this.closeFiltersOverlay();
  }

  refresh() {
    if (!this.hasAppliedFilters) {
      try {
        notify('Apply filters to fetch institutes', 'info');
      } catch (e) { }
      return;
    }
    this.loadInstitutes();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  saveAppliedStateSnapshot() {
    this.appliedStateSnapshot = {
      filters: { ...this.filters },
      selectedCountries: [...(this.selectedCountries || [])],
      selectedIndustries: [...(this.selectedIndustries || [])],
      selectedSectors: [...(this.selectedSectors || [])],
      selectedInstitutes: [...(this.selectedInstitutes || [])],
      selectedActiveStatuses: [...(this.selectedActiveStatuses || [])],
    };
  }

  openFiltersOverlay() {
    // Save snapshot of currently applied filter state
    this.saveAppliedStateSnapshot();
    // Ensure city options are loaded if a country is already selected
    const selectedCountryCode = this.selectedCountries?.length
      ? this.selectedCountries.join(',')
      : this.filters.country;
    if (selectedCountryCode) {
      this.loadCitiesForCountry(selectedCountryCode);
    }

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

  // country -> city filtering removed: we now load all cities in loadCountries()

  loadInstituteOptions() {
    const params: any = {};
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

    const url = `${API_BASE}/get-institute-list`;
    this.loadingInstitutes = true;
    this.http.get<any>(url, { params }).subscribe({
      next: (res) => {
        try {
          const data = Array.isArray(res?.data) ? res.data : [];
          // Use the full name in the filter and fall back to the abbreviation only if needed.
          this.instituteOptions = data
            .map((i: any) => ({
              id: i.institute_id || i.id || i._id || i.name || i.institute_name || '',
              name: i.institute_name || i.name || i.short_name || '',
            }))
            .filter((i: any) => !!i.name);
        } catch (e) {
          this.instituteOptions = [];
        } finally {
          this.loadingInstitutes = false;
        }
      },
      error: () => {
        this.instituteOptions = [];
        this.loadingInstitutes = false;
      },
    });
  }

  filteredInstituteOptions() {
    // Institute options become available when any parent scope (country, city, industry) is selected.
    if (!this.filters.country && !this.selectedCountries?.length && !this.filters.industry && !this.selectedIndustries?.length && !this.filters.city && !this.selectedCities?.length) return [];
    const q = String(this.filters.name || '')
      .trim()
      .toLowerCase();
    if (!q) return this.instituteOptions;
    return this.instituteOptions.filter((i) =>
      String(i.name || '')
        .toLowerCase()
        .includes(q)
    );
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
      if (aSel && !bSel) return -1; // Checked items go to top
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

  // --- Active Status Multi-Select Logic ---
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
  }

  // Load canonical cities for the selected country, then keep only cities used by
  // registered institutes/campuses in that country.
  private loadCitiesForCountry(countryCode: string) {
    if (!countryCode) {
      this.filterCityOptions = [];
      this.loadingCities = false;
      return;
    }
    this.loadingCities = true;
    this.filterCityOptions = [];

    const toTitleCase = (str: string) =>
      str
        ? str
          .trim()
          .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
        : '';

    this.http
      .get<any>(`${API_BASE}/location-hierarchy`, { params: { country_id: countryCode } })
      .subscribe({
        next: (res) => {
          const rawCities = res?.data?.cities || [];
          const uniqueSet = new Map<string, { code: string; name: string }>();

          rawCities.forEach((c: any) => {
            const rawName = c.name || c.city_name || c.city || '';
            if (rawName) {
              const formatted = toTitleCase(rawName);
              if (!uniqueSet.has(formatted.toLowerCase())) {
                uniqueSet.set(formatted.toLowerCase(), { code: formatted, name: formatted });
              }
            }
          });

          this.filterCityOptions = Array.from(uniqueSet.values()).sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          this.loadingCities = false;
        },
        error: () => {
          this.filterCityOptions = [];
          this.loadingCities = false;
        },
      });
  }
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
      if (aSel && !bSel) return -1; // Checked items go to top
      if (!aSel && bSel) return 1;
      return a.localeCompare(b); // Alphabetical order for the rest
    });
  }

  // Update scopedSectors to check selectedIndustries array:
  private get scopedSectors(): string[] {
    if (!this.selectedIndustries || this.selectedIndustries.length === 0) {
      return [];
    }
    // Collect sectors for all selected industries
    const sectorsSet = new Set<string>();
    for (const ind of this.selectedIndustries) {
      const list = this.sectorMap[ind] || [];
      list.forEach((s) => sectorsSet.add(s));
    }
    return Array.from(sectorsSet);
  }

  get filteredSectors(): string[] {
    const scoped = this.scopedSectors || [];
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
      if (aSel && !bSel) return -1; // Checked items go to top
      if (!aSel && bSel) return 1;
      return a.localeCompare(b); // Alphabetical order for the rest
    });
  }

  get filteredInstitutesForFilter(): Array<{ id: string; name: string }> {
    const term = (this.instituteFilterSearch || '').trim().toLowerCase();
    let list = this.instituteOptions || [];
    if (term) {
      list = list.filter(
        (i) => (i.name || '').toLowerCase().includes(term) || this.selectedInstitutes.includes(i.id)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = this.selectedInstitutes.includes(a.id);
      const bSel = this.selectedInstitutes.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllInstitutesSelected(): boolean {
    const ids = (this.filteredInstitutesForFilter || []).map((i) => i.id).filter(Boolean);
    return ids.length > 0 && ids.every((id) => (this.selectedInstitutes || []).includes(id));
  }

  toggleSelectAllInstitutes() {
    const ids = (this.filteredInstitutesForFilter || []).map((i) => i.id).filter(Boolean);
    if (this.isAllInstitutesSelected()) {
      this.selectedInstitutes = [];
    } else {
      this.selectedInstitutes = [...ids];
    }
  }

  onFilterSelectOpened(
    opened: boolean,
    field: 'country' | 'city' | 'industry' | 'sector' | 'institute'
  ) {
    if (opened) {
      setTimeout(() => {
        try {
          const input = document.querySelector(
            '.cdk-overlay-pane .select-search-input'
          ) as HTMLInputElement | null;
          input?.focus();
        } catch (e) {
          /* ignore */
        }
      });
      return;
    }
    if (field === 'country') this.countrySearch = '';
    else if (field === 'city') this.citySearch = '';
    else if (field === 'industry') this.industrySearch = '';
    else if (field === 'sector') this.sectorSearch = '';
    else if (field === 'institute') this.instituteFilterSearch = '';
  }

  stopFilterSearchEvent(event: Event) {
    event.stopPropagation();
  }

  onCountryFilterChange() {
    this.filters.city = '';
    this.citySearch = '';
    if (!this.filters.country && !this.filters.industry) this.filters.name = '';

    const selectedCountryCode =
      this.selectedCountries && this.selectedCountries.length
        ? this.selectedCountries.join(',')
        : this.filters.country;

    this.loadCitiesForCountry(selectedCountryCode);
    this.refreshInstituteScope();
  }

  onCityFilterChange() {
    this.refreshInstituteScope();
  }

  onIndustryFilterChange() {
    // Sector options are scoped by the selected industry, so reset any stale sector value.
    this.filters.sector = '';
    this.sectorSearch = '';
    if (!this.filters.country && !this.filters.industry) this.filters.name = '';
    this.refreshInstituteScope();
  }

  onSectorFilterChange() {
    if (!this.filters.country && !this.filters.industry) this.filters.name = '';
    this.refreshInstituteScope();
  }

  // Reload Institute options scoped to the currently selected Country/City/Industry/Sector.
  private refreshInstituteScope() {
    const params: any = {};

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
      this.loadInstituteOptions();
      return;
    }

    const url = `${API_BASE}/get-institute-list`;
    this.http.get<any>(url, { params }).subscribe({
      next: (res) => {
        try {
          const data = Array.isArray(res?.data) ? res.data : [];
          this.instituteOptions = data
            .map((r: any) => ({
              id: r.institute_id || r.id || r._id || r.name || r.institute_name || '',
              name: r.institute_name || r.name || r.short_name || '',
            }))
            .filter((i: any) => !!i.name);
        } catch (e) {
          this.instituteOptions = [];
        }
      },
      error: () => {
        this.instituteOptions = [];
        this.loadingInstitutes = false;
      },
    });
  }

  loadCountries() {
    this.loadingCountries = true;
    const url = `${API_BASE}/location-hierarchy`;
    // this.loader.show();
    this.http.get<any>(url).subscribe({
      next: (res) => {
        try {
          const countries = res?.data?.countries || res?.countries || res?.data || [];
          // store raw hierarchy for recursive lookups
          this.locationHierarchyRaw = Array.isArray(countries) ? countries : [];
          // The hierarchy contains the complete world list. Keep it only for resolving
          // names/ids and populate the filter from countries used by registered institutes.
          this.loadRegisteredInstituteCountries(Array.isArray(countries) ? countries : []);
          // try to aggregate all cities from the countries payload (if present)
          let allCities: any[] = [];
          if (Array.isArray(countries)) {
            countries.forEach((c: any) => {
              if (Array.isArray(c.cities)) allCities = allCities.concat(c.cities);
              if (Array.isArray(c.states))
                c.states.forEach((s: any) => {
                  if (Array.isArray(s.cities)) allCities = allCities.concat(s.cities);
                });
              if (Array.isArray(c.children))
                c.children.forEach((ch: any) => {
                  if (Array.isArray(ch.cities)) allCities = allCities.concat(ch.cities);
                });
            });
          }
          // fallback: if API returned a top-level cities array
          if (allCities.length === 0 && (res?.data?.cities || res?.cities)) {
            allCities = res?.data?.cities || res?.cities || [];
          }
          this.cities = (allCities || []).map((c: any) => ({
            code: c.city_code || c.code || c.id,
            name: c.city_name || c.name || c.city,
          }));
          // also populate states array if available for lookups
          const allStates: any[] = [];
          if (Array.isArray(countries)) {
            countries.forEach((c: any) => {
              if (Array.isArray(c.states)) allStates.push(...c.states);
              if (Array.isArray(c.children))
                c.children.forEach((ch: any) => {
                  if (Array.isArray(ch.states)) allStates.push(...ch.states);
                });
            });
          }
          this.states = (allStates || []).map((s: any) => ({
            code: s.state_code || s.code || s.id,
            name: s.state_name || s.name || s.state,
          }));
        } catch (e) {
          this.countries = [];
          this.cities = [];
        }
      },
      error: () => {
        this.countries = [];
        this.cities = [];
        this.loadingCountries = false;
      },
      complete: () => { },
    });
  }

  private loadRegisteredInstituteCountries(locationCountries: any[]) {
    this.loadingCountries = true;
    this.countries = [];
    this.http.get<any>(this.apiUrl).subscribe({
      next: (res) => {
        try {
          const institutes = Array.isArray(res?.data) ? res.data : [];
          const hierarchyCountries = locationCountries
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
        } finally {
          this.loadingCountries = false;
        }
      },
      error: () => {
        this.countries = [];
        this.loadingCountries = false;
      },
    });
  }
  // country/state/city filters removed for Institutes view; helpers left intentionally blank

  get filtered() {
    const q = this.filter && this.filter.toLowerCase();
    if (!q) return this.institutes;
    return this.institutes.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        (i.short || '').toLowerCase().includes(q) ||
        (i.country || '').toLowerCase().includes(q) ||
        (i.city || '').toLowerCase().includes(q) ||
        (i.state || '').toLowerCase().includes(q) ||
        (i.industry_type || '').toLowerCase().includes(q) ||
        (i.industry_sector || '').toLowerCase().includes(q)
    );
  }

  toggleActive(i: Institute) {
    const previous = !!i.active;
    const newState = !previous;
    const actionVerb = newState ? 'activate' : 'deactivate';
    const confirmMessage = `Are you sure you want to ${actionVerb} institute "${i.name}"?`;
    // show confirmation dialog using ConfirmService
    try {
      this.confirmService
        .confirm({
          title: 'Confirm',
          message: confirmMessage,
          confirmText: 'Yes',
          cancelText: 'No',
        })
        .subscribe((ok) => {
          if (!ok) return;

          // optimistic update for responsiveness
          i.active = newState;
          const action = i.active ? 'activate' : 'deactivate';
          const uuid = i.institute_id || (i.raw && (i.raw.institute_id || i.raw.id || i.raw._id));
          if (!uuid) {
            console.warn('No institute id present for toggleActive');
            // revert
            i.active = previous;
            return;
          }
          const url = `${API_BASE}/institute/${action}/${uuid}`;
          // include current user id in body
          let current_user_id: any = null;
          try {
            const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile');
            if (raw) {
              const obj = JSON.parse(raw);
              current_user_id = obj.user_id || obj.id || null;
            }
          } catch (e) {
            current_user_id = null;
          }
          const body: any = { current_user: current_user_id };
          try {
            this.loader.show();
          } catch (e) { }
          this.http.put(url, body, { observe: 'response' }).subscribe({
            next: (res) => {
              try {
                this.loader.hide();
              } catch (e) { }
              try {
                notify(`Institute ${i.name} ${action}d successfully`, 'success');
              } catch (e) { }
            },
            error: (err) => {
              try {
                this.loader.hide();
              } catch (e) { }
              console.error('Failed to toggle institute active state', err);
              // revert
              i.active = previous;
              try {
                notify('Failed to change institute status. Please try again.', 'error');
              } catch (e) { }
            },
          });
        });
      return;
    } catch (e) {
      return;
    }
  }

  viewDetails(i: Institute) {
    // keep the backend institute_id in storage for feature development, but don't show it in UI
    const payload = { ...i };
    try {
      sessionStorage.setItem('view_institute', JSON.stringify(payload));
    } catch (e) { }
    // open detail modal
    this.selectedInstitute = i.raw || i;
  }

  getAdminCount(institute: any): number {
    return this.resolveCount(
      institute,
      [
        'admins_count',
        'admin_count',
        'total_admins',
        'totalAdmins',
        'adminCount',
        'adminsCount',
        'number_of_admins',
        'no_of_admins',
      ],
      ['admins', 'admin_users', 'adminUsers', 'institute_admins', 'instituteAdmins']
    );
  }

  getUserCount(institute: any): number {
    return this.resolveCount(
      institute,
      [
        'users_count',
        'user_count',
        'total_users',
        'totalUsers',
        'userCount',
        'usersCount',
        'number_of_users',
        'no_of_users',
      ],
      ['users', 'institute_users', 'instituteUsers']
    );
  }

  private resolveCount(institute: any, countKeys: string[], collectionKeys: string[]): number {
    if (!institute) return 0;

    for (const key of countKeys) {
      const value = institute[key];
      if (value !== undefined && value !== null && value !== '') {
        const count = Number(value);
        return Number.isFinite(count) ? count : 0;
      }
    }

    for (const key of collectionKeys) {
      const value = institute[key];
      if (Array.isArray(value)) return value.length;
    }

    return 0;
  }

  startEdit(i: Institute) {
    // Redirect to the institute-register page and prefill the form from storage
    try {
      const raw = i.raw || i || {};
      const payload: any = { ...raw };
      // Normalize subscription dates to YYYY-MM-DD strings so date inputs display correctly
      const fmt = (val: any) => {
        if (!val && val !== 0) return '';
        try {
          // If it's already a Date
          if (val instanceof Date) return val.toISOString().slice(0, 10);
          // Try parsing ISO / timestamp strings
          const d = new Date(String(val));
          if (!isNaN(d.getTime())) return d.toISOString().slice(0, 10);
          // Try to extract YYYY-MM-DD from common formats
          const m = String(val).match(/(\d{4}-\d{2}-\d{2})/);
          if (m) return m[1];
          const m2 = String(val).match(/(\d{2}\/\d{2}\/\d{4})/);
          if (m2) {
            // convert DD/MM/YYYY or MM/DD/YYYY guess to YYYY-MM-DD (try both)
            const parts = m2[1].split(/\//);
            // assume DD/MM/YYYY
            return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
          }
        } catch (e) { }
        return '';
      };
      try {
        payload.subscription_start = fmt(raw.subscription_start || raw.subscriptionStart || '');
      } catch (e) {
        payload.subscription_start = '';
      }
      try {
        payload.subscription_end = fmt(raw.subscription_end || raw.subscriptionEnd || '');
      } catch (e) {
        payload.subscription_end = '';
      }
      sessionStorage.setItem('edit_institute', JSON.stringify(payload));
    } catch (e) { }
    this.saveInstituteReturnState();
    this.router.navigate(['/institute-register']);
    return;
    // build a reactive edit form mirroring the register form for consistent UX
    try {
      const fb = new FormBuilder();
      this.editForm = fb.group({
        name: [this.editableInstitute.name || ''],
        short_name: [this.editableInstitute.short_name || this.editableInstitute.short || ''],
        industry_type: [this.editableInstitute.industry_type || ''],
        industry_sector: [this.editableInstitute.industry_sector || ''],
        primary_contact_person: [this.editableInstitute.primary_contact_person || ''],
        primary_contact_email: [this.editableInstitute.primary_contact_email || ''],
        primary_contact_phone: [this.editableInstitute.primary_contact_phone || ''],
        website: [this.editableInstitute.website || ''],
        max_users: [this.editableInstitute.max_users || null],
        subscription_start: [this.editableInstitute.subscription_start || ''],
        subscription_end: [this.editableInstitute.subscription_end || ''],
        active_status: [!!this.editableInstitute.active_status],
      });
    } catch (e) {
      this.editForm = null;
    }
    // prepare CSV/JSON helper fields for editing complex arrays
    try {
      this.editableInstitute._departmentsCsv =
        this.editableInstitute.departments && Array.isArray(this.editableInstitute.departments)
          ? this.editableInstitute.departments
            .map((d: any) => (d && d.name ? d.name : typeof d === 'string' ? d : ''))
            .join(',')
          : '';
    } catch (e) {
      this.editableInstitute._departmentsCsv = '';
    }
    try {
      this.editableInstitute._teamsCsv =
        this.editableInstitute.teams && Array.isArray(this.editableInstitute.teams)
          ? this.editableInstitute.teams
            .map((t: any) => (t && t.name ? t.name : typeof t === 'string' ? t : ''))
            .join(',')
          : '';
    } catch (e) {
      this.editableInstitute._teamsCsv = '';
    }
    try {
      this.editableInstitute._campusesJson = JSON.stringify(
        this.editableInstitute.campuses || [],
        null,
        2
      );
    } catch (e) {
      this.editableInstitute._campusesJson = '[]';
    }
  }

  confirmDelete(i: Institute) {
    try {
      this.confirmService
        .confirm({
          title: 'Confirm Delete',
          message: `Are you sure you want to delete institute "${i.name}"? This action cannot be undone.`,
          confirmText: 'Delete',
          cancelText: 'Cancel',
        })
        .subscribe((ok) => {
          if (!ok) return;
          const uuid = i.institute_id || (i.raw && (i.raw.institute_id || i.raw.id || i.raw._id));
          if (!uuid) {
            // remove locally if no uuid
            this.institutes = this.institutes.filter((x) => x.id !== i.id);
            try {
              notify('Institute removed locally', 'info');
            } catch (e) { }
            return;
          }
          const url = `${API_BASE}/delete/institute/${uuid}`;
          try {
            this.loader.show();
          } catch (e) { }
          this.http.delete<any>(url, { observe: 'response' }).subscribe({
            next: (res) => {
              try {
                this.loader.hide();
              } catch (e) { }
              // remove from list
              this.institutes = this.institutes.filter(
                (x) => x.institute_id !== uuid && x.id !== i.id
              );
              try {
                notify('Institute deleted successfully', 'success');
              } catch (e) { }
              if (this.hasAppliedFilters) this.loadInstitutes();
            },
            error: (err) => {
              try {
                this.loader.hide();
              } catch (e) { }
              console.error('Failed to delete institute', err);
              // Common failure: network disconnected or backend unreachable (status 0)
              try {
                if (err && (err.status === 0 || err.status === 502 || err.status === 503)) {
                  notify(
                    'Network error: cannot reach backend. Check server and network connection.',
                    'error'
                  );
                } else {
                  notify('Failed to delete institute. Please try again later.', 'error');
                }
              } catch (e) { }
            },
          });
        });
    } catch (e) {
      return;
    }
  }

  closeModal() {
    this.selectedInstitute = null;
    this.editing = false;
    this.editableInstitute = null;
  }

  saveEdit() {
    if (!this.editableInstitute) return;
    // if editForm exists, ensure it's valid before proceeding
    if (this.editForm && this.editForm.invalid) {
      try {
        notify('Please correct errors in the edit form before saving.', 'error');
      } catch (e) { }
      return;
    }
    // apply locally to institutes list; backend save TODO
    const idx = this.institutes.findIndex(
      (x) =>
        x.institute_id === this.editableInstitute.institute_id || x.id === this.editableInstitute.id
    );
    if (idx >= 0) {
      // merge: update displayed columns and raw object with full edited payload
      const raw = this.editableInstitute;
      // if a reactive editForm exists, prefer its values (keeps validation/formatting consistent)
      if (this.editForm) {
        const fv = this.editForm.value;
        raw.name = fv.name;
        raw.short_name = fv.short_name;
        raw.industry_type = fv.industry_type;
        raw.industry_sector = fv.industry_sector;
        raw.primary_contact_person = fv.primary_contact_person;
        raw.primary_contact_email = fv.primary_contact_email;
        raw.primary_contact_phone = fv.primary_contact_phone;
        raw.website = fv.website;
        raw.max_users = fv.max_users;
        raw.subscription_start = fv.subscription_start;
        raw.subscription_end = fv.subscription_end;
        raw.active_status = !!fv.active_status;
      }
      // if CSV/JSON helper fields were edited, reconcile them into raw arrays
      if (raw._departmentsCsv !== undefined) {
        const parts = (raw._departmentsCsv || '')
          .split(',')
          .map((s: string) => s.trim())
          .filter(Boolean);
        raw.departments = parts.map((p: string) => ({ name: p }));
      }
      if (raw._teamsCsv !== undefined) {
        const parts = (raw._teamsCsv || '')
          .split(',')
          .map((s: string) => s.trim())
          .filter(Boolean);
        raw.teams = parts.map((p: string) => ({ name: p }));
      }
      if (raw._campusesJson !== undefined) {
        try {
          const parsed = JSON.parse(raw._campusesJson || '[]');
          raw.campuses = Array.isArray(parsed) ? parsed : raw.campuses;
        } catch (e) {
          // keep existing campuses if JSON invalid
        }
      }
      this.institutes[idx] = {
        ...this.institutes[idx],
        name: raw.name,
        short: raw.short_name || raw.short || '',
        city:
          raw.city ||
          (raw.campuses &&
            raw.campuses[0] &&
            raw.campuses[0].city &&
            raw.campuses[0].city.city_name) ||
          '',
        state:
          raw.state ||
          (raw.campuses &&
            raw.campuses[0] &&
            raw.campuses[0].state &&
            raw.campuses[0].state.state_name) ||
          '',
        country:
          raw.country ||
          (raw.campuses &&
            raw.campuses[0] &&
            raw.campuses[0].country &&
            raw.campuses[0].country.country_name) ||
          '',
        primary_contact: raw.primary_contact_person || raw.primary_contact || '',
        primary_email: raw.primary_contact_email || '',
        primary_contact_phone: raw.primary_contact_phone || raw.primary_contact_phone || '',
        website: raw.website || '',
        max_users: raw.max_users || null,
        industry_type: raw.industry_type || '',
        industry_sector: raw.industry_sector || '',
        active: !!raw.active_status,
        raw: raw,
      } as Institute;
    }
    this.closeModal();
  }
  openInstituteRegister(): void {
    this.saveInstituteReturnState();
    this.router.navigate(['/institute-register']);
  }

  saveInstituteReturnState(): void {
    try {
      sessionStorage.setItem(
        'institute_return_state',
        JSON.stringify({
          filter: this.filter,
          filters: this.filters,
          hasAppliedFilters: this.hasAppliedFilters,
          selectedInstitutes: this.selectedInstitutes,
          selectedCountries: this.selectedCountries,
          selectedIndustries: this.selectedIndustries,
          selectedSectors: this.selectedSectors,
          selectedActiveStatuses: this.selectedActiveStatuses,
          institutes: this.institutes,
          rawRecords: this.rawRecords,
        })
      );
    } catch (e) { }
  }

  private restoreInstituteReturnState(): void {
    try {
      const raw = sessionStorage.getItem('institute_return_state');
      if (!raw) return;
      sessionStorage.removeItem('institute_return_state');
      const state = JSON.parse(raw);
      this.filter = state?.filter || '';
      this.filters = state?.filters || this.filters;
      this.hasAppliedFilters = !!state?.hasAppliedFilters;
      this.selectedInstitutes = Array.isArray(state?.selectedInstitutes)
        ? state.selectedInstitutes
        : [];
      this.selectedCountries = Array.isArray(state?.selectedCountries)
        ? state.selectedCountries
        : [];
      this.selectedIndustries = Array.isArray(state?.selectedIndustries)
        ? state.selectedIndustries
        : [];
      this.selectedSectors = Array.isArray(state?.selectedSectors) ? state.selectedSectors : [];
      this.selectedActiveStatuses = Array.isArray(state?.selectedActiveStatuses)
        ? state.selectedActiveStatuses
        : [];
      this.institutes = [];
      this.rawRecords = [];
      this.dataSource.data = [];
      this.applyFilter(this.filter || '');
      if (this.hasAppliedFilters) {
        this.loadInstitutes();
      }
    } catch (e) {
      try {
        sessionStorage.removeItem('institute_return_state');
      } catch (_) { }
    }
  }
}
