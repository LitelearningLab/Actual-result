import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { API_BASE } from 'src/app/shared/api.config';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';

import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatSnackBarModule,
  ],
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
})
export class CategoryCreateComponent {
  name = '';
  description = '';
  institute = '';
  type = '';
  whoInputs = '';
  evaluation = '';
  status = 'true';
  markForEachQuestion: number | null = 1;
  readonly ALL_OPTION_VALUE = '__all__';
  selectedDepartments: string[] = [];
  selectedTeams: string[] = [];
  publicAccess = false; // default No
  isEditing = false;
  editId: string | null = null;
  formSubmitted = false;
  categoryInfoSubmitted = false;
  accessInfoSubmitted = false;

  institutesList: Array<{
    id: string;
    name: string;
    country?: string;
    city?: string;
    industry?: string;
    sector?: string;
  }> = [];
  instituteSearch = '';
  questionBankFilterOpen = false;
  selectedInstitutes: string[] = [];
  selectedInstitute: string = '';
  instituteFilterSearch = '';

  selectedCountries: string[] = [];
  countrySearch = '';
  selectedCities: string[] = [];
  citySearch = '';
  filterCityOptions: Array<{ code: string; name: string }> = [];
  selectedIndustries: string[] = [];
  industrySearch = '';
  selectedSectors: string[] = [];
  sectorSearch = '';

  countries: Array<{ code: string; name: string }> = [];

  industryTypes: string[] = ['School', 'College', 'BPO', 'Bank', 'IT'];
  sectors: string[] = ['School', 'Engineering', 'Arts', 'Healthcare', 'Finance', 'Banking', 'IT'];
  private sectorMap: Record<string, string[]> = {
    School: ['School'],
    College: ['Engineering', 'Arts'],
    BPO: ['Healthcare', 'Finance'],
    Bank: ['Bank'],
    IT: ['IT'],
  };

  typeOptions = [
    { id: 'objective', name: 'Objective' },
    { id: 'descriptive', name: 'Descriptive' },
  ];
  whoInputOptions = [
    { id: 'instructor', name: 'Instructor' },
    { id: 'student', name: 'Student' },
  ];
  evaluationOptions = [
    { id: 'auto', name: 'Automatic' },
    { id: 'manual', name: 'Manual' },
  ];
  statusOptions = [
    { id: 'true', name: 'Active' },
    { id: 'false', name: 'Inactive' },
  ];

  departments: Array<{ id: string; name: string }> = [];
  teams: Array<{
    id: string;
    name: string;
    department_id?: string | null;
    department_name?: string | null;
  }> = [];
  isSuperAdmin: boolean = false;
  currentUserId: string | null = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private loader: LoaderService,
    private pageMeta: PageMetaService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    try {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      if (raw) {
        const u = JSON.parse(raw);
        this.isSuperAdmin = !!(
          u &&
          (u.is_super_admin === true ||
            u.isSuperAdmin ||
            u.role === 'super_admin' ||
            u.user_role === 'super_admin')
        );
        this.currentUserId = u?.user_id || u?.id || u?.userId || null;
        const instId =
          sessionStorage.getItem('global_institute_id') ||
          u?.institute_id ||
          u?.instituteId ||
          u?.institute ||
          '';
        if (instId) this.institute = String(instId);
      }
    } catch (e) {
      /* ignore */
    }

    // if we are editing an existing category, load it from sessionStorage
    try {
      const raw = sessionStorage.getItem('edit_category');
      if (raw) {
        const c = JSON.parse(raw);
        this.applyEditCategory(c);
        // remove to avoid accidental reuse
        try {
          sessionStorage.removeItem('edit_category');
        } catch (e) {}
      }
    } catch (e) {
      /* ignore parse errors */
    }

