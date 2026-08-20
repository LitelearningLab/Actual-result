import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  HostListener,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Overlay, OverlayRef, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  DateRangePickerDialogComponent,
  DateRangeDialogResult,
} from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';
import { API_BASE } from 'src/app/shared/api.config';
import { BehaviorSubject, combineLatest, Observable, of, Subscription, forkJoin } from 'rxjs';
import { startWith, map, retry } from 'rxjs/operators';
import { notify } from 'src/app/shared/global-notify';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';

@Component({
  selector: 'app-admin-schedule-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatListModule,
    MatDatepickerModule,
    MatStepperModule,
    OverlayModule,
    PortalModule,
    MatAutocompleteModule,
    MatDialogModule,
  ],
  templateUrl: './schedule-test.component.html',
  styleUrls: ['./schedule-test.component.scss'],
})
export class AdminScheduleTestComponent implements OnInit, OnDestroy {
  @ViewChild('testInput') testInput?: ElementRef<HTMLInputElement>;
  isGlobalInstituteActive = false;
  private _globalInstituteSub?: Subscription;
  // institute list will be fetched from backend
  institutes: Array<{ name: string; institute_id?: string; short_name?: string }> = [];
  // autocomplete controls for institute/exam
  instituteCtrl: FormControl = new FormControl('');
  private institutesSubject = new BehaviorSubject<
    Array<{ name: string; institute_id?: string; short_name?: string }>
  >([]);
  institutesLoading = false;
  institutesLoadFailed = false;
  filteredInstitutes$: Observable<any[]> = combineLatest([
    this.institutesSubject,
    this.instituteCtrl.valueChanges.pipe(startWith(this.instituteCtrl.value)),
  ]).pipe(
    map(([institutes, value]) => {
      // An object value represents an existing selection. Only free text should
      // filter the panel; reopening a selected control must show every option.
      const query = typeof value === 'string' ? value.trim().toLowerCase() : '';
      return query
        ? institutes.filter((institute) => (institute.name || '').toLowerCase().includes(query))
        : institutes;
    })
  );
  examCtrl: FormControl = new FormControl('', Validators.required);
  filteredExams$: Observable<any[]> = of([]);
  batches = ['Batch A', 'Batch B', 'Batch C'];

  // User selection related
  users: Array<{
    id: string;
    name: string;
    email?: string;
    institute?: string;
    department?: string;
    team?: string;
    campus?: string;
  }> = [];
  selectedUsers: string[] = [];
  selectAll = false;
  userFilters: any = {
    institute_id: '',
    department_id: '',
    team_id: '',
    country_id: '',
    city_id: '',
    campus_id: '',
    industry: '',
    sector: '',
    joined_after: null,
    joined_before: null,
  };
  selectedUserCountries: string[] = [];
  selectedUserCities: string[] = [];
  selectedUserCampuses: string[] = [];
  selectedUserDepartments: string[] = [];
  selectedUserTeams: string[] = [];

  userCountrySearch = '';
  userCitySearch = '';
  userCampusSearch = '';
  userDepartmentSearch = '';
  userTeamSearch = '';

  userCampuses: Array<{
    id: string;
    name: string;
    country_id?: string;
    country_name?: string;
    city_id?: string;
    city_name?: string;
  }> = [];
  userDepartments: Array<{ id: string; name: string }> = [];
  userTeams: Array<{ id: string; name: string }> = [];

  departmentList: string[] = [];
  teamList: string[] = [];
  campusList: string[] = [];
  countries: Array<{ code: string; name: string }> = [];
  superAdminUserCountries: Array<{ code: string; name: string }> = [];
  superAdminUserCities: Array<{ code: string; name: string; countryCode: string; campusId?: string }> = [];
  states: Array<{ code: string; name: string }> = [];
  cities: Array<{ code: string; name: string }> = [];
  industryTypes = ['School', 'College', 'BPO', 'Bank', 'IT'];
  industrySectors = ['School', 'Engineering', 'Arts', 'Healthcare', 'Finance', 'Banking', 'IT'];
  private sectorMap: Record<string, string[]> = {
    School: ['School'],
    College: ['Engineering', 'Arts'],
    BPO: ['Healthcare', 'Finance'],
    Bank: ['Bank'],
    IT: ['IT'],
  };

  model: any = {
    institute: '',
    // schedule name shown on the schedule list (user-provided)
    schedulerName: '',
    // selected exam id from catalog (optional)
    exam_id: '',
    testType: 'MCQ',
    startDate: '',
    startTime: '',
    // new combined fields (datetime-local format: yyyy-MM-ddTHH:mm)
    startDateTime: '',
    durationMin: 60,
    endDate: '',
    endTime: '',
    endDateTime: '',
    assignBatches: [] as string[],
    maxAttempts: 1,
    publish: false,
    multiplereview: false,
    userreview: true,
    reviewMode: 'no_review',
    manualReviewEnabled: false,
    reviewDate: '',
    reviewTime: '',
    reviewEndDate: '',
    reviewEndTime: '',
    showScore: true,
    showCorrectAnswers: true,
    showStudentAnswers: true,
    showExplanations: true,
    // initialize categories so UI can bind reliably
    categories: [] as Array<{ name: string; questions: number }>,
  };
  departmentFilterSearch = '';
  teamFilterSearch = '';

  // categories support
  newCategory: { name: string; questions: number } = { name: '', questions: 0 };

  readOnly = false;
  // Applies only to edits after the first Exam_Attempt; review controls stay enabled.
  scheduleFieldsLocked = false;
  isSuperAdmin: boolean = false;
  private schedulerNameAutoGenerated = false;
  scheduleTimingForm!: FormGroup;
  reviewScheduleForm!: FormGroup;
  reviewBehaviorForm!: FormGroup;
  draftBannerVisible = true;
  private dirty = false;
  private submitted = false;

  scheduled: any[] = [
    {
      institute: 'Institute Alpha',
      testName: 'Math Test',
      start: '2025-09-28 10:00',
      duration: 60,
      published: true,
    },
  ];

  toggleBatch(name: string) {
    const i = this.model.assignBatches.indexOf(name);
    if (i >= 0) this.model.assignBatches.splice(i, 1);
    else this.model.assignBatches.push(name);
  }

  ngOnInit(): void {
    try {
      this.pageMeta.setMeta('Test Schedule', 'Schedule and manage tests for your institute');
    } catch (e) {
      /* ignore if service not available */
    }
    this.isGlobalInstituteActive = this.globalInstituteContext.isGlobalFilterActive();
    this._globalInstituteSub = this.globalInstituteContext.activeInstitute$.subscribe(() => {
      this.isGlobalInstituteActive = this.globalInstituteContext.isGlobalFilterActive();
    });
  }

  ngOnDestroy(): void {
    this._globalInstituteSub?.unsubscribe();
  }
  get hasAppliedUserFilters(): boolean {
    return (
      (this.selectedUserCountries && this.selectedUserCountries.length > 0) ||
      (this.selectedUserCities && this.selectedUserCities.length > 0) ||
      (this.selectedUserCampuses && this.selectedUserCampuses.length > 0) ||
      (this.selectedUserDepartments && this.selectedUserDepartments.length > 0) ||
      (this.selectedUserTeams && this.selectedUserTeams.length > 0) ||
      !!this.userFilters.country_id ||
      !!this.userFilters.city_id ||
      !!this.userFilters.campus_id ||
      !!this.userFilters.department_id ||
      !!this.userFilters.team_id ||
      !!this.userFilters.joined_after ||
      !!this.userFilters.joined_before
    );
  }

  // Load users from backend using filters (reuses get-users endpoint conventions)
  loadUsers() {
    if (!this.hasAppliedUserFilters) {
      this.users = [];
      this.selectedUsers = [];
      this.selectAll = false;
      return;
    }

    this.loader.show();
    const url = `${API_BASE}/get-users`;
    const params: any = {
      pageSize: 10000,
      pageNumber: 1,
      _ts: Date.now(),
    };

    const targetInstitute =
      this.model.institute || this.getAdminInstituteId() || this.filterInstitute;
    if (targetInstitute) {
      params.institute_id = targetInstitute;
    }

    if (this.selectedUserDepartments && this.selectedUserDepartments.length) {
      params.department = this.selectedUserDepartments.join(',');
    } else if (this.userFilters.department_id) {
      params.department = this.userFilters.department_id;
    }

    if (this.selectedUserTeams && this.selectedUserTeams.length) {
      params.team = this.selectedUserTeams.join(',');
    } else if (this.userFilters.team_id) {
      params.team = this.userFilters.team_id;
    }

    if (this.selectedUserCountries && this.selectedUserCountries.length) {
      params.country = this.selectedUserCountries.join(',');
    } else if (this.userFilters.country_id) {
      params.country = this.userFilters.country_id;
    }

    if (this.selectedUserCities && this.selectedUserCities.length) {
      params.city = this.selectedUserCities.join(',');
    } else if (this.userFilters.city_id) {
      params.city = this.userFilters.city_id;
    }

    if (this.selectedUserCampuses && this.selectedUserCampuses.length) {
      params.campus = this.selectedUserCampuses.join(',');
    } else if (this.userFilters.campus_id) {
      params.campus = this.userFilters.campus_id;
    }

    if (this.userFilters.joined_after) {
      params.joined_after = this.formatFilterDate(this.userFilters.joined_after);
    }
    if (this.userFilters.joined_before) {
      params.joined_before = this.formatFilterDate(this.userFilters.joined_before);
    }

    this.http.get<any>(url, { params, ...this.explicitInstituteRequestOptions() }).subscribe({
      next: (res) => {
        const dataCandidate = res?.data?.users ?? res?.users ?? res?.data ?? res;
        const data = Array.isArray(dataCandidate) ? dataCandidate : [];
        this.users = data.map((u: any) => ({
          id: String(u.user_id || u.id || ''),
          name:
            u.full_name ||
            u.user_name ||
            u.name ||
            `${u.first_name || ''} ${u.last_name || ''}`.trim() ||
            u.email,
          email: u.email,
          institute:
            (u.institute &&
              (u.institute.institute_name || u.institute.short_name || u.institute.name)) ||
            u.institute_name ||
            '',
          department:
            (u.department && (u.department.department_name || u.department.name)) ||
            u.department_name ||
            '',
          team: (u.team && (u.team.team_name || u.team.name)) || u.team_name || '',
          campus: (u.campus && (u.campus.campus_name || u.campus.name)) || u.campus_name || '',
        }));

        // Keep selectedUsers valid
        const currentValidIds = new Set(this.users.map((u) => u.id));
        this.selectedUsers = this.selectedUsers.filter((id) => currentValidIds.has(id));
        this.selectAll = this.users.length > 0 && this.selectedUsers.length === this.users.length;
      },
      error: () => {
        this.users = [];
      },
      complete: () => {
        this.loader.hide();
      },
    });
  }

  toggleUserSelection(userId: string, checked: boolean) {
    if (this.readOnly || this.scheduleFieldsLocked) return;
    const idx = this.selectedUsers.indexOf(userId);
    if (checked && idx < 0) this.selectedUsers.push(userId);
    if (!checked && idx >= 0) this.selectedUsers.splice(idx, 1);
    this.selectAll = this.users.length > 0 && this.selectedUsers.length === this.users.length;
  }

  toggleSelectAll(checked: boolean) {
    if (this.readOnly || this.scheduleFieldsLocked) return;
    this.selectAll = !!checked;
    if (this.selectAll) this.selectedUsers = this.users.map((u) => u.id);
    else this.selectedUsers = [];
  }