    this.pageMeta.setMeta(
      this.isEditing ? 'Edit question bank' : 'Create question bank',
      this.isEditing
        ? 'Update the question bank details and click Update to save changes.'
        : 'Add a new question bank. Fill required fields and save.'
    );
    this.loadInstitutes();
    if (this.institute) {
      this.loadDepartments();
      this.loadTeams();
    }
    this.loadCountries();
  }

  private applyEditCategory(c: any): void {
    this.isEditing = true;
    this.editId = c.category_id || c.id || c._id || null;
    this.name = c.name || c.category_name || '';
    this.description = c.description || '';

    if (c.institute && typeof c.institute === 'object') {
      this.institute = c.institute.institute_id || c.institute.id || '';
      this.instituteSearch = c.institute.institute_name || c.institute.name || '';
    } else {
      this.institute = c.institute_id || c.institute || '';
      this.instituteSearch = c.institute_name || '';
    }
    if (this.institute) {
      this.selectedInstitute = this.institute;
      this.selectedInstitutes = [this.institute];
    }

    this.type = c.type || '';
    this.whoInputs = c.answer_by || c.who_inputs || '';
    this.evaluation = c.evaluation || '';
    this.status = (typeof c.active_status !== 'undefined' && c.active_status !== null) ? String(c.active_status) : (c.status || 'true');
    this.markForEachQuestion =
      (typeof c.mark_each_question !== 'undefined' && c.mark_each_question !== null)
        ? c.mark_each_question
        : (c.mark_for_each_question ?? 1);
    this.publicAccess = !!c.public_access;
    this.selectedDepartments = this.normalizeEntityIds(
      c.departments || c.department_ids,
      'department'
    );
    this.selectedTeams = this.normalizeEntityIds(c.teams || c.team_ids, 'team');
  }

  private normalizeEntityIds(value: any, kind: 'department' | 'team'): string[] {
    const idKeys =
      kind === 'department' ? ['department_id', 'dept_id', 'id', '_id'] : ['team_id', 'id', '_id'];
    const list = Array.isArray(value)
      ? value
      : value && typeof value === 'object'
        ? Object.values(value)
        : [];
    return list
      .map((item: any) => {
        if (!item) return '';
        if (typeof item !== 'object') return String(item);
        const foundKey = idKeys.find((key) => item[key]);
        return foundKey ? String(item[foundKey]) : '';
      })
      .filter((id: string) => !!id);
  }

  loadInstitutes() {
    const url = `${API_BASE}/get-institute-list`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        const data = res?.data || [];
        this.institutesList = (Array.isArray(data) ? data : [])
          .map((i: any) => ({
            id: i.institute_id || i.id || i.code,
            name: i.institute_name || i.college_name || i.name || i.short_name,
            country: i.country || i.country_code || i.country_name,
            city: i.city || i.city_name,
            industry: i.industry || i.industry_type || i.type,
            sector: i.sector || i.sector_name,
          }))
          .filter((i: any) => !!i.id);

        if (!this.institute && !this.isSuperAdmin && this.institutesList.length === 1) {
          this.setInstitute(String(this.institutesList[0].id));
          return;
        }
        // if institute was prefilled from sessionStorage or edit category, trigger setInstitute to resolve display name and load dependent lists
        try {
          if (this.institute) this.setInstitute(this.institute);
        } catch (e) {}
      },
      error: () => {
        this.institutesList = [];
        this.snack.open('Unable to load institutes. Please refresh and try again.', 'Close', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    });
  }

  loadDepartments() {
    if (!this.institute) {
      this.departments = [];
      this.selectedDepartments = [];
      return;
    }
    const url = `${API_BASE}/get-department-list`;
    const params: any = { institute_id: this.institute };
    this.http.get<any>(url, { params }).subscribe({
      next: (res) => {
        const data = res?.data || res || [];
        this.departments = (Array.isArray(data) ? data : [])
          .map((d: any) => ({
            id: d.department_id || d.id || d.code,
            name: d.department_name || d.name,
          }))
          .filter((d: any) => !!d.id);
        this.selectedDepartments = this.onlyAvailableIds(
          this.selectedDepartments,
          this.departments
        );
      },
      error: () => {
        this.departments = [];
        this.selectedDepartments = [];
      },
    });
  }

  loadTeams() {
    if (!this.institute) {
      this.teams = [];
      this.selectedTeams = [];
      return;
    }
    const url = `${API_BASE}/get-teams-list`;
    const params: any = { institute_id: this.institute };
    this.http.get<any>(url, { params }).subscribe({
      next: (res) => {
        const data = res?.data || res || [];
        this.teams = (Array.isArray(data) ? data : [])
          .map((t: any) => ({
            id: t.team_id || t.id || t.code,
            name: t.team_name || t.name,
            department_id: t.department_id || t.departmentId || t.dept_id || null,
            department_name: t.department_name || t.department || null,
          }))
          .filter((t: any) => !!t.id);
        this.selectedTeams = this.onlyAvailableIds(this.selectedTeams, this.teams);
      },
      error: () => {
        this.teams = [];
        this.selectedTeams = [];
      },
    });
  }

  save() {
    this.formSubmitted = true;
    this.categoryInfoSubmitted = true;
    this.loader.show();
    if (this.isNameInvalid()) {
      this.loader.hide();
      this.snack.open('Name is required.', 'Close', {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }
    if (this.isInstituteInvalid()) {
      this.loader.hide();
      this.snack.open('Institute is required.', 'Close', {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }
    if (!this.type) {
      this.loader.hide();
      this.snack.open('Type is required.', 'Close', {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }

    // if (!this.whoInputs) { this.loader.hide(); this.snack.open('Who inputs the answer is required.', 'Close', { duration: 4000, horizontalPosition: 'right', verticalPosition: 'top' }); return; }
    // if (!this.evaluation) { this.loader.hide(); this.snack.open('Evaluation is required.', 'Close', { duration: 4000, horizontalPosition: 'right', verticalPosition: 'top' }); return; }
    if (!this.status) {
      this.loader.hide();
      this.snack.open('Status is required.', 'Close', {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }
    if (this.isMarkInvalid()) {
      this.loader.hide();
      this.snack.open('Mark for each question is required and must be a number.', 'Close', {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }

    const payload: any = {
      name: String(this.name).trim(),
      description: this.description || null,
      // backend expects institute id as institute_id when present
      institute_id: this.institute || null,
      type: this.type,
      who_inputs: this.whoInputs,
      evaluation: this.evaluation,
      status: this.status,
      // public access flag
      public_access: !!this.publicAccess,
      mark_for_each_question: Number(this.markForEachQuestion),
      // Add departments and teams to the payload:
      departments: this.selectedDepartments || [],
      teams: this.selectedTeams || [],
      department_ids: this.selectedDepartments || [],
      team_ids: this.selectedTeams || [],
    };

    if (this.isEditing && this.editId) {
      // include who updated this category if available
      if (this.currentUserId) payload.updated_by = this.currentUserId;
      const url = `${API_BASE}/update-category/${encodeURIComponent(String(this.editId))}`;
      this.http.put<any>(url, payload).subscribe({
        next: (res) => {
          this.snack.open(res?.message || 'Question Bank updated successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          this.router.navigate(['/category']);
        },
        complete: () => {
          this.loader.hide();
        },
        error: (err) => {
          this.loader.hide();
          console.error('Failed to update question bank', err);
          const msg =
            err?.error?.statusMessage ||
            err?.error?.message ||
            err?.message ||
            'Failed to update question bank';
          this.snack.open(msg, 'Close', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        },
      });
    } else {
      if (this.currentUserId) payload.created_by = this.currentUserId;
      const url = `${API_BASE}/add-categories`;
      this.http.post<any>(url, payload).subscribe({
        next: (res) => {
          this.snack.open(res?.message || 'Question Bank saved successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          this.router.navigate(['/category']);
        },
        complete: () => {
          this.loader.hide();
        },
        error: (err) => {
          this.loader.hide();
          console.error('Failed to save question bank', err);
          const msg =
            err?.error?.statusMessage ||
            err?.error?.message ||
            err?.message ||
            'Failed to save question bank';
          this.snack.open(msg, 'Close', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        },
      });
    }
  }
  // Reset the form fields to their defaults
  reset(): void {
    this.name = '';
    this.description = '';
    if (this.isSuperAdmin) {
      this.institute = '';
      this.instituteSearch = '';
    } else {
      this.institute = sessionStorage.getItem('global_institute_id') || '';
    }
    this.type = '';
    this.whoInputs = '';
    this.evaluation = '';
    this.status = '';
    this.markForEachQuestion = null;
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.publicAccess = false;
    this.formSubmitted = false;
    this.categoryInfoSubmitted = false;
    this.accessInfoSubmitted = false;
  }
  cancel() {
    this.router.navigate(['/category']);
  }
  setName(v: string) {
    this.name = v || '';
  }
  setDescription(v: string) {
    this.description = (v || '').slice(0, 250);
  }
  setInstitute(v: string) {
    this.institute = v || '';
    const found = this.institutesList.find((i) => String(i.id) === String(this.institute));
    if (found) {
      this.instituteSearch = found.name;
    }
    this.selectedInstitute = this.institute;
    this.selectedInstitutes = this.institute ? [this.institute] : [];

    // Only reset selections if creating a new category, NOT when editing:
    if (!this.isEditing) {
      this.selectedDepartments = [];
      this.selectedTeams = [];
    }

    this.loadDepartments();
    this.loadTeams();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Ignore clicks inside the filter container OR inside Angular Material dropdown overlays
    if (
      target &&
      (target.closest('.question-bank-filter-anchor') || target.closest('.cdk-overlay-container'))
    ) {
      return;
    }
    if (this.questionBankFilterOpen) {
      this.questionBankFilterOpen = false;
    }
  }

  toggleQuestionBankFilters(): void {
    this.questionBankFilterOpen = !this.questionBankFilterOpen;
  }

  displayInstitute = (instId: any): string => {
    if (!instId) return '';
    const inst = this.institutesList.find((i) => String(i.id) === String(instId));
    return inst ? inst.name : this.instituteSearch || '';
  };

  onInstituteSearchChange(val: string): void {
    this.instituteSearch = val;
    if (!val) {
      this.institute = '';
    }
  }

  onInstituteAutocompleteSelected(id: string): void {
    this.setInstitute(id);
  }

  stopFilterSearchEvent(event: KeyboardEvent | Event): void {
    event.stopPropagation();
  }

  get filteredInstitutesForFilter(): Array<{ id: string; name: string }> {
    const term = (this.instituteFilterSearch || '').trim().toLowerCase();
    return this.institutesList.filter((inst: any) => {
      const matchesSearch = !term || (inst.name || '').toLowerCase().includes(term);
      const matchesCountry =
        !this.selectedCountries.length ||
        (inst.country &&
          this.selectedCountries.some(
            (c) => String(c).toLowerCase() === String(inst.country).toLowerCase()
          ));
      const matchesCity =
        !this.selectedCities.length ||
        (inst.city &&
          this.selectedCities.some((sc) => sc.toLowerCase() === String(inst.city).toLowerCase()));
      const matchesIndustry =
        !this.selectedIndustries.length ||
        (inst.industry &&
          this.selectedIndustries.some(
            (ind) => ind.toLowerCase() === String(inst.industry).toLowerCase()
          ));
      const matchesSector =
        !this.selectedSectors.length ||
        (inst.sector &&
          this.selectedSectors.some(
            (sec) => sec.toLowerCase() === String(inst.sector).toLowerCase()
          ));

      return matchesSearch && matchesCountry && matchesCity && matchesIndustry && matchesSector;
    });
  }

  isAllInstitutesSelected(): boolean {
    const ids = (this.filteredInstitutesForFilter || []).map((i) => String(i.id)).filter(Boolean);
    return ids.length > 0 && ids.every((id) => (this.selectedInstitutes || []).includes(id));
  }

  toggleSelectAllInstitutes(): void {
    const ids = (this.filteredInstitutesForFilter || []).map((i) => String(i.id)).filter(Boolean);
    if (this.isAllInstitutesSelected()) {
      this.selectedInstitutes = [];
    } else {
      this.selectedInstitutes = [...ids];
    }
  }

  loadCountries(): void {
    const url = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        const countriesRaw = res?.data?.countries || res?.countries || res?.data || [];
        this.loadRegisteredInstituteCountries(Array.isArray(countriesRaw) ? countriesRaw : []);
      },
      error: () => {
        this.countries = [];
      },
    });
  }

  private loadRegisteredInstituteCountries(locationCountries: any[]): void {
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
                (countryCode && countryName
                  ? { code: String(countryCode), name: String(countryName).trim() }
                  : null);

              if (resolved) {
                registeredCountries.push({
                  code: String(resolved.code),
                  name: String(resolved.name).trim(),
                });
              }
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

  get filteredCountries(): Array<{ code: string; name: string }> {
    const term = (this.countrySearch || '').trim().toLowerCase();
    if (!term) return this.countries;
    return this.countries.filter((c) => c.name.toLowerCase().includes(term));
  }

  isAllCountriesSelected(): boolean {
    const codes = (this.filteredCountries || []).map((c) => c.code).filter(Boolean);
    return codes.length > 0 && codes.every((code) => (this.selectedCountries || []).includes(code));
  }

  toggleSelectAllCountries(): void {
    const codes = (this.filteredCountries || []).map((c) => c.code).filter(Boolean);
    if (this.isAllCountriesSelected()) {
      this.selectedCountries = [];
    } else {
      this.selectedCountries = [...codes];
    }
    this.onCountryFilterChange();
  }

  onCountryFilterChange(): void {
    this.selectedCities = [];
    this.citySearch = '';
    this.loadCitiesForCountry(this.selectedCountries);
  }

  onIndustryFilterChange(): void {
    this.selectedSectors = [];
    this.sectorSearch = '';
  }

  private loadCitiesForCountry(countryCodes: string[]): void {
    this.filterCityOptions = [];
    const codes = (countryCodes || []).filter(Boolean);
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

  get filteredCities(): Array<{ code: string; name: string }> {
    const term = (this.citySearch || '').trim().toLowerCase();
    if (!term) return this.filterCityOptions;
    return this.filterCityOptions.filter((c) => c.name.toLowerCase().includes(term));
  }

  isAllCitiesSelected(): boolean {
    const names = (this.filteredCities || []).map((c) => c.name).filter(Boolean);
    return names.length > 0 && names.every((n) => (this.selectedCities || []).includes(n));
  }

  toggleSelectAllCities(): void {
    const names = (this.filteredCities || []).map((c) => c.name).filter(Boolean);
    if (this.isAllCitiesSelected()) {
      this.selectedCities = [];
    } else {
      this.selectedCities = [...names];
    }
  }

  get filteredIndustryTypes(): string[] {
    const term = (this.industrySearch || '').trim().toLowerCase();
    if (!term) return this.industryTypes;
    return this.industryTypes.filter((ind) => ind.toLowerCase().includes(term));
  }

  isAllIndustriesSelected(): boolean {
    const items = this.filteredIndustryTypes || [];
    return items.length > 0 && items.every((i) => (this.selectedIndustries || []).includes(i));
  }

  toggleSelectAllIndustries(): void {
    const items = this.filteredIndustryTypes || [];
    if (this.isAllIndustriesSelected()) {
      this.selectedIndustries = [];
    } else {
      this.selectedIndustries = [...items];
    }
  }

  get filteredSectors(): string[] {
    const term = (this.sectorSearch || '').trim().toLowerCase();
    let availableSectors = this.sectors;

    if (this.selectedIndustries && this.selectedIndustries.length) {
      const allowedSectors = new Set<string>();
      this.selectedIndustries.forEach((ind) => {
        const mapped = this.sectorMap[ind] || [];
        mapped.forEach((sec) => allowedSectors.add(sec));
      });
      availableSectors = Array.from(allowedSectors);
    }

    if (!term) return availableSectors;
    return availableSectors.filter((sec) => sec.toLowerCase().includes(term));
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

  filteredInstitutes(): Array<{ id: string; name: string }> {
    const term = (this.instituteSearch || '').trim().toLowerCase();
    const filterInstId =
      this.selectedInstitute ||
      (this.selectedInstitutes && this.selectedInstitutes.length ? this.selectedInstitutes[0] : '');

    return this.institutesList.filter((inst: any) => {
      // 1. If an institute is chosen in the popover filter, show ONLY that institute in the dropdown
      const matchesSelected = !filterInstId || String(inst.id) === String(filterInstId);

      const matchesSearch = !term || (inst.name || '').toLowerCase().includes(term);
      const matchesCountry =
        !this.selectedCountries.length ||
        (inst.country && this.selectedCountries.includes(inst.country));
      const matchesCity =
        !this.selectedCities.length ||
        (inst.city &&
          this.selectedCities.some((sc) => sc.toLowerCase() === inst.city.toLowerCase()));
      const matchesIndustry =
        !this.selectedIndustries.length ||
        (inst.industry && this.selectedIndustries.includes(inst.industry));
      const matchesSector =
        !this.selectedSectors.length || (inst.sector && this.selectedSectors.includes(inst.sector));

      return (
        matchesSelected &&
        matchesSearch &&
        matchesCountry &&
        matchesCity &&
        matchesIndustry &&
        matchesSector
      );
    });
  }

  get appliedFilterChips(): Array<{ key: string; label: string; removable: boolean }> {
    const chips: Array<{ key: string; label: string; removable: boolean }> = [];
    if (this.selectedCountries.length) {
      const countryNames = this.selectedCountries
        .map((code) => {
          const found = this.countries.find((c) => String(c.code) === String(code));
          return found ? found.name : code;
        })
        .filter(Boolean);

      const countryLabel =
        countryNames.length === 1
          ? `Country: ${countryNames[0]}`
          : `Country: ${countryNames.join(', ')}`;

      chips.push({
        key: 'country',
        label: countryLabel,
        removable: true,
      });
    }

    if (this.selectedInstitute) {
      const instObj = this.institutesList.find(
        (i) => String(i.id) === String(this.selectedInstitute)
      );
      chips.push({
        key: 'institute',
        label: `Institute: ${instObj ? instObj.name : this.instituteSearch || 'Selected'}`,
        removable: true,
      });
    }

    if (this.selectedCities.length) {
      const cityLabel =
        this.selectedCities.length === 1
          ? `City: ${this.selectedCities[0]}`
          : `City: ${this.selectedCities.join(', ')}`;
      chips.push({
        key: 'city',
        label: cityLabel,
        removable: true,
      });
    }
    if (this.selectedIndustries.length) {
      const industryLabel =
        this.selectedIndustries.length === 1
          ? `Industry: ${this.selectedIndustries[0]}`
          : `Industry: ${this.selectedIndustries.join(', ')}`;
      chips.push({
        key: 'industry',
        label: industryLabel,
        removable: true,
      });
    }
    if (this.selectedSectors.length) {
      const sectorLabel =
        this.selectedSectors.length === 1
          ? `Sector: ${this.selectedSectors[0]}`
          : `Sector: ${this.selectedSectors.join(', ')}`;
      chips.push({
        key: 'sector',
        label: sectorLabel,
        removable: true,
      });
    }
    return chips;
  }

  removeAppliedFilter(key: string): void {
    if (key === 'institute') {
      this.selectedInstitutes = [];
      this.selectedInstitute = '';
      this.institute = '';
      this.instituteSearch = '';
    }

    if (key === 'country') {
      this.selectedCountries = [];
      this.onCountryFilterChange();
    }
    if (key === 'city') this.selectedCities = [];
    if (key === 'industry') this.selectedIndustries = [];
    if (key === 'sector') this.selectedSectors = [];
  }

  clearAppliedFilters(): void {
    this.selectedCountries = [];
    this.selectedCities = [];
    this.filterCityOptions = [];
    this.selectedIndustries = [];
    this.selectedSectors = [];
    this.selectedInstitutes = [];
    this.selectedInstitute = '';
    this.institute = '';
    this.instituteSearch = '';
  }

  onFilterInstituteSelectionChange(selectedId: any): void {
    const id = Array.isArray(selectedId) ? selectedId[selectedId.length - 1] : selectedId;
    if (id) {
      this.selectedInstitute = String(id);
      this.selectedInstitutes = [String(id)];
    }
  }

  applyQuestionBankFilters(): void {
    const id =
      this.selectedInstitute || (this.selectedInstitutes.length ? this.selectedInstitutes[0] : '');

    if (!id) {
      this.snack.open('Please select an institute before applying filters.', 'Close', {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }

    this.setInstitute(String(id));
    this.questionBankFilterOpen = false;
  }

  resetQuestionBankFilters(): void {
    this.clearAppliedFilters();
    this.questionBankFilterOpen = false;
  }

  setType(v: string) {
    this.type = v || '';
  }
  setWhoInputs(v: string) {
    this.whoInputs = v || '';
  }
  setEvaluation(v: string) {
    this.evaluation = v || '';
  }
  setStatus(v: string) {
    this.status = v || '';
  }
  setMark(v: string) {
    const n = Number(v);
    this.markForEachQuestion = isNaN(n) ? null : n;
  }
  setDepartments(v: string[]) {
    if (v && v.includes(this.ALL_OPTION_VALUE)) {
      this.selectedDepartments = this.getOptionIds(this.departments);
    } else {
      this.selectedDepartments = this.onlyAvailableIds(v, this.departments);
    }
  }

  setTeams(v: string[]) {
    if (v && v.includes(this.ALL_OPTION_VALUE)) {
      this.selectedTeams = this.getOptionIds(this.teams);
    } else {
      this.selectedTeams = this.onlyAvailableIds(v, this.teams);
    }
  }

  goToAccessStep(stepper: any): void {
    this.categoryInfoSubmitted = true;
    if (this.isNameInvalid()) {
      this.snack.open('Name is required.', 'Close', {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }
    if (this.isTypeInvalid()) {
      this.snack.open('Type is required.', 'Close', {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }
    stepper.next();
  }

  goToReviewStep(stepper: any): void {
    this.accessInfoSubmitted = true;
    if (this.isMarkInvalid() || this.isStatusInvalid()) {
      return;
    }
    stepper.next();
  }

  isNameInvalid(): boolean {
    return !this.name || !this.name.trim();
  }
  isInstituteInvalid(): boolean {
    return !this.institute;
  }
  isTypeInvalid(): boolean {
    return !this.type;
  }

  isStatusInvalid(): boolean {
    return !this.status;
  }
  isMarkInvalid(): boolean {
    return this.markForEachQuestion === null || isNaN(Number(this.markForEachQuestion));
  }

  get departmentSelectValue(): string[] {
    return this.withAllOption(this.selectedDepartments, this.departments);
  }

  get filteredTeams(): Array<{
    id: string;
    name: string;
    department_id?: string | null;
    department_name?: string | null;
  }> {
    let list = this.teams || [];

    const deptsArr: string[] = (Array.isArray(this.selectedDepartments)
      ? this.selectedDepartments
      : [this.selectedDepartments]
    )
      .filter(Boolean)
      .map((v: any) => String(v));

    if (deptsArr.length > 0 && !deptsArr.includes('ALL')) {
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

    return list;
  }

  get teamSelectValue(): string[] {
    return this.withAllOption(this.selectedTeams, this.filteredTeams);
  }

  toggleAllDepartments(event: any) {
    if (!event?.isUserInput) return;
    this.selectedDepartments = event?.source?.selected ? this.getOptionIds(this.departments) : [];
  }

  toggleAllTeams(event: any) {
    if (!event?.isUserInput) return;
    this.selectedTeams = event?.source?.selected ? this.getOptionIds(this.filteredTeams) : [];
  }

  setDepartmentOption(id: string, event: any) {
    if (!event?.isUserInput) return;
    this.selectedDepartments = this.updateOptionSelection(
      this.selectedDepartments,
      id,
      !!event?.source?.selected
    );
  }

  setTeamOption(id: string, event: any) {
    if (!event?.isUserInput) return;
    this.selectedTeams = this.updateOptionSelection(
      this.selectedTeams,
      id,
      !!event?.source?.selected
    );
  }

  private getOptionIds(options: Array<{ id: string; name: string }>): string[] {
    return (options || []).map((o) => String(o.id)).filter((id) => !!id);
  }

  private onlyAvailableIds(
    values: string[],
    options: Array<{ id: string; name: string }>
  ): string[] {
    const allowed = new Set(this.getOptionIds(options));
    return (Array.isArray(values) ? values : [])
      .map((v) => String(v))
      .filter((v) => allowed.has(v));
  }

  private withAllOption(
    selected: string[],
    options: Array<{ id: string; name: string }>
  ): string[] {
    const selectedIds = this.onlyAvailableIds(selected, options);
    const optionIds = this.getOptionIds(options);
    const allSelected = optionIds.length > 0 && optionIds.every((id) => selectedIds.includes(id));
    return allSelected ? [this.ALL_OPTION_VALUE, ...selectedIds] : selectedIds;
  }

  private updateOptionSelection(selected: string[], id: string, isSelected: boolean): string[] {
    const selectedIds = new Set(
      (selected || []).map((v) => String(v)).filter((v) => v !== this.ALL_OPTION_VALUE)
    );
    const optionId = String(id || '');
    if (!optionId) return Array.from(selectedIds);
    if (isSelected) selectedIds.add(optionId);
    else selectedIds.delete(optionId);
    return Array.from(selectedIds);
  }

  // Helper: get display name for institute id
  getInstituteName(id: string | null | undefined): string {
    if (!id) return '';
    const found: any = (this.institutesList || []).find(
      (i: any) => String(i.id || i.institute_id || i._id) === String(id)
    );
    if (found?.name || found?.institute_name || found?.short_name) {
      return found.name || found.institute_name || found.short_name;
    }
    try {
      const storedContext = sessionStorage.getItem('super_admin_institute_context');
      if (storedContext) {
        const parsed = JSON.parse(storedContext);
        if (parsed && String(parsed.institute_id) === String(id) && parsed.institute_name) {
          return parsed.institute_name;
        }
      }
    } catch (e) {}
    return String(id);
  }

  // Helper: get option label from a list of {id,name}
  getOptionName(list: Array<{ id: any; name: string }> | null | undefined, id: any): string {
    if (!list || !id) return '';
    const f = list.find((x) => String(x.id) === String(id));
    return f ? f.name : String(id);
  }

  getDepartmentName(id: string | null | undefined): string {
    if (!id) return '';
    const f = (this.departments || []).find((d) => String(d.id) === String(id));
    return f ? f.name : String(id);
  }

  getTeamName(id: string | null | undefined): string {
    if (!id) return '';
    const f = (this.teams || []).find((t) => String(t.id) === String(id));
    return f ? f.name : String(id);
  }

  getSelectedDepartmentNames(): string {
    if (!this.selectedDepartments || !this.selectedDepartments.length) return '—';
    if (this.departments.length && this.selectedDepartments.length === this.departments.length) {
      return 'All Departments';
    }
    const names = this.selectedDepartments
      .map((id) => this.getDepartmentName(id))
      .filter((n) => !!n);
    return names.length ? names.join(', ') : '—';
  }

  getSelectedTeamNames(): string {
    if (!this.selectedTeams || !this.selectedTeams.length) return '—';
    if (this.teams.length && this.selectedTeams.length === this.teams.length) {
      return 'All Teams';
    }
    const names = this.selectedTeams.map((id) => this.getTeamName(id)).filter((n) => !!n);
    return names.length ? names.join(', ') : '—';
  }
}