  // Helper to set time fields. Accepts 'HH:MM' or 'now' to set current time rounded to minutes.
  private formatNowTime(): string {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  // Keep legacy helpers but prefer combined datetime setters below
  setStartTime(value: string) {
    if (value === 'now') this.model.startTime = this.formatNowTime();
    else this.model.startTime = value;
  }

  setEndTime(value: string) {
    if (value === 'now') this.model.endTime = this.formatNowTime();
    else this.model.endTime = value;
  }

  // Format a Date object to a local datetime-local string: YYYY-MM-DDTHH:mm
  private toLocalDateTimeInput(d: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  // Preset setters for new combined fields. Accepts 'HH:MM' or 'now'.
  // Initialize defaults for start/end date & time when no edit/view payload present
  private initializeDefaults() {
    try {
      const now = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
      const hh = pad(now.getHours());
      const mm = pad(now.getMinutes());
      const nowTime = `${hh}:${mm}`;

      // Only set defaults if fields are not already populated (e.g. when editing/viewing)
      if (!this.model.startDate) this.model.startDate = today;
      if (!this.model.startTime) this.model.startTime = nowTime;
      if (!this.model.startDateTime)
        this.model.startDateTime = this.toLocalDateTimeInput(new Date());

      if (!this.model.endDate) this.model.endDate = today;
      if (!this.model.endTime) this.model.endTime = '23:59';
      if (!this.model.endDateTime) {
        const endDt = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 0, 0);
        this.model.endDateTime = this.toLocalDateTimeInput(endDt);
      }
      // Leave scheduler name blank until the user selects a test or types one.
    } catch (e) {
      /* ignore */
    }
  }

  private formatSchedulerDateTime(date: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  private applyDefaultSchedulerName(date: Date = new Date()): void {
    if (this.model.schedulerName && !this.schedulerNameAutoGenerated) return;
    const testName = String(
      this.selectedExam?.title || this.selectedExam?.name || this.model.testName || ''
    ).trim();
    const dateTime = this.formatSchedulerDateTime(date);
    this.model.schedulerName = testName ? `${testName} - ${dateTime}` : dateTime;
    this.schedulerNameAutoGenerated = true;
  }

  onSchedulerNameInput(): void {
    this.schedulerNameAutoGenerated = false;
  }

  // category helpers
  private ensureCategories() {
    if (!this.model.categories) this.model.categories = [];
  }

  addCategory() {
    if (!this.newCategory || !this.newCategory.name || !(Number(this.newCategory.questions) > 0))
      return;
    this.ensureCategories();
    const entry = {
      name: String(this.newCategory.name).trim(),
      questions: Number(this.newCategory.questions),
    };
    // assign a new array to help Angular detect changes
    this.model.categories = (this.model.categories || []).concat([entry]);
    this.newCategory = { name: '', questions: 0 };
    // ensure Angular view updates when using programmatic array replacement
    try {
      this.cd.detectChanges();
    } catch (e) {
      /* noop */
    }
  }

  removeCategory(index: number) {
    this.ensureCategories();
    if (index >= 0 && index < this.model.categories.length) {
      this.model.categories = this.model.categories.filter((_: any, i: number) => i !== index);
      try {
        this.cd.detectChanges();
      } catch (e) {
        /* noop */
      }
    }
  }

  // Use the lightweight selector endpoint. `/get-institutes` builds the full
  // management view (departments, teams, campuses and user counts per row),
  // which can be slow enough to leave an autocomplete with no options.
  private apiUrl = `${API_BASE}/get-institute-list`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private loader: LoaderService,
    private cd: ChangeDetectorRef,
    private pageMeta: PageMetaService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private globalInstituteContext: GlobalInstituteContextService
  ) {
    this.loadInstitutes();
    // this.loadUsers();
    this.applyEditOrView();
    // initialize default dates/times only after applying any edit/view payload
    this.initializeDefaults();
    this.initializeValidationForms();
    this.refreshPersistedReviewSettings();
    this.examCtrl.valueChanges.subscribe((value) => {
      const selectedId =
        value && typeof value === 'object'
          ? value.id || value.exam_id || value.test_id || value._id
          : '';
      if (!selectedId || String(selectedId) !== String(this.model.exam_id || '')) {
        // Typed, cleared, or otherwise invalid text is not a selected Test.
        this.model.exam_id = '';
        this.selectedExam = null;
      }
    });
    // try to infer super-admin status from session storage user profile
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
      }
    } catch (e) {
      /* ignore parse errors */
    }
    // Location filters have different sources by role: super admins use
    // registered institute/campus locations, while admins use user locations.
    this.loadCountries();
    const adminInstId = this.getAdminInstituteId();
    if (!this.isSuperAdmin && adminInstId) {
      this.loadCampusList(adminInstId);
      this.loadDepartmentList(adminInstId);
      this.loadTeamsList(adminInstId);
    } else if (this.isSuperAdmin) {
      this.loadSuperAdminUserLocationsForStep2();
    }
    this.updateInstituteDisabledState();
  }

  private initializeValidationForms(): void {
    this.scheduleTimingForm = this.fb.group(
      {
        startDate: [this.model.startDate, Validators.required],
        startTime: [
          this.model.startTime,
          [Validators.required, Validators.pattern(/^([01]\d|2[0-3]):[0-5]\d$/)],
        ],
        endDate: [this.model.endDate],
        endTime: [this.model.endTime, Validators.pattern(/^([01]\d|2[0-3]):[0-5]\d$/)],
      },
      { validators: this.endAfterStartValidator }
    );
    this.reviewScheduleForm = this.fb.group(
      {
        reviewDate: [this.reviewDateAsPickerValue()],
        reviewTime: [this.model.reviewTime, Validators.pattern(/^([01]\d|2[0-3]):[0-5]\d$/)],
        reviewEndDate: [this.reviewEndDateAsPickerValue()],
        reviewEndTime: [this.model.reviewEndTime, Validators.pattern(/^([01]\d|2[0-3]):[0-5]\d$/)],
      },
      { validators: this.reviewScheduleValidator }
    );
    this.reviewBehaviorForm = this.fb.group({
      multipleReview: [this.normalizeBoolean(this.model.multiplereview)],
      instantReview: [this.normalizeBoolean(this.model.userreview)],
      manualReviewEnabled: [this.normalizeBoolean(this.model.manualReviewEnabled)],
    });

    this.scheduleTimingForm.valueChanges.subscribe((value) => {
      Object.assign(this.model, value);
      this.markDirty();
      if (this.reviewScheduleForm) {
        this.reviewScheduleForm.updateValueAndValidity({ emitEvent: false });
      }
    });
    this.reviewScheduleForm.valueChanges.subscribe((value) => {
      this.model.reviewDate = value.reviewDate;
      this.model.reviewTime = value.reviewTime;
      this.model.reviewEndDate = value.reviewEndDate;
      this.model.reviewEndTime = value.reviewEndTime;
      this.markDirty();
    });
    this.reviewBehaviorForm.valueChanges.subscribe((value) => {
      // Keep the legacy model fields synchronized for the review preview and API
      // compatibility. The reactive controls remain the toggle source of truth.
      this.model.multiplereview = this.normalizeBoolean(value.multipleReview);
      this.model.userreview = this.normalizeBoolean(value.instantReview);
      this.model.manualReviewEnabled = this.normalizeBoolean(value.manualReviewEnabled);
      this.markDirty();
    });
    if (this.readOnly) {
      // Disable the Test control itself so View mode uses Material's disabled styling.
      this.examCtrl.disable({ emitEvent: false });
      this.scheduleTimingForm.disable({ emitEvent: false });
      this.reviewScheduleForm.disable({ emitEvent: false });
      this.reviewBehaviorForm.disable({ emitEvent: false });
    } else if (this.scheduleFieldsLocked) {
      this.examCtrl.disable({ emitEvent: false });
      this.scheduleTimingForm.disable({ emitEvent: false });
    }
    this.syncMultipleReviewAvailability();
  }

  private normalizeBoolean(value: any): boolean {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'number') return value === 1;
    if (typeof value === 'string')
      return ['1', 'true', 'yes', 'on'].includes(value.trim().toLowerCase());
    return !!value;
  }

  get multipleReviewControl(): FormControl {
    return this.reviewBehaviorForm.get('multipleReview') as FormControl;
  }

  get instantReviewControl(): FormControl {
    return this.reviewBehaviorForm.get('instantReview') as FormControl;
  }

  get manualReviewEnabledControl(): FormControl {
    return this.reviewBehaviorForm.get('manualReviewEnabled') as FormControl;
  }

  // No Review is a stricter form of Manual Review. Deriving both checkbox
  // states from the legacy review_mode preserves the existing API payload.
  get noReviewChecked(): boolean {
    return this.model.reviewMode === 'no_review';
  }

  get manualReviewChecked(): boolean {
    return this.model.reviewMode === 'manual' || this.noReviewChecked;
  }

  get radioReviewMode(): string {
    return ['manual', 'after_schedule_ends', 'after_everyone_finishes', 'scheduled'].includes(
      this.model.reviewMode
    )
      ? this.model.reviewMode
      : 'after_schedule_ends';
  }

  onNoReviewChange(checked: boolean): void {
    this.model.reviewMode = checked ? 'no_review' : 'manual';
    this.syncMultipleReviewAvailability();
    this.markDirty();
  }

  onManualReviewChange(checked: boolean): void {
    if (checked) {
      this.model.reviewMode = 'manual';
    } else if (this.manualReviewChecked) {
      // No Review depends on Manual Review; clear both to a valid legacy mode.
      this.model.reviewMode = 'after_schedule_ends';
    }
    this.syncMultipleReviewAvailability();
    this.markDirty();
  }

  onRadioReviewModeChange(value: string): void {
    if (!['manual', 'after_schedule_ends', 'after_everyone_finishes', 'scheduled'].includes(value))
      return;
    this.model.reviewMode = value;
    this.syncMultipleReviewAvailability();
    this.markDirty();
  }

  // Multiple Review is independent of review timing; it only controls whether
  // an available review can be reopened after its first successful view.
  private syncMultipleReviewAvailability(): void {
    const control = this.multipleReviewControl;
    if (!control) return;
    if (!this.readOnly && control.disabled) {
      control.enable({ emitEvent: false });
    }
  }

  /** Reload review flags from the persisted schedule when editing. */
  private refreshPersistedReviewSettings(): void {
    const scheduleId = this.model?.schedule_id || this.model?.id || this.model?._id;
    if (!scheduleId || this.readOnly) return;

    const url = `${API_BASE}/get-exam-schedule-details`;
    this.http.get<any>(url, { params: { schedule_id: String(scheduleId) } }).subscribe({
      next: (response) => {
        const schedules = Array.isArray(response) ? response : response?.data || [];
        const persisted = schedules.find(
          (item: any) => String(item?.schedule_id || item?.id || item?._id) === String(scheduleId)
        );
        if (!persisted) return;

        this.scheduleFieldsLocked = this.normalizeBoolean(persisted.has_attendance);
        this.applyScheduleFieldsLock();

        const instantReview = this.normalizeBoolean(
          persisted.instant_review ?? persisted.user_review ?? persisted.userreview
        );
        const multipleReview = this.normalizeBoolean(
          persisted.multiple_review ?? persisted.multiplereview ?? persisted.multipleReview
        );
        const manualReviewEnabled = this.normalizeBoolean(persisted.manual_review_enabled);

        this.model.userreview = instantReview;
        this.model.multiplereview = multipleReview;
        this.model.manualReviewEnabled = manualReviewEnabled;
        this.applyReviewSettings(persisted, (value) => this.normalizeBoolean(value));
        this.reviewBehaviorForm.patchValue(
          { instantReview, multipleReview, manualReviewEnabled },
          { emitEvent: false }
        );
        this.reviewScheduleForm.patchValue(
          {
            reviewDate: this.reviewDateAsPickerValue(),
            reviewTime: this.model.reviewTime,
            reviewEndDate: this.reviewEndDateAsPickerValue(),
            reviewEndTime: this.model.reviewEndTime,
          },
          { emitEvent: false }
        );
        this.syncMultipleReviewAvailability();
        try {
          this.cd.detectChanges();
        } catch (e) {
          /* noop */
        }
      },
      error: (error) => console.warn('Failed to refresh persisted review settings', error),
    });
  }

  private combineDateAndTime(dateValue: any, timeValue: any): Date | null {
    if (!dateValue || !timeValue || !/^([01]\d|2[0-3]):[0-5]\d$/.test(String(timeValue)))
      return null;
    let date: Date | null = null;
    if (dateValue instanceof Date) {
      date = isNaN(dateValue.getTime()) ? null : dateValue;
    } else {
      const sDate = String(dateValue).trim();
      const matchYYYY = sDate.match(/^(\d{4})[^\d]?(\d{1,2})[^\d]?(\d{1,2})$/);
      if (matchYYYY) {
        const d = new Date(Number(matchYYYY[1]), Number(matchYYYY[2]) - 1, Number(matchYYYY[3]));
        if (!isNaN(d.getTime())) date = d;
      } else {
        const matchDD = sDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if (matchDD) {
          const d = new Date(Number(matchDD[3]), Number(matchDD[2]) - 1, Number(matchDD[1]));
          if (!isNaN(d.getTime())) date = d;
        } else {
          const parsed = new Date(sDate);
          if (!isNaN(parsed.getTime())) date = parsed;
        }
      }
    }
    if (!date) return null;
    const [hours, minutes] = String(timeValue).split(':').map(Number);
    const combined = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes,
      0,
      0
    );
    return isNaN(combined.getTime()) ? null : combined;
  }

  private endAfterStartValidator = (control: AbstractControl): ValidationErrors | null => {
    const startDate = control.get('startDate')?.value;
    const startTime = control.get('startTime')?.value;
    const endDate = control.get('endDate')?.value;
    const endTime = control.get('endTime')?.value;
    if (!endDate && !endTime) return null;
    if (!endDate || !endTime) return { endIncomplete: true };
    const start = this.combineDateAndTime(startDate, startTime);
    const end = this.combineDateAndTime(endDate, endTime);
    if (!start || !end) return null;
    return end.getTime() < start.getTime() ? { endBeforeStart: true } : null;
  };

  private reviewScheduleValidator = (control: AbstractControl): ValidationErrors | null => {
    const dateCtrl = control.get('reviewDate');
    const timeCtrl = control.get('reviewTime');
    const endDateCtrl = control.get('reviewEndDate');
    const endTimeCtrl = control.get('reviewEndTime');

    const date = dateCtrl?.value;
    const time = timeCtrl?.value;
    const endDate = endDateCtrl?.value;
    const endTime = endTimeCtrl?.value;

    // Clear previous errors from controls
    const clearControlError = (ctrl: AbstractControl | null, errorKey: string) => {
      if (ctrl?.hasError(errorKey)) {
        const { [errorKey]: _, ...errs } = ctrl.errors || {};
        ctrl.setErrors(Object.keys(errs).length ? errs : null);
      }
    };

    clearControlError(dateCtrl, 'reviewBeforeTest');
    clearControlError(timeCtrl, 'reviewBeforeTest');
    clearControlError(dateCtrl, 'required');
    clearControlError(timeCtrl, 'required');

    clearControlError(endDateCtrl, 'reviewEndBeforeStart');
    clearControlError(endTimeCtrl, 'reviewEndBeforeStart');
    clearControlError(endDateCtrl, 'required');
    clearControlError(endTimeCtrl, 'required');

    if (!date && !time && !endDate && !endTime) return null;

    if (!date || !time) {
      if (!date) {
        dateCtrl?.setErrors({ ...dateCtrl?.errors, required: true });
      }
      if (!time) {
        timeCtrl?.setErrors({ ...timeCtrl?.errors, required: true });
      }
      return { reviewIncomplete: true };
    }

    if (!endDate || !endTime) {
      if (!endDate) {
        endDateCtrl?.setErrors({ ...endDateCtrl?.errors, required: true });
      }
      if (!endTime) {
        endTimeCtrl?.setErrors({ ...endTimeCtrl?.errors, required: true });
      }
      return { reviewEndIncomplete: true };
    }

    const reviewDt = this.combineDateAndTime(date, time);
    if (!reviewDt) return { reviewFormat: true };

    const reviewEndDt = this.combineDateAndTime(endDate, endTime);
    if (!reviewEndDt) return { reviewEndFormat: true };

    if (this.scheduleTimingForm) {
      const startDate = this.scheduleTimingForm.get('startDate')?.value;
      const startTime = this.scheduleTimingForm.get('startTime')?.value;
      const endDateVal = this.scheduleTimingForm.get('endDate')?.value;
      const endTimeVal = this.scheduleTimingForm.get('endTime')?.value;

      const startDt = this.combineDateAndTime(startDate, startTime);
      if (startDt) {
        let testEndDt: Date | null = null;
        if (endDateVal && endTimeVal) {
          testEndDt = this.combineDateAndTime(endDateVal, endTimeVal);
        } else {
          const duration = Number(this.model.durationMin) || 10;
          testEndDt = new Date(startDt.getTime() + duration * 60000);
        }

        const now = new Date();
        const compareDt = testEndDt && testEndDt.getTime() > now.getTime() ? testEndDt : now;

        if (reviewDt.getTime() < compareDt.getTime()) {
          // Set errors on individual controls so they display as invalid in the template
          dateCtrl?.setErrors({ ...dateCtrl.errors, reviewBeforeTest: true });
          timeCtrl?.setErrors({ ...timeCtrl.errors, reviewBeforeTest: true });
          return { reviewBeforeTest: true };
        }
      }
    }

    if (reviewEndDt.getTime() < reviewDt.getTime()) {
      endDateCtrl?.setErrors({ ...endDateCtrl.errors, reviewEndBeforeStart: true });
      endTimeCtrl?.setErrors({ ...endTimeCtrl.errors, reviewEndBeforeStart: true });
      return { reviewEndBeforeStart: true };
    }

    return null;
  };

  get minReviewDate(): Date | null {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateVal =
      this.scheduleTimingForm?.get('endDate')?.value ||
      this.scheduleTimingForm?.get('startDate')?.value ||
      this.model.endDate ||
      this.model.startDate;
    if (!dateVal) return today;

    let testDate: Date | null = null;
    if (dateVal instanceof Date) {
      testDate = isNaN(dateVal.getTime()) ? null : dateVal;
    } else {
      const sDate = String(dateVal).trim();
      // YYYY-MM-DD
      const match = sDate.match(/^(\d{4})[^\d]?(\d{1,2})[^\d]?(\d{1,2})$/);
      if (match) {
        const d = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
        if (!isNaN(d.getTime())) testDate = d;
      } else {
        // DD/MM/YYYY
        const matchSlash = sDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if (matchSlash) {
          const d = new Date(
            Number(matchSlash[3]),
            Number(matchSlash[2]) - 1,
            Number(matchSlash[1])
          );
          if (!isNaN(d.getTime())) testDate = d;
        } else {
          const parsed = new Date(sDate);
          if (!isNaN(parsed.getTime())) testDate = parsed;
        }
      }
    }

    if (testDate) {
      testDate.setHours(0, 0, 0, 0);
      return testDate.getTime() > today.getTime() ? testDate : today;
    }
    return today;
  }

  get reviewScheduleError(): string {
    if (this.reviewScheduleForm?.hasError('reviewBeforeTest')) {
      return 'Review date/time must be after the test schedule and in the future.';
    }
    if (this.reviewScheduleForm?.hasError('reviewEndBeforeStart')) {
      return 'Review end date/time must be after or equal to review start date/time.';
    }
    return '';
  }

  private reviewDateAsPickerValue(): Date | null {
    const match = String(this.model.reviewDate || '').match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return null;
    const date = new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
    return isNaN(date.getTime()) ? null : date;
  }

  private reviewEndDateAsPickerValue(): Date | null {
    const match = String(this.model.reviewEndDate || '').match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return null;
    const date = new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
    return isNaN(date.getTime()) ? null : date;
  }

  get scheduleDateError(): string {
    if (this.scheduleTimingForm?.hasError('endBeforeStart'))
      return 'End date/time must be after the start date/time.';
    if (this.scheduleTimingForm?.hasError('endIncomplete'))
      return 'Enter both an end date and end time, or leave both blank.';
    return '';
  }

  get reviewScheduleInvalid(): boolean {
    if (this.model.userreview || this.model.reviewMode !== 'scheduled') return false;
    return (
      this.reviewScheduleForm.invalid ||
      !this.reviewScheduleForm.get('reviewDate')?.value ||
      !this.reviewScheduleForm.get('reviewTime')?.value ||
      !this.reviewScheduleForm.get('reviewEndDate')?.value ||
      !this.reviewScheduleForm.get('reviewEndTime')?.value
    );
  }

  get reviewPreview(): string {
    if (!this.model.userreview && this.model.reviewMode === 'no_review')
      return 'Students will not be able to review this test.';
    const content =
      [
        this.model.showScore && 'Score',
        this.model.showCorrectAnswers && 'Correct Answers',
        this.model.showStudentAnswers && 'Student Answers',
        this.model.showExplanations && 'Explanations',
      ]
        .filter(Boolean)
        .join(', ') || 'No answer details';
    // let availability = 'instantly after submission';
    // if (!this.model.userreview) {
    //   if (this.model.reviewMode === 'after_schedule_ends') availability = 'after the test schedule ends';
    //   if (this.model.reviewMode === 'after_everyone_finishes') availability = 'after every assigned student finishes or the test schedule ends';
    //   if (this.model.reviewMode === 'scheduled') availability = 'at the scheduled review date/time';
    //   if (this.model.reviewMode === 'manual') availability = 'after an administrator completes evaluation';
    // }
    return `Students will see: ${content}`;
  }

  markDirty(): void {
    if (!this.readOnly && !this.submitted) this.dirty = true;
  }

  canDeactivate(): boolean {
    return (
      !this.dirty || this.submitted || window.confirm('You have unsaved changes. Leave anyway?')
    );
  }

  @HostListener('window:beforeunload', ['$event'])
  warnBeforeUnload(event: BeforeUnloadEvent): void {
    if (this.dirty && !this.submitted) event.preventDefault();
  }

  locationHierarchyRaw: any[] = [];
  allRegisteredCities: Array<{ code: string; name: string; countryCode: string }> = [];
  allUserCities: Array<{ code: string; name: string; countryCode: string }> = [];
  citySearch = '';

  loadCountries() {
    if (!this.isSuperAdmin) {
      this.loadAdminUserLocations();
      return;
    }
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
    if (!this.isSuperAdmin) {
      this.loadAdminUserLocations();
      return;
    }

    const url = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        try {
          const countries = res?.data?.countries || res?.countries || res?.data || [];
          this.locationHierarchyRaw = Array.isArray(countries) ? countries : [];
          this.loadRegisteredInstituteLocations(this.locationHierarchyRaw);
        } catch (e) {
          this.countries = [];
        }
      },
      error: () => {
        this.countries = [];
      },
    });
  }

  private loadAdminUserLocations(): void {
    if (this.isSuperAdmin) return;
    this.countries = [];
    this.allUserCities = [];
    this.cities = [];

    const instId = this.model.institute || this.getAdminInstituteId() || this.filterInstitute || '';
    const params: any = { pageNumber: 1, pageSize: 10000, _ts: Date.now() };
    if (instId) {
      params.institute_id = instId;
    }

    this.http
      .get<any>(`${API_BASE}/get-users`, { params })
      .subscribe({
        next: (res) => {
          try {
            const dataCandidate = res?.data?.users ?? res?.users ?? res?.data ?? res;
            const users = Array.isArray(dataCandidate) ? dataCandidate : [];

            const uniqueCountries = new Map<string, { code: string; name: string; countryCode?: string }>();
            const uniqueCities = new Map<
              string,
              { code: string; name: string; countryCode: string }
            >();

            users.forEach((user: any) => {
              const countryCode = String(
                user?.country?.country_id || user?.country_id || user?.country?.country_name || user?.country_name || ''
              ).trim();
              const countryName = String(
                user?.country?.country_name || user?.country_name || user?.country?.country_id || user?.country_id || ''
              ).trim();
              const cityCode = String(user?.city?.city_id || user?.city_id || user?.city?.city_name || user?.city_name || '').trim();
              const cityName = String(user?.city?.city_name || user?.city_name || user?.city?.city_id || user?.city_id || '').trim();

              if (countryCode && countryName && !uniqueCountries.has(countryCode.toLowerCase())) {
                uniqueCountries.set(countryCode.toLowerCase(), { code: countryCode, name: countryName, countryCode });
              }

              if (countryCode && cityName) {
                const cityKey = `${countryCode.toLowerCase()}|${cityName.toLowerCase()}`;
                if (!uniqueCities.has(cityKey)) {
                  uniqueCities.set(cityKey, {
                    code: cityCode || cityName,
                    name: cityName,
                    countryCode,
                  });
                }
              }
            });

            this.countries = Array.from(uniqueCountries.values()).sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            this.allUserCities = Array.from(uniqueCities.values());
            this.onUserCountryChange();
          } catch (e) {
            this.countries = [];
            this.allUserCities = [];
            this.cities = [];
          }
        },
        error: () => {
          this.countries = [];
          this.allUserCities = [];
          this.cities = [];
        },
      });
  }

  private loadRegisteredInstituteLocations(locationCountries: any[]) {
    this.countries = [];
    this.allRegisteredCities = [];
    this.cities = [];
    this.http
      .get<any>(`${API_BASE}/get-institutes`, { headers: { 'X-Skip-Institute-Context': 'true' } })
      .subscribe({
        next: (res) => {
          try {
            const institutes = Array.isArray(res?.data) ? res.data : [];
            const hierarchyCountries = (locationCountries || [])
              .map((country: any) => ({
                code: country.country_code || country.code || country.id,
                name: country.country_name || country.name || country.country,
                cities: country.cities || [],
              }))
              .filter((country: any) => country.code && country.name);

            const registeredCountries: Array<{ code: string; name: string }> = [];
            const registeredCities: Array<{ code: string; name: string; countryCode: string }> = [];

            institutes.forEach((institute: any) => {
              const locations = [
                institute,
                ...(Array.isArray(institute?.campuses) ? institute.campuses : []),
              ];
              locations.forEach((location: any) => {
                // Extract country
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
                const resolvedCountry =
                  hierarchyMatch ||
                  (countryCode && countryName
                    ? { code: countryCode, name: countryName, cities: [] }
                    : null);
                if (resolvedCountry) {
                  registeredCountries.push({
                    code: String(resolvedCountry.code),
                    name: String(resolvedCountry.name).trim(),
                  });

                  // Extract city
                  const rawCity = location?.city;
                  const cityCode =
                    location?.city_id ||
                    location?.city_code ||
                    (typeof rawCity === 'object'
                      ? rawCity?.city_id || rawCity?.id || rawCity?.city_code || rawCity?.code
                      : rawCity);
                  const cityName =
                    location?.city_name ||
                    (typeof rawCity === 'object'
                      ? rawCity?.city_name || rawCity?.name || rawCity?.city
                      : rawCity);

                  if (cityName) {
                    registeredCities.push({
                      code: cityCode ? String(cityCode) : cityName,
                      name: String(cityName).trim(),
                      countryCode: String(resolvedCountry.code),
                    });
                  }
                }
              });
            });

            // Unique Countries
            const uniqueCountries = new Map<string, { code: string; name: string }>();
            registeredCountries.forEach((country) => {
              const key = country.name.toLowerCase();
              if (!uniqueCountries.has(key)) uniqueCountries.set(key, country);
            });
            this.countries = Array.from(uniqueCountries.values()).sort((a, b) =>
              a.name.localeCompare(b.name)
            );

            // Store all registered cities so we can filter them by selected country
            this.allRegisteredCities = registeredCities;
            this.filterCitiesByCountry();
          } catch (e) {
            this.countries = [];
            this.allRegisteredCities = [];
            this.cities = [];
          }
        },
        error: () => {
          this.countries = [];
          this.allRegisteredCities = [];
          this.cities = [];
        },
      });
  }

  filterCitiesByCountry() {
    this.cities = [];
    const targetCodes =
      this.selectedCountries && this.selectedCountries.length > 0
        ? this.selectedCountries
        : this.filterCountry
          ? [this.filterCountry]
          : [];

    const citySource =
      !this.isSuperAdmin && this.allUserCities && this.allUserCities.length > 0
        ? this.allUserCities
        : this.allRegisteredCities;

    if (!targetCodes.length) {
      // If no country is selected, show all registered cities
      const uniqueCities = new Map<string, { code: string; name: string }>();
      citySource.forEach((city) => {
        const key = city.name.toLowerCase();
        if (!uniqueCities.has(key)) uniqueCities.set(key, { code: city.code, name: city.name });
      });
      this.cities = Array.from(uniqueCities.values()).sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Filter cities matching selected country code(s)
      const filtered = citySource.filter((city) =>
        targetCodes.some(
          (code) =>
            String(city.countryCode).toLowerCase() === String(code).toLowerCase() ||
            String(city.code).toLowerCase() === String(code).toLowerCase()
        )
      );
      const uniqueCities = new Map<string, { code: string; name: string }>();
      filtered.forEach((city) => {
        const key = city.name.toLowerCase();
        if (!uniqueCities.has(key)) uniqueCities.set(key, { code: city.code, name: city.name });
      });
      this.cities = Array.from(uniqueCities.values()).sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  get examFilteredCities(): Array<{ code: string; name: string }> {
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
    const items = this.examFilteredCities || [];
    return items.length > 0 && items.every((c) => (this.selectedCities || []).includes(c.name));
  }

  toggleSelectAllCities(): void {
    const items = this.examFilteredCities || [];
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

  onCountryChange() {
    this.states = [];
    this.cities = [];
    if (!this.userFilters.country_id) return;
    const url = `${API_BASE}/location-hierarchy`;
    this.http.get<any>(url, { params: { country: this.userFilters.country_id } }).subscribe({
      next: (res) => {
        try {
          const statesRaw = res?.data?.states || res?.states || [];
          this.states = (Array.isArray(statesRaw) ? statesRaw : []).map((s: any) => ({
            code: s.state_code || s.code || s.id,
            name: s.state_name || s.name || s.state,
          }));
          let allCities: any[] = [];
          const countries = res?.data?.countries || res?.countries || [];
          if (Array.isArray(countries)) {
            countries.forEach((c: any) => {
              if (Array.isArray(c.cities)) allCities = allCities.concat(c.cities);
              if (Array.isArray(c.states))
                c.states.forEach((s: any) => {
                  if (Array.isArray(s.cities)) allCities = allCities.concat(s.cities);
                });
            });
          }
          if (allCities.length === 0 && (res?.data?.cities || res?.cities))
            allCities = res?.data?.cities || res?.cities || [];
          this.cities = (allCities || []).map((c: any) => ({
            code: c.city_code || c.code || c.id,
            name: c.city_name || c.name || c.city,
          }));
        } catch (e) {
          this.states = [];
          this.cities = [];
        }
      },
      error: () => {
        this.states = [];
        this.cities = [];
      },
    });
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

  // --- TrackBy Helpers ---
  trackByCode(index: number, item: any): string {
    return item?.code || item?.id || item?.name || String(index);
  }

  trackById(index: number, item: any): string {
    return item?.id || item?.code || item?.name || String(index);
  }

  loadSuperAdminUserLocationsForStep2(): void {
    if (!this.isSuperAdmin) return;
    const targetInstitute = this.model.institute || this.getAdminInstituteId() || this.filterInstitute || '';
    const params: any = { pageSize: 10000, pageNumber: 1, _ts: Date.now() };
    if (targetInstitute) {
      params.institute_id = targetInstitute;
    }

    this.http.get<any>(`${API_BASE}/get-users`, { params, ...this.explicitInstituteRequestOptions() }).subscribe({
      next: (res) => {
        try {
          const dataCandidate = res?.data?.users ?? res?.users ?? res?.data ?? res;
          const users = Array.isArray(dataCandidate) ? dataCandidate : [];
          const uniqueCountries = new Map<string, { code: string; name: string }>();
          const uniqueCities = new Map<string, { code: string; name: string; countryCode: string; campusId?: string }>();

          users.forEach((user: any) => {
            const countryCode = String(
              user?.country?.country_id || user?.country_id || user?.country?.country_name || user?.country_name || ''
            ).trim();
            const countryName = String(
              user?.country?.country_name || user?.country_name || user?.country?.country_id || user?.country_id || ''
            ).trim();
            const cityCode = String(
              user?.city?.city_id || user?.city_id || user?.city?.city_name || user?.city_name || ''
            ).trim();
            const cityName = String(
              user?.city?.city_name || user?.city_name || user?.city?.city_id || user?.city_id || ''
            ).trim();
            const campusId = String(user?.campus_id || user?.campus?.campus_id || '').trim();

            if (countryCode && countryName && !uniqueCountries.has(countryCode.toLowerCase())) {
              uniqueCountries.set(countryCode.toLowerCase(), { code: countryCode, name: countryName });
            }

            if (countryCode && cityName) {
              const cityKey = `${countryCode.toLowerCase()}|${cityName.toLowerCase()}`;
              if (!uniqueCities.has(cityKey)) {
                uniqueCities.set(cityKey, {
                  code: cityCode || cityName,
                  name: cityName,
                  countryCode: countryCode,
                  campusId: campusId
                });
              }
            }
          });

          this.superAdminUserCountries = Array.from(uniqueCountries.values()).sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          this.superAdminUserCities = Array.from(uniqueCities.values()).sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          try {
            this.cd.detectChanges();
          } catch (e) {}
        } catch (e) {
          this.superAdminUserCountries = [];
          this.superAdminUserCities = [];
        }
      },
      error: () => {
        this.superAdminUserCountries = [];
        this.superAdminUserCities = [];
      }
    });
  }

  // --- Step 2 Select Users Filter Getters & Toggles ---
  get filteredUserCountriesForFilter(): Array<{ code: string; name: string }> {
    const depKey = `${this.userCountrySearch}|${this.isSuperAdmin}|${(this.selectedUserCountries || []).join(',')}|${(this.countries || []).length}|${(this.superAdminUserCountries || []).length}`;
    return this._memoize('filteredUserCountries', depKey, () => {
      const term = (this.userCountrySearch || '').trim().toLowerCase();
      let list: Array<{ code: string; name: string }> = [];

      if (this.isSuperAdmin && this.superAdminUserCountries && this.superAdminUserCountries.length > 0) {
        list = this.superAdminUserCountries;
      } else {
        list = this.countries || [];
      }

      if (term) {
        list = list.filter(
          (c) =>
            (c.name || '').toLowerCase().includes(term) ||
            (this.selectedUserCountries || []).includes(c.code)
        );
      }
      return [...list].sort((a, b) => {
        const aSel = (this.selectedUserCountries || []).includes(a.code);
        const bSel = (this.selectedUserCountries || []).includes(b.code);
        if (aSel && !bSel) return -1;
        if (!aSel && bSel) return 1;
        return (a.name || '').localeCompare(b.name || '');
      });
    });
  }

  isAllUserCountriesSelected(): boolean {
    const items = this.filteredUserCountriesForFilter || [];
    return (
      items.length > 0 && items.every((c) => (this.selectedUserCountries || []).includes(c.code))
    );
  }

  toggleSelectAllUserCountries(): void {
    const items = this.filteredUserCountriesForFilter || [];
    if (this.isAllUserCountriesSelected()) {
      this.selectedUserCountries = [];
    } else {
      this.selectedUserCountries = items.map((c) => c.code);
    }
    this.onUserCountryChange();
  }

  get filteredUserCitiesForFilter(): Array<{ code: string; name: string }> {
    const depKey = `${this.userCitySearch}|${this.isSuperAdmin}|${(this.selectedUserCountries || []).join(',')}|${(this.selectedUserCities || []).join(',')}|${(this.cities || []).length}|${(this.allUserCities || []).length}|${(this.superAdminUserCities || []).length}`;
    return this._memoize('filteredUserCities', depKey, () => {
      const term = (this.userCitySearch || '').trim().toLowerCase();
      let list: Array<{ code: string; name: string }> = [];

      if (this.isSuperAdmin && this.superAdminUserCities && this.superAdminUserCities.length > 0) {
        let relevantCities = this.superAdminUserCities;
        if (this.selectedUserCountries && this.selectedUserCountries.length > 0) {
          const selectedCodes = this.selectedUserCountries.map((c) => String(c).toLowerCase());
          relevantCities = relevantCities.filter((c) =>
            selectedCodes.some(
              (sc) =>
                sc === String(c.countryCode || '').toLowerCase() ||
                sc === String(c.code || '').toLowerCase()
            )
          );
        }
        const cityMap = new Map<string, { code: string; name: string }>();
        relevantCities.forEach((c) => {
          if (c.name) {
            const key = String(c.name).trim().toLowerCase();
            if (!cityMap.has(key)) {
              cityMap.set(key, { code: String(c.code || c.name), name: String(c.name) });
            }
          }
        });
        list = Array.from(cityMap.values());
      } else if (!this.isSuperAdmin && this.allUserCities && this.allUserCities.length > 0) {
        let relevantCities = this.allUserCities;
        if (this.selectedUserCountries && this.selectedUserCountries.length > 0) {
          const selectedCodes = this.selectedUserCountries.map((c) => String(c).toLowerCase());
          relevantCities = relevantCities.filter((c) =>
            selectedCodes.some(
              (sc) =>
                sc === String(c.countryCode || '').toLowerCase() ||
                sc === String(c.code || '').toLowerCase()
            )
          );
        }
        const cityMap = new Map<string, { code: string; name: string }>();
        relevantCities.forEach((c) => {
          if (c.name) {
            const key = String(c.name).trim().toLowerCase();
            if (!cityMap.has(key)) {
              cityMap.set(key, { code: String(c.code || c.name), name: String(c.name) });
            }
          }
        });
        list = Array.from(cityMap.values());
      } else {
        list = this.cities || [];
      }

      if (term) {
        list = list.filter(
          (c) =>
            (c.name || '').toLowerCase().includes(term) ||
            (this.selectedUserCities || []).includes(c.name)
        );
      }
      return [...list].sort((a, b) => {
        const aSel = (this.selectedUserCities || []).includes(a.name);
        const bSel = (this.selectedUserCities || []).includes(b.name);
        if (aSel && !bSel) return -1;
        if (!aSel && bSel) return 1;
        return (a.name || '').localeCompare(b.name || '');
      });
    });
  }

  isAllUserCitiesSelected(): boolean {
    const items = this.filteredUserCitiesForFilter || [];
    return items.length > 0 && items.every((c) => (this.selectedUserCities || []).includes(c.name));
  }

  toggleSelectAllUserCities(): void {
    const items = this.filteredUserCitiesForFilter || [];
    if (this.isAllUserCitiesSelected()) {
      this.selectedUserCities = [];
    } else {
      this.selectedUserCities = items.map((c) => c.name);
    }
    this.onUserCityChange();
  }

  get filteredUserCampusesForFilter(): Array<{ id: string; name: string }> {
    const depKey = `${this.userCampusSearch}|${this.isSuperAdmin}|${(this.selectedUserCountries || []).join(',')}|${(this.selectedUserCities || []).join(',')}|${(this.selectedUserCampuses || []).join(',')}|${(this.userCampuses || []).length}`;
    return this._memoize('filteredUserCampuses', depKey, () => {
      const term = (this.userCampusSearch || '').trim().toLowerCase();
      let result = this.userCampuses || [];

      if (!this.isSuperAdmin) {
        if (this.selectedUserCountries && this.selectedUserCountries.length) {
          const selectedCodes = this.selectedUserCountries.map((c) => c.toLowerCase());
          result = result.filter((c) =>
            selectedCodes.some(
              (sc) =>
                sc === String(c.country_id || '').toLowerCase() ||
                sc === String(c.country_name || '').toLowerCase()
            )
          );
        }
        if (this.selectedUserCities && this.selectedUserCities.length) {
          const selectedCityNames = this.selectedUserCities.map((ct) => ct.toLowerCase());
          result = result.filter((c) =>
            selectedCityNames.some(
              (sc) =>
                sc === String(c.city_id || '').toLowerCase() ||
                sc === String(c.city_name || '').toLowerCase()
            )
          );
        }
      }

      if (term) {
        result = result.filter((c) => (c.name || '').toLowerCase().includes(term));
      }
      return [...result].sort((a, b) => {
        const aSel = (this.selectedUserCampuses || []).includes(a.id);
        const bSel = (this.selectedUserCampuses || []).includes(b.id);
        if (aSel && !bSel) return -1;
        if (!aSel && bSel) return 1;
        return (a.name || '').localeCompare(b.name || '');
      });
    });
  }

  isAllUserCampusesSelected(): boolean {
    const items = this.filteredUserCampusesForFilter || [];
    return items.length > 0 && items.every((c) => (this.selectedUserCampuses || []).includes(c.id));
  }

  toggleSelectAllUserCampuses(): void {
    const items = this.filteredUserCampusesForFilter || [];
    if (this.isAllUserCampusesSelected()) {
      this.selectedUserCampuses = [];
    } else {
      this.selectedUserCampuses = items.map((c) => c.id);
    }
  }

  get filteredUserDepartmentsForFilter(): Array<{ id: string; name: string }> {
    const depKey = `${this.userDepartmentSearch}|${(this.selectedUserDepartments || []).join(',')}|${(this.userDepartments || []).length}`;
    return this._memoize('filteredUserDepartments', depKey, () => {
      const term = (this.userDepartmentSearch || '').trim().toLowerCase();
      let list = this.userDepartments || [];
      if (term) {
        list = list.filter(
          (d) =>
            (d.name || '').toLowerCase().includes(term) ||
            (this.selectedUserDepartments || []).includes(d.id)
        );
      }
      return [...list].sort((a, b) => {
        const aSel = (this.selectedUserDepartments || []).includes(a.id);
        const bSel = (this.selectedUserDepartments || []).includes(b.id);
        if (aSel && !bSel) return -1;
        if (!aSel && bSel) return 1;
        return (a.name || '').localeCompare(b.name || '');
      });
    });
  }

  isAllUserDepartmentsSelected(): boolean {
    const ids = (this.filteredUserDepartmentsForFilter || []).map((d) => d.id).filter(Boolean);
    return ids.length > 0 && ids.every((id) => (this.selectedUserDepartments || []).includes(id));
  }

  toggleSelectAllUserDepartments(): void {
    const ids = (this.filteredUserDepartmentsForFilter || []).map((d) => d.id).filter(Boolean);
    if (this.isAllUserDepartmentsSelected()) {
      this.selectedUserDepartments = [];
    } else {
      this.selectedUserDepartments = [...ids];
    }
  }

  get filteredUserTeamsForFilter(): Array<{ id: string; name: string }> {
    const depKey = `${this.userTeamSearch}|${(this.selectedUserTeams || []).join(',')}|${(this.userTeams || []).length}`;
    return this._memoize('filteredUserTeams', depKey, () => {
      const term = (this.userTeamSearch || '').trim().toLowerCase();
      let list = this.userTeams || [];
      if (term) {
        list = list.filter(
          (t) =>
            (t.name || '').toLowerCase().includes(term) ||
            (this.selectedUserTeams || []).includes(t.id)
        );
      }
      return [...list].sort((a, b) => {
        const aSel = (this.selectedUserTeams || []).includes(a.id);
        const bSel = (this.selectedUserTeams || []).includes(b.id);
        if (aSel && !bSel) return -1;
        if (!aSel && bSel) return 1;
        return (a.name || '').localeCompare(b.name || '');
      });
    });
  }

  isAllUserTeamsSelected(): boolean {
    const ids = (this.filteredUserTeamsForFilter || []).map((t) => t.id).filter(Boolean);
    return ids.length > 0 && ids.every((id) => (this.selectedUserTeams || []).includes(id));
  }

  toggleSelectAllUserTeams(): void {
    const ids = (this.filteredUserTeamsForFilter || []).map((t) => t.id).filter(Boolean);
    if (this.isAllUserTeamsSelected()) {
      this.selectedUserTeams = [];
    } else {
      this.selectedUserTeams = [...ids];
    }
  }

  onUserCountryChange(): void {
    const validCityNames = new Set((this.filteredUserCitiesForFilter || []).map((c) => c.name));
    this.selectedUserCities = (this.selectedUserCities || []).filter((name) =>
      validCityNames.has(name)
    );
    const validCampusIds = new Set((this.filteredUserCampusesForFilter || []).map((c) => c.id));
    this.selectedUserCampuses = (this.selectedUserCampuses || []).filter((id) =>
      validCampusIds.has(id)
    );
  }

  onUserCityChange(): void {
    const validCampusIds = new Set((this.filteredUserCampusesForFilter || []).map((c) => c.id));
    this.selectedUserCampuses = (this.selectedUserCampuses || []).filter((id) =>
      validCampusIds.has(id)
    );
  }

  filteredCountries(): Array<{ code: string; name: string }> {
    const term = String(this.userFilters.country_id || '')
      .trim()
      .toLowerCase();
    if (!term) return this.countries || [];
    return (this.countries || []).filter((c) => (c.name || '').toLowerCase().includes(term));
  }

  filteredCities(): Array<{ code: string; name: string }> {
    const term = String(this.userFilters.city_id || '')
      .trim()
      .toLowerCase();
    if (!term) return this.cities || [];
    return (this.cities || []).filter((c) => (c.name || '').toLowerCase().includes(term));
  }

  filteredDepartments(): string[] {
    const term = String(this.userFilters.department_id || '')
      .trim()
      .toLowerCase();
    if (!term) return this.departmentList || [];
    return (this.departmentList || []).filter((d) => d.toLowerCase().includes(term));
  }

  filteredTeams(): string[] {
    const term = String(this.userFilters.team_id || '')
      .trim()
      .toLowerCase();
    if (!term) return this.teamList || [];
    return (this.teamList || []).filter((t) => t.toLowerCase().includes(term));
  }

  onUserFilterInstituteChange(instituteId: string): void {
    this.userFilters.institute_id = instituteId || '';
    this.selectedUserDepartments = [];
    this.selectedUserTeams = [];
    this.selectedUserCampuses = [];
    this.selectedUserCountries = [];
    this.selectedUserCities = [];
    this.cities = [];
    this.departmentList = [];
    this.teamList = [];
    this.campusList = [];
    this.userDepartments = [];
    this.userTeams = [];
    this.userCampuses = [];
    if (!instituteId) return;
    this.loadDepartmentList(instituteId);
    this.loadTeamsList(instituteId);
    this.loadCampusList(instituteId);
  }

  private loadSuperAdminUserCities(countryId: string): void {
    this.http
      .get<any>(`${API_BASE}/location-hierarchy`, { params: { country_id: countryId } })
      .subscribe({
        next: (res) => {
          try {
            const rawCities = Array.isArray(res?.data?.cities) ? res.data.cities : [];
            const uniqueCities = new Map<string, { code: string; name: string }>();

            rawCities.forEach((city: any) => {
              const rawName = String(city?.name || city?.city_name || city?.city || '').trim();
              if (!rawName) return;
              const name = rawName.replace(
                /\w\S*/g,
                (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
              );
              const key = name.toLowerCase();
              if (!uniqueCities.has(key)) {
                uniqueCities.set(key, {
                  code: String(city?.id || city?.city_id || name),
                  name,
                });
              }
            });

            this.cities = Array.from(uniqueCities.values()).sort((a, b) =>
              a.name.localeCompare(b.name)
            );
          } catch (e) {
            this.cities = [];
          }
        },
        error: () => {
          this.cities = [];
        },
      });
  }

  filteredIndustries(): string[] {
    const term = String(this.userFilters.industry || '')
      .trim()
      .toLowerCase();
    if (!term) return this.industryTypes;
    return this.industryTypes.filter((i) => i.toLowerCase().includes(term));
  }

  filteredSectors(): string[] {
    const industry = String(this.userFilters.industry || '').trim();
    const source = industry ? this.sectorMap[industry] || [] : [];
    const term = String(this.userFilters.sector || '')
      .trim()
      .toLowerCase();
    if (!term) return source;
    return source.filter((s) => s.toLowerCase().includes(term));
  }

  onIndustryChange() {
    // Match manage-test behavior: changing industry always resets sector.
    this.userFilters.sector = '';
  }

  isAllDepartmentsSelected(): boolean {
    return !!(
      this.departments.length &&
      this.selectedDepartments.length &&
      this.selectedDepartments.length === this.departments.length
    );
  }

  isAllTeamsSelected(): boolean {
    return !!(
      this.teams.length &&
      this.selectedTeams.length &&
      this.selectedTeams.length === this.teams.length
    );
  }

  toggleAllDepartments(checked: boolean): void {
    this.selectedDepartments = checked
      ? (this.filteredDepartmentsForFilter || []).map((d) => d.id)
      : [];
  }

  toggleAllTeams(checked: boolean): void {
    this.selectedTeams = checked
      ? (this.filteredTeamsForFilter || []).map((t) => t.id)
      : [];
  }

  onDepartmentSelectionChange(): void {
    if (this.selectedDepartments.includes('__all__')) {
      this.toggleAllDepartments(true);
    } else {
      this.selectedDepartments = Array.from(
        new Set(this.selectedDepartments.filter((id) => id !== '__all__'))
      );
    }
    const targetInstitute = this.filterInstitute || this.model.institute;
    this.loadTestOptions(targetInstitute);
    this.loadExams(targetInstitute);
  }

  onTeamSelectionChange(): void {
    if (this.selectedTeams.includes('__all__')) {
      this.toggleAllTeams(true);
    } else {
      this.selectedTeams = Array.from(new Set(this.selectedTeams.filter((id) => id !== '__all__')));
    }
    const targetInstitute = this.filterInstitute || this.model.institute;
    this.loadTestOptions(targetInstitute);
    this.loadExams(targetInstitute);
  }

  get selectedInstituteName(): string {
    return this.getInstituteName(this.model.institute) || this.filterInstituteSearch || '';
  }

  get selectedTestName(): string {
    return (
      this.selectedExam?.title ||
      this.selectedExam?.name ||
      this.examCtrl.value?.title ||
      this.examCtrl.value?.name ||
      this.filterExamName ||
      ''
    );
  }

  goBack() {
    // navigate back to the admin exams listing
    this.router.navigate(['/view-schedule-exam']);
  }

  loadInstitutes() {
    this.institutesLoading = true;
    this.institutesLoadFailed = false;
    const params: any = {};
    if (this.filterCountry) params.country = this.filterCountry;
    if (this.selectedCities && this.selectedCities.length) {
      params.city = this.selectedCities.join(',');
    } else if (this.filterCity) {
      params.city = this.filterCity;
    }
    if (this.filterIndustry) params.industry = this.filterIndustry;
    if (this.filterSector) params.sector = this.filterSector;

    this.http
      .get<any>(this.apiUrl, {
        params,
        headers: { 'X-Skip-Institute-Context': 'true' },
      })
      .pipe(retry(2))
      .subscribe({
        next: (res) => {
          this.institutesLoading = false;
          if (res && res.data && Array.isArray(res.data)) {
            this.institutes = res.data.map((r: any) => ({
              name: r.name || r.institute_name || r.short_name || '',
              short_name: r.short_name || r.name || r.institute_name || '',
              institute_id: r.institute_id,
            }));
            this.institutesSubject.next(this.institutes);

            // If the model already has an institute (for example when applying edit/view), prefer it
            try {
              if (this.model && this.model.institute) {
                const instId = this.model.institute;
                const found = this.institutes.find(
                  (i) => String(i.institute_id) === String(instId)
                );
                if (found) {
                  this.model.institute = found.institute_id as any;
                  this.instituteCtrl.setValue(found, { emitEvent: false });
                  this.updateInstituteDisabledState();
                  this.onInstituteChange(this.model.institute);
                  this.applyDefaultSchedulerName();
                  try {
                    this.cd.detectChanges();
                  } catch (e) {
                    /* noop */
                  }
                  return;
                } else {
                  // If it is filtered out, clear it
                  this.model.institute = '';
                  this.instituteCtrl.setValue('', { emitEvent: false });
                  this.model.exam_id = '';
                  this.selectedExam = null;
                  this.examCtrl.setValue('', { emitEvent: false });
                  this.updateInstituteDisabledState();
                }
              } else if (!this.isSuperAdmin) {
                const adminInstId = this.getAdminInstituteId();
                if (adminInstId) {
                  this.loadCampusList(adminInstId);
                  this.loadDepartmentList(adminInstId);
                  this.loadTeamsList(adminInstId);
                  const found = this.institutes.find(
                    (i) => String(i.institute_id) === String(adminInstId)
                  );
                  if (found) {
                    this.model.institute = found.institute_id as any;
                    this.instituteCtrl.setValue(found, { emitEvent: false });
                    this.updateInstituteDisabledState();
                    this.onInstituteChange(this.model.institute);
                    this.applyDefaultSchedulerName();
                  } else {
                    this.model.institute = adminInstId as any;
                    this.onInstituteChange(this.model.institute);
                  }
                }
              }
            } catch (e) {
              /* ignore */
            }
          }
        },
        error: (err) => {
          this.institutesLoading = false;
          this.institutesLoadFailed = true;
          this.institutes = [];
          this.institutesSubject.next([]);
          console.warn('Failed to load institutes', err);
        },
      });
  }

  // Track whether institute field should be disabled (used in template via [readonly] + [matAutocompleteDisabled])
  // NOTE: We do NOT call FormControl.disable() because that prevents MatAutocompleteTrigger
  // from invoking displayWith after setValue, causing the input to appear blank.
  instituteDisabled = false;
  updateInstituteDisabledState() {
    this.instituteDisabled =
      !this.isSuperAdmin || this.readOnly || this.scheduleFieldsLocked || !this.filterInstitute;
  }

  get testSelectionDisabled(): boolean {
    return (
      this.readOnly || this.scheduleFieldsLocked || !this.filterInstitute || !this.filterExamName
    );
  }

  private applyScheduleFieldsLock(): void {
    this.updateInstituteDisabledState();
    if (this.readOnly || this.scheduleFieldsLocked) {
      this.examCtrl.disable({ emitEvent: false });
    } else {
      this.examCtrl.enable({ emitEvent: false });
    }
    if (!this.scheduleTimingForm) return;
    if (this.readOnly || this.scheduleFieldsLocked) {
      this.scheduleTimingForm.disable({ emitEvent: false });
    } else {
      this.scheduleTimingForm.enable({ emitEvent: false });
    }
  }

  // when the institute select changes in the template, call this helper to load exams
  onInstituteChange(value: string) {
    this.model.institute = value || '';
    if (this.isSuperAdmin) {
      this.loadSuperAdminUserLocationsForStep2();
    }
    // Prioritize the test list. Loading every institute dependency at the same
    // time makes the local backend compete for database connections and delays
    // the dropdown the user is waiting for.
    this.loadExams(this.model.institute, true);
  }

  private loadInstituteDependencies(): void {
    this.loadDepartmentList(this.model.institute);
    this.loadTeamsList(this.model.institute);
    this.loadCampusList(this.model.institute);
    this.loadUsers();
    this.loadDepartments(this.model.institute);
    this.loadTeams(this.model.institute);
    this.loadTestOptions(this.model.institute);
  }

  // Autocomplete display / selection helpers
  displayInstitute(i: any) {
    return i ? i.name || '' : '';
  }
  onInstituteAutocompleteSelected(value: any) {
    const id =
      value && typeof value === 'object'
        ? value.institute_id || value.id || value.instituteId || ''
        : '';
    if (!id) return;
    if (!this.filterInstitute) return;
    const instituteChanged = String(this.model.institute || '') !== String(id);
    this.model.institute = id;
    if (instituteChanged) {
      this.model.exam_id = '';
      this.selectedExam = null;
      this.examCtrl.setValue('', { emitEvent: false });
    }
    this.onInstituteChange(this.model.institute);
    this.applyDefaultSchedulerName();
  }

  displayExam(e: any) {
    return e ? e.title || e.name || '' : '';
  }
  onExamAutocompleteSelected(value: any) {
    const id =
      value && typeof value === 'object' ? value.id || value.exam_id || value._id || '' : '';
    if (!id) return;
    if (!this.filterExamName) return;
    this.model.exam_id = id;
    this.onExamChange(this.model.exam_id);
    this.examCtrl.setErrors(null);
    this.applyDefaultSchedulerName();
  }

  private explicitInstituteRequestOptions(): { headers?: { [name: string]: string } } {
    return this.isSuperAdmin ? { headers: { 'X-Skip-Institute-Context': 'true' } } : {};
  }

  goToNextStep(stepper: any): void {
    const value = this.examCtrl.value;
    const selectedId =
      value && typeof value === 'object'
        ? value.id || value.exam_id || value.test_id || value._id
        : '';
    const validSelection =
      !!selectedId &&
      String(selectedId) === String(this.model.exam_id || '') &&
      (this.examsList || []).some((exam) => String(exam.id) === String(selectedId));

    if (!validSelection) {
      // Keep Next clickable, but block navigation until an autocomplete option is selected.
      this.model.exam_id = '';
      this.selectedExam = null;
      this.examCtrl.setErrors({ required: true });
      this.examCtrl.markAsTouched();
      // Return the user to the invalid Test field without opening its autocomplete panel.
      setTimeout(() => {
        this.testInput?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      return;
    }

    stepper.next();
  }

  // Called when the Enable Filters checkbox toggles
  onFilterToggle(enabled: boolean) {
    this.filterEnabled = !!enabled;
    // if enabling, ensure dependent lists are loaded so filters populate
    if (this.filterEnabled) {
      try {
        this.loadExams(this.model.institute);
      } catch (e) {
        /* noop */
      }
      try {
        this.loadDepartmentList(this.model.institute);
      } catch (e) {
        /* noop */
      }
      try {
        this.loadTeamsList(this.model.institute);
      } catch (e) {
        /* noop */
      }
      // open overlay if the template and anchor exist
      try {
        this.openFiltersOverlay();
      } catch (e) {
        /* noop */
      }
    } else {
      try {
        this.closeFiltersOverlay();
      } catch (e) {
        /* noop */
      }
    }
    try {
      this.cd.detectChanges();
    } catch (e) {
      /* noop */
    }
  }

  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;
  @ViewChild('userFiltersBtn', { read: ElementRef }) userFiltersBtn!: ElementRef;
  @ViewChild('filtersPaneluser') filtersPanelUserTpl!: TemplateRef<any>;
  @ViewChild('filtersPanelUserAnchor') filtersPanelUserAnchorTpl!: TemplateRef<any>;
  private filtersOverlayRef: OverlayRef | null = null;
  private userFiltersOverlayRef: OverlayRef | null = null;
  // display mode: 'anchor' = below filters button, 'center' = centered on screen
  filtersPanelPosition: 'anchor' | 'center' = 'anchor';

  openExamFilter(): void {
    this.filterEnabled = true;
    this.onFilterToggle(true); // if you already use this hook
  }
  openFiltersOverlay() {
    if (!this.filtersBtn) return;
    // ensure template's inner *ngIf becomes true so template content renders inside the overlay
    this.filterEnabled = true;

    // Load filter options (departments, teams, test options) for effective institute
    const targetInst = this.getEffectiveInstituteId();
    if (targetInst) {
      this.loadDepartments(targetInst);
      this.loadTeams(targetInst);
      this.loadTestOptions(targetInst);
    }
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
        // prefer aligning overlay to the left of the button (overlay sits left of button)
        { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top', offsetX: -8 },
        { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: 8 },
        { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 8 },
      ])
      .withPush(true);

    this.filtersOverlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'overlay-filters-panel-left',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.filtersOverlayRef.backdropClick().subscribe(() => this.closeFiltersOverlay());
    this.filtersOverlayRef.keydownEvents().subscribe((ev: any) => {
      if (ev.key === 'Escape') this.closeFiltersOverlay();
    });

    const portal = new TemplatePortal(this.filtersPanelTpl, this.vcr);
    this.filtersOverlayRef.attach(portal);
  }

  // ensure UI flag is cleared when overlay closes
  closeFiltersOverlay() {
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (e) {}
      this.filtersOverlayRef = null;
    }
    this.filterEnabled = false;
  }

  openUserFiltersOverlay() {
    if (!this.userFiltersBtn) return;
    this.userFilterOpen = true;
    if (this.isSuperAdmin) {
      this.loadSuperAdminUserLocationsForStep2();
    }
    if (this.userFiltersOverlayRef) {
      try {
        this.userFiltersOverlayRef.dispose();
      } catch (e) {}
      this.userFiltersOverlayRef = null;
    }

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.userFiltersBtn)
      .withPositions([
        { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top', offsetX: -8 },
        { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: 8 },
      ])
      .withPush(true);

    this.userFiltersOverlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'overlay-filters-panel-left',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.userFiltersOverlayRef.backdropClick().subscribe(() => this.closeUserFiltersOverlay());
    this.userFiltersOverlayRef.keydownEvents().subscribe((ev: any) => {
      if (ev.key === 'Escape') this.closeUserFiltersOverlay();
    });

    // Attach the anchored user filters template (compact overlay panel)
    const portal = new TemplatePortal(this.filtersPanelUserAnchorTpl, this.vcr);
    this.userFiltersOverlayRef.attach(portal);
  }

  closeUserFiltersOverlay() {
    if (this.userFiltersOverlayRef) {
      try {
        this.userFiltersOverlayRef.dispose();
      } catch (e) {}
      this.userFiltersOverlayRef = null;
    }
    this.userFilterOpen = false;
  }

  // Open/close the Select Users filter modal
  openUserFilter() {
    this.userFilterOpen = true;
    if (this.isSuperAdmin) {
      this.loadSuperAdminUserLocationsForStep2();
    }
    try {
      this.cd.detectChanges();
    } catch (e) {}
  }
  closeUserFilter() {
    this.userFilterOpen = false;
    try {
      this.cd.detectChanges();
    } catch (e) {}
  }

  // load exams for a selected institute (populate the exam dropdown)
  examsList: Array<{ id: string; title: string }> = [];
  examsLoading = false;
  // raw exams array with extra metadata (description, etc.)
  examsRaw: any[] = [];
  selectedExam: any = null;
  // exam filters (UI bound)
  filterInstitute = '';
  filterInstituteSearch = '';
  filterExamName = '';
  filterCountry = '';
  filterCity = '';
  filterDepartment = '';
  filterTeam = '';
  selectedDepartments: string[] = [];
  selectedTeams: string[] = [];
  filterIndustry = '';
  filterSector = '';
  filterCreationDateAfter: Date | null = null;
  filterCreationDate: Date | null = null;
  filterStartDate: Date | null = null;
  filterEndDate: Date | null = null;
  filterCreatedByMe = false;
  filterEnabled = false;
  // controls the Select Users filter modal
  userFilterOpen = false;

  // New exam filter properties
  countrySearch = '';
  examNameSearch = '';
  selectedCountries: string[] = [];
  selectedCities: string[] = [];
  industrySearch = '';
  sectorSearch = '';
  filterCityOptions: Array<{ code: string; name: string }> = [];
  departments: Array<{ id: string; name: string }> = [];
  teams: Array<{ id: string; name: string }> = [];
  testOptions: Array<{ id: string; title: string }> = [];

  get examFilteredCountries(): Array<{ code: string; name: string }> {
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
    const items = this.examFilteredCountries || [];
    return items.length > 0 && items.every((c) => (this.selectedCountries || []).includes(c.code));
  }

  toggleSelectAllCountries(): void {
    const items = this.examFilteredCountries || [];
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

  get filteredSectorsForExam(): string[] {
    const scoped = this.scopedSectors;
    const term = (this.sectorSearch || '').trim().toLowerCase();
    if (!term) return scoped;
    return scoped.filter((s) => s.toLowerCase().includes(term));
  }

  filteredCitiesForExam(): Array<{ code: string; name: string }> {
    const term = (this.filterCity || '').trim().toLowerCase();
    if (!term) return this.filterCityOptions;
    return this.filterCityOptions.filter((c) => (c.name || '').toLowerCase().includes(term));
  }

  filteredExamNamesForFilter(): string[] {
    const names = Array.from(new Set((this.testOptions || []).map((o) => o.title).filter(Boolean)));
    const term = (this.examNameSearch || '').trim().toLowerCase();
    const selected = (this.filterExamName || '').trim().toLowerCase();
    if (!term || term === selected) return names;
    return names.filter((n) => n.toLowerCase().includes(term));
  }

  onFilterTestNameSelected(testName: string): void {
    this.filterExamName = testName || '';
    this.examNameSearch = testName || '';
    const targetInstitute = this.filterInstitute || this.model.institute;
    if (targetInstitute) {
      this.loadTestOptions(targetInstitute);
      this.loadExams(targetInstitute);
    }
  }

  filteredInstitutesForFilter(): Array<{ name: string; institute_id?: string }> {
    const term = (this.filterInstituteSearch || this.filterInstitute || '').trim().toLowerCase();
    if (!term) return this.institutes;
    return (this.institutes || []).filter((inst) => (inst.name || '').toLowerCase().includes(term));
  }

  // Getter to filter departments list dynamically by search text
  get filteredDepartmentsForFilter(): Array<{ id: string; name: string }> {
    const term = (this.departmentFilterSearch || '').trim().toLowerCase();
    if (!term) return this.departments;
    return this.departments.filter((d) => (d.name || '').toLowerCase().includes(term));
  }

  // Getter to filter teams list dynamically by search text and selected departments
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

        if (!teamDeptId && !teamDeptName) return true;
        if (teamDeptId && deptsArr.includes(teamDeptId)) return true;
        if (teamDeptName && deptNames.includes(teamDeptName)) return true;

        return false;
      });
    }

    if (!term) return list;
    return list.filter((t) => (t.name || '').toLowerCase().includes(term));
  }

  // Focus search input when dropdown opens, and clear search input when closed
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

  displayFilterInstitute(value: any): string {
    if (!value) return '';
    if (typeof value === 'object') return value.name || '';
    return this.getInstituteName(value);
  }

  onFilterInstituteSelected(instituteId: string): void {
    this.filterInstitute = instituteId || '';
    this.filterInstituteSearch = this.getInstituteName(this.filterInstitute);
    this.filterExamName = ''; // Reset selected test name when institute changes

    const targetInstitute = this.filterInstitute || this.model.institute;

    // Load departments, teams, test options, and exams for the selected institute
    this.loadDepartments(targetInstitute);
    this.loadTeams(targetInstitute);
    this.loadTestOptions(targetInstitute);
    this.loadExams(targetInstitute);
  }

  // ADD THIS MISSING METHOD DEFINITION:
  private syncSelectedExamFromFilters(): void {
    const targetName = String(this.filterExamName || '')
      .trim()
      .toLowerCase();
    if (!targetName) return;

    const match =
      (this.testOptions || []).find(
        (opt) =>
          String(opt.title || '')
            .trim()
            .toLowerCase() === targetName
      ) ||
      (this.examsList || []).find(
        (opt: any) =>
          String(opt.title || '')
            .trim()
            .toLowerCase() === targetName
      );

    if (!match) return;

    const examId = String(
      (match as any).id ||
        (match as any).exam_id ||
        (match as any).test_id ||
        (match as any)._id ||
        ''
    );
    if (!examId) return;

    this.model.exam_id = examId;
    this.onExamChange(examId);
    try {
      const examOption = (this.examsList || []).find((ex: any) => String(ex.id) === String(examId));
      if (examOption) this.examCtrl.setValue(examOption, { emitEvent: false });
    } catch (e) {
      /* noop */
    }
  }

  loadCitiesForCountry(countryCodes: string | string[]) {
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

  onCountryFilterChange() {
    this.filterCity = '';
    this.selectedCities = [];
    this.filterCitiesByCountry();
    this.loadInstitutes();
  }

  onIndustryFilterChange() {
    this.filterSector = '';
    this.loadInstitutes();
  }

  onFilterSelectOpened(opened: boolean, field: 'country' | 'industry' | 'sector' | 'city') {
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

  stopFilterSearchEvent(event: Event) {
    event.stopPropagation();
  }

  private getAdminInstituteId(): string {
    try {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      if (raw) {
        const u = JSON.parse(raw);
        return String(u?.institute_id || u?.instituteId || u?.institute || u?.institute_name || '');
      }
    } catch (e) {}
    return '';
  }

  private getEffectiveInstituteId(): string {
    if (this.filterInstitute) return this.filterInstitute;
    if (this.model && this.model.institute) return this.model.institute;
    if (!this.isSuperAdmin) {
      return this.getAdminInstituteId();
    }
    return '';
  }

  loadDepartments(instId?: string) {
    const targetInst = instId || this.getEffectiveInstituteId();
    if (!targetInst) {
      this.departments = [];
      return;
    }
    const url = `${API_BASE}/get-department-list`;
    this.http.get<any>(url, { params: { institute_id: targetInst } }).subscribe({
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
    const targetInst = instId || this.getEffectiveInstituteId();
    if (!targetInst) {
      this.teams = [];
      return;
    }
    const url = `${API_BASE}/get-teams-list`;
    this.http.get<any>(url, { params: { institute_id: targetInst } }).subscribe({
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

  loadTestOptions(instId?: string) {
    const targetInst = instId !== undefined ? instId : this.getEffectiveInstituteId();
    const url = `${API_BASE}/get-exams-list`;
    const params: any = {};
    if (targetInst) {
      params.institute_id = targetInst;
    } else if (!this.isSuperAdmin) {
      this.testOptions = [];
      return;
    }

    if (this.selectedDepartments && this.selectedDepartments.length) {
      const depts = this.selectedDepartments.filter((id) => id && id !== '__all__');
      if (depts.length) params.department_ids = depts.join(',');
    }

    if (this.selectedTeams && this.selectedTeams.length) {
      const tms = this.selectedTeams.filter((id) => id && id !== '__all__');
      if (tms.length) params.team_ids = tms.join(',');
    }

    // Add date filters to the request parameters
    if (this.filterCreationDateAfter) {
      params.created_after = this.toApiDateString(this.filterCreationDateAfter);
    }
    if (this.filterCreationDate) {
      params.created_before = this.toApiDateString(this.filterCreationDate);
    }

    const options = {
      params,
      ...this.explicitInstituteRequestOptions(),
    };

    this.http.get<any>(url, options).subscribe({
      next: (res) => {
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        const mapped = arr
          .map((x: any) => ({
            id: String(x.test_id || x.exam_id || x.id || ''),
            title: String(x.title || x.name || x.exam_name || '').trim(),
          }))
          .filter((x: any) => !!x.title);
        const uniqueMap = new Map<string, { id: string; title: string }>();
        mapped.forEach((item: any) => {
          const key = item.title.toLowerCase();
          if (!uniqueMap.has(key)) uniqueMap.set(key, item);
        });
        this.testOptions = Array.from(uniqueMap.values()).sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        this.syncSelectedExamFromFilters();
      },
      error: (err) => {
        console.warn('Failed to load test options', err);
        this.testOptions = [];
      },
    });
  }

  loadExams(instituteId: string, loadDependenciesAfter = false) {
    this.loader.show();
    this.examsLoading = true;
    this.examsList = [];
    if (!instituteId) {
      this.examsRaw = [];
      this.selectedExam = null;
      this.examCtrl.setValue('', { emitEvent: false });
      this.examsLoading = false;
      this.loader.hide();
      return;
    }
    let url = `${API_BASE}/get-exams-list`;
    const params: string[] = [];
    params.push(`institute_id=${encodeURIComponent(instituteId)}`);
    if (this.filterExamName) params.push(`name=${encodeURIComponent(this.filterExamName)}`);
    if (this.filterCountry) params.push(`country=${encodeURIComponent(this.filterCountry)}`);
    const cityName = String(this.filterCity || '').trim();
    if (cityName) params.push(`city=${encodeURIComponent(cityName)}`);
    if (this.filterDepartment)
      params.push(`department=${encodeURIComponent(this.filterDepartment)}`);
    if (this.filterTeam) params.push(`team=${encodeURIComponent(this.filterTeam)}`);
    if (this.selectedDepartments && this.selectedDepartments.length)
      params.push(`departments=${encodeURIComponent(this.selectedDepartments.join(','))}`);
    if (this.selectedTeams && this.selectedTeams.length)
      params.push(`teams=${encodeURIComponent(this.selectedTeams.join(','))}`);
    if (this.filterIndustry) params.push(`industry=${encodeURIComponent(this.filterIndustry)}`);
    if (this.filterSector) params.push(`sector=${encodeURIComponent(this.filterSector)}`);
    if (this.filterCreationDateAfter)
      params.push(
        `created_after=${encodeURIComponent((this.filterCreationDateAfter as Date).toISOString().slice(0, 10))}`
      );
    if (this.filterCreationDate)
      params.push(
        `created_before=${encodeURIComponent((this.filterCreationDate as Date).toISOString().slice(0, 10))}`
      );
    if (this.filterStartDate)
      params.push(
        `start_after=${encodeURIComponent((this.filterStartDate as Date).toISOString().slice(0, 10))}`
      );
    if (this.filterEndDate)
      params.push(
        `start_before=${encodeURIComponent((this.filterEndDate as Date).toISOString().slice(0, 10))}`
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
    if (params.length) url += `?${params.join('&')}`;

    // This page has its own institute selector. Prevent the global institute
    // interceptor from replacing the explicitly selected institute.
    this.http.get<any>(url, this.explicitInstituteRequestOptions()).subscribe({
      next: (res) => {
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.examsRaw = Array.isArray(arr) ? arr : [];
        this.examsList = this.examsRaw.map((e: any) => ({
          id: e.exam_id || e.id || e.test_id || e._id,
          title: e.title || e.name || '',
        }));
        // if an exam id is already selected, update selectedExam
        if (this.model && this.model.exam_id) {
          this.onExamChange(this.model.exam_id);
          if (!this.selectedExam) {
            this.examCtrl.setValue('', { emitEvent: false });
            this.model.exam_id = '';
          }
        }
        // wire exam autocomplete observable
        try {
          this.filteredExams$ = this.examCtrl.valueChanges.pipe(
            startWith(''),
            map((val: any) => {
              const q = (
                typeof val === 'string' ? val : val?.title || val?.name || ''
              ).toLowerCase();
              return (this.examsList || []).filter((it: any) =>
                (it.title || '').toLowerCase().includes(q)
              );
            })
          );
        } catch (e) {
          this.filteredExams$ = of(this.examsList || []);
        }
      },
      error: (err) => {
        console.warn('Failed to apply exam filters', err);
        this.examsList = [];
        this.examsRaw = [];
        this.selectedExam = null;
      },
      complete: () => {
        this.examsLoading = false;
        this.loader.hide();
        try {
          this.cd.detectChanges();
        } catch (e) {
          /* noop */
        }
        if (loadDependenciesAfter) this.loadInstituteDependencies();
      },
    });
  }
  hasAppliedFilters = false;

  get appliedFilterChips(): Array<{ key: string; label: string; removable: boolean }> {
    if (!this.hasAppliedFilters) return [];
    const chips: Array<{ key: string; label: string; removable: boolean }> = [];
    if (this.filterInstitute && !this.isGlobalInstituteActive) {
      chips.push({
        key: 'filter_institute',
        label: `Institute: ${this.getInstituteName(this.filterInstitute)}`,
        removable: true,
      });
    }

    if (this.filterExamName)
      chips.push({
        key: 'filter_exam_name',
        label: `Test: ${this.filterExamName}`,
        removable: true,
      });
    if (this.filterCountry)
      chips.push({
        key: 'country',
        label: `Country: ${this.getCountryLabel(this.filterCountry)}`,
        removable: true,
      });
    if (this.filterCity)
      chips.push({ key: 'city', label: `City: ${this.filterCity}`, removable: true });
    if (this.filterIndustry)
      chips.push({ key: 'industry', label: `Industry: ${this.filterIndustry}`, removable: true });
    if (this.filterSector)
      chips.push({ key: 'sector', label: `Sector: ${this.filterSector}`, removable: true });
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
    if (this.filterCreatedByMe)
      chips.push({ key: 'created_by_me', label: 'Created by me', removable: true });
    return chips;
  }

  getCountryLabel(code: string): string {
    const found = this.countries.find((c) => String(c.code) === String(code));
    return found ? found.name : String(code || '');
  }

  getSelectedName(list: any[], selectedId: any): string {
    const found = (list || []).find(
      (item) =>
        String(item?.id) === String(selectedId) ||
        String(item?.dept_id) === String(selectedId) ||
        String(item?.team_id) === String(selectedId)
    );
    return found?.name || String(selectedId || '');
  }

  private toApiDateString(value: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
  }

  formatFilterDate(value: Date): string {
    try {
      return this.toApiDateString(value);
    } catch (e) {
      return String(value || '');
    }
  }

  removeAppliedFilter(key: string) {
    if (!key) return;
    if (key === 'filter_institute') {
      this.filterInstitute = '';
      this.filterInstituteSearch = '';
    } else if (key === 'filter_exam_name') {
      this.filterExamName = '';
    }
    if (key === 'country') {
      this.filterCountry = '';
      this.filterCity = '';
      this.onCountryFilterChange();
    } else if (key === 'city') {
      this.filterCity = '';
      this.loadInstitutes();
    } else if (key === 'industry') {
      this.filterIndustry = '';
      this.filterSector = '';
      this.onIndustryFilterChange();
    } else if (key === 'sector') {
      this.filterSector = '';
      this.loadInstitutes();
    } else if (key.startsWith('department:'))
      this.selectedDepartments = this.selectedDepartments.filter(
        (id) => String(id) !== key.substring('department:'.length)
      );
    else if (key.startsWith('team:'))
      this.selectedTeams = this.selectedTeams.filter(
        (id) => String(id) !== key.substring('team:'.length)
      );
    else if (key === 'created_after') this.filterCreationDateAfter = null;
    else if (key === 'created_before') this.filterCreationDate = null;
    else if (key === 'created_by_me') this.filterCreatedByMe = false;
    this.refreshAfterFilterChipChange();
  }

  clearAppliedFilters() {
    this.resetFilters();
  }

  private refreshAfterFilterChipChange() {
    if (this.appliedFilterChips.length) {
      this.loadExams(this.filterInstitute || this.model.institute);
      this.loadInstitutes();
    } else {
      this.hasAppliedFilters = false;
      this.loadExams(this.model.institute);
      this.loadInstitutes();
    }
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
        this.loadTestOptions(this.filterInstitute || this.model.institute);
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

  openJoinedDateRangePicker(): void {
    const dialogRef = this.dialog.open(DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.userFilters.joined_after,
        endDate: this.userFilters.joined_before,
      },
    });

    dialogRef.afterClosed().subscribe((res: DateRangeDialogResult | undefined) => {
      if (res) {
        this.userFilters.joined_after = res.startDate;
        this.userFilters.joined_before = res.endDate;
        this.loadUsers();
      }
    });
  }

  getJoinedDateRangeDisplay(): string {
    const start = this.userFilters.joined_after;
    const end = this.userFilters.joined_before;
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

  get appliedUserFilterChips(): Array<{ key: string; label: string }> {
    const chips: Array<{ key: string; label: string }> = [];

    if (this.selectedUserCountries && this.selectedUserCountries.length) {
      const labels = this.selectedUserCountries
        .map((code) => this.countries.find((c) => String(c.code) === String(code))?.name || code)
        .filter(Boolean);
      chips.push({ key: 'country', label: `Country: ${labels.join(', ')}` });
    } else if (this.userFilters.country_id) {
      const country = this.countries.find(
        (c) => String(c.code) === String(this.userFilters.country_id)
      );
      chips.push({
        key: 'country',
        label: `Country: ${country?.name || this.userFilters.country_id}`,
      });
    }

    if (this.selectedUserCities && this.selectedUserCities.length) {
      chips.push({ key: 'city', label: `City: ${this.selectedUserCities.join(', ')}` });
    } else if (this.userFilters.city_id) {
      chips.push({ key: 'city', label: `City: ${this.userFilters.city_id}` });
    }

    if (this.selectedUserDepartments && this.selectedUserDepartments.length) {
      const labels = this.selectedUserDepartments
        .map((id) => this.userDepartments.find((d) => String(d.id) === String(id))?.name || id)
        .filter(Boolean);
      chips.push({ key: 'department', label: `Department: ${labels.join(', ')}` });
    } else if (this.userFilters.department_id) {
      chips.push({ key: 'department', label: `Department: ${this.userFilters.department_id}` });
    }

    if (this.selectedUserTeams && this.selectedUserTeams.length) {
      const labels = this.selectedUserTeams
        .map((id) => this.userTeams.find((t) => String(t.id) === String(id))?.name || id)
        .filter(Boolean);
      chips.push({ key: 'team', label: `Team: ${labels.join(', ')}` });
    } else if (this.userFilters.team_id) {
      chips.push({ key: 'team', label: `Team: ${this.userFilters.team_id}` });
    }

    if (this.selectedUserCampuses && this.selectedUserCampuses.length) {
      const labels = this.selectedUserCampuses
        .map((id) => this.userCampuses.find((c) => String(c.id) === String(id))?.name || id)
        .filter(Boolean);
      chips.push({ key: 'campus', label: `Campus: ${labels.join(', ')}` });
    } else if (this.userFilters.campus_id) {
      chips.push({ key: 'campus', label: `Campus: ${this.userFilters.campus_id}` });
    }

    const dateRangeDisplay = this.getJoinedDateRangeDisplay();
    if (dateRangeDisplay) {
      chips.push({ key: 'joined_date', label: `Joined: ${dateRangeDisplay}` });
    }
    return chips;
  }

  removeUserFilter(key: string): void {
    if (key === 'country') {
      this.selectedUserCountries = [];
      this.userFilters.country_id = '';
      this.onUserCountryChange();
    }
    if (key === 'city') {
      this.selectedUserCities = [];
      this.userFilters.city_id = '';
      this.onUserCityChange();
    }
    if (key === 'campus') {
      this.selectedUserCampuses = [];
      this.userFilters.campus_id = '';
    }
    if (key === 'department') {
      this.selectedUserDepartments = [];
      this.userFilters.department_id = '';
    }
    if (key === 'team') {
      this.selectedUserTeams = [];
      this.userFilters.team_id = '';
    }
    if (key === 'joined_date') {
      this.userFilters.joined_after = null;
      this.userFilters.joined_before = null;
    }
    if (this.hasAppliedUserFilters) {
      this.loadUsers();
    } else {
      this.users = [];
      this.selectedUsers = [];
      this.selectAll = false;
    }
  }

  clearUserFilters(): void {
    this.selectedUserCountries = [];
    this.selectedUserCities = [];
    this.selectedUserCampuses = [];
    this.selectedUserDepartments = [];
    this.selectedUserTeams = [];
    this.userCountrySearch = '';
    this.userCitySearch = '';
    this.userCampusSearch = '';
    this.userDepartmentSearch = '';
    this.userTeamSearch = '';
    this.userFilters = {
      institute_id: '',
      campus_id: '',
      department_id: '',
      team_id: '',
      joined_after: null,
      joined_before: null,
      country_id: '',
      city_id: '',
      industry: '',
      sector: '',
    };
    this.users = [];
    this.selectedUsers = [];
    this.selectAll = false;
  }

  resetUserFilters(): void {
    this.clearUserFilters();
    const instituteId = this.model.institute || this.getAdminInstituteId() || '';
    if (instituteId) {
      this.loadDepartmentList(instituteId);
      this.loadTeamsList(instituteId);
      this.loadCampusList(instituteId);
    }
  }

  private hasExamFilterValues(): boolean {
    return !!(
      this.filterInstitute ||
      this.filterExamName ||
      this.filterCountry ||
      this.filterCity ||
      this.filterDepartment ||
      this.filterTeam ||
      (this.selectedDepartments && this.selectedDepartments.length) ||
      (this.selectedTeams && this.selectedTeams.length) ||
      this.filterIndustry ||
      this.filterSector ||
      this.filterCreationDateAfter ||
      this.filterCreationDate ||
      this.filterCreatedByMe
    );
  }

  // Called when Apply button is clicked (explicit apply wrapper)
  applyFilters() {
    if (this.isSuperAdmin && !this.isGlobalInstituteActive && !this.filterInstitute) {
      try {
        notify('Please select an institute', 'info');
      } catch (e) {}
      return;
    }
    if (!this.hasExamFilterValues()) {
      try {
        notify('Please add filters in the filter form.', 'info');
      } catch (e) {}
      return;
    }
    this.hasAppliedFilters = true;
    this.model.institute = this.filterInstitute || '';

    // 1. Sync the institute control
    this.instituteCtrl.setValue(
      this.institutes.find((i) => String(i.institute_id) === String(this.filterInstitute)) || '',
      { emitEvent: false }
    );

    // 2. Fetch and auto-select the exam if filterExamName was picked
    const targetInstitute = this.filterInstitute || this.model.institute;
    if (targetInstitute) {
      this.loadExams(targetInstitute, false);

      // Auto-populate selectedExam if a Test Name filter was chosen
      if (this.filterExamName) {
        const match = (this.examsRaw || []).find(
          (e: any) =>
            String(e.title || e.name || '')
              .trim()
              .toLowerCase() === String(this.filterExamName).trim().toLowerCase()
        );
        if (match) {
          const examId = String(match.exam_id || match.id || match.test_id || match._id || '');
          this.model.exam_id = examId;
          this.selectedExam = match;
          this.examCtrl.setValue(match, { emitEvent: false });
        }
      }
    }

    this.updateInstituteDisabledState();
    this.loadInstitutes();
    this.closeFiltersOverlay();
  }

  // Reset filter fields to defaults and reload exams
  resetFilters() {
    this.filterInstitute = '';
    this.filterInstituteSearch = '';
    this.filterExamName = '';
    this.examNameSearch = '';
    this.filterCountry = '';
    this.filterCity = '';
    this.filterDepartment = '';
    this.filterTeam = '';
    this.selectedDepartments = [];
    this.selectedTeams = [];
    this.filterIndustry = '';
    this.filterSector = '';
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.filterCreatedByMe = false;
    this.countrySearch = '';
    this.industrySearch = '';
    this.sectorSearch = '';
    this.citySearch = '';
    this.filterCityOptions = [];

    this.model.institute = '';
    this.instituteCtrl.reset(null, { emitEvent: false });
    this.instituteCtrl.setValue('', { emitEvent: false });
    this.selectedExam = null;
    this.examCtrl.reset('', { emitEvent: false });
    this.updateInstituteDisabledState();
    this.hasAppliedFilters = false;
    this.filterCitiesByCountry();

    // Reload options without date constraints
    this.loadTestOptions(this.model.institute);
    this.loadExams(this.model.institute);
    this.loadInstitutes();
    this.closeFiltersOverlay();
  }

  // When exam select value changes, find details and populate selectedExam
  onExamChange(examId: string) {
    this.model.exam_id = examId || '';
    this.selectedExam = null;
    if (!examId) return;
    const found = (this.examsRaw || []).find(
      (e: any) => String(e.exam_id || e.id || e.test_id || e._id) === String(examId)
    );
    if (found) {
      this.selectedExam = found;
      // set the autocomplete control so the exam name displays in the input
      try {
        const examOption = (this.examsList || []).find(
          (ex: any) => String(ex.id) === String(examId)
        );
        if (examOption) this.examCtrl.setValue(examOption);
      } catch (e) {
        /* noop */
      }
    }
    this.applyDefaultSchedulerName();
  }

  // load department list for a specific institute
  loadDepartmentList(instituteId: string) {
    this.departmentList = [];
    this.userDepartments = [];
    if (!instituteId) return;
    const url = `${API_BASE}/get-department-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url, this.explicitInstituteRequestOptions()).subscribe({
      next: (res) => {
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.userDepartments = arr.map((d: any) => ({
          id: String(d.dept_id || d.id || d.deptId),
          name: (d.name || d.dept_name || d.department_name || d.department || d).toString(),
        }));
        this.departmentList = arr
          .map((d: any) => (d.name || d.department_name || d.department || d).toString())
          .filter((s: any) => !!s);
      },
      error: (err) => {
        console.warn('Failed to load department list', err);
        this.departmentList = [];
        this.userDepartments = [];
      },
    });
  }

  // load teams list for a specific institute
  loadTeamsList(instituteId: string) {
    this.teamList = [];
    this.userTeams = [];
    if (!instituteId) return;
    const url = `${API_BASE}/get-teams-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url, this.explicitInstituteRequestOptions()).subscribe({
      next: (res) => {
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.userTeams = arr.map((t: any) => ({
          id: String(t.team_id || t.id || t.teamId),
          name: (t.name || t.team_name || t.team || t).toString(),
        }));
        this.teamList = arr
          .map((t: any) => (t.name || t.team_name || t.team || t).toString())
          .filter((s: any) => !!s);
      },
      error: (err) => {
        console.warn('Failed to load teams list', err);
        this.teamList = [];
        this.userTeams = [];
      },
    });
  }

  // load campus list for a specific institute
  loadCampusList(instituteId: string) {
    this.campusList = [];
    this.userCampuses = [];
    if (!instituteId) return;
    const url = `${API_BASE}/get-campus-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url, this.explicitInstituteRequestOptions()).subscribe({
      next: (res) => {
        const arr = Array.isArray(res?.data)
          ? res.data
          : Array.isArray(res?.campuses)
            ? res.campuses
            : Array.isArray(res)
              ? res
              : [];
        this.userCampuses = arr.map((c: any) => ({
          id: String(c.campus_id || c.id),
          name: (c.name || c.campus_name || c.campus || c).toString(),
          country_id: String(c.country?.country_id || c.country_id || ''),
          country_name: String(c.country?.country_name || c.country_name || ''),
          city_id: String(c.city?.city_id || c.city_id || ''),
          city_name: String(c.city?.city_name || c.city_name || ''),
        }));
        this.campusList = arr
          .map((c: any) => (c.name || c.campus_name || c.campus || c).toString())
          .filter((s: any) => !!s);
      },
      error: (err) => {
        console.warn('Failed to load campus list', err);
        this.campusList = [];
        this.userCampuses = [];
      },
    });
  }

  schedule() {
    this.scheduleTimingForm.markAllAsTouched();
    if (this.scheduleTimingForm.invalid) {
      notify(this.scheduleDateError || 'Check the schedule date and time fields.', 'error');
      return;
    }
    if (this.reviewScheduleInvalid) {
      this.reviewScheduleForm.markAllAsTouched();
      if (this.reviewScheduleForm.hasError('reviewBeforeTest')) {
        notify('Review date and time must be after the test schedule date and time.', 'error');
      } else if (this.reviewScheduleForm.hasError('reviewEndBeforeStart')) {
        notify('Review end date/time must be after or equal to review start date/time.', 'error');
      } else {
        notify('Choose a valid review date and enter time as HH:MM.', 'error');
      }
      return;
    }
    // build payload matching the DB columns described by the user
    const start = this.model.startDateTime || `${this.model.startDate} ${this.model.startTime}`;
    const duration = Number(this.model.durationMin) || 10;
    const total_questions = Number(this.model.totalQuestions) || 0;

    // compute end_time by adding duration minutes to the start datetime
    // If explicit endDate/endTime provided, prefer those values for end_time
    let startIso: string | null = null;
    let endIso: string | null = null;
    // Helper: robust Date parser that accepts:
    // - Date objects
    // - ISO strings (with T)
    // - space-separated datetimes like 'YYYY-MM-DD HH:mm'
    // - separate date (YYYY-MM-DD) and time (HH:mm) parts
    const parseDateInput = (dateLike: any, timeLike?: any): Date | null => {
      try {
        // Date instance
        if (dateLike instanceof Date) {
          if (isNaN(dateLike.getTime())) return null;

          // Angular Material's datepicker returns a Date at midnight. Preserve the
          // selected calendar date, but apply the value from the separate time
          // control so edits submit the date and time shown in the form.
          const result = new Date(dateLike.getTime());
          if (timeLike !== undefined && timeLike !== null && String(timeLike).trim()) {
            const timeMatch = String(timeLike)
              .trim()
              .match(/^([01]\d|2[0-3]):([0-5]\d)$/);
            if (!timeMatch) return null;
            result.setHours(Number(timeMatch[1]), Number(timeMatch[2]), 0, 0);
          }
          return result;
        }

        // numeric timestamp
        if (typeof dateLike === 'number' && !isNaN(dateLike)) {
          const d = new Date(dateLike);
          return isNaN(d.getTime()) ? null : d;
        }

        if (!dateLike && !timeLike) return null;

        const sDate = String(dateLike || '').trim();
        const sTime =
          typeof timeLike !== 'undefined' && timeLike !== null ? String(timeLike).trim() : '';

        // If dateLike already contains a time part (T or space), try direct parse first
        if (sDate.includes('T') || sDate.includes(' ')) {
          // normalize space to 'T' for Date parsing
          const tryIso = sDate.includes('T') ? sDate : sDate.replace(' ', 'T');
          const d = new Date(tryIso);
          if (!isNaN(d.getTime())) return d;
          // sometimes datetime-local strings lack seconds/zone - try appending ':00' where appropriate
          const alt = tryIso.replace(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2})$/, '$1:00');
          const d2 = new Date(alt);
          if (!isNaN(d2.getTime())) return d2;
        }

        // If only date part provided (YYYY-MM-DD or with slashes), parse numbers
        const dateMatch = sDate.match(/^(\d{4})[^\d]?(\d{1,2})[^\d]?(\d{1,2})$/);
        if (dateMatch) {
          const y = Number(dateMatch[1]);
          const m = Number(dateMatch[2]);
          const day = Number(dateMatch[3]);
          let hh = 0,
            mm = 0;
          if (sTime) {
            const tparts = sTime.split(':').map((v: any) => Number(v));
            if (!isNaN(tparts[0])) hh = tparts[0];
            if (!isNaN(tparts[1])) mm = tparts[1];
          }
          const dt = new Date(y, (m || 1) - 1, day || 1, hh || 0, mm || 0);
          if (!isNaN(dt.getTime())) return dt;
        }

        // As a last resort, attempt Date() on combined strings
        if (sDate) {
          const combined = sTime ? `${sDate}T${sTime}` : sDate;
          const d3 = new Date(combined);
          if (!isNaN(d3.getTime())) return d3;
        }
      } catch (e) {
        // fallthrough to return null
      }
      return null;
    };

    // Prefer explicit split fields (startDate + startTime) if provided — this ensures edits to time inputs
    let dt: Date | null = null;
    if (this.model.startDate && this.model.startTime) {
      dt = parseDateInput(this.model.startDate, this.model.startTime);
      if (!dt) {
        notify('Invalid start date or time', 'error');
        return;
      }
    } else if (this.model.startDateTime) {
      dt = parseDateInput(this.model.startDateTime);
      if (!dt) {
        notify('Invalid start datetime', 'error');
        return;
      }
    }

    if (dt) startIso = dt.toISOString();

    // Build end time
    let endDt: Date | null = null;
    if (this.model.endDate && this.model.endTime) {
      endDt = parseDateInput(this.model.endDate, this.model.endTime);
      if (!endDt) {
        notify('Invalid end date or time', 'error');
        return;
      }
      endIso = endDt.toISOString();
    } else if (this.model.endDateTime) {
      endDt = parseDateInput(this.model.endDateTime);
      if (!endDt) {
        notify('Invalid end datetime', 'error');
        return;
      }
      endIso = endDt.toISOString();
    } else if (dt) {
      const computed = new Date(dt.getTime() + duration * 60000);
      endIso = computed.toISOString();
    }

    let reviewAtIso: string | null = null;
    let reviewEndAtIso: string | null = null;
    if (!this.model.userreview && this.model.reviewMode === 'scheduled') {
      const reviewAt = this.combineDateAndTime(
        this.reviewScheduleForm.get('reviewDate')?.value,
        this.reviewScheduleForm.get('reviewTime')?.value
      );
      if (reviewAt) {
        reviewAtIso = reviewAt.toISOString();
      }
      const reviewEndAt = this.combineDateAndTime(
        this.reviewScheduleForm.get('reviewEndDate')?.value,
        this.reviewScheduleForm.get('reviewEndTime')?.value
      );
      if (reviewEndAt) {
        reviewEndAtIso = reviewEndAt.toISOString();
      }
    }

    const payload: {
      title: any;
      exam_id: any;
      institute_id: any;
      duration_mins: number;
      total_questions: number;
      assigned_user_ids: string[];
      categories: any;
      start_time: string | null;
      end_time: string | null;
      created_by: string;
      published: any;
      userreview: any;
      instant_review: boolean;
      multiple_review: boolean;
      manual_review_enabled: boolean;
      review_mode: string;
      review_at: string | null;
      review_end_at: string | null;
      show_score: boolean;
      show_correct_answers: boolean;
      show_student_answers: boolean;
      show_explanations: boolean;
      schedule_id?: any;
      updated_by?: any;
    } = {
      title: this.model.schedulerName || this.model.testName || 'Untitled Test',
      exam_id: this.model.exam_id || null,
      institute_id: this.model.institute, // bind to institute_id from the select
      duration_mins: duration,
      total_questions,
      assigned_user_ids: this.selectedUsers || [],
      categories: Array.isArray(this.model.categories) ? this.model.categories : undefined,
      start_time: startIso,
      end_time: endIso,
      created_by:
        sessionStorage.getItem('user_id') || sessionStorage.getItem('username') || 'admin',
      published: this.model.publish || false,
      userreview: this.normalizeBoolean(this.reviewBehaviorForm.get('instantReview')?.value),
      instant_review: this.normalizeBoolean(this.reviewBehaviorForm.get('instantReview')?.value),
      // Persist independently from review_mode; availability timing is enforced separately.
      multiple_review: this.normalizeBoolean(this.reviewBehaviorForm.get('multipleReview')?.value),
      manual_review_enabled:
        !this.model.userreview &&
        ['manual', 'no_review'].includes(this.model.reviewMode) &&
        this.normalizeBoolean(this.reviewBehaviorForm.get('manualReviewEnabled')?.value),
      review_mode: this.model.userreview ? 'instant' : this.model.reviewMode || 'no_review',
      review_at: reviewAtIso,
      review_end_at: reviewEndAtIso,
      show_score: !!this.model.showScore,
      show_correct_answers: !!this.model.showCorrectAnswers,
      show_student_answers: !!this.model.showStudentAnswers,
      show_explanations: !!this.model.showExplanations,
    };

    // If editing an existing schedule, call update endpoint, otherwise create
    const scheduleId = this.model && (this.model.schedule_id || this.model.id || this.model._id);
    if (scheduleId) {
      // include schedule id and current_user as updated_by for auditing
      payload['schedule_id'] = scheduleId;
      try {
        const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
        const u = raw ? JSON.parse(raw) : null;
        payload['updated_by'] =
          (u && (u.user_id || u.id || u._id)) || sessionStorage.getItem('username') || 'admin';
      } catch (e) {
        payload['updated_by'] = sessionStorage.getItem('username') || 'admin';
      }
      const putUrl = `${API_BASE}/update-exam-schedule`;
      this.http.post<any>(putUrl, payload).subscribe({
        next: (resp) => {
          const ok = typeof resp?.status === 'undefined' ? true : !!resp.status;
          try {
            const msg =
              resp?.statusMessage || resp?.message || 'Scheduled test updated successfully';
            notify(msg, ok ? 'success' : 'error');
          } catch (e) {}
          if (ok) {
            this.submitted = true;
            this.goBack();
          }
        },
        error: (err) => {
          console.error('Failed to update scheduled test', err);
          try {
            notify(
              err?.error?.statusMessage ||
                err?.error?.message ||
                'Failed to update scheduled test. See console for details.',
              'error'
            );
          } catch (e) {}
        },
      });
    } else {
      // POST to backend API to persist the scheduled test
      const postUrl = `${API_BASE}/add-exam-schedule`;
      this.http.post<any>(postUrl, payload).subscribe({
        next: (resp) => {
          const ok = typeof resp?.status === 'undefined' ? true : !!resp.status;
          try {
            const msg = resp?.statusMessage || resp?.message || 'Scheduled test saved successfully';
            notify(msg, ok ? 'success' : 'error');
          } catch (e) {}
          if (ok) {
            // on success add to local scheduled list for UI
            this.scheduled.push({
              institute: this.model.institute,
              testName: this.model.testName,
              start,
              duration,
              published: this.model.publish,
            });
            this.model.testName = '';
            this.submitted = true;
            this.goBack();
          }
        },
        error: (err) => {
          console.error('Failed to save scheduled test', err);
          try {
            notify(
              err?.error?.statusMessage ||
                err?.error?.message ||
                'Failed to save scheduled test. See console for details.',
              'error'
            );
          } catch (e) {}
        },
      });
    }
  }

  applyEditOrView() {
    try {
      const rawEdit = sessionStorage.getItem('edit_exam');
      const rawView = sessionStorage.getItem('view_exam');
      if (rawEdit) {
        const e = JSON.parse(rawEdit);
        // preserve schedule id for update detection
        this.model.schedule_id = e.schedule_id || e.id || e._id || e.scheduleId || null;
        this.scheduleFieldsLocked = this.normalizeBoolean(e.has_attendance);
        // map fields into the form model where possible
        this.model.institute =
          (e.institute && typeof e.institute === 'object'
            ? e.institute.institute_id || e.institute.id || ''
            : e.institute) ||
          e.institute_id ||
          '';
        // try multiple shapes for exam reference
        this.model.exam_id =
          e.exam_id ||
          (e.exam && (e.exam.exam_id || e.exam.id || e.exam._id || e.exam.test_id)) ||
          e.test_id ||
          '';
        // scheduler name used in template; also set legacy testName for compatibility
        this.model.schedulerName = e.title || e.testName || e.schedulerName || '';
        this.model.testName = this.model.testName || this.model.schedulerName;
        // ensure exams dropdown is loaded for the institute before attempting to bind exam id
        try {
          this.loadExams(this.model.institute);
        } catch (e) {
          /* noop */
        }
        // try to parse start_time ISO into combined datetime-local format and legacy date/time
        if (e.start_time) {
          const dt = new Date(e.start_time);
          // legacy split fields
          this.model.startDate = dt.toISOString().slice(0, 10);
          this.model.startTime = dt.toTimeString().slice(0, 5);
          // combined field used by the datetime-local input
          this.model.startDateTime = this.toLocalDateTimeInput(dt);
          // end time: prefer explicit end_time, otherwise compute using duration
          if (e.end_time) {
            const edt = new Date(e.end_time);
            this.model.endDateTime = this.toLocalDateTimeInput(edt);
            this.model.endDate = edt.toISOString().slice(0, 10);
            this.model.endTime = edt.toTimeString().slice(0, 5);
          } else {
            const dur =
              Number(e.duration_mins || e.duration || this.model.durationMin) ||
              this.model.durationMin;
            const endDt = new Date(dt.getTime() + dur * 60000);
            this.model.endDateTime = this.toLocalDateTimeInput(endDt);
            this.model.endDate = endDt.toISOString().slice(0, 10);
            this.model.endTime = endDt.toTimeString().slice(0, 5);
          }
        }
        this.model.durationMin = e.duration_mins || e.duration || this.model.durationMin;
        this.model.maxAttempts = e.number_of_attempts || this.model.maxAttempts;
        // coerce various publish/user-review field variants into booleans
        try {
          const toBool = (value: any) => this.normalizeBoolean(value);
          const pubCandidates = [
            e.publish,
            e.published,
            e.is_published,
            e.isPublished,
            e.published_flag,
            e.settings && e.settings.publish,
          ];
          for (const c of pubCandidates) {
            if (typeof c !== 'undefined') {
              this.model.publish = toBool(c);
              break;
            }
          }
          const reviewCandidates = [
            e.instant_review,
            e.user_review,
            e.userreview,
            e.review_available,
            e.review,
            e.allow_review,
            e.review_enabled,
            e.is_reviewable,
            e.settings && e.settings.user_review,
          ];
          for (const c of reviewCandidates) {
            if (typeof c !== 'undefined') {
              this.model.userreview = toBool(c);
              break;
            }
          }
          this.model.multiplereview = toBool(
            e.multiple_review ??
              e.multiplereview ??
              e.multipleReview ??
              e.is_multiple_review ??
              e.settings?.multiple_review ??
              false
          );
          this.applyReviewSettings(e, toBool);
        } catch (err) {
          /* ignore */
        }
        // clear edit after applying
        // normalize assigned users so the Select Users step pre-selects them
        try {
          const au =
            e.assigned_users ||
            e.assignedUsers ||
            e.assignees ||
            e.users ||
            e.assigned_user_ids ||
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
              .map((s: string) => s.trim())
              .filter((s: string) => s.length);
          } else if (typeof au === 'object') {
            const v = au.user_id || au.id || au._id || au.uid || au.userId || '';
            normalized = v ? [String(v)] : [];
          }
          this.selectedUsers = normalized;
          // if users list is not yet loaded or institute differs, attempt to load users for the institute
          try {
            if (!this.users || this.users.length === 0) this.loadUsers();
          } catch (e) {}
        } catch (err) {
          /* ignore normalization errors */
        }
        sessionStorage.removeItem('edit_exam');
      } else if (rawView) {
        const v = JSON.parse(rawView);
        // set schedule id for view mode as well
        this.model.schedule_id = v.schedule_id || v.id || v._id || v.scheduleId || null;
        this.model.institute =
          (v.institute && typeof v.institute === 'object'
            ? v.institute.institute_id || v.institute.id || ''
            : v.institute) ||
          v.institute_id ||
          '';
        // exam id from view payload (similar shapes as edit)
        this.model.exam_id =
          v.exam_id ||
          (v.exam && (v.exam.exam_id || v.exam.id || v.exam._id || v.exam.test_id)) ||
          v.test_id ||
          '';
        this.model.schedulerName = v.title || v.testName || v.schedulerName || '';
        this.model.testName = this.model.testName || this.model.schedulerName;
        if (v.start_time) {
          const dt = new Date(v.start_time);
          this.model.startDate = dt.toISOString().slice(0, 10);
          this.model.startTime = dt.toTimeString().slice(0, 5);
          this.model.startDateTime = this.toLocalDateTimeInput(dt);
          if (v.end_time) {
            const edt = new Date(v.end_time);
            this.model.endDateTime = this.toLocalDateTimeInput(edt);
            this.model.endDate = edt.toISOString().slice(0, 10);
            this.model.endTime = edt.toTimeString().slice(0, 5);
          }
        }
        try {
          this.loadExams(this.model.institute);
        } catch (e) {
          /* noop */
        }
        this.model.durationMin = v.duration_mins || v.duration || this.model.durationMin;
        this.model.maxAttempts = v.number_of_attempts || this.model.maxAttempts;
        try {
          const toBool = (value: any) => this.normalizeBoolean(value);
          const pubCandidates = [
            v.publish,
            v.published,
            v.is_published,
            v.isPublished,
            v.published_flag,
            v.settings && v.settings.publish,
          ];
          for (const c of pubCandidates) {
            if (typeof c !== 'undefined') {
              this.model.publish = toBool(c);
              break;
            }
          }
          const reviewCandidates = [
            v.instant_review,
            v.user_review,
            v.userreview,
            v.review_available,
            v.review,
            v.allow_review,
            v.review_enabled,
            v.is_reviewable,
            v.settings && v.settings.user_review,
          ];
          for (const c of reviewCandidates) {
            if (typeof c !== 'undefined') {
              this.model.userreview = toBool(c);
              break;
            }
          }
          this.model.multiplereview = toBool(
            v.multiple_review ??
              v.multiplereview ??
              v.multipleReview ??
              v.is_multiple_review ??
              v.settings?.multiple_review ??
              false
          );
          this.applyReviewSettings(v, toBool);
        } catch (err) {
          /* ignore */
        }
        this.readOnly = true;
        sessionStorage.removeItem('view_exam');
        // also normalize assigned users for view mode so UI highlights them if needed
        try {
          const au =
            v.assigned_users ||
            v.assignedUsers ||
            v.assignees ||
            v.users ||
            v.assigned_user_ids ||
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
              .map((s: string) => s.trim())
              .filter((s: string) => s.length);
          } else if (typeof au === 'object') {
            const val = au.user_id || au.id || au._id || au.uid || au.userId || '';
            normalized = val ? [String(val)] : [];
          }
          this.selectedUsers = normalized;
          try {
            if (!this.users || this.users.length === 0) this.loadUsers();
          } catch (e) {}
        } catch (err) {
          /* ignore */
        }
      }
    } catch (e) {
      /* ignore parse errors */
    }
  }

  private applyReviewSettings(value: any, toBool: (value: any) => boolean): void {
    const persistedReviewMode = value.review_mode || value.reviewMode;
    if (
      [
        'no_review',
        'manual',
        'after_schedule_ends',
        'after_everyone_finishes',
        'scheduled',
        'instant',
      ].includes(persistedReviewMode)
    ) {
      this.model.reviewMode = persistedReviewMode === 'instant' ? 'no_review' : persistedReviewMode;
    }
    if (typeof value.manual_review_enabled !== 'undefined') {
      this.model.manualReviewEnabled = toBool(value.manual_review_enabled);
      this.manualReviewEnabledControl?.setValue(this.model.manualReviewEnabled, {
        emitEvent: false,
      });
    }
    const reviewAtValue = value.review_at || value.reviewAt;
    if (reviewAtValue) {
      const reviewAt = new Date(reviewAtValue);
      if (!isNaN(reviewAt.getTime())) {
        const pad = (part: number) => String(part).padStart(2, '0');
        this.model.reviewDate = `${pad(reviewAt.getDate())}/${pad(reviewAt.getMonth() + 1)}/${reviewAt.getFullYear()}`;
        this.model.reviewTime = `${pad(reviewAt.getHours())}:${pad(reviewAt.getMinutes())}`;
      }
    } else {
      this.model.reviewDate = '';
      this.model.reviewTime = '';
    }
    const reviewEndAtValue = value.review_end_at || value.reviewEndAt;
    if (reviewEndAtValue) {
      const reviewEndAt = new Date(reviewEndAtValue);
      if (!isNaN(reviewEndAt.getTime())) {
        const pad = (part: number) => String(part).padStart(2, '0');
        this.model.reviewEndDate = `${pad(reviewEndAt.getDate())}/${pad(reviewEndAt.getMonth() + 1)}/${reviewEndAt.getFullYear()}`;
        this.model.reviewEndTime = `${pad(reviewEndAt.getHours())}:${pad(reviewEndAt.getMinutes())}`;
      }
    } else {
      this.model.reviewEndDate = '';
      this.model.reviewEndTime = '';
    }
    const contentFields: Array<[string, string, string]> = [
      ['showScore', 'show_score', 'showScore'],
      ['showCorrectAnswers', 'show_correct_answers', 'showCorrectAnswers'],
      ['showStudentAnswers', 'show_student_answers', 'showStudentAnswers'],
      ['showExplanations', 'show_explanations', 'showExplanations'],
    ];
    contentFields.forEach(([modelField, apiField, alternateField]) => {
      const fieldValue =
        typeof value[apiField] !== 'undefined' ? value[apiField] : value[alternateField];
      if (typeof fieldValue !== 'undefined') this.model[modelField] = toBool(fieldValue);
    });
  }

  /**
   * Compute end datetime based on model.startDate, model.startTime and model.durationMin
   * Returns a human-friendly local datetime string or empty string when not available
   */
  get endTimePreview(): string {
    try {
      // If explicit end provided, show that
      if (this.model.endDate && this.model.endTime) {
        const endDt = this.combineDateAndTime(this.model.endDate, this.model.endTime);
        if (!endDt) return '';
        return endDt.toLocaleString();
      }

      if (!this.model.startDate || !this.model.startTime) return '';
      const dt = this.combineDateAndTime(this.model.startDate, this.model.startTime);
      if (!dt) return '';
      const dur = Number(this.model.durationMin) || 0;
      const end = new Date(dt.getTime() + dur * 60000);
      return end.toLocaleString();
    } catch (e) {
      return '';
    }
  }

  // Return a readable institute name for a given institute id
  getInstituteName(instId: any): string {
    if (!instId) return '';
    const found: any = (this.institutes || []).find(
      (i: any) => String(i.institute_id || i.id || i._id) === String(instId)
    );
    if (found?.name || found?.institute_name || found?.short_name) {
      return found.name || found.institute_name || found.short_name;
    }
    const globalContext = this.globalInstituteContext?.activeContext;
    if (globalContext && String(globalContext.institute_id) === String(instId) && globalContext.institute_name) {
      return globalContext.institute_name;
    }
    return String(instId || '');
  }

  // Lookup user name by id from currently loaded users
  getUserNameById(userId: any): string {
    if (!userId) return '';
    const found = (this.users || []).find((u) => String(u.id) === String(userId));
    return found ? found.name || '' : '';
  }

  // Small date formatter for review display (accepts date-like strings or Date objects)
  formatDate(v: any): string {
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
      return `${dayName} ${dd}-${mmm}-${yyyy}`;
    } catch (e) {
      return String(v);
    }
  }
}
// Force rebuild
