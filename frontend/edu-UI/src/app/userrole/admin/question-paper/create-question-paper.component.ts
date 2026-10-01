import { Component, HostBinding, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/home/service/auth.service';
import { API_BASE } from 'src/app/shared/api.config';
import { notify } from 'src/app/shared/global-notify';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  DateRangePickerDialogComponent,
  DateRangeDialogResult,
} from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';
import {
  getInstituteTerminology,
  InstituteTerminology,
} from 'src/app/shared/services/institute-terminology.service';

export interface PaperQuestion {
  id: string;
  question: string;
  type: string;
  marks: number;
  category_id?: string;
  category_name?: string;
  options?: any[];
  raw?: any;
  answer?: any;
}

export interface PaperSection {
  section_id?: string;
  name: string;
  sub_heading?: string;
  instructions?: string;
  question_type: 'objective' | 'descriptive';
  order_number: number;
  questions: PaperQuestion[];
  targetCount?: number | null;
}

export interface PaperPageItem {
  type: 'section-header' | 'question';
  sectionIndex: number;
  sectionName?: string;
  sectionSubHeading?: string;
  sectionCalculation?: string;
  questionIndex?: number;
  globalQuestionIndex?: number;
  question?: PaperQuestion;
}

export interface PaperPage {
  pageNumber: number;
  totalPages: number;
  isFirstPage: boolean;
  items: PaperPageItem[];
}

@Component({
  selector: 'app-create-question-paper',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatDialogModule,
    RouterModule,
    MatStepperModule,
    OverlayModule,
    PortalModule,
  ],
  templateUrl: './create-question-paper.component.html',
  styleUrls: ['./create-question-paper.component.scss'],
})
export class CreateQuestionPaperComponent implements OnInit, AfterViewInit, OnDestroy {
  title = '';
  description = '';
  institute = '';
  durationMinutes: number | null = 10;
  passMark: number | null = 50;
  startDateTime = '';
  numberOfAttempts: number | null = 1;
  institutes: Array<{
    id: string;
    name: string;
    industry_type?: string;
    industry_sector?: string;
  }> = [];

  // ── Subject Management ──
  subject_id = '';
  subject_name = '';
  subjects: Array<{ id: string; name: string }> = [];
  loadingSubjects = false;
  subjectFilterSearch = '';

  // ── Section Management ──
  sections: PaperSection[] = [];

  // ── Add Section Modal State ──
  showAddSectionModal = false;
  editingSectionIndex = -1;
  newSectionName = '';
  newSectionSubHeading = '';
  newSectionType: 'objective' | 'descriptive' = 'objective';
  newSectionTargetCount: number | null = null;
  newSectionMarksPerQ: number | null = null;

  // ── Add Questions Modal State ──
  showAddQuestionModal = false;
  activeModalSectionIndex = -1;
  modalQuestionBanks: Array<{
    id: string;
    name: string;
    type?: string;
    subject?: string;
    marks_per_question?: number | null;
  }> = [];
  modalSelectedBankId = '';
  modalQuestions: Array<PaperQuestion & { alreadyInOtherSection?: boolean; selected?: boolean }> =
    [];
  modalSearchTerm = '';
  modalLoadingQuestions = false;
  modalLoadingBanks = false;

  // ── New UI properties ──
  examTypeLabel = 'Unit Test';
  totalMarksOverride: number | null = null;
  durationLabel = '1 Hour';

  // User assignment mirrors the Select Users experience from Schedule Test.
  @ViewChild('userFiltersBtn', { read: ElementRef }) userFiltersBtn?: ElementRef;
  @ViewChild('filtersPanelUserAnchor') filtersPanelUserAnchorTpl?: TemplateRef<any>;
  private userFiltersOverlayRef: OverlayRef | null = null;
  userFilterOpen = false;

  userFilters: {
    joined_after: Date | null;
    joined_before: Date | null;
  } = {
    joined_after: null,
    joined_before: null,
  };

  selectedUserCountries: string[] = [];
  selectedUserCities: string[] = [];
  selectedUserDepartments: string[] = [];
  selectedUserTeams: string[] = [];
  selectedUserCampuses: string[] = [];

  userCountrySearch = '';
  userCitySearch = '';
  userDepartmentSearch = '';
  userTeamSearch = '';
  userCampusSearch = '';

  userCampuses: Array<{
    id: string;
    name: string;
    country_id?: string;
    country_name?: string;
    city_id?: string;
    city_name?: string;
  }> = [];

  superAdminUserCountries: Array<{ code: string; name: string }> = [];
  superAdminUserCities: Array<{
    code: string;
    name: string;
    countryCode: string;
    campusId?: string;
  }> = [];

  paperUsers: Array<{
    id: string;
    name: string;
    email?: string;
    department?: string;
    team?: string;
    campus?: string;
    departmentId?: string;
    teamId?: string;
  }> = [];
  selectedPaperUsers: string[] = [];
  assignmentUserSearch = '';
  loadingPaperUsers = false;
  paperUsersLoadError = '';
  assignableUserCount: number | null = null;
  userFiltersApplied = false;
  private userLoadSeq = 0;

  get examDate(): string {
    if (!this.startDateTime) return '';
    return this.startDateTime.includes('T') ? this.startDateTime.split('T')[0] : this.startDateTime;
  }
  set examDate(val: string) {
    this.startDateTime = val ? (val.includes('T') ? val : `${val}T09:00:00`) : '';
  }

  // ── Preview overlays ──
  showPreviewPaper = false;
  showPreviewGuide = false;
  paginatedPaperPages: PaperPage[] = [];
  paginatedGuidePages: PaperPage[] = [];

  // ── Unsaved changes tracking ──
  isDirty = false;
  isSavedOrSubmitted = false;
  showUnsavedChangesModal = false;
  pendingDeactivateResolve: ((value: boolean) => void) | null = null;

  get terminology(): InstituteTerminology {
    let ind = '';
    const instId = this.institute;
    if (instId && this.institutes && this.institutes.length) {
      const inst = this.institutes.find((i: any) => String(i.id) === String(instId));
      if (inst && (inst.industry_type || (inst as any).industry)) {
        ind = inst.industry_type || (inst as any).industry;
      }
    }
    return getInstituteTerminology(ind);
  }
  departmentFilterSearch = '';
  teamFilterSearch = '';
  // categories UI model
  categories: Array<any> = [];
  // 1. Property to track search input
  instituteFilterSearch = '';
  selectedCategory = '';
  categoryCtrl = new FormControl('');
  filteredCategories$: Observable<any[]> = of([]);
  newCategory: {
    questions: number;
    randomize_questions?: boolean;
    question_type?: string;
    marks_per_question?: number | null;
  } = { questions: 0, randomize_questions: false, question_type: '', marks_per_question: null };
  model: {
    categories?: Array<{
      category_id?: string;
      name?: string;
      questions: number;
      question_ids?: any[];
      randomize_questions?: boolean;
      question_type?: string;
      marks_per_question?: number | null;
      total_marks?: number | null;
    }>;
  } = { categories: [] };
  readOnly = false;
  filterEnabled = false;
  @ViewChild('filterAnchor', { static: false }) filterAnchor?: ElementRef;
  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;
  @ViewChild('stepper') stepper!: MatStepper;
  step1Submitted = false;

  private _docClickHandler: ((ev: any) => void) | null = null;
  private _randomBlockClickHandler: ((ev: any) => void) | null = null;
  // filter state for categories
  selectedDepartments: string[] = [];
  selectedTeams: string[] = [];
  questionBankFilterDepartments: string[] = [];
  questionBankFilterTeams: string[] = [];
  questionBankDepartmentSearch = '';
  questionBankTeamSearch = '';
  selectedQuestionTypes: string[] = [];
  filterCreationDateAfter: Date | null = null;
  filterCreationDate: Date | null = null;
  filterCreatedByMe: boolean = false;
  filterPublicAccess: boolean = false;
  appliedQuestionBankFilters: string[] = [];
  departments: Array<{ id: string; name: string }> = [];
  teams: Array<{
    id: string;
    name: string;
    department_id?: string | null;
    department_name?: string | null;
  }> = [];

  compareById(o1: any, o2: any): boolean {
    if (o1 === null || o1 === undefined || o2 === null || o2 === undefined) return o1 === o2;
    return String(o1) === String(o2);
  }

  // Single-select property & change handlers for Department / Class
  get selectedDepartment(): string {
    return Array.isArray(this.selectedDepartments) && this.selectedDepartments.length > 0
      ? this.selectedDepartments[0]
      : typeof this.selectedDepartments === 'string'
        ? this.selectedDepartments
        : '';
  }

  set selectedDepartment(val: string) {
    this.selectedDepartments = val ? [val] : [];
    this.onDepartmentChange(val);
  }

  onDepartmentChange(val: string): void {
    this.selectedDepartments = val ? [val] : [];
    const validTeamIds = (this.filteredTeams || []).map((t: any) => String(t.id));
    if (this.selectedTeam && !validTeamIds.includes(String(this.selectedTeam))) {
      this.selectedTeam = '';
    }
    if (Array.isArray(this.selectedTeams)) {
      this.selectedTeams = this.selectedTeams.filter((id: string) =>
        validTeamIds.includes(String(id))
      );
    }
  }

  // Single-select property & change handlers for Team / Section
  get selectedTeam(): string {
    return Array.isArray(this.selectedTeams) && this.selectedTeams.length > 0
      ? this.selectedTeams[0]
      : typeof this.selectedTeams === 'string'
        ? this.selectedTeams
        : '';
  }

  set selectedTeam(val: string) {
    this.selectedTeams = val ? [val] : [];
  }

  onTeamChange(val: string): void {
    this.selectedTeams = val ? [val] : [];
  }

  // Select All functionality for Departments
  isAllDepartmentsSelected(): boolean {
    return (
      this.departments.length > 0 &&
      this.selectedDepartments.filter((id) => id !== 'ALL').length === this.departments.length
    );
  }

  toggleSelectAllDepartments(event: any): void {
    const selected = (event?.value || []) as string[];
    const allIds = this.departments.map((d) => String(d.id));

    if (selected.includes('ALL')) {
      if (this.selectedDepartments.filter((id) => id !== 'ALL').length === allIds.length) {
        this.selectedDepartments = [];
      } else {
        this.selectedDepartments = ['ALL', ...allIds];
      }
    } else {
      if (this.selectedDepartments.includes('ALL')) {
        this.selectedDepartments = [];
      } else {
        this.selectedDepartments = selected.filter((id) => id !== 'ALL');
      }
    }
    const validTeamIds = (this.filteredTeams || []).map((t: any) => t.id);
    if (Array.isArray(this.selectedTeams)) {
      this.selectedTeams = this.selectedTeams.filter((id: string) => validTeamIds.includes(id));
    }
  }

  // Getter to filter teams list dynamically by search text and selected departments
  get filteredTeams(): Array<{
    id: string;
    name: string;
    department_id?: string | null;
    department_name?: string | null;
  }> {
    const term = (this.teamFilterSearch || '').trim().toLowerCase();
    let list = this.teams || [];

    // Filter by selected departments if any are selected
    const deptsArr: string[] = (
      Array.isArray(this.selectedDepartments)
        ? this.selectedDepartments
        : [this.selectedDepartments]
    )
      .filter(Boolean)
      .map((v: any) => String(v).toLowerCase().trim());

    if (deptsArr.length > 0 && !deptsArr.includes('ALL')) {
      const selectedDeptObjs = (this.departments || []).filter(
        (d) =>
          deptsArr.includes(String(d.id).toLowerCase().trim()) ||
          deptsArr.includes((d.name || '').toLowerCase().trim())
      );
      const deptIds = selectedDeptObjs.map((d) => String(d.id).toLowerCase().trim());
      const deptNames = selectedDeptObjs.map((d) => (d.name || '').toLowerCase().trim());
      deptsArr.forEach((val) => {
        if (typeof val === 'string' && val.trim()) {
          deptNames.push(val.toLowerCase().trim());
          deptIds.push(val.toLowerCase().trim());
        }
      });

      list = list.filter((t: any) => {
        if (Array.isArray(this.selectedTeams) && this.selectedTeams.includes(t.id)) return true;

        const teamDeptId = t.department_id ? String(t.department_id).toLowerCase().trim() : '';
        const teamDeptName = t.department_name
          ? (t.department_name || '').toLowerCase().trim()
          : '';

        if (teamDeptId && deptIds.includes(teamDeptId)) return true;
        if (teamDeptName && deptNames.includes(teamDeptName)) return true;

        return false;
      });
    }

    if (!term) return list;
    return list.filter((t) => (t.name || '').toLowerCase().includes(term));
  }

  // Focus search input when dropdown opens, and clear search input when closed
  onTeamOpenedChange(opened: boolean) {
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

  // 2. Getter to filter department list dynamically by search text
  get filteredDepartments(): Array<{ id: string; name: string }> {
    const term = (this.departmentFilterSearch || '').trim().toLowerCase();
    if (!term) return this.departments;
    return this.departments.filter((d) => (d.name || '').toLowerCase().includes(term));
  }

  get filteredQuestionBankDepartments(): Array<{ id: string; name: string }> {
    const term = (this.questionBankDepartmentSearch || '').trim().toLowerCase();
    if (!term) return this.departments;
    return this.departments.filter((department) =>
      (department.name || '').toLowerCase().includes(term)
    );
  }

  get filteredQuestionBankTeams(): Array<{
    id: string;
    name: string;
    department_id?: string | null;
    department_name?: string | null;
  }> {
    const term = (this.questionBankTeamSearch || '').trim().toLowerCase();
    let list = this.teams || [];

    // Filter by selected departments in Question Bank Filter
    const deptsArr: string[] = (
      Array.isArray(this.questionBankFilterDepartments)
        ? this.questionBankFilterDepartments
        : [this.questionBankFilterDepartments]
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
        if (
          Array.isArray(this.questionBankFilterTeams) &&
          this.questionBankFilterTeams.includes(t.id)
        )
          return true;

        const teamDeptId = t.department_id ? String(t.department_id) : '';
        const teamDeptName = t.department_name
          ? (t.department_name || '').toLowerCase().trim()
          : '';

        if (teamDeptId && deptsArr.includes(teamDeptId)) return true;
        if (teamDeptName && deptNames.includes(teamDeptName)) return true;

        return false;
      });
    }

    if (!term) return list;
    return list.filter((team) => (team.name || '').toLowerCase().includes(term));
  }

  onQuestionBankDepartmentChange(): void {
    if (
      !this.questionBankFilterDepartments ||
      (Array.isArray(this.questionBankFilterDepartments) &&
        !this.questionBankFilterDepartments.length)
    ) {
      this.questionBankFilterTeams = [];
    } else {
      const validTeamIds = (this.filteredQuestionBankTeams || []).map((t: any) => t.id);
      if (Array.isArray(this.questionBankFilterTeams)) {
        this.questionBankFilterTeams = this.questionBankFilterTeams.filter((id: string) =>
          validTeamIds.includes(id)
        );
      }
    }
  }

  onQuestionBankDepartmentOpenedChange(opened: boolean): void {
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
      this.questionBankDepartmentSearch = '';
    }
  }

  onQuestionBankTeamOpenedChange(opened: boolean): void {
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
      this.questionBankTeamSearch = '';
    }
  }

  // --- Select All: Question Bank Department ---
  isAllQuestionBankDepartmentsSelected(): boolean {
    const ids = (this.filteredQuestionBankDepartments || []).map((d: any) => d.id).filter(Boolean);
    return (
      ids.length > 0 &&
      ids.every((id: any) => (this.questionBankFilterDepartments || []).includes(id))
    );
  }

  toggleSelectAllQuestionBankDepartments(): void {
    const ids = (this.filteredQuestionBankDepartments || []).map((d: any) => d.id).filter(Boolean);
    if (this.isAllQuestionBankDepartmentsSelected()) {
      this.questionBankFilterDepartments = [];
    } else {
      this.questionBankFilterDepartments = [...ids];
    }
  }

  // --- Select All: Question Bank Team ---
  isAllQuestionBankTeamsSelected(): boolean {
    const ids = (this.filteredQuestionBankTeams || []).map((t: any) => t.id).filter(Boolean);
    return (
      ids.length > 0 && ids.every((id: any) => (this.questionBankFilterTeams || []).includes(id))
    );
  }

  toggleSelectAllQuestionBankTeams(): void {
    const ids = (this.filteredQuestionBankTeams || []).map((t: any) => t.id).filter(Boolean);
    if (this.isAllQuestionBankTeamsSelected()) {
      this.questionBankFilterTeams = [];
    } else {
      this.questionBankFilterTeams = [...ids];
    }
  }
  // 3. Focus search input when dropdown opens, and clear search input when closed
  onDepartmentOpenedChange(opened: boolean) {
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

  // Select All functionality for Teams
  isAllTeamsSelected(): boolean {
    return (
      this.teams.length > 0 &&
      this.selectedTeams.filter((id) => id !== 'ALL').length === this.teams.length
    );
  }

  toggleSelectAllTeams(event: any): void {
    const selected = (event?.value || []) as string[];
    const allIds = (this.filteredTeams || []).map((t) => String(t.id));

    if (selected.includes('ALL')) {
      if (this.selectedTeams.filter((id) => id !== 'ALL').length === allIds.length) {
        this.selectedTeams = [];
      } else {
        this.selectedTeams = ['ALL', ...allIds];
      }
    } else {
      if (this.selectedTeams.includes('ALL')) {
        this.selectedTeams = [];
      } else {
        this.selectedTeams = selected.filter((id) => id !== 'ALL');
      }
    }
  }

  // 2. Getter to filter institute list dynamically by search text
  get filteredInstitutes(): Array<{ id: string; name: string }> {
    const term = (this.instituteFilterSearch || '').trim().toLowerCase();
    if (!term) return this.institutes;
    return this.institutes.filter((i) => (i.name || '').toLowerCase().includes(term));
  }
  // 3. Focus search input when opened, and reset search term when closed
  onInstituteOpenedChange(opened: boolean) {
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
      // Resetting when closed ensures that reopening shows all institutes, even after selecting one
      this.instituteFilterSearch = '';
    }
  }
  // 4. Prevent keystrokes in search input from triggering select dropdown shortcuts
  stopFilterSearchEvent(event: Event) {
    event.stopPropagation();
  }

  // question selection for currently selected category
  questionsForCategory: Array<any> = [];
  selectedQuestionIds: string[] = [];
  selectAllQuestions = false;
  activeQuestionCategoryId = '';
  activeQuestionCategoryName = '';
  questionCountError = '';
  categoryFilterError = '';
  tempQuestionsForCategory: Array<any> = [];
  private lastAddedQuestionSelectionByCategory: { [categoryId: string]: string } = {};

  private baseUrl = 'http://127.0.0.1:5001/edu/api';

  isSuperAdmin = false;
  private _subs: Subscription | null = null;
  editMode: boolean = false;
  editExamId: string | null = null;
  isPublished: boolean = false;
  private filtersOverlayRef: OverlayRef | null = null;
  private categoryLoadSeq = 0;
  private questionLoadSeq = 0;
  private selectionLoadSeq = 0;
  private trackedInstituteForQuestionBanks = '';
  private hasTrackedInstituteForQuestionBanks = false;

  @HostBinding('class.hide-random-questions')
  get hideRandomQuestionsSection(): boolean {
    return !this.activeQuestionCategoryId || !this.questionsForCategory.length;
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService,
    private pageMeta: PageMetaService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private loader: LoaderService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    try {
      this._subs = this.auth.user$.subscribe((user: any) => {
        this.isSuperAdmin =
          !!user &&
          ['super_admin', 'superadmin', 'super-admin'].includes((user.role || '').toLowerCase());
      });
    } catch (e) {
      /* ignore */
    }
  }

  openFiltersOverlay() {
    if (!this.filtersBtn) return;
    this.filterEnabled = true;
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
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 10 },
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 10 },
        { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetY: -10 },
      ])
      .withPush(true);

    this.filtersOverlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'overlay-filters-panel',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.filtersOverlayRef.backdropClick().subscribe(() => this._closeOverlayInternal());
    this.filtersOverlayRef.keydownEvents().subscribe((ev: any) => {
      if (ev.key === 'Escape') this._closeOverlayInternal();
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
    this.filterEnabled = false;
  }

  // ensure UI flag clears when overlay is closed programmatically
  private _closeOverlayInternal() {
    try {
      this.filtersOverlayRef?.dispose();
    } catch (e) {}
    this.filtersOverlayRef = null;
    this.filterEnabled = false;
  }

  ngAfterViewInit(): void {
    try {
      this._docClickHandler = (ev: any) => {
        if (!this.filterEnabled) return;
        try {
          const anchorEl = this.filterAnchor?.nativeElement;
          if (!anchorEl) return;
          if (anchorEl.contains(ev.target)) return; // click inside anchor — keep open
          // clicked outside — close filter
          this.filterEnabled = false;
        } catch (e) {
          /* ignore */
        }
      };
      document.addEventListener('click', this._docClickHandler);
      this._randomBlockClickHandler = (ev: any) => {
        const target = ev.target as HTMLElement | null;
        const button = target?.closest ? target.closest('button.next-btn') : null;
        if (!button || !this.shouldBlockRandomAllQuestionSelection()) return;
        ev.preventDefault();
        ev.stopImmediatePropagation();
        this.validateNewCategoryQuestionCount(true);
      };
      document.addEventListener('click', this._randomBlockClickHandler, true);
    } catch (e) {
      /* ignore */
    }
  }

  ngOnDestroy(): void {
    this.closeUserFiltersOverlay();
    try {
      this._subs?.unsubscribe();
    } catch (e) {}
    try {
      if (this._docClickHandler) document.removeEventListener('click', this._docClickHandler);
    } catch (e) {}
    try {
      if (this._randomBlockClickHandler)
        document.removeEventListener('click', this._randomBlockClickHandler, true);
    } catch (e) {}
    try {
      sessionStorage.removeItem('edit_exam');
    } catch (e) {}
  }

  // Called when the Enable Filters checkbox toggles
  onFilterToggle(enabled: boolean) {
    this.filterEnabled = !!enabled;
  }
  ngOnInit(): void {
    // load edit payload first so editMode is populated before setting page metadata
    this.loadEditTest();

    if (this.readOnly || this.isPublished) {
      this.pageMeta.setMeta(
        'View Test',
        'Viewing question paper details in read-only mode.'
      );
    } else if (this.editMode) {
      this.pageMeta.setMeta(
        'Update Test',
        'Update the exam details and click Update to save changes.'
      );
    } else {
      this.pageMeta.setMeta('Create Test', 'Fill required fields and save the exam.');
    }
    this.isDirty = false;

    // load institutes and ensure institute selection is reconciled
    this.loadInstitutes();

    // if an institute is already present (from edit payload), ensure dependent lists load
    if (this.institute) {
      try {
        this.onInstituteChange(this.institute);
      } catch (e) {
        /* ignore */
      }
    } else {
      // try to auto-select from session user
      try {
        const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
        if (raw) {
          const u = JSON.parse(raw);
          const inst =
            sessionStorage.getItem('global_institute_id') ||
            u?.institute_id ||
            u?.instituteId ||
            (u?.institute && (u.institute.institute_id || u.institute.id || u.institute)) ||
            u?.institute ||
            '';
          if (inst && (sessionStorage.getItem('global_institute_id') || !this.isSuperAdmin)) {
            this.institute = String(inst);
            try {
              this.onInstituteChange(this.institute);
            } catch (e) {
              /* ignore */
            }
          }
        }
      } catch (e) {
        /* ignore */
      }
    }

    this.updateFilteredCategoriesStream();
  }

  /**
   * If an exam has been marked for edit (stored in sessionStorage by the list page),
   * populate the form with its values so the user can edit and save.
   */
  loadEditTest() {
    this.loader.show();
    try {
      const raw = sessionStorage.getItem('edit_exam');
      if (!raw) return;
      const e = JSON.parse(raw);
      if (!e) return;
      this.editMode = true;
      this.editExamId = e.exam_id || e.test_id || e.id || null;
      this.isPublished = !!(
        e.published ||
        e.is_published ||
        e.status === 'published' ||
        e.status === 'active'
      );
      if (this.isPublished || e.is_editable === false || e.editable === false) {
        this.readOnly = true;
      }
      this.title = e.title || e.name || '';
      this.description = e.description || e.desc || '';
      const instRaw = e.institute;
      this.institute =
        (instRaw && (instRaw.institute_id || instRaw.id)) ||
        e.institute_id ||
        (typeof instRaw === 'string' ? instRaw : '') ||
        '';
      if (this.institutes.length && this.institute) {
        const matchedInst = this.institutes.find(
          (x) =>
            String(x.id) === String(this.institute) ||
            (x.name && x.name.trim().toLowerCase() === String(this.institute).trim().toLowerCase())
        );
        if (matchedInst) this.institute = String(matchedInst.id);
      }
      this.trackedInstituteForQuestionBanks = this.institute;
      this.hasTrackedInstituteForQuestionBanks = true;

      this.durationMinutes = e.duration_mins || e.duration || null;
      this.passMark = e.pass_mark ?? e.passMark ?? null;
      this.numberOfAttempts = e.number_of_attempts ?? e.numberOfAttempts ?? null;
      this.startDateTime = e.start_time || e.start || '';
      if (e.total_marks !== undefined && e.total_marks !== null) {
        this.totalMarksOverride = Number(e.total_marks);
      } else if (e.totalMarks !== undefined && e.totalMarks !== null) {
        this.totalMarksOverride = Number(e.totalMarks);
      }
      this.selectedDepartments = Array.isArray(e.departments)
        ? e.departments
            .map((d: any) =>
              String(
                typeof d === 'object' ? d.id || d.department_id || d.dept_id || d.name || '' : d
              )
            )
            .filter(Boolean)
        : [];
      this.selectedTeams = Array.isArray(e.teams)
        ? e.teams
            .map((t: any) =>
              String(typeof t === 'object' ? t.id || t.team_id || t.teamId || t.name || '' : t)
            )
            .filter(Boolean)
        : [];
      const assignedUsers = Array.isArray(e.assigned_users) ? e.assigned_users : [];
      this.selectedPaperUsers = Array.from(
        new Set(
          (Array.isArray(e.assigned_user_ids) ? e.assigned_user_ids : assignedUsers)
            .map((user: any) =>
              String(typeof user === 'object' ? user.user_id || user.id || '' : user)
            )
            .filter(Boolean)
        )
      );
      this.paperUsers = assignedUsers
        .map((user: any) => ({
          id: String(user.user_id || user.id || ''),
          name: user.full_name || user.name || user.user_name || user.email || 'User',
          email: user.email || '',
          department:
            user.department_name ||
            (user.department && (user.department.name || user.department.department_name)) ||
            '',
          team: user.team_name || (user.team && (user.team.name || user.team.team_name)) || '',
          campus:
            (user.campus && (user.campus.campus_name || user.campus.name)) ||
            user.campus_name ||
            '',
          departmentId: String(user.department_id || user.department?.department_id || ''),
          teamId: String(user.team_id || user.team?.team_id || ''),
        }))
        .filter((user: any) => !!user.id);

      if (this.selectedPaperUsers.length > 0) {
        this.userFiltersApplied = true;
        if (this.paperUsers.length === 0) {
          this.paperUsers = this.selectedPaperUsers.map((uid) => ({
            id: uid,
            name: `User (${uid.slice(0, 8)}...)`,
            email: '',
            department: '',
            team: '',
            campus: '',
            departmentId: '',
            teamId: '',
          }));
        }
      }

      // normalize categories if present in the payload
      const srcCats = Array.isArray(e.categories)
        ? e.categories
        : Array.isArray(e.category_list)
          ? e.category_list
          : [];
      this.model.categories = srcCats.map((c: any) => this.normalizeEditCategory(c));
      this.hydrateMissingEditCategoryMarks();

      this.subject_id = e.subject_id ? String(e.subject_id) : '';
      this.subject_name = e.subject_name || '';
      if (this.institute) {
        this.loadSubjects(this.institute);
      }
      if (Array.isArray(e.sections) && e.sections.length > 0) {
        this.sections = e.sections.map((sec: any, idx: number) => ({
          section_id: sec.section_id || sec.id || null,
          name: sec.name || `Section ${idx + 1}`,
          sub_heading: sec.sub_heading || sec.instructions || '',
          instructions: sec.instructions || sec.sub_heading || '',
          question_type: sec.question_type || 'objective',
          targetCount: Number(sec.target_count ?? sec.targetCount) || null,
          order_number: sec.order_number || idx + 1,
          questions: Array.isArray(sec.questions)
            ? sec.questions.map((q: any) => ({
                id: String(q.question_id || q.id),
                question: q.question || q.question_text || q.text || 'Question',
                type: q.type || q.question_type || sec.question_type || 'objective',
                marks: Number(q.marks ?? q.mark ?? 1),
                category_id: q.category_id ? String(q.category_id) : undefined,
                category_name: q.category_name || undefined,
                options: q.options || q.choices || (q.raw ? q.raw.options : []),
                answer: q.answer || '',
                raw: q,
              }))
            : [],
        }));
      }
    } catch (_) {
      /* ignore malformed edit payload */
    } finally {
      this.loader.hide();
      this.isDirty = false;
    }
  }

  setStartNow() {
    const d = new Date();
    const tz = d.getTimezoneOffset() * 60000;
    const local = new Date(d.getTime() - tz).toISOString().slice(0, 16);
    this.startDateTime = local;
  }

  addCategory() {
    this.addSelectedQuestionBankQuestions();
  }

  addSelectedQuestionBankQuestions() {
    const catId = this.activeQuestionCategoryId || this.selectedCategory || '';
    if (!catId) return;

    const existingIndex = Array.isArray(this.model.categories)
      ? this.model.categories.findIndex((c: any) => String(c.category_id) === String(catId))
      : -1;
    const existing = existingIndex >= 0 ? this.model.categories![existingIndex] : null;
    const cat = this.categories.find((c) => String(c.category_id) === String(catId));
    const isDraft = String(catId) === String(this.selectedCategory);
    const randomizeQuestions = isDraft
      ? !!this.newCategory.randomize_questions
      : !!existing?.randomize_questions;

    if (isDraft && !this.validateNewCategoryQuestionCount(true)) return;
    // Fixed (non-randomized) categories can either be hand-picked via the checkbox list,
    // or left to a plain count — in which case the backend randomly selects that many
    // questions once at save time and the same fixed set is served to every user.
    const manualSelection = !randomizeQuestions && this.selectedQuestionIds.length > 0;
    if (
      !randomizeQuestions &&
      !manualSelection &&
      !((Number(this.newCategory.questions) || 0) >= 1)
    )
      return;

    const selectedIds = manualSelection ? [...this.selectedQuestionIds] : [];
    const requestedQuestions = randomizeQuestions
      ? Number(this.newCategory.questions) || 0
      : manualSelection
        ? selectedIds.length
        : Number(this.newCategory.questions) || 0;
    const selectionKey = this.getQuestionSelectionKey(selectedIds);
    const draftName = this.getQuestionBankDraftName();
    const item = {
      category_id: catId,
      name: isDraft
        ? draftName
        : existing?.name || cat?.name || this.activeQuestionCategoryName || '',
      questions: requestedQuestions,
      question_ids: selectedIds,
      randomize_questions: randomizeQuestions,
      question_type: isDraft
        ? this.newCategory.question_type || ''
        : existing?.question_type || cat?.type || '',
      marks_per_question: isDraft
        ? (this.newCategory.marks_per_question ?? null)
        : (this.getMarksPerQuestion(existing) ?? this.getMarksPerQuestion(cat) ?? null),
      total_marks: this.calculateTotalMarks(
        requestedQuestions,
        isDraft
          ? this.newCategory.marks_per_question
          : (this.getMarksPerQuestion(existing) ?? this.getMarksPerQuestion(cat))
      ),
    };

    if (existingIndex >= 0) {
      this.model.categories = this.model.categories!.map((c, i) =>
        i === existingIndex ? item : c
      );
    } else {
      this.model.categories = [...(this.model.categories || []), item];
    }
    this.activeQuestionCategoryId = catId;
    this.activeQuestionCategoryName = item.name || this.activeQuestionCategoryName;
    this.newCategory.questions = requestedQuestions;
    this.lastAddedQuestionSelectionByCategory[String(catId)] = selectionKey;
    if (isDraft) this.resetQuestionBankDraft(true);
  }

  removeCategory(index: number) {
    if (!Array.isArray(this.model.categories)) return;
    const removed = this.model.categories[index];
    if (removed?.category_id)
      delete this.lastAddedQuestionSelectionByCategory[String(removed.category_id)];
    this.model.categories = this.model.categories.filter((_, i) => i !== index);
    if (removed && removed.category_id === this.activeQuestionCategoryId) {
      const next = this.model.categories[0];
      if (next) this.viewCategoryQuestions(next);
      else {
        this.activeQuestionCategoryId = '';
        this.activeQuestionCategoryName = '';
        this.questionsForCategory = [];
        this.selectedQuestionIds = [];
        this.selectAllQuestions = false;
      }
    }
  }

  loadInstitutes() {
    this.loader.show();
    const url = `${API_BASE}/get-institute-list`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.institutes = arr.map((r: any) => ({
          id: String(r.institute_id || r.id || r.instituteId || ''),
          name: r.name || r.institute_name || r.short_name || '',
          industry_type: r.industry_type || r.industry || '',
          industry_sector: r.industry_sector || r.sector || '',
        }));

        // If an institute is already selected (from edit payload or elsewhere), try to reconcile
        try {
          if (this.institute) {
            const want = String(this.institute);
            const found = this.institutes.find(
              (x) =>
                String(x.id) === want ||
                String(x.id) === String(Number(want || 0)) ||
                (x.name && x.name.trim().toLowerCase() === want.trim().toLowerCase())
            );

            if (found) {
              this.institute = String(found.id);
              this.onInstituteChange(this.institute);
              return;
            }
          }
        } catch (e) {
          /* ignore */
        } finally {
          this.loader.hide();
        }

        // Fallback: try reading user's institute from sessionStorage
        try {
          const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
          if (raw) {
            const u = JSON.parse(raw);
            const instId =
              sessionStorage.getItem('global_institute_id') ||
              u?.institute_id ||
              u?.instituteId ||
              (u?.institute && (u.institute.institute_id || u.institute.id || u.institute)) ||
              u?.institute ||
              '';
            if (instId) {
              const found = this.institutes.find((x) => String(x.id) === String(instId));
              if (found) {
                this.institute = String(found.id);
                this.onInstituteChange(this.institute);
              }
            }
          }
        } catch (e) {
          /* ignore malformed session data */
        }
      },
      error: () => {
        /* ignore - keep empty list */
      },
      complete: () => {
        this.loader.hide();
      },
    });
  }

  loadCategories() {
    this.loader.show();
    const requestSeq = ++this.categoryLoadSeq;
    const url = `${API_BASE}/get-categories-list`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (requestSeq !== this.categoryLoadSeq) return;
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.categories = arr.map((c: any) => this.normalizeCategoryOption(c));
        this.reconcileAttachedQuestionBankMarks();
        // update autocomplete stream
        this.updateFilteredCategoriesStream();
      },
      error: (err) => {
        if (requestSeq !== this.categoryLoadSeq) return;
        console.warn('Failed to load categories', err);
        this.categories = [];
        this.updateFilteredCategoriesStream();
      },
      complete: () => {
        this.loader.hide();
      },
    });
  }

  displayCategory(c: any) {
    return c ? c.name || c.category_name || '' : '';
  }

  onQuestionBankNameInput(event: Event) {
    if (!this.selectedCategory) return;
    const name = ((event.target as HTMLInputElement)?.value || '').trim();
    if (name) this.activeQuestionCategoryName = name;
  }

  private getQuestionBankDraftName(): string {
    const value: any = this.categoryCtrl.value;
    const typedName =
      typeof value === 'string'
        ? value.trim()
        : String(value?.name || value?.category_name || '').trim();
    return typedName || this.activeQuestionCategoryName || '';
  }

  private normalizeCategoryOption(c: any): any {
    return {
      ...c,
      category_id: c?.category_id || c?.id || c?._id || '',
      name: c?.name || c?.category_name || c?.title || '',
      type: c?.type || c?.category_type || c?.question_type || '',
      mark_each_question: this.getMarksPerQuestion(c),
    };
  }

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

  private getQuestionCount(value: any): number {
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
    if (Array.isArray(value?.questions)) return value.questions.length;
    if (Array.isArray(value?.question_list)) return value.question_list.length;
    return 0;
  }

  private getQuestionIds(value: any): any[] {
    if (Array.isArray(value?.question_ids)) return value.question_ids;
    if (Array.isArray(value?.questionIds)) return value.questionIds;
    const questionArray = Array.isArray(value?.questions)
      ? value.questions
      : Array.isArray(value?.question_list)
        ? value.question_list
        : [];
    return questionArray.map((q: any) => q?.question_id || q?.id || q?._id || null).filter(Boolean);
  }

  private calculateTotalMarks(questions: any, marksPerQuestion: any): number | null {
    const questionCount = this.toNumber(questions);
    const marks = this.toNumber(marksPerQuestion);
    return questionCount !== null && marks !== null ? questionCount * marks : null;
  }

  private deriveMarksFromQuestionList(value: any): number | null {
    const questionArray = Array.isArray(value?.questions)
      ? value.questions
      : Array.isArray(value?.question_list)
        ? value.question_list
        : [];
    const marks = Array.from(
      new Set(
        questionArray
          .map((q: any) => this.getMarksPerQuestion(q))
          .filter((v: number | null) => v !== null)
      )
    ) as number[];
    return marks.length === 1 ? marks[0] : null;
  }

  getCategoryMarksPerQuestion(category: any): number {
    const categoryId = String(category?.category_id || category?.category?.category_id || '');
    const option = (this.categories || []).find(
      (c: any) => String(c?.category_id || '') === categoryId
    );
    return (
      this.getMarksPerQuestion(category) ??
      this.deriveMarksFromQuestionList(category) ??
      this.getMarksPerQuestion(option) ??
      0
    );
  }

  getCategoryTotalMarks(category: any): number {
    const savedTotal = this.getTotalMarks(category);
    const calculatedTotal = this.calculateTotalMarks(
      this.getQuestionCount(category),
      this.getCategoryMarksPerQuestion(category)
    );
    if (savedTotal !== null && savedTotal > 0) return savedTotal;
    return calculatedTotal ?? savedTotal ?? 0;
  }

  private normalizeEditCategory(c: any) {
    const catObj = c?.category || {};
    const questions = this.getQuestionCount(c);
    const marksPerQuestion = this.getMarksPerQuestion(c) ?? this.deriveMarksFromQuestionList(c);
    return {
      category_id: c?.category_id || catObj?.category_id || c?.id || c?._id || c?.categoryId || '',
      name: c?.category_name || catObj?.category_name || c?.name || catObj?.name || c?.title || '',
      questions,
      question_ids: this.getQuestionIds(c),
      randomize_questions:
        typeof c?.randomize_questions !== 'undefined' ? !!c.randomize_questions : !!c?.randomize,
      question_type:
        c?.question_type ||
        catObj?.question_type ||
        c?.type ||
        catObj?.type ||
        c?.category_type ||
        catObj?.category_type ||
        '',
      marks_per_question: marksPerQuestion,
      total_marks: this.getTotalMarks(c) ?? this.calculateTotalMarks(questions, marksPerQuestion),
    };
  }

  private hydrateMissingEditCategoryMarks() {
    if (!this.editMode || !Array.isArray(this.model.categories) || !this.model.categories.length)
      return;
    this.model.categories
      .filter(
        (category: any) => category?.category_id && this.getCategoryMarksPerQuestion(category) <= 0
      )
      .forEach((category: any) => {
        const categoryId = String(category.category_id);
        const url = `${API_BASE}/category-details?category_id=${encodeURIComponent(categoryId)}`;
        this.http.get<any>(url).subscribe({
          next: (res) => {
            const items = Array.isArray(res) ? res : res?.data || [];
            const detail =
              Array.isArray(items) && items.length
                ? items[0]
                : res?.data && !Array.isArray(res.data)
                  ? res.data
                  : res;
            const normalized = this.normalizeCategoryOption(detail || {});
            const marksPerQuestion = this.getMarksPerQuestion(normalized);
            if (marksPerQuestion === null) return;
            this.model.categories = (this.model.categories || []).map((item: any) => {
              if (String(item?.category_id || '') !== categoryId) return item;
              const questions = this.getQuestionCount(item);
              return {
                ...item,
                question_type: item.question_type || normalized.type || '',
                marks_per_question: marksPerQuestion,
                total_marks: this.calculateTotalMarks(questions, marksPerQuestion),
              };
            });
          },
          error: (err) => {
            console.warn('Failed to load marks for attached question bank', err);
          },
        });
      });
  }

  private reconcileAttachedQuestionBankMarks() {
    if (
      !this.editMode ||
      !Array.isArray(this.model.categories) ||
      !this.model.categories.length ||
      !this.categories.length
    )
      return;
    this.model.categories = this.model.categories.map((category: any) => {
      const categoryId = String(category?.category_id || '');
      const option = this.categories.find((c: any) => String(c?.category_id || '') === categoryId);
      const marksPerQuestion =
        this.getMarksPerQuestion(category) ?? this.getMarksPerQuestion(option);
      if (marksPerQuestion === null) return category;
      const questions = this.getQuestionCount(category);
      return {
        ...category,
        question_type: category.question_type || option?.type || '',
        marks_per_question: marksPerQuestion,
        total_marks:
          this.getTotalMarks(category) && this.getTotalMarks(category)! > 0
            ? this.getTotalMarks(category)
            : this.calculateTotalMarks(questions, marksPerQuestion),
      };
    });
  }

  private resetQuestionBanksAndQuestionsSection() {
    this.selectionLoadSeq++;
    this.questionLoadSeq++;
    this.selectedCategory = '';
    this.categoryCtrl.setValue('');
    this.newCategory = {
      questions: 0,
      randomize_questions: false,
      question_type: '',
      marks_per_question: null,
    };
    this.model.categories = [];
    this.tempQuestionsForCategory = [];
    this.questionsForCategory = [];
    this.selectedQuestionIds = [];
    this.selectAllQuestions = false;
    this.activeQuestionCategoryId = '';
    this.activeQuestionCategoryName = '';
    this.questionCountError = '';
    this.lastAddedQuestionSelectionByCategory = {};
  }
  private resetQuestionBankDraft(clearDisplayedQuestions = false) {
    this.selectedCategory = '';
    this.categoryCtrl.setValue('');
    this.newCategory = {
      questions: 0,
      randomize_questions: false,
      question_type: '',
      marks_per_question: null,
    };
    this.tempQuestionsForCategory = [];
    this.questionCountError = '';
    if (clearDisplayedQuestions) {
      this.activeQuestionCategoryId = '';
      this.activeQuestionCategoryName = '';
      this.questionsForCategory = [];
      this.selectedQuestionIds = [];
      this.selectAllQuestions = false;
    }
  }

  formatQuestionBankType(type: any): string {
    const value = String(type || '').trim();
    if (!value) return ''; // Return empty string so label doesn't float when unselected
    return value.replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  private deriveQuestionTypeFromQuestions(questions: Array<any>): string {
    const types = Array.from(
      new Set(
        (questions || []).map((q) => String(q.type || q.question_type || '').trim()).filter(Boolean)
      )
    );
    if (!types.length) return '';
    return types.length === 1 ? types[0] : 'Mixed';
  }

  private deriveMarksFromQuestions(questions: Array<any>): number | null {
    const marks = Array.from(
      new Set(
        (questions || [])
          .map((q: any) => this.getMarksPerQuestion(q))
          .filter((v: number | null) => v !== null)
      )
    ) as number[];
    return marks.length === 1 ? marks[0] : null;
  }
  onCategoryAutocompleteSelected(c: any) {
    if (!c) return;
    const normalized = this.normalizeCategoryOption(c);
    const existing = (this.model.categories || []).find(
      (item: any) => String(item.category_id) === String(normalized.category_id)
    );
    if (existing) {
      this.loadAttachedQuestionBankDraft(normalized, existing);
      return;
    }
    this.loadQuestionBankDraft(c);
  }
  private loadAttachedQuestionBankDraft(category: any, attached: any) {
    const catId = String(attached?.category_id || category?.category_id || '');
    if (!catId) return;
    const requestSeq = ++this.selectionLoadSeq;
    this.questionLoadSeq++;
    this.selectedCategory = catId;
    this.categoryCtrl.setValue(category);
    this.questionCountError = '';
    this.tempQuestionsForCategory = [];
    this.questionsForCategory = [];
    this.selectedQuestionIds = Array.isArray(attached.question_ids)
      ? attached.question_ids.map((id: any) => String(id))
      : [];
    this.selectAllQuestions = false;
    this.activeQuestionCategoryId = catId;
    this.activeQuestionCategoryName = attached.name || category.name || 'Selected category';
    this.newCategory = {
      questions: Number(attached.questions) || 0,
      randomize_questions: !!attached.randomize_questions,
      question_type: attached.question_type || category.type || '',
      marks_per_question: this.getMarksPerQuestion(attached) ?? this.getMarksPerQuestion(category),
    };
    this.loadAttachedQuestionBankDraftQuestions(
      catId,
      requestSeq,
      this.selectedQuestionIds,
      !!attached.randomize_questions
    );
  }

  private loadAttachedQuestionBankDraftQuestions(
    catId: string,
    requestSeq: number,
    selectedIds: string[],
    randomizeQuestions: boolean
  ) {
    this.loader.show();
    const url = `${API_BASE}/get-questions-details?category_id=${encodeURIComponent(catId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (requestSeq !== this.selectionLoadSeq || String(this.selectedCategory) !== String(catId))
          return;
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.tempQuestionsForCategory = arr.map((q: any, i: number) => ({
          id: q.id || q.question_id || q._id || String(i),
          question: q.question || q.text || q.title || '',
          type: q.type || q.question_type || '',
          marks: this.getMarksPerQuestion(q),
          raw: q,
        }));
        this.questionsForCategory = [...this.tempQuestionsForCategory];
        this.selectedQuestionIds = randomizeQuestions ? [] : selectedIds.map((id) => String(id));
        this.selectAllQuestions =
          !randomizeQuestions &&
          this.questionsForCategory.length > 0 &&
          this.questionsForCategory.every((q) => this.selectedQuestionIds.includes(String(q.id)));
        if (!this.newCategory.question_type)
          this.newCategory.question_type = this.deriveQuestionTypeFromQuestions(
            this.tempQuestionsForCategory
          );
        if (
          this.newCategory.marks_per_question === null ||
          typeof this.newCategory.marks_per_question === 'undefined'
        )
          this.newCategory.marks_per_question = this.deriveMarksFromQuestions(
            this.tempQuestionsForCategory
          );
        this.validateNewCategoryQuestionCount(false);
      },
      error: (err) => {
        if (requestSeq !== this.selectionLoadSeq) return;
        console.warn('Failed to load questions for attached question bank', err);
        this.tempQuestionsForCategory = [];
        this.questionsForCategory = [];
        this.selectedQuestionIds = [];
        this.selectAllQuestions = false;
        this.questionCountError = 'Unable to load questions for the selected Question Bank.';
      },
      complete: () => {
        if (requestSeq === this.selectionLoadSeq) this.loader.hide();
      },
    });
  }
  private loadQuestionBankDraft(category: any) {
    const normalized = this.normalizeCategoryOption(category);
    const catId = normalized.category_id || '';
    if (!catId) return;
    const requestSeq = ++this.selectionLoadSeq;
    this.selectedCategory = catId;
    this.questionCountError = '';
    this.tempQuestionsForCategory = [];
    this.questionsForCategory = [];
    this.selectedQuestionIds = [];
    this.selectAllQuestions = false;
    this.activeQuestionCategoryId = catId;
    this.activeQuestionCategoryName = normalized.name || 'Selected category';
    this.newCategory = {
      questions: 0,
      randomize_questions: true,
      question_type: normalized.type || '',
      marks_per_question: this.getMarksPerQuestion(normalized),
    };
    this.loadQuestionBankDraftDetails(catId, requestSeq);
    this.loadQuestionBankDraftQuestions(catId, requestSeq);
  }

  private loadQuestionBankDraftDetails(catId: string, requestSeq: number) {
    const url = `${API_BASE}/category-details?category_id=${encodeURIComponent(catId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (requestSeq !== this.selectionLoadSeq || String(this.selectedCategory) !== String(catId))
          return;
        const items = Array.isArray(res) ? res : res?.data || [];
        const detail =
          Array.isArray(items) && items.length
            ? items[0]
            : res?.data && !Array.isArray(res.data)
              ? res.data
              : res;
        if (!detail) return;
        const normalized = this.normalizeCategoryOption(detail);
        this.newCategory.question_type = normalized.type || this.newCategory.question_type || '';
        this.newCategory.marks_per_question =
          this.getMarksPerQuestion(normalized) ?? this.newCategory.marks_per_question ?? null;
      },
      error: (err) => {
        console.warn('Failed to load question bank details', err);
      },
    });
  }

  private loadQuestionBankDraftQuestions(catId: string, requestSeq: number) {
    this.loader.show();
    const url = `${API_BASE}/get-questions-details?category_id=${encodeURIComponent(catId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (requestSeq !== this.selectionLoadSeq || String(this.selectedCategory) !== String(catId))
          return;
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.tempQuestionsForCategory = arr.map((q: any, i: number) => ({
          id: q.id || q.question_id || q._id || String(i),
          question: q.question || q.text || q.title || '',
          type: q.type || q.question_type || '',
          marks: this.getMarksPerQuestion(q),
          raw: q,
        }));
        this.questionsForCategory = [...this.tempQuestionsForCategory];
        this.selectedQuestionIds = [];
        this.selectAllQuestions = false;
        this.newCategory.questions = this.tempQuestionsForCategory.length;
        if (!this.newCategory.question_type)
          this.newCategory.question_type = this.deriveQuestionTypeFromQuestions(
            this.tempQuestionsForCategory
          );
        if (
          this.newCategory.marks_per_question === null ||
          typeof this.newCategory.marks_per_question === 'undefined'
        )
          this.newCategory.marks_per_question = this.deriveMarksFromQuestions(
            this.tempQuestionsForCategory
          );
        this.validateNewCategoryQuestionCount(false);
      },
      error: (err) => {
        if (requestSeq !== this.selectionLoadSeq) return;
        console.warn('Failed to load questions for selected question bank', err);
        this.tempQuestionsForCategory = [];
        this.questionsForCategory = [];
        this.selectedQuestionIds = [];
        this.selectAllQuestions = false;
        this.newCategory.questions = 0;
        this.questionCountError = 'Unable to load questions for the selected Question Bank.';
      },
      complete: () => {
        if (requestSeq === this.selectionLoadSeq) this.loader.hide();
      },
    });
  }
  // load categories with filters (called by Apply)
  loadCategoriesWithFilters(filters: any = {}) {
    // If no filters are applied, completely wipe the data and return
    if (!this.hasCategoryFilterValues()) {
      this.categories = [];
      this.updateFilteredCategoriesStream();
      return;
    }

    this.loader.show();
    const requestSeq = ++this.categoryLoadSeq;
    const currentUser = this.getCurrentUserId();
    const base = `${API_BASE}/get-categories-list`;
    const params: string[] = [];

    if (filters.institute_id)
      params.push(`institute_id=${encodeURIComponent(filters.institute_id)}`);
    if (filters.departments && filters.departments.length)
      params.push(`departments=${encodeURIComponent(filters.departments.join(','))}`);
    if (filters.teams && filters.teams.length)
      params.push(`teams=${encodeURIComponent(filters.teams.join(','))}`);
    if (filters.created_after)
      params.push(`created_after=${encodeURIComponent(filters.created_after)}`);
    if (filters.created_before)
      params.push(`created_before=${encodeURIComponent(filters.created_before)}`);
    if (filters.type) params.push(`type=${encodeURIComponent(filters.type)}`);
    if (filters.access_scope === 'owned_or_public' && currentUser) {
      params.push('access_scope=owned_or_public');
      params.push(`current_user_id=${encodeURIComponent(String(currentUser))}`);
    } else {
      if (typeof filters.created_by !== 'undefined' && filters.created_by && currentUser)
        params.push(`created_by=${encodeURIComponent(String(currentUser))}`);
      if (typeof filters.public_access !== 'undefined' && filters.public_access !== null)
        params.push(`public_access=${encodeURIComponent(String(filters.public_access))}`);
    }

    const url = params.length ? `${base}?${params.join('&')}` : base;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (requestSeq !== this.categoryLoadSeq) return;
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.categories = arr.map((c: any) => this.normalizeCategoryOption(c));
        this.reconcileAttachedQuestionBankMarks();
        this.updateFilteredCategoriesStream();

        if (this.categories.length === 0 && this.hasCategoryFilterValues()) {
          this.categoryFilterError = 'No question bank found for the selected filter / date range.';
          try {
            notify('No question bank found for the selected filter criteria.', 'info');
          } catch (e) {}
        } else {
          this.categoryFilterError = '';
        }
      },
      error: (err) => {
        if (requestSeq !== this.categoryLoadSeq) return;
        console.warn('Failed to load categories with filters', err);
        this.categories = [];
        this.updateFilteredCategoriesStream();
        if (this.hasCategoryFilterValues()) {
          this.categoryFilterError = 'No question bank found for the selected filter / date range.';
          try {
            notify('No question bank found for the selected filter criteria.', 'info');
          } catch (e) {}
        }
      },
      complete: () => {
        this.loader.hide();
      },
    });
  }

  /**
   * Ensure `filteredCategories$` observable is wired to `categoryCtrl.valueChanges`
   * so the autocomplete updates when `this.categories` changes.
   */
  updateFilteredCategoriesStream() {
    try {
      this.filteredCategories$ = this.categoryCtrl.valueChanges.pipe(
        startWith(this.categoryCtrl.value || ''),
        map((val: any) => {
          const hasAppliedFilter =
            this.appliedQuestionBankFilters &&
            this.appliedQuestionBankFilters.length > 0 &&
            this.hasCategoryFilterValues();

          // STRICT CHECK: If no filter is applied, return empty list regardless of input
          if (!hasAppliedFilter || !this.categories.length) {
            return [];
          }

          const q = typeof val === 'string' ? val.trim().toLowerCase() : '';
          const currentUser = this.getCurrentUserId();

          return (this.categories || []).filter((c: any) => {
            const matchesName = !q || (c.name || '').toLowerCase().includes(q);

            let matchesDate = true;
            if (c.created_at || c.created_date) {
              const itemDate = new Date(c.created_at || c.created_date).getTime();
              if (
                this.filterCreationDateAfter &&
                itemDate < new Date(this.filterCreationDateAfter).getTime()
              ) {
                matchesDate = false;
              }
              if (
                this.filterCreationDate &&
                itemDate > new Date(this.filterCreationDate).getTime()
              ) {
                matchesDate = false;
              }
            }

            let matchesAccess = true;
            if (this.filterCreatedByMe || this.filterPublicAccess) {
              const creator = String(c.created_by_id || c.created_by_user_id || c.created_by || '');
              const isOwned = !!currentUser && creator === String(currentUser);
              const isPublic = !!(
                c.public_access === true ||
                c.public_access === 1 ||
                String(c.public_access).toLowerCase() === 'true'
              );
              if (this.filterCreatedByMe && this.filterPublicAccess) {
                matchesAccess = isOwned || isPublic;
              } else if (this.filterCreatedByMe) {
                matchesAccess = isOwned;
              } else {
                matchesAccess = isPublic;
              }
            }

            return matchesName && matchesDate && matchesAccess;
          });
        })
      );
    } catch (e) {
      this.filteredCategories$ = of([]);
    }
  }

  hasCategoryFilterValues(): boolean {
    return !!(
      this.filterCreationDateAfter ||
      this.filterCreationDate ||
      this.filterCreatedByMe ||
      this.filterPublicAccess ||
      (this.selectedQuestionTypes && this.selectedQuestionTypes.length > 0) ||
      this.questionBankFilterDepartments.length > 0 ||
      this.questionBankFilterTeams.length > 0
    );
  }

  // Update openCreatedDateRangePicker() around line 859:
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

        // 💥 ADD THIS: Automatically apply filter & reload categories when date changes
        this.onApply();
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

  private getQuestionBankFilterLabels(): string[] {
    const labels: string[] = [];
    if (this.filterCreationDateAfter || this.filterCreationDate) {
      const rangeDisplay = this.getCreatedDateRangeDisplay();
      if (rangeDisplay) labels.push(`Created: ${rangeDisplay}`);
    }
    if (this.selectedQuestionTypes && this.selectedQuestionTypes.length) {
      const typesFormatted = this.selectedQuestionTypes
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(', ');
      labels.push(`Type: ${typesFormatted}`);
    }
    const departmentIds = this.questionBankFilterDepartments;
    if (departmentIds.length) {
      const names = departmentIds.map(
        (id) =>
          this.departments.find((department) => String(department.id) === String(id))?.name || id
      );
      labels.push(`Department: ${names.join(', ')}`);
    }
    const teamIds = this.questionBankFilterTeams;
    if (teamIds.length) {
      const names = teamIds.map(
        (id) => this.teams.find((team) => String(team.id) === String(id))?.name || id
      );
      labels.push(`Team: ${names.join(', ')}`);
    }
    if (this.filterCreatedByMe) labels.push('Created by me');
    if (this.filterPublicAccess) labels.push('Public access');
    return labels;
  }
  onApply() {
    if (!this.selectedQuestionTypes?.length) {
      try {
        notify('Please select a type', 'info');
      } catch (e) {}
      return;
    }
    if (!this.questionBankFilterDepartments?.length) {
      try {
        notify('Please select a department', 'info');
      } catch (e) {}
      return;
    }
    if (!this.hasCategoryFilterValues()) {
      try {
        notify('Please add filters in the filter form.', 'info');
      } catch (e) {}
      return;
    }
    const filters: any = { institute_id: this.institute };
    if (this.filterCreationDateAfter)
      filters.created_after = (this.filterCreationDateAfter as Date).toISOString().slice(0, 10);
    if (this.filterCreationDate)
      filters.created_before = (this.filterCreationDate as Date).toISOString().slice(0, 10);
    if (this.selectedQuestionTypes && this.selectedQuestionTypes.length)
      filters.type = this.selectedQuestionTypes.join(',');
    const departments = this.questionBankFilterDepartments;
    const teams = this.questionBankFilterTeams;
    if (departments.length) filters.departments = departments;
    if (teams.length) filters.teams = teams;
    if (this.filterCreatedByMe && this.filterPublicAccess) {
      filters.access_scope = 'owned_or_public';
    } else if (this.filterCreatedByMe) {
      filters.created_by = true;
    } else if (this.filterPublicAccess) {
      filters.public_access = true;
    }
    this.appliedQuestionBankFilters = this.getQuestionBankFilterLabels();
    this.loadCategoriesWithFilters(filters);
    this.closeFiltersOverlay();
  }
  onReset() {
    this.filterCreationDateAfter = null;
    this.filterCreationDate = null;
    this.selectedQuestionTypes = [];
    this.questionBankFilterDepartments = [];
    this.questionBankFilterTeams = [];
    this.questionBankDepartmentSearch = '';
    this.questionBankTeamSearch = '';
    this.filterCreatedByMe = false;
    this.filterPublicAccess = false;
    this.appliedQuestionBankFilters = [];
    this.categoryFilterError = '';

    // Clear categories so nothing shows when reset
    this.categories = [];
    this.resetQuestionBankDraft(true);
    this.updateFilteredCategoriesStream();

    this.closeFiltersOverlay();
  }

  onInstituteChange(value: any) {
    const v = value !== undefined && value !== null ? String(value) : '';
    const instituteChanged =
      this.hasTrackedInstituteForQuestionBanks && this.trackedInstituteForQuestionBanks !== v;

    this.institute = v;
    this.categoryLoadSeq++;

    if (instituteChanged && !this.editMode) {
      this.categories = [];
      this.selectedDepartments = [];
      this.selectedTeams = [];
      this.departments = [];
      this.teams = [];
      this.questionBankFilterDepartments = [];
      this.questionBankFilterTeams = [];
      this.questionBankDepartmentSearch = '';
      this.questionBankTeamSearch = '';
      this.filterCreationDateAfter = null;
      this.filterCreationDate = null;
      this.filterCreatedByMe = false;
      this.filterPublicAccess = false;
      this.subject_id = '';
      this.subject_name = '';
      this.sections = [];
      this.resetQuestionBanksAndQuestionsSection();
    }
    if (instituteChanged) {
      this.selectedPaperUsers = [];
      this.paperUsers = [];
      this.assignableUserCount = null;
      this.clearUserFilters();
    }
    this.trackedInstituteForQuestionBanks = v;
    this.hasTrackedInstituteForQuestionBanks = true;

    this.updateFilteredCategoriesStream();
    if (this.institute) {
      this.loadDepartments(this.institute);
      this.loadTeams(this.institute);
      this.loadSubjects(this.institute);
      this.loadCampusList(this.institute);
      // Removed this.loadUserLocations() so users are never fetched on page load
      this.categories = [];
      if (!this.editMode || instituteChanged) {
        this.paperUsers = [];
      }
    } else {
      this.departments = [];
      this.teams = [];
      this.subjects = [];
      this.subject_id = '';
      this.subject_name = '';
      this.sections = [];
      this.paperUsers = [];
      this.selectedPaperUsers = [];
      this.clearUserFilters();
      this.userCampuses = [];
      this.superAdminUserCountries = [];
      this.superAdminUserCities = [];
      this.assignableUserCount = null;
      this.assignmentUserSearch = '';
      this.categories = [];
    }
  }

  // ── Subject Methods ──
  get filteredSubjects(): Array<{ id: string; name: string }> {
    const term = (this.subjectFilterSearch || '').trim().toLowerCase();
    if (!term) return this.subjects;
    return this.subjects.filter((s) => (s.name || '').toLowerCase().includes(term));
  }

  onSubjectOpenedChange(opened: boolean) {
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
      this.subjectFilterSearch = '';
    }
  }

  onSubjectChange(val: any) {
    const subId = val ? String(val) : '';
    this.subject_id = subId;
    const found = this.subjects.find((s) => String(s.id) === subId);
    this.subject_name = found ? found.name : '';
  }

  loadSubjects(instId?: string) {
    if (!instId) {
      this.subjects = [];
      this.subject_id = '';
      this.subject_name = '';
      return;
    }
    this.loadingSubjects = true;
    const url = `${API_BASE}/get-subject-list`;
    this.http.get<any>(url, { params: { institute_id: instId, active_only: 'true' } }).subscribe({
      next: (res) => {
        this.loadingSubjects = false;
        const data = res?.data || res || [];
        this.subjects = (Array.isArray(data) ? data : [])
          .map((s: any) => ({
            id: String(s.subject_id || s.id || ''),
            name: s.subject_name || s.name || '',
          }))
          .filter((s: any) => !!s.name);

        if (this.subject_id) {
          const matched = this.subjects.find(
            (s) =>
              String(s.id) === String(this.subject_id) ||
              s.name.toLowerCase().trim() === String(this.subject_name).toLowerCase().trim()
          );
          if (matched) {
            this.subject_id = String(matched.id);
            this.subject_name = matched.name;
          } else if (this.subject_name) {
            this.subjects.unshift({
              id: this.subject_id || this.subject_name,
              name: this.subject_name,
            });
          }
        } else if (this.subject_name) {
          const matched = this.subjects.find(
            (s) => s.name.toLowerCase().trim() === String(this.subject_name).toLowerCase().trim()
          );
          if (matched) {
            this.subject_id = String(matched.id);
            this.subject_name = matched.name;
          } else {
            this.subjects.unshift({ id: this.subject_name, name: this.subject_name });
            this.subject_id = this.subject_name;
          }
        }
      },
      error: () => {
        this.loadingSubjects = false;
        this.subjects = [];
      },
    });
  }

  // ── Section Management Methods ──
  get activeModalSection(): PaperSection | null {
    if (this.activeModalSectionIndex >= 0 && this.activeModalSectionIndex < this.sections.length) {
      return this.sections[this.activeModalSectionIndex];
    }
    return null;
  }

  get totalSectionsCount(): number {
    return this.sections.length;
  }

  get totalPaperQuestionsCount(): number {
    return this.sections.reduce((sum, s) => sum + (s.questions ? s.questions.length : 0), 0);
  }

  get totalPaperMarks(): number {
    return this.sections.reduce((sum, s) => sum + this.getSectionMarks(s), 0);
  }

  getSectionMarks(section: PaperSection): number {
    return (section.questions || []).reduce((sum, q) => sum + (Number(q.marks) || 0), 0);
  }

  getSectionMarksPerQ(section: PaperSection): number {
    const qs = section.questions || [];
    if (!qs.length) return (section as any).marksPerQ || 1;
    const marks = qs.map((q) => Number(q.marks) || 0).filter((m) => m > 0);
    if (!marks.length) return (section as any).marksPerQ || 1;
    const unique = [...new Set(marks)];
    return unique.length === 1 ? unique[0] : unique[0] || 1;
  }

  getSectionMarksCalculation(sec: PaperSection): string {
    if (!sec) return '';
    const questions = sec.questions || [];
    const count = questions.length;
    if (count === 0) {
      const target = (sec as any).targetCount;
      if (target && target > 0) {
        const marks = this.getSectionMarksPerQ(sec) || 1;
        return `${target} × ${marks} = ${target * marks}`;
      }
      return '';
    }
    const marksList = questions.map((q) => Number(q.marks) || 0).filter((m) => m > 0);
    const uniqueMarks = [...new Set(marksList)];
    const marksPerQ = uniqueMarks.length === 1 ? uniqueMarks[0] : (this.getSectionMarksPerQ(sec) || 1);
    const totalMarks = this.getSectionMarks(sec);

    if (uniqueMarks.length <= 1) {
      return `${count} × ${marksPerQ} = ${totalMarks}`;
    } else {
      return `${count} Qs = ${totalMarks} Marks`;
    }
  }

  getOptionLabel(index: number): string {
    const letters = ['(a)', '(b)', '(c)', '(d)', '(e)', '(f)', '(g)', '(h)'];
    return letters[index] || `(${String.fromCharCode(97 + index)})`;
  }

  formatOptionText(opt: any, index: number): string {
    let text =
      typeof opt === 'string'
        ? opt
        : opt?.text || opt?.option_text || opt?.label || opt?.value || '';
    text = (text || '').trim();
    const hasPrefix = /^\(?[a-zA-Z0-9][\.\)\:\-]\s*/.test(text);
    if (hasPrefix) {
      return text;
    }
    return `${this.getOptionLabel(index)} ${text}`;
  }

  getCorrectAnswerText(q: PaperQuestion): string {
    // 1. If options array has a marked correct option
    if (q.options && q.options.length) {
      const correctOptIdx = q.options.findIndex(
        (o: any) =>
          o.is_correct === 1 ||
          o.is_correct === true ||
          o.is_correct === '1' ||
          o.is_correct === 'true' ||
          o.isCorrect === true ||
          o.isCorrect === 1
      );
      if (correctOptIdx >= 0) {
        return this.formatOptionText(q.options[correctOptIdx], correctOptIdx);
      }
    }
    // 2. If q.answer matches an option by value/id/label/text
    if (q.answer && q.options && q.options.length) {
      const ansStr = String(q.answer).trim().toLowerCase();
      const matchIdx = q.options.findIndex((o: any, idx: number) => {
        const oText = (typeof o === 'string' ? o : o.text || o.option_text || o.value || '')
          .trim()
          .toLowerCase();
        const oId = String(o.id || o.option_id || '')
          .trim()
          .toLowerCase();
        const optLetter = this.getOptionLabel(idx)
          .replace(/[\(\)\.]/g, '')
          .trim()
          .toLowerCase();
        return oText === ansStr || oId === ansStr || optLetter === ansStr;
      });
      if (matchIdx >= 0) {
        return this.formatOptionText(q.options[matchIdx], matchIdx);
      }
    }
    // 3. Direct string answer (e.g. descriptive questions or direct answer field)
    if (q.answer && typeof q.answer === 'string' && q.answer.trim()) {
      return q.answer.trim();
    }
    return '';
  }

  hydrateMissingQuestionOptions() {
    // 1. Recover from raw if available
    for (const sec of this.sections) {
      for (const q of sec.questions || []) {
        if ((!q.options || !q.options.length) && q.raw?.options?.length) {
          q.options = q.raw.options;
        }
      }
    }

    // 2. Query questions for any category missing options
    const categoryIds = new Set<string>();
    for (const sec of this.sections) {
      for (const q of sec.questions || []) {
        if (!q.options || !q.options.length) {
          if (q.category_id) categoryIds.add(String(q.category_id));
        }
      }
    }

    categoryIds.forEach((catId) => {
      this.http
        .get<any>(`${API_BASE}/get-questions-details?category_id=${encodeURIComponent(catId)}`)
        .subscribe({
          next: (res) => {
            const arr = Array.isArray(res) ? res : res?.data || [];
            let updated = false;
            for (const raw of arr) {
              const rawId = String(raw.id || raw.question_id || raw._id);
              for (const sec of this.sections) {
                for (const q of sec.questions || []) {
                  if (String(q.id) === rawId && (!q.options || !q.options.length)) {
                    q.options = raw.options || raw.choices || [];
                    if (!q.answer) q.answer = raw.answer || raw.answerText || '';
                    updated = true;
                  }
                }
              }
            }
            if (updated) {
              if (this.showPreviewPaper) {
                this.paginatedPaperPages = this.buildPaginatedPages(false);
              }
              if (this.showPreviewGuide) {
                this.paginatedGuidePages = this.buildPaginatedPages(true);
              }
            }
          },
          error: () => {},
        });
    });
  }

  isDescriptiveQuestion(q: any, secIdx?: number): boolean {
    const sec = secIdx !== undefined && this.sections ? this.sections[secIdx] : null;
    const questionType = String(
      q?.type || q?.question_type || sec?.question_type || ''
    ).toLowerCase();
    return (
      String(sec?.question_type || '').toLowerCase() === 'descriptive' ||
      questionType.includes('descriptive') ||
      questionType.includes('subjective')
    );
  }

  estimateQuestionHeight(q: PaperQuestion, sec: PaperSection, isAnswerKey: boolean): number {
    const qText = q?.question || (q as any)?.question_text || (q as any)?.text || '';
    // In Times New Roman 13.5px across 600px width, ~100 characters fit on a single line
    const textLines = Math.max(1, Math.ceil(qText.length / 100));
    const textHeight = textLines * 18;

    let optionsOrAnsHeight = 0;
    if (!isAnswerKey) {
      const isDescriptive = this.isDescriptiveQuestion(q, this.sections?.indexOf(sec));
      if (!isDescriptive) {
        const opts = q?.options && q.options.length > 0 ? q.options : (q?.raw?.options || null);
        if (opts && opts.length > 0) {
          const maxOptLen = Math.max(
            ...opts.map((o: any) =>
              (typeof o === 'string' ? o : o?.text || o?.option_text || o?.value || '').length
            )
          );
          if (maxOptLen > 50) {
            // Stacked options: 1 column
            optionsOrAnsHeight = opts.length * 17 + 4;
          } else {
            // 2 column grid
            const rows = Math.ceil(opts.length / 2);
            optionsOrAnsHeight = rows * 17 + 4;
          }
        } else {
          // Objective questions have multiple choice options (typically 4 options in 2 rows)
          optionsOrAnsHeight = 38;
        }
      }
    } else {
      const ansText = this.getCorrectAnswerText(q) || 'Answer not set yet';
      const ansLines = Math.max(1, Math.ceil(ansText.length / 100));
      optionsOrAnsHeight = ansLines * 17 + 4;
    }

    return textHeight + optionsOrAnsHeight + 8;
  }

  buildPaginatedPages(isAnswerKey: boolean): PaperPage[] {
    const pages: PaperPage[] = [];

    // Standard A4 height is 297mm = 1122.5px.
    // Inner padding: 14mm top (53px) + 12mm bottom (45px) = 98px.
    // Footer: 20px.
    // Usable inside page content height = 1122.5 - 98 - 20 = 1004.5px.
    const USABLE_PAGE_HEIGHT = 1000;

    // Estimate Page 1 Examination Header height
    let p1HeaderHeight = 14; // divider + margins
    if (this.instituteNameDisplay && this.instituteNameDisplay.trim()) {
      p1HeaderHeight += 20;
    }
    const metaParts = [
      this.getSelectedDepartmentsDisplay(),
      this.getSelectedTeamsDisplay(),
      this.subject_name,
    ].filter((p) => p && p.trim());
    if (metaParts.length > 0) {
      p1HeaderHeight += 16;
    }
    if (this.title || this.examTypeLabel) {
      p1HeaderHeight += 18;
    }
    p1HeaderHeight += 16; // Time / Max Marks row

    const runningHeaderHeight = 26;

    let currentPageItems: PaperPageItem[] = [];
    let currentCapacity = Math.max(400, USABLE_PAGE_HEIGHT - p1HeaderHeight);
    let currentUsedHeight = 0;
    let isFirst = true;

    const commitPage = () => {
      pages.push({
        pageNumber: pages.length + 1,
        totalPages: 1,
        isFirstPage: isFirst,
        items: [...currentPageItems],
      });
      currentPageItems = [];
      isFirst = false;
      currentCapacity = USABLE_PAGE_HEIGHT - runningHeaderHeight;
      currentUsedHeight = 0;
    };

    if (!this.sections || this.sections.length === 0) {
      commitPage();
      pages.forEach((p) => (p.totalPages = pages.length));
      return pages;
    }

    for (let secIdx = 0; secIdx < this.sections.length; secIdx++) {
      const sec = this.sections[secIdx];
      const secName = sec.name || `Section ${String.fromCharCode(65 + secIdx)}`;
      const instructions = this.getSectionSubHeading(sec) || '';
      const instrLines = instructions ? Math.max(1, Math.ceil(instructions.length / 100)) : 0;
      const secHeaderHeight = 18 + (instrLines > 0 ? instrLines * 15 + 4 : 0);

      const questions = sec.questions || [];

      // Calculate first question height for orphan check ("Keep with next")
      let firstQHeight = 26;
      if (questions.length > 0) {
        firstQHeight = this.estimateQuestionHeight(questions[0], sec, isAnswerKey);
      }

      // Check if section header fits on current page WITH at least one question
      const neededForSecAndFirstQ =
        secHeaderHeight + (questions.length > 0 ? Math.min(firstQHeight, 65) : 15);
      if (
        currentPageItems.length > 0 &&
        currentUsedHeight + neededForSecAndFirstQ > currentCapacity
      ) {
        commitPage();
      }

      // Add section header
      const secCalc = this.getSectionMarksCalculation(sec);
      currentPageItems.push({
        type: 'section-header',
        sectionIndex: secIdx,
        sectionName: secName,
        sectionSubHeading: instructions,
        sectionCalculation: secCalc,
      });
      currentUsedHeight += secHeaderHeight;

      // Iterate questions
      for (let qIdx = 0; qIdx < questions.length; qIdx++) {
        const q = questions[qIdx];
        const globalNum = this.getGlobalQuestionIndex(secIdx, qIdx);
        const qHeight = this.estimateQuestionHeight(q, sec, isAnswerKey);

        if (currentPageItems.length > 0 && currentUsedHeight + qHeight > currentCapacity) {
          commitPage();
        }

        currentPageItems.push({
          type: 'question',
          sectionIndex: secIdx,
          questionIndex: qIdx,
          globalQuestionIndex: globalNum,
          question: q,
        });
        currentUsedHeight += qHeight;
      }
    }

    if (currentPageItems.length > 0 || pages.length === 0) {
      commitPage();
    }

    const total = pages.length;
    pages.forEach((p) => (p.totalPages = total));
    return pages;
  }

  previewPaper() {
    this.hydrateMissingQuestionOptions();
    this.paginatedPaperPages = this.buildPaginatedPages(false);
    this.showPreviewPaper = true;
  }

  previewGuide() {
    this.hydrateMissingQuestionOptions();
    this.paginatedGuidePages = this.buildPaginatedPages(true);
    this.showPreviewGuide = true;
  }

  switchToPaperPreview() {
    this.hydrateMissingQuestionOptions();
    this.paginatedPaperPages = this.buildPaginatedPages(false);
    this.showPreviewGuide = false;
    this.showPreviewPaper = true;
  }

  switchToGuidePreview() {
    this.hydrateMissingQuestionOptions();
    this.paginatedGuidePages = this.buildPaginatedPages(true);
    this.showPreviewPaper = false;
    this.showPreviewGuide = true;
  }

  getSectionProgressPct(section: PaperSection): number {
    const target = (section as any).targetCount || 10;
    if (!target) return 0;
    return Math.min(100, Math.round(((section.questions?.length || 0) / target) * 100));
  }

  getGlobalQuestionIndex(secIdx: number, qIdx: number): number {
    let count = 0;
    for (let i = 0; i < secIdx; i++) {
      count += this.sections[i]?.questions?.length || 0;
    }
    return count + qIdx + 1;
  }

  getTotalTargetQuestions(): number {
    return this.sections.reduce((sum, s) => sum + ((s as any).targetCount || 0), 0);
  }

  getMarksProgressPct(): number {
    const target = this.totalMarksOverride;
    if (!target) return 0;
    return Math.min(100, Math.round((this.totalPaperMarks / target) * 100));
  }

  getSectionTotalMarks(section: PaperSection): number {
    return this.getSectionMarks(section);
  }

  getAnswerReadyCount(): number {
    let count = 0;
    for (const sec of this.sections) {
      for (const q of sec.questions || []) {
        if (q.answer || (q.options && q.options.some((o: any) => o.is_correct || o.isCorrect))) {
          count++;
        }
      }
    }
    return count;
  }

  getQuestionsNeedingEvaluationCount(): number {
    let count = 0;
    for (const sec of this.sections) {
      for (const q of sec.questions || []) {
        if (
          sec.question_type === 'descriptive' ||
          (!q.answer && (!q.options || !q.options.some((o: any) => o.is_correct || o.isCorrect)))
        ) {
          count++;
        }
      }
    }
    return count;
  }

  printPaperDocument(isAnswerKey: boolean): void {
    const printWin = window.open('', '_blank', 'width=950,height=800');
    if (!printWin) {
      try {
        notify(
          'Please allow popups to download/print the ' +
            (isAnswerKey ? 'answer key' : 'question paper'),
          'info'
        );
      } catch (_) {}
      return;
    }

    const schoolName = (this.instituteNameDisplay || '').trim().toUpperCase() || 'INSTITUTE NAME';
    const dept = (this.getSelectedDepartmentsDisplay() || '').trim().toUpperCase();
    const team = (this.getSelectedTeamsDisplay() || '').trim().toUpperCase();
    const subj = (this.subject_name || '').trim().toUpperCase();
    const metaParts = [dept, team, subj].filter(Boolean);
    const metaLine = metaParts.join(' · ');

    const examTypePrefix = this.examTypeLabel
      ? this.examTypeLabel.trim().toUpperCase() + ' – '
      : '';
    const paperTitle = (this.title || '').trim();
    let docTitle = '';
    if (!paperTitle) {
      docTitle = isAnswerKey ? 'Answer Key' : 'Question Paper';
    } else if (
      paperTitle.toLowerCase().includes('question paper') ||
      paperTitle.toLowerCase().includes('answer key')
    ) {
      docTitle = paperTitle;
    } else {
      docTitle = `${paperTitle} - ${isAnswerKey ? 'Answer Key' : 'Question Paper'}`;
    }

    const testTypeLabel = isAnswerKey
      ? `${examTypePrefix}${(paperTitle || 'QUESTION PAPER').toUpperCase()} (ANSWER KEY)`
      : `${examTypePrefix}${(paperTitle || 'QUESTION PAPER').toUpperCase()}`;

    const durationText =
      this.durationLabel || (this.durationMinutes ? `${this.durationMinutes} mins` : '1 Hour');
    const maxMarks = this.totalMarksOverride || this.totalPaperMarks || 0;

    const pages = this.buildPaginatedPages(isAnswerKey);

    let pagesHtml = '';
    pages.forEach((page) => {
      let pageHeaderHtml = '';
      if (page.isFirstPage) {
        pageHeaderHtml = `
          <div class="paper-school-name">${schoolName}</div>
          ${metaLine ? `<div class="paper-meta-line">${metaLine}</div>` : ''}
          <div class="paper-test-type">${testTypeLabel}</div>
          <div class="paper-header-row">
            <span>Time: ${durationText}</span>
            <span>Maximum Marks: ${maxMarks}</span>
          </div>
          <hr class="paper-divider">
        `;
      } else {
        pageHeaderHtml = `
          <div class="page-running-header">
            <span>${testTypeLabel} · ${subj || 'EXAMINATION'}</span>
            <span>${schoolName}</span>
          </div>
        `;
      }

      let itemsHtml = '';
      if (page.items && page.items.length > 0) {
        page.items.forEach((item) => {
          if (item.type === 'section-header') {
            const calcHtml = item.sectionCalculation
              ? `<div class="paper-section-marks-calc">${item.sectionCalculation}</div>`
              : '<div class="paper-section-marks-calc"></div>';
            itemsHtml += `
              <div class="paper-section-heading-wrap">
                <div class="paper-section-spacer"></div>
                <div class="paper-section-heading"><u>${item.sectionName}</u></div>
                ${calcHtml}
              </div>
              ${item.sectionSubHeading ? `<div class="paper-section-instructions">${item.sectionSubHeading}</div>` : ''}
            `;
          } else if (item.type === 'question' && item.question) {
            const q = item.question;
            const qNum = item.globalQuestionIndex;
            const qText = q.question || (q as any).question_text || (q as any).text || 'Question text';
            const marks = q.marks ? `[${q.marks}]` : '[1]';

            let optionsOrAnswerHtml = '';
            if (!isAnswerKey) {
              const isDescriptive = this.isDescriptiveQuestion(q, item.sectionIndex);
              if (!isDescriptive && q.options && q.options.length > 0) {
                const optionsItems = q.options
                  .map((opt: any, optIdx: number) => {
                    const optFormatted = this.formatOptionText(opt, optIdx);
                    return `<div class="paper-q-option">${optFormatted}</div>`;
                  })
                  .join('');
                optionsOrAnswerHtml = `<div class="paper-q-options-grid">${optionsItems}</div>`;
              }
            } else {
              const ansText = this.getCorrectAnswerText(q);
              const ansDisplay = ansText
                ? `<span class="ans-value">${ansText}</span>`
                : `<em class="no-answer">Answer not set yet</em>`;
              optionsOrAnswerHtml = `
                <div class="paper-q-answer">
                  <span class="ans-badge">Ans:</span>
                  ${ansDisplay}
                </div>
              `;
            }

            itemsHtml += `
              <div class="paper-question-item">
                <div class="paper-q-header">
                  <span class="paper-q-num">${qNum}.</span>
                  <span class="paper-q-text">${qText}</span>
                  <span class="paper-q-marks">${marks}</span>
                </div>
                ${optionsOrAnswerHtml}
              </div>
            `;
          }
        });
      } else {
        itemsHtml = '<p style="text-align: center; margin-top: 40px; color: #64748b;">No questions added to this test yet.</p>';
      }

      pagesHtml += `
        <div class="word-page">
          <div class="word-page-inner">
            ${pageHeaderHtml}
            <div class="page-content-flow">
              ${itemsHtml}
            </div>
            <div class="word-page-footer">
              <span class="page-footer-left">${paperTitle || 'Question Paper'}</span>
              <span class="page-footer-right">Page ${page.pageNumber} of ${page.totalPages}</span>
            </div>
          </div>
        </div>
      `;
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${docTitle}</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 0;
            }
            * {
              box-sizing: border-box;
            }
            html, body {
              font-family: 'Times New Roman', Times, serif;
              color: #111;
              line-height: 1.5;
              margin: 0 !important;
              padding: 0 !important;
              background: #eaecf0;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .word-page {
              width: 210mm;
              min-height: 297mm;
              height: 297mm;
              margin: 24px auto;
              background: #ffffff;
              box-shadow: 0 4px 18px rgba(0,0,0,0.12);
              box-sizing: border-box;
              page-break-after: always;
              break-after: page;
            }
            .word-page-inner {
              padding: 14mm 18mm 12mm 18mm;
              height: 100%;
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
            }
            .page-content-flow {
              flex: 1;
            }
            .page-running-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #555;
              padding-bottom: 5px;
              margin-bottom: 12px;
              border-bottom: 1px solid #999;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .word-page-footer {
              margin-top: auto;
              padding-top: 8px;
              border-top: 1px solid #d1d5db;
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 11px;
              color: #666;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .paper-school-name {
              text-align: center;
              font-size: 16.5px;
              font-weight: 700;
              letter-spacing: 0.05em;
              margin-bottom: 2px;
              color: #000;
              line-height: 1.25;
            }
            .paper-meta-line {
              text-align: center;
              font-size: 12px;
              color: #333;
              margin-bottom: 2px;
              letter-spacing: 0.03em;
              line-height: 1.25;
            }
            .paper-test-type {
              text-align: center;
              font-size: 13px;
              font-weight: 700;
              margin-bottom: 3px;
              color: #000;
              line-height: 1.25;
            }
            .paper-header-row {
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              font-weight: 600;
              margin-bottom: 3px;
              color: #111;
              line-height: 1.25;
            }
            .paper-divider {
              border: none;
              border-top: 1.5px solid #000;
              margin: 4px 0 10px 0;
            }
            .paper-section-heading-wrap {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 8px 0 2px;
            }
            .paper-section-spacer {
              flex: 1;
            }
            .paper-section-heading {
              flex: 2;
              text-align: center;
              font-size: 13.5px;
              font-weight: 700;
              margin: 0;
              color: #000;
              line-height: 1.25;
            }
            .paper-section-heading u {
              text-decoration: underline;
            }
            .paper-section-marks-calc {
              flex: 1;
              text-align: right;
              font-size: 13px;
              font-weight: 700;
              color: #000;
              white-space: nowrap;
            }
            .paper-section-instructions {
              text-align: center;
              font-size: 12px;
              font-style: italic;
              margin-bottom: 6px;
              color: #333;
              line-height: 1.25;
            }
            .paper-question-item {
              margin-bottom: 8px;
              font-size: 13.5px;
              color: #111;
            }
            .paper-q-header {
              display: flex;
              align-items: flex-start;
              gap: 8px;
              line-height: 1.35;
            }
            .paper-q-num {
              flex-shrink: 0;
              font-weight: 700;
              min-width: 22px;
              font-size: 13.5px;
              color: #000;
            }
            .paper-q-text {
              flex: 1;
              font-size: 13.5px;
              color: #111;
              line-height: 1.35;
            }
            .paper-q-marks {
              flex-shrink: 0;
              font-weight: 700;
              margin-left: 12px;
              white-space: nowrap;
              color: #000;
              font-size: 13px;
            }
            .paper-q-options-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              column-gap: 24px;
              row-gap: 2.5px;
              margin-top: 3px;
              margin-left: 28px;
              font-size: 13px;
              line-height: 1.35;
            }
            .paper-q-option {
              color: #111;
              word-break: break-word;
            }
            .paper-q-answer {
              display: flex;
              align-items: baseline;
              gap: 6px;
              margin-top: 4px;
              margin-left: 28px;
              font-size: 13px;
              line-height: 1.35;
            }
            .ans-badge {
              font-weight: 700;
              color: #000;
              flex-shrink: 0;
            }
            .ans-value {
              font-weight: 600;
              color: #000;
              word-break: break-word;
            }
            .no-answer {
              color: #888;
              font-style: italic;
            }
            @media print {
              body {
                background: #fff !important;
              }
              .word-page {
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                width: 210mm !important;
                height: 297mm !important;
                min-height: 297mm !important;
                max-height: 297mm !important;
                page-break-after: always !important;
                break-after: page !important;
              }
              .word-page:last-child {
                page-break-after: auto !important;
                break-after: auto !important;
              }
            }
          </style>
        </head>
        <body>
          ${pagesHtml}
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(htmlContent);
    printWin.document.close();
  }


  downloadQuestionPaper() {
    this.printPaperDocument(false);
  }

  downloadEvaluationGuide() {
    this.printPaperDocument(true);
  }

  downloadAnswerKey() {
    this.printPaperDocument(true);
  }

  openAddSectionModal() {
    this.newSectionName = '';
    this.newSectionSubHeading = 'Answer all questions. Each question carries 1 mark.';
    this.newSectionType = 'objective';
    this.newSectionTargetCount = null;
    this.newSectionMarksPerQ = null;
    this.editingSectionIndex = -1;
    this.showAddSectionModal = true;
  }

  openEditSectionModal(secIdx: number) {
    const sec = this.sections[secIdx];
    if (!sec) return;
    this.editingSectionIndex = secIdx;
    this.newSectionName = sec.name;
    this.newSectionSubHeading =
      sec.sub_heading || sec.instructions || this.getSectionSubHeading(sec);
    this.newSectionType = sec.question_type;
    this.newSectionTargetCount = (sec as any).targetCount || null;
    this.newSectionMarksPerQ = this.getSectionMarksPerQ(sec) || null;
    this.showAddSectionModal = true;
  }

  closeAddSectionModal() {
    this.showAddSectionModal = false;
    this.editingSectionIndex = -1;
    this.newSectionSubHeading = '';
  }

  getSectionSubHeading(sec: PaperSection): string {
    if (sec.sub_heading && sec.sub_heading.trim()) {
      return sec.sub_heading.trim();
    }
    if (sec.instructions && sec.instructions.trim()) {
      return sec.instructions.trim();
    }
    const marks = this.getSectionMarksPerQ(sec) || 1;
    return `Answer all questions. Each question carries ${marks} mark${marks > 1 ? 's' : ''}.`;
  }

  confirmAddSection() {
    if (!this.newSectionName || !this.newSectionName.trim()) {
      notify('Please enter a section name', 'error');
      return;
    }
    const name = this.newSectionName.trim();
    const subHeading = this.newSectionSubHeading ? this.newSectionSubHeading.trim() : '';

    if (this.editingSectionIndex >= 0) {
      // Editing existing section
      const sec = this.sections[this.editingSectionIndex];
      sec.name = name;
      sec.sub_heading = subHeading;
      sec.instructions = subHeading;
      sec.question_type = this.newSectionType;
      (sec as any).targetCount = this.newSectionTargetCount || null;
      this.markDirty();
      this.closeAddSectionModal();
      notify(`Updated ${name}`, 'success');
      return;
    }
    if (this.sections.some((s) => s.name.toLowerCase() === name.toLowerCase())) {
      notify(`A section named "${name}" already exists`, 'error');
      return;
    }
    const newSec: PaperSection & { targetCount?: number | null } = {
      name,
      sub_heading: subHeading,
      instructions: subHeading,
      question_type: this.newSectionType,
      order_number: this.sections.length + 1,
      questions: [],
      targetCount: this.newSectionTargetCount || null,
    };
    this.sections.push(newSec as PaperSection);
    this.syncModelCategoriesFromSections();
    this.markDirty();
    this.closeAddSectionModal();
    notify(`Created ${newSec.name}`, 'success');
  }

  removeSection(index: number) {
    if (index >= 0 && index < this.sections.length) {
      const removed = this.sections.splice(index, 1)[0];
      this.sections.forEach((s, i) => (s.order_number = i + 1));
      this.syncModelCategoriesFromSections();
      this.markDirty();
      notify(`Removed ${removed.name}`, 'info');
    }
  }

  removeQuestionFromSection(secIdx: number, qIdx: number) {
    if (this.sections[secIdx] && this.sections[secIdx].questions) {
      this.sections[secIdx].questions.splice(qIdx, 1);
      this.syncModelCategoriesFromSections();
      this.markDirty();
    }
  }

  // ── Add Questions Modal Methods ──
  openAddQuestionModal(secIdx: number) {
    if (!this.subject_id) {
      notify('Please select a Subject in Step 1 before adding questions', 'error');
      return;
    }
    this.activeModalSectionIndex = secIdx;
    this.modalSelectedBankId = '';
    this.modalQuestions = [];
    this.modalSearchTerm = '';
    this.showAddQuestionModal = true;
    this.loadSubjectQuestionBanks();
  }

  closeAddQuestionModal() {
    this.showAddQuestionModal = false;
    this.activeModalSectionIndex = -1;
    this.modalSelectedBankId = '';
    this.modalQuestions = [];
    this.modalSearchTerm = '';
  }

  loadSubjectQuestionBanks() {
    this.modalLoadingBanks = true;
    this.modalQuestionBanks = [];
    const params: any = { institute_id: this.institute };
    if (this.subject_name) {
      params.subject = this.subject_name;
    }
    this.http.get<any>(`${API_BASE}/get-categories-list`, { params }).subscribe({
      next: (res) => {
        this.modalLoadingBanks = false;
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.modalQuestionBanks = arr.map((c: any) => ({
          id: String(c.category_id || c.id || ''),
          name: c.name || c.category_name || '',
          type: c.type || c.question_type || '',
          subject: c.subject || '',
          marks_per_question: this.getMarksPerQuestion(c),
        }));
      },
      error: (err) => {
        this.modalLoadingBanks = false;
        console.warn('Failed to load question banks for subject', err);
      },
    });
  }

  onModalQuestionBankChange(bankId: string) {
    this.modalSelectedBankId = bankId;
    this.modalQuestions = [];
    this.modalSearchTerm = '';
    if (!bankId) return;

    this.modalLoadingQuestions = true;
    const url = `${API_BASE}/get-questions-details?category_id=${encodeURIComponent(bankId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.modalLoadingQuestions = false;
        const rawArr = Array.isArray(res) ? res : res?.data || [];
        const activeSec = this.activeModalSection;
        const secType = (activeSec?.question_type || 'objective').toLowerCase();

        // Collect all question IDs already in paper across all sections
        const allPaperQIds = new Set<string>();
        for (const sec of this.sections) {
          for (const q of sec.questions || []) {
            allPaperQIds.add(String(q.id));
          }
        }

        const bank = this.modalQuestionBanks.find((b) => b.id === bankId);
        const bankName = bank?.name || 'Question Bank';
        const defaultBankMark = bank?.marks_per_question ?? 1;

        // Filter by question type
        const objectiveTypes = [
          'objective',
          'choose',
          'multi',
          'fill',
          'mcq',
          'single_choice',
          'multiple_choice',
        ];
        const descriptiveTypes = [
          'descriptive',
          'paragraph',
          'subjective',
          'essay',
          'short_answer',
          'long_answer',
        ];

        const mapped: Array<
          PaperQuestion & { alreadyInOtherSection?: boolean; selected?: boolean }
        > = [];
        for (const raw of rawArr) {
          const qType = String(raw.type || raw.question_type || '').toLowerCase();
          const isObjective =
            objectiveTypes.some((t) => qType.includes(t)) || (!qType && secType === 'objective');
          const isDescriptive =
            descriptiveTypes.some((t) => qType.includes(t)) ||
            (!qType && secType === 'descriptive');

          let matchesType = false;
          if (secType === 'objective') {
            matchesType = isObjective;
          } else {
            matchesType = isDescriptive;
          }

          if (matchesType) {
            const qId = String(raw.id || raw.question_id || raw._id);
            const mark = this.getMarksPerQuestion(raw) ?? defaultBankMark ?? 1;
            const alreadyInPaper = allPaperQIds.has(qId);

            mapped.push({
              id: qId,
              question: raw.question || raw.text || raw.title || '',
              type: raw.type || raw.question_type || secType,
              marks: Number(mark) || 1,
              category_id: bankId,
              category_name: bankName,
              options: raw.options || raw.choices || [],
              answer: raw.answer || raw.answerText || '',
              raw,
              alreadyInOtherSection: alreadyInPaper,
              selected: false,
            });
          }
        }
        this.modalQuestions = mapped;
      },
      error: (err) => {
        this.modalLoadingQuestions = false;
        console.warn('Failed to load questions for bank', err);
        this.modalQuestions = [];
      },
    });
  }

  get filteredModalQuestions(): Array<
    PaperQuestion & { alreadyInOtherSection?: boolean; selected?: boolean }
  > {
    const term = (this.modalSearchTerm || '').trim().toLowerCase();
    if (!term) return this.modalQuestions;
    return this.modalQuestions.filter((q) => (q.question || '').toLowerCase().includes(term));
  }

  get selectableModalQuestions(): Array<
    PaperQuestion & { alreadyInOtherSection?: boolean; selected?: boolean }
  > {
    return this.filteredModalQuestions.filter((q) => !q.alreadyInOtherSection);
  }

  get selectableModalQuestionsCount(): number {
    return this.selectableModalQuestions.length;
  }

  get selectedModalQuestionsCount(): number {
    return this.modalQuestions.filter((q) => q.selected && !q.alreadyInOtherSection).length;
  }

  isAllModalQuestionsSelected(): boolean {
    const selectable = this.selectableModalQuestions;
    return selectable.length > 0 && selectable.every((q) => q.selected);
  }

  isSomeModalQuestionsSelected(): boolean {
    const selectable = this.selectableModalQuestions;
    return selectable.some((q) => q.selected) && !this.isAllModalQuestionsSelected();
  }

  toggleSelectAllModalQuestions(checked: boolean) {
    const selectable = this.selectableModalQuestions;
    selectable.forEach((q) => (q.selected = checked));
  }

  toggleModalQuestion(
    q: PaperQuestion & { alreadyInOtherSection?: boolean; selected?: boolean },
    checked: boolean
  ) {
    if (q.alreadyInOtherSection) return;
    q.selected = checked;
  }

  confirmAddSelectedQuestions() {
    const activeSec = this.activeModalSection;
    if (!activeSec) return;

    const toAdd = this.modalQuestions.filter((q) => q.selected && !q.alreadyInOtherSection);
    if (!toAdd.length) {
      notify('Please select at least one question to add', 'error');
      return;
    }

    if (!activeSec.questions) activeSec.questions = [];
    toAdd.forEach((q) => {
      activeSec.questions.push({
        id: q.id,
        question: q.question,
        type: q.type,
        marks: q.marks,
        category_id: q.category_id,
        category_name: q.category_name,
        options: q.options || q.raw?.options || [],
        answer: q.answer || q.raw?.answer || '',
        raw: q.raw,
      });
    });

    this.syncModelCategoriesFromSections();
    this.markDirty();
    notify(`Added ${toAdd.length} question(s) to ${activeSec.name}`, 'success');
    this.closeAddQuestionModal();
  }

  syncModelCategoriesFromSections() {
    const catMap = new Map<
      string,
      {
        category_id: string;
        name: string;
        question_ids: string[];
        question_type: string;
        marks_per_question: number | null;
        total_marks: number;
      }
    >();

    for (const sec of this.sections) {
      for (const q of sec.questions || []) {
        const bankId = String(q.category_id || 'default');
        const bankName = q.category_name || 'Question Bank';
        if (!catMap.has(bankId)) {
          catMap.set(bankId, {
            category_id: bankId,
            name: bankName,
            question_ids: [],
            question_type: sec.question_type,
            marks_per_question: Number(q.marks) || 1,
            total_marks: 0,
          });
        }
        const entry = catMap.get(bankId)!;
        entry.question_ids.push(String(q.id));
        entry.total_marks += Number(q.marks) || 0;
      }
    }

    this.model.categories = Array.from(catMap.values()).map((entry) => ({
      category_id: entry.category_id,
      name: entry.name,
      questions: entry.question_ids.length,
      question_ids: entry.question_ids,
      randomize_questions: false,
      question_type: entry.question_type,
      marks_per_question: entry.marks_per_question,
      total_marks: entry.total_marks,
    }));
  }

  loadDepartments(instId?: string) {
    this.loader.show();
    if (!instId) {
      this.departments = [];
      return;
    }
    const url = `${API_BASE}/get-department-list`;
    this.http
      .get<any>(url, {
        params: { institute_id: instId },
        ...this.explicitInstituteRequestOptions(),
      })
      .subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.departments = arr.map((d: any) => ({
          id: String(d.dept_id || d.id || d.deptId || ''),
          name: d.name || d.dept_name || d.title || '',
        }));
        if (this.selectedDepartments && this.selectedDepartments.length) {
          const matched = this.selectedDepartments.map((sel) => {
            const match = this.departments.find(
              (d) =>
                String(d.id) === String(sel) ||
                d.name.trim().toLowerCase() === String(sel).trim().toLowerCase()
            );
            return match ? String(match.id) : String(sel);
          });
          this.selectedDepartments = [...matched];
        }
      },
      error: (err) => {
        console.warn('Failed to load departments', err);
        this.departments = [];
      },
      complete: () => {
        this.loader.hide();
      },
      });
  }

  loadTeams(instId?: string) {
    if (!instId) {
      this.teams = [];
      return;
    }
    const url = `${API_BASE}/get-teams-list`;
    this.http
      .get<any>(url, {
        params: { institute_id: instId },
        ...this.explicitInstituteRequestOptions(),
      })
      .subscribe({
      next: (res) => {
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.teams = arr.map((t: any) => ({
          id: String(t.team_id || t.id || t.teamId || ''),
          name: t.name || t.team_name || t.title || '',
          department_id: t.department_id || t.departmentId || t.dept_id || null,
          department_name: t.department_name || t.department || null,
        }));
        if (this.selectedTeams && this.selectedTeams.length) {
          const matched = this.selectedTeams.map((sel) => {
            const match = this.teams.find(
              (t) =>
                String(t.id) === String(sel) ||
                t.name.trim().toLowerCase() === String(sel).trim().toLowerCase()
            );
            return match ? String(match.id) : String(sel);
          });
          this.selectedTeams = [...matched];
        }
      },
      error: (err) => {
        console.warn('Failed to load teams', err);
        this.teams = [];
      },
      });
  }

  // ── User Assignment Overlay & Filter Methods ──

  openUserFiltersOverlay(): void {
    if (!this.userFiltersBtn) return;
    this.userFilterOpen = true;
    this.loadUserLocations();
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
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 8 },
        { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -8 },
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

    if (this.filtersPanelUserAnchorTpl) {
      const portal = new TemplatePortal(this.filtersPanelUserAnchorTpl, this.vcr);
      this.userFiltersOverlayRef.attach(portal);
    }
  }

  closeUserFiltersOverlay(): void {
    if (this.userFiltersOverlayRef) {
      try {
        this.userFiltersOverlayRef.dispose();
      } catch (e) {}
      this.userFiltersOverlayRef = null;
    }
    this.userFilterOpen = false;
  }

  private explicitInstituteRequestOptions(): { headers?: { [name: string]: string } } {
    return this.isSuperAdmin ? { headers: { 'X-Skip-Institute-Context': 'true' } } : {};
  }

  loadCampusList(instituteId: string): void {
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
          id: String(c.campus_id || c.id || ''),
          name: String(c.name || c.campus_name || c.campus || c || ''),
          country_id: String(c.country?.country_id || c.country_id || ''),
          country_name: String(c.country?.country_name || c.country_name || ''),
          city_id: String(c.city?.city_id || c.city_id || ''),
          city_name: String(c.city?.city_name || c.city_name || ''),
        }));
      },
      error: () => {
        this.userCampuses = [];
      },
    });
  }

  loadUserLocations(): void {
    const instId = this.institute;
    if (!instId) {
      this.superAdminUserCountries = [];
      this.superAdminUserCities = [];
      this.assignableUserCount = null;
      return;
    }
    const params: any = {
      pageSize: 10000,
      pageNumber: 1,
      institute_id: instId,
      active_status: 'true',
      _ts: Date.now(),
    };
    this.http
      .get<any>(`${API_BASE}/get-users`, {
        params,
        ...this.explicitInstituteRequestOptions(),
      })
      .subscribe({
      next: (res) => {
        try {
          const dataCandidate = res?.data?.users ?? res?.users ?? res?.data ?? res;
          const users = Array.isArray(dataCandidate) ? dataCandidate : [];
          this.assignableUserCount = users.length;
          const uniqueCountries = new Map<string, { code: string; name: string }>();
          const uniqueCities = new Map<
            string,
            { code: string; name: string; countryCode: string; campusId?: string }
          >();

          users.forEach((user: any) => {
            const countryCode = String(
              user?.country?.country_id ||
                user?.country_id ||
                user?.country?.country_name ||
                user?.country_name ||
                ''
            ).trim();
            const countryName = String(
              user?.country?.country_name ||
                user?.country_name ||
                user?.country?.country_id ||
                user?.country_id ||
                ''
            ).trim();
            const cityCode = String(
              user?.city?.city_id || user?.city_id || user?.city?.city_name || user?.city_name || ''
            ).trim();
            const cityName = String(
              user?.city?.city_name || user?.city_name || user?.city?.city_id || user?.city_id || ''
            ).trim();
            const campusId = String(user?.campus_id || user?.campus?.campus_id || '').trim();

            if (countryCode && countryName && !uniqueCountries.has(countryCode.toLowerCase())) {
              uniqueCountries.set(countryCode.toLowerCase(), {
                code: countryCode,
                name: countryName,
              });
            }

            if (countryCode && cityName) {
              const cityKey = `${countryCode.toLowerCase()}|${cityName.toLowerCase()}`;
              if (!uniqueCities.has(cityKey)) {
                uniqueCities.set(cityKey, {
                  code: cityCode || cityName,
                  name: cityName,
                  countryCode: countryCode,
                  campusId: campusId,
                });
              }
            }
          });

          (this.userCampuses || []).forEach((c) => {
            if (
              c.country_id &&
              c.country_name &&
              !uniqueCountries.has(c.country_id.toLowerCase())
            ) {
              uniqueCountries.set(c.country_id.toLowerCase(), {
                code: c.country_id,
                name: c.country_name,
              });
            }
            if (c.city_name && (c.country_id || c.country_name)) {
              const cCode = c.country_id || c.country_name || '';
              const cityKey = `${cCode.toLowerCase()}|${c.city_name.toLowerCase()}`;
              if (!uniqueCities.has(cityKey)) {
                uniqueCities.set(cityKey, {
                  code: c.city_id || c.city_name,
                  name: c.city_name,
                  countryCode: cCode,
                  campusId: c.id,
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
        } catch (e) {
          this.superAdminUserCountries = [];
          this.superAdminUserCities = [];
          this.assignableUserCount = null;
        }
      },
      error: () => {
        this.superAdminUserCountries = [];
        this.superAdminUserCities = [];
        this.assignableUserCount = null;
      },
      });
  }

  // ── Country Filter ──
  get filteredUserCountriesForFilter(): Array<{ code: string; name: string }> {
    const term = (this.userCountrySearch || '').trim().toLowerCase();
    let list = this.superAdminUserCountries || [];
    if (term) {
      list = list.filter((c) => (c.name || '').toLowerCase().includes(term));
    }
    return [...list].sort((a, b) => {
      const aSel = this.selectedUserCountries.includes(a.code);
      const bSel = this.selectedUserCountries.includes(b.code);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllUserCountriesSelected(): boolean {
    const items = this.filteredUserCountriesForFilter || [];
    return items.length > 0 && items.every((c) => this.selectedUserCountries.includes(c.code));
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

  onUserCountryChange(): void {
    this.markUserFiltersDirty();
    const validCityNames = new Set((this.filteredUserCitiesForFilter || []).map((c) => c.name));
    this.selectedUserCities = (this.selectedUserCities || []).filter((name) =>
      validCityNames.has(name)
    );
    this.pruneSelectedUserCampuses();
  }

  onUserCityChange(): void {
    this.markUserFiltersDirty();
    this.pruneSelectedUserCampuses();
  }

  // ── City Filter ──
  get filteredUserCitiesForFilter(): Array<{ code: string; name: string }> {
    const term = (this.userCitySearch || '').trim().toLowerCase();
    let list = this.superAdminUserCities || [];
    if (this.selectedUserCountries && this.selectedUserCountries.length > 0) {
      const selectedCodes = this.selectedUserCountries.map((c) => c.toLowerCase());
      list = list.filter((city) => selectedCodes.includes(String(city.countryCode).toLowerCase()));
    }
    if (term) {
      list = list.filter((c) => (c.name || '').toLowerCase().includes(term));
    }
    return [...list].sort((a, b) => {
      const aSel = this.selectedUserCities.includes(a.name);
      const bSel = this.selectedUserCities.includes(b.name);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllUserCitiesSelected(): boolean {
    const items = this.filteredUserCitiesForFilter || [];
    return items.length > 0 && items.every((c) => this.selectedUserCities.includes(c.name));
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

  // ── Department Filter ──
  get filteredUserDepartmentsForFilter(): Array<{ id: string; name: string }> {
    const term = (this.userDepartmentSearch || '').trim().toLowerCase();
    let list = this.departments || [];
    if (term) {
      list = list.filter((d) => (d.name || '').toLowerCase().includes(term));
    }
    return [...list].sort((a, b) => {
      const aSel = this.selectedUserDepartments.includes(String(a.id));
      const bSel = this.selectedUserDepartments.includes(String(b.id));
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllUserDepartmentsSelected(): boolean {
    const items = this.filteredUserDepartmentsForFilter || [];
    return (
      items.length > 0 && items.every((d) => this.selectedUserDepartments.includes(String(d.id)))
    );
  }

  toggleSelectAllUserDepartments(): void {
    const items = this.filteredUserDepartmentsForFilter || [];
    if (this.isAllUserDepartmentsSelected()) {
      this.selectedUserDepartments = [];
    } else {
      this.selectedUserDepartments = items.map((d) => String(d.id));
    }
    this.onUserDepartmentChange();
  }

  onUserDepartmentChange(): void {
    this.markUserFiltersDirty();
    const validTeamIds = new Set(
      (this.filteredUserTeamsForFilter || []).map((team) => String(team.id))
    );
    this.selectedUserTeams = (this.selectedUserTeams || []).filter((id) =>
      validTeamIds.has(String(id))
    );
  }

  // ── Team Filter ──
  get filteredUserTeamsForFilter(): Array<{
    id: string;
    name: string;
    department_id?: string | null;
  }> {
    const term = (this.userTeamSearch || '').trim().toLowerCase();
    let list = this.teams || [];

    if (this.selectedUserDepartments && this.selectedUserDepartments.length > 0) {
      const selDeptIds = this.selectedUserDepartments.map(String);
      const selDeptNames = (this.departments || [])
        .filter((d) => selDeptIds.includes(String(d.id)))
        .map((d) => (d.name || '').toLowerCase().trim());

      list = list.filter((t: any) => {
        const teamDeptId = t.department_id ? String(t.department_id) : '';
        const teamDeptName = t.department_name
          ? String(t.department_name).toLowerCase().trim()
          : '';
        if (teamDeptId && selDeptIds.includes(teamDeptId)) return true;
        if (teamDeptName && selDeptNames.includes(teamDeptName)) return true;
        return false;
      });
    }

    if (term) {
      list = list.filter((t) => (t.name || '').toLowerCase().includes(term));
    }
    return [...list].sort((a, b) => {
      const aSel = this.selectedUserTeams.includes(String(a.id));
      const bSel = this.selectedUserTeams.includes(String(b.id));
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllUserTeamsSelected(): boolean {
    const items = this.filteredUserTeamsForFilter || [];
    return items.length > 0 && items.every((t) => this.selectedUserTeams.includes(String(t.id)));
  }

  toggleSelectAllUserTeams(): void {
    const items = this.filteredUserTeamsForFilter || [];
    if (this.isAllUserTeamsSelected()) {
      this.selectedUserTeams = [];
    } else {
      this.selectedUserTeams = items.map((t) => String(t.id));
    }
    this.markUserFiltersDirty();
  }

  // ── Campus Filter ──
  get filteredUserCampusesForFilter(): Array<{ id: string; name: string }> {
    const term = (this.userCampusSearch || '').trim().toLowerCase();
    let list = this.userCampuses || [];
    if (this.selectedUserCountries && this.selectedUserCountries.length > 0) {
      const selectedCodes = this.selectedUserCountries.map((c) => c.toLowerCase());
      list = list.filter((c) =>
        selectedCodes.some(
          (sc) =>
            sc === String(c.country_id || '').toLowerCase() ||
            sc === String(c.country_name || '').toLowerCase()
        )
      );
    }
    if (this.selectedUserCities && this.selectedUserCities.length > 0) {
      const selectedCityNames = this.selectedUserCities.map((ct) => ct.toLowerCase());
      list = list.filter((c) =>
        selectedCityNames.some(
          (sc) =>
            sc === String(c.city_id || '').toLowerCase() ||
            sc === String(c.city_name || '').toLowerCase()
        )
      );
    }
    if (term) {
      list = list.filter((c) => (c.name || '').toLowerCase().includes(term));
    }
    return [...list].sort((a, b) => {
      const aSel = this.selectedUserCampuses.includes(String(a.id));
      const bSel = this.selectedUserCampuses.includes(String(b.id));
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllUserCampusesSelected(): boolean {
    const items = this.filteredUserCampusesForFilter || [];
    return items.length > 0 && items.every((c) => this.selectedUserCampuses.includes(String(c.id)));
  }

  toggleSelectAllUserCampuses(): void {
    const items = this.filteredUserCampusesForFilter || [];
    if (this.isAllUserCampusesSelected()) {
      this.selectedUserCampuses = [];
    } else {
      this.selectedUserCampuses = items.map((c) => String(c.id));
    }
    this.markUserFiltersDirty();
  }

  private pruneSelectedUserCampuses(): void {
    const validCampusIds = new Set(
      (this.filteredUserCampusesForFilter || []).map((campus) => String(campus.id))
    );
    this.selectedUserCampuses = (this.selectedUserCampuses || []).filter((id) =>
      validCampusIds.has(String(id))
    );
  }

  // ── Date Range Dialog ──
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
        this.markUserFiltersDirty();
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

  private formatFilterDate(date: Date | null): string {
    if (!date) return '';
    const d = new Date(date);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  // ── Filter Chips ──
  get hasUserFilterValues(): boolean {
    return (
      (this.selectedUserCountries && this.selectedUserCountries.length > 0) ||
      (this.selectedUserCities && this.selectedUserCities.length > 0) ||
      (this.selectedUserCampuses && this.selectedUserCampuses.length > 0) ||
      (this.selectedUserDepartments && this.selectedUserDepartments.length > 0) ||
      (this.selectedUserTeams && this.selectedUserTeams.length > 0) ||
      !!this.userFilters.joined_after ||
      !!this.userFilters.joined_before
    );
  }

  get hasAppliedUserFilters(): boolean {
    return (
      (this.userFiltersApplied && this.hasUserFilterValues) ||
      this.paperUsers.length > 0 ||
      this.selectedPaperUsers.length > 0
    );
  }

  get appliedUserFilterChips(): Array<{ key: string; label: string }> {
    if (!this.hasAppliedUserFilters) return [];
    const chips: Array<{ key: string; label: string }> = [];

    if (this.selectedUserCountries && this.selectedUserCountries.length) {
      const labels = this.selectedUserCountries
        .map(
          (code) =>
            this.superAdminUserCountries.find((c) => String(c.code) === String(code))?.name || code
        )
        .filter(Boolean);
      chips.push({ key: 'country', label: `Country: ${labels.join(', ')}` });
    }

    if (this.selectedUserCities && this.selectedUserCities.length) {
      chips.push({ key: 'city', label: `City: ${this.selectedUserCities.join(', ')}` });
    }

    if (this.selectedUserDepartments && this.selectedUserDepartments.length) {
      const labels = this.selectedUserDepartments
        .map((id) => this.departments.find((d) => String(d.id) === String(id))?.name || id)
        .filter(Boolean);
      chips.push({
        key: 'department',
        label: `${this.terminology.deptPluralLabel || this.terminology.deptPlural || 'Departments'}: ${labels.join(', ')}`,
      });
    }

    if (this.selectedUserTeams && this.selectedUserTeams.length) {
      const labels = this.selectedUserTeams
        .map((id) => this.teams.find((t) => String(t.id) === String(id))?.name || id)
        .filter(Boolean);
      chips.push({
        key: 'team',
        label: `${this.terminology.teamPluralLabel || this.terminology.teamPlural || 'Teams'}: ${labels.join(', ')}`,
      });
    }

    if (this.selectedUserCampuses && this.selectedUserCampuses.length) {
      const labels = this.selectedUserCampuses
        .map((id) => this.userCampuses.find((c) => String(c.id) === String(id))?.name || id)
        .filter(Boolean);
      chips.push({ key: 'campus', label: `Campus: ${labels.join(', ')}` });
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
      this.onUserCountryChange();
    }
    if (key === 'city') {
      this.selectedUserCities = [];
    }
    if (key === 'campus') {
      this.selectedUserCampuses = [];
    }
    if (key === 'department') {
      this.selectedUserDepartments = [];
    }
    if (key === 'team') {
      this.selectedUserTeams = [];
    }
    if (key === 'joined_date') {
      this.userFilters.joined_after = null;
      this.userFilters.joined_before = null;
    }
    if (this.hasUserFilterValues) {
      this.userFiltersApplied = true;
      this.loadUsers();
    } else {
      this.userFiltersApplied = false;
      this.userLoadSeq++;
      this.paperUsers = [];
      this.loadingPaperUsers = false;
    }
  }

  clearUserFilters(): void {
    this.userLoadSeq++;
    this.userFiltersApplied = false;
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
      joined_after: null,
      joined_before: null,
    };
    this.paperUsers = [];
    this.paperUsersLoadError = '';
    this.loadingPaperUsers = false;
  }

  resetUserFilters(): void {
    this.clearUserFilters();
  }

  markUserFiltersDirty(): void {
    if (!this.userFiltersApplied && !this.loadingPaperUsers && this.paperUsers.length === 0) return;
    this.userLoadSeq++;
    this.userFiltersApplied = false;
    this.loadingPaperUsers = false;
    this.paperUsers = [];
    this.paperUsersLoadError = '';
    this.assignmentUserSearch = '';
  }

  applyUserFilters(): void {
    if (!this.institute || !this.hasUserFilterValues) return;
    this.userFiltersApplied = true;
    this.loadUsers();
    this.closeUserFiltersOverlay();
  }

  // ── Load Users from backend ──
  loadUsers(): void {
    if (!this.institute || !this.hasAppliedUserFilters) {
      this.userLoadSeq++;
      this.paperUsers = [];
      this.paperUsersLoadError = '';
      this.loadingPaperUsers = false;
      return;
    }
    const requestSeq = ++this.userLoadSeq;
    this.loadingPaperUsers = true;
    this.paperUsersLoadError = '';
    const url = `${API_BASE}/get-users`;
    const params: any = {
      pageSize: 10000,
      pageNumber: 1,
      institute_id: this.institute,
      active_status: 'true',
      _ts: Date.now(),
    };

    if (this.selectedUserDepartments && this.selectedUserDepartments.length) {
      params.department = this.selectedUserDepartments.join(',');
    }
    if (this.selectedUserTeams && this.selectedUserTeams.length) {
      params.team = this.selectedUserTeams.join(',');
    }
    if (this.selectedUserCountries && this.selectedUserCountries.length) {
      params.country = this.selectedUserCountries.join(',');
    }
    if (this.selectedUserCities && this.selectedUserCities.length) {
      params.city = this.selectedUserCities.join(',');
    }
    if (this.selectedUserCampuses && this.selectedUserCampuses.length) {
      params.campus = this.selectedUserCampuses.join(',');
    }
    if (this.userFilters.joined_after) {
      params.joined_after = this.formatFilterDate(this.userFilters.joined_after);
    }
    if (this.userFilters.joined_before) {
      params.joined_before = this.formatFilterDate(this.userFilters.joined_before);
    }

    this.http
      .get<any>(url, {
        params,
        ...this.explicitInstituteRequestOptions(),
      })
      .subscribe({
      next: (res) => {
        if (requestSeq !== this.userLoadSeq || !this.hasAppliedUserFilters) return;
        if (res?.status === false || res?.status === 'false') {
          this.paperUsers = [];
          this.paperUsersLoadError =
            res?.statusMessage || res?.message || 'Unable to load users for the selected filters.';
          this.loadingPaperUsers = false;
          return;
        }
        const dataCandidate = res?.data?.users ?? res?.users ?? res?.data ?? res;
        const data = Array.isArray(dataCandidate) ? dataCandidate : [];
        const fetched = data
          .map((u: any) => ({
            id: String(u.user_id || u.id || ''),
            name:
              u.full_name ||
              u.user_name ||
              u.name ||
              `${u.first_name || ''} ${u.last_name || ''}`.trim() ||
              u.email,
            email: u.email || '',
            department:
              (u.department && (u.department.department_name || u.department.name)) ||
              u.department_name ||
              '',
            team: (u.team && (u.team.team_name || u.team.name)) || u.team_name || '',
            campus: (u.campus && (u.campus.campus_name || u.campus.name)) || u.campus_name || '',
            departmentId: String(u.department?.department_id || u.department_id || ''),
            teamId: String(u.team?.team_id || u.team_id || ''),
          }))
          .filter((u: any) => !!u.id);

        this.paperUsers = fetched;
        if (this.assignableUserCount === null && fetched.length > 0) {
          this.assignableUserCount = fetched.length;
        }
        this.paperUsersLoadError = '';
        this.loadingPaperUsers = false;
      },
      error: (err) => {
        if (requestSeq !== this.userLoadSeq) return;
        console.warn('Failed to load users for assignment', err);
        this.paperUsers = [];
        this.paperUsersLoadError =
          err?.error?.statusMessage ||
          err?.error?.message ||
          err?.message ||
          'Unable to load users. Please check your connection and try again.';
        this.loadingPaperUsers = false;
      },
      });
  }

  get filteredPaperUsers() {
    const term = (this.assignmentUserSearch || '').trim().toLowerCase();
    if (!term) return this.paperUsers;
    return this.paperUsers.filter((user) => {
      return (
        (user.name || '').toLowerCase().includes(term) ||
        (user.email || '').toLowerCase().includes(term) ||
        (user.department || '').toLowerCase().includes(term) ||
        (user.team || '').toLowerCase().includes(term) ||
        (user.campus || '').toLowerCase().includes(term)
      );
    });
  }

  get areAllVisiblePaperUsersSelected(): boolean {
    return (
      this.filteredPaperUsers.length > 0 &&
      this.filteredPaperUsers.every((user) => this.selectedPaperUsers.includes(user.id))
    );
  }

  get areSomeVisiblePaperUsersSelected(): boolean {
    const selectedCount = this.filteredPaperUsers.filter((user) =>
      this.selectedPaperUsers.includes(user.id)
    ).length;
    return selectedCount > 0 && selectedCount < this.filteredPaperUsers.length;
  }

  togglePaperUser(userId: string, checked: boolean): void {
    const id = String(userId);
    if (checked && !this.selectedPaperUsers.includes(id)) {
      this.selectedPaperUsers = [...this.selectedPaperUsers, id];
      this.markDirty();
    } else if (!checked) {
      this.selectedPaperUsers = this.selectedPaperUsers.filter((selectedId) => selectedId !== id);
      this.markDirty();
    }
  }

  toggleAllVisiblePaperUsers(checked: boolean): void {
    const visibleIds = this.filteredPaperUsers.map((user) => user.id);
    if (checked) {
      this.selectedPaperUsers = Array.from(new Set([...this.selectedPaperUsers, ...visibleIds]));
    } else {
      const visibleSet = new Set(visibleIds);
      this.selectedPaperUsers = this.selectedPaperUsers.filter((id) => !visibleSet.has(id));
    }
    this.markDirty();
  }

  trackPaperUserById(_: number, user: { id: string }): string {
    return user.id;
  }

  onCategoryChange(catId: string) {
    const found = (this.categories || []).find((c) => String(c.category_id) === String(catId));
    if (found) this.loadQuestionBankDraft(found);
  }

  viewCategoryQuestions(category: any) {
    if (!category || !category.category_id) return;
    if (
      String(category.category_id) === String(this.activeQuestionCategoryId) &&
      this.questionsForCategory.length
    ) {
      this.activeQuestionCategoryId = '';
      this.activeQuestionCategoryName = '';
      this.questionsForCategory = [];
      this.selectedQuestionIds = [];
      this.selectAllQuestions = false;
      return;
    }
    this.activeQuestionCategoryId = category.category_id;
    this.activeQuestionCategoryName = category.name || 'Selected category';
    this.loadQuestionsForCategory(
      category.category_id,
      Array.isArray(category.question_ids) ? category.question_ids : []
    );
  }

  isCategoryQuestionsExpanded(category: any): boolean {
    return (
      !!category &&
      String(category.category_id) === String(this.activeQuestionCategoryId) &&
      this.questionsForCategory.length > 0
    );
  }

  loadQuestionsForCategory(
    catId: string,
    preselectedQuestionIds: any[] = [],
    populateQuestionCount = false
  ) {
    this.loader.show();
    const requestSeq = ++this.questionLoadSeq;
    this.questionsForCategory = [];
    this.selectedQuestionIds = (preselectedQuestionIds || []).map((id) => String(id));
    this.selectAllQuestions = false;
    if (!catId) {
      this.loader.hide();
      return;
    }
    const found = this.categories.find((c) => String(c.category_id) === String(catId));
    this.activeQuestionCategoryId = catId;
    this.activeQuestionCategoryName =
      found?.name || this.activeQuestionCategoryName || 'Selected category';
    const url = `${API_BASE}/get-questions-details?category_id=${encodeURIComponent(catId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (requestSeq !== this.questionLoadSeq) return;
        const arr = Array.isArray(res) ? res : res?.data || [];
        this.questionsForCategory = arr.map((q: any, i: number) => ({
          id: q.id || q.question_id || q._id || String(i),
          question: q.question || q.text || q.title || '',
          raw: q,
        }));
        if (populateQuestionCount) {
          this.newCategory.questions = this.questionsForCategory.length;
          this.newCategory.randomize_questions = true;
          this.selectedQuestionIds = [];
          this.selectAllQuestions = false;
          this.validateNewCategoryQuestionCount(false);
          return;
        }
        this.selectAllQuestions =
          this.questionsForCategory.length > 0 &&
          this.questionsForCategory.every((q) => this.selectedQuestionIds.includes(String(q.id)));
        this.lastAddedQuestionSelectionByCategory[String(catId)] = this.getQuestionSelectionKey(
          this.selectedQuestionIds
        );
      },
      error: (err) => {
        if (requestSeq !== this.questionLoadSeq) return;
        console.warn('Failed to load questions for category', err);
        this.questionsForCategory = [];
        if (populateQuestionCount) {
          this.newCategory.questions = 0;
          this.selectedQuestionIds = [];
          this.questionCountError = 'Unable to load questions for the selected Question Bank.';
        }
      },
      complete: () => {
        if (requestSeq === this.questionLoadSeq) this.loader.hide();
      },
    });
  }

  onNewCategoryQuestionCountChange(value: any) {
    this.newCategory.questions = Number(value) || 0;
    this.validateNewCategoryQuestionCount(false);
  }

  stripLeadingZeros(event: Event) {
    const input = event.target as HTMLInputElement;
    const raw = input.value;
    if (raw.length > 1 && raw.startsWith('0')) {
      input.value = String(parseInt(raw, 10) || '');
    }
  }

  onNewCategoryRandomizeChange(checked: boolean) {
    this.newCategory.randomize_questions = !!checked;
    this.questionCountError = '';
    // When checking "Include Questions Randomly", deselect all manually selected questions
    // before random selection mode is activated
    if (checked) {
      this.selectedQuestionIds = [];
      this.selectAllQuestions = false;
    }
    // When unchecking "Include Questions Randomly", deselect all previously selected questions
    if (!checked) {
      this.selectedQuestionIds = [];
      this.selectAllQuestions = false;
    }
    this.validateNewCategoryQuestionCount(false);
  }

  get selectedQuestionBankQuestionCount(): number {
    if (!this.selectedCategory) return 0;
    return this.tempQuestionsForCategory.length;
  }

  get canAddSelectedQuestionBank(): boolean {
    const available = this.selectedQuestionBankQuestionCount;
    const requested = Number(this.newCategory.questions) || 0;
    return !!this.selectedCategory && available > 0 && requested >= 1 && requested <= available;
  }

  get canAddSelectedQuestionBankQuestions(): boolean {
    if (!this.activeQuestionCategoryId) return false;
    const isFocused = String(this.activeQuestionCategoryId) === String(this.selectedCategory);
    if (isFocused) {
      if (!this.canAddSelectedQuestionBank) return false;
      if (this.newCategory.randomize_questions)
        return !this.shouldBlockRandomAllQuestionSelection();
      // Fixed (non-randomized) mode: a valid count alone is enough — the system will
      // randomly pick that many questions once. Manual picks are still supported and,
      // when present, must differ from what was last added to re-enable the button.
      if (!this.selectedQuestionIds.length) return true;
      const categoryId = String(this.activeQuestionCategoryId);
      return (
        this.getQuestionSelectionKey(this.selectedQuestionIds) !==
        this.lastAddedQuestionSelectionByCategory[categoryId]
      );
    }
    if (!this.questionsForCategory.length || !this.selectedQuestionIds.length) return false;
    const categoryId = String(this.activeQuestionCategoryId);
    return (
      this.getQuestionSelectionKey(this.selectedQuestionIds) !==
      this.lastAddedQuestionSelectionByCategory[categoryId]
    );
  }

  private getQuestionSelectionKey(ids: any[]): string {
    return (ids || [])
      .map((id) => String(id))
      .sort()
      .join('|');
  }

  isNewCategoryQuestionCountValid(): boolean {
    return this.canAddSelectedQuestionBank;
  }

  private validateNewCategoryQuestionCount(
    showNotification: boolean,
    updateMessage = true
  ): boolean {
    const available = this.selectedQuestionBankQuestionCount;
    const requested = Number(this.newCategory.questions) || 0;
    const maxMessage = `The selected Question Bank contains only ${available} questions. Please enter a number between 1 and ${available}.`;
    const minMessage =
      available > 0
        ? `Please enter a number between 1 and ${available}.`
        : 'The selected Question Bank does not contain any questions.';
    const allRandomMessage = `You have selected all available questions. Random selection has no effect because every student will receive the same questions.`;
    let message = '';

    if (!this.selectedCategory) message = '';
    else if (available <= 0) message = minMessage;
    else if (requested < 1) message = minMessage;
    else if (requested > available) message = maxMessage;
    else if (this.newCategory.randomize_questions && requested === available)
      message = allRandomMessage;
    // Validate that manually selected questions match the specified count
    // (only when not randomized and the user has started selecting questions)
    else if (
      !this.newCategory.randomize_questions &&
      this.selectedQuestionIds.length > 0 &&
      this.selectedQuestionIds.length !== requested
    ) {
      const remaining = requested - this.selectedQuestionIds.length;
      if (remaining > 0) {
        message = `You have specified ${requested} questions to be included. Please select ${remaining} more question${remaining !== 1 ? 's' : ''} to continue.`;
      } else {
        const excess = this.selectedQuestionIds.length - requested;
        message = `You have specified ${requested} questions to be included, but selected ${this.selectedQuestionIds.length}. Please deselect ${excess} question${excess !== 1 ? 's' : ''} to continue.`;
      }
    }

    if (updateMessage) this.questionCountError = message;
    if (message && showNotification && message !== allRandomMessage) notify(message, 'error');
    return !message;
  }

  private shouldBlockRandomAllQuestionSelection(): boolean {
    return false;
  }

  private getDraftQuestionIds(): string[] {
    if (this.newCategory.randomize_questions) return [];
    const requested = Number(this.newCategory.questions) || 0;
    return this.tempQuestionsForCategory.slice(0, requested).map((q) => String(q.id));
  }

  private applyNewCategoryQuestionCountSelection(
    showNotification: boolean,
    updateMessage = true
  ): boolean {
    return this.validateNewCategoryQuestionCount(showNotification, updateMessage);
  }

  isActiveQuestionBankRandomized(): boolean {
    if (String(this.activeQuestionCategoryId || '') === String(this.selectedCategory || ''))
      return !!this.newCategory.randomize_questions;
    const activeCategory = (this.model.categories || []).find(
      (c: any) => String(c.category_id) === String(this.activeQuestionCategoryId)
    );
    return !!activeCategory?.randomize_questions;
  }
  toggleSelectAllQuestions(checked: boolean) {
    this.selectAllQuestions = !!checked;
    if (this.selectAllQuestions)
      this.selectedQuestionIds = this.questionsForCategory.map((q) => String(q.id));
    else this.selectedQuestionIds = [];
    this.syncActiveCategoryQuestionSelection();
    this.validateNewCategoryQuestionCount(false);
  }

  toggleQuestionSelection(id: string, checked: boolean) {
    const sid = String(id);
    if (checked) {
      if (this.selectedQuestionIds.indexOf(sid) === -1) this.selectedQuestionIds.push(sid);
    } else {
      this.selectedQuestionIds = this.selectedQuestionIds.filter((x) => x !== sid);
      this.selectAllQuestions = false;
    }
    if (checked)
      this.selectAllQuestions =
        this.questionsForCategory.length > 0 &&
        this.questionsForCategory.every((q) => this.selectedQuestionIds.includes(String(q.id)));
    this.syncActiveCategoryQuestionSelection();
    this.validateNewCategoryQuestionCount(false);
  }

  private syncActiveCategoryQuestionSelection() {
    if (!this.activeQuestionCategoryId || !Array.isArray(this.model.categories)) return;
    const idx = this.model.categories.findIndex(
      (c: any) => String(c.category_id) === String(this.activeQuestionCategoryId)
    );
    if (idx < 0) return;
    if ((this.model.categories[idx] as any).randomize_questions) return;
    const updated = {
      ...this.model.categories[idx],
      question_ids: [...this.selectedQuestionIds],
      questions: this.selectedQuestionIds.length,
      total_marks: this.calculateTotalMarks(
        this.selectedQuestionIds.length,
        this.getMarksPerQuestion(this.model.categories[idx])
      ),
    };
    this.model.categories = this.model.categories.map((c, i) => (i === idx ? updated : c));
  }

  // Returns true if any category in the model has randomize_questions truthy

  isQuestionBankOptionChecked(cat: any): boolean {
    const catId = String(cat?.category_id || '');
    if (!catId) return false;
    return (
      Array.isArray(this.model.categories) &&
      this.model.categories.some((c: any) => String(c?.category_id || '') === catId)
    );
  }
  anyCategoryRandomized(): boolean {
    try {
      if (!Array.isArray(this.model.categories)) return false;
      return this.model.categories.some((c: any) => !!c && !!c.randomize_questions);
    } catch (e) {
      return false;
    }
  }

  get totalQuestions(): number {
    if (!Array.isArray(this.model.categories)) return 0;
    return this.model.categories.reduce((sum, c) => {
      const byIds = Array.isArray((c as any).question_ids) ? (c as any).question_ids.length : 0;
      const byNum = typeof (c as any).questions === 'number' ? Number((c as any).questions) : 0;
      return sum + (byIds > 0 ? byIds : byNum);
    }, 0);
  }

  /** Return current user id from session storage if available */
  getCurrentUserId(): string | null {
    try {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      if (!raw) return null;
      const u = JSON.parse(raw);
      return u && (u.user_id || u.id || u.userId || u._id)
        ? String(u.user_id || u.id || u.userId || u._id)
        : null;
    } catch (e) {
      return null;
    }
  }

  private getExamSaveErrorMessage(err: any, fallback: string): string {
    const serverMessage = err?.error?.statusMessage || err?.error?.message || err?.message || '';
    const raw = typeof err?.error === 'string' ? err.error : JSON.stringify(err?.error || {});
    const combined = `${serverMessage} ${raw}`.toLowerCase();
    if (combined.includes('string or binary data would be truncated')) {
      return 'Could not save test. One of the fields is longer than the database allows. Please shorten the description and try again.';
    }
    return serverMessage || fallback;
  }

  onPassMarkInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value !== '') {
      let val = Number(input.value);
      if (val > 100) {
        input.value = '100';
        this.passMark = 100;
      } else if (val < 0) {
        input.value = '0';
        this.passMark = 0;
      }
    }
  }

  onPassMarkChange(value: any): void {
    if (value !== null && value !== undefined && value !== '') {
      const num = Number(value);
      if (num > 100) {
        this.passMark = 100;
      } else if (num < 0) {
        this.passMark = 0;
      }
    }
  }

  setAttempts(attempts: number): void {
    this.numberOfAttempts = attempts;
  }

  get canPublish(): boolean {
    if (this.readOnly || this.isPublished) return false;
    if (!this.title || !this.title.trim()) return false;
    if (!this.institute) return false;
    if (!this.subject_id) return false;
    if (this.durationMinutes === null || isNaN(Number(this.durationMinutes))) return false;
    if (!this.sections.length || this.totalPaperQuestionsCount === 0) return false;
    if (!this.selectedPaperUsers.length) return false;

    // Target total marks (default is 50 if override not set)
    const targetMarks =
      this.totalMarksOverride !== null &&
      this.totalMarksOverride !== undefined &&
      Number(this.totalMarksOverride) > 0
        ? Number(this.totalMarksOverride)
        : 50;

    // Validate if marks tally exactly
    if (this.totalPaperMarks !== targetMarks) {
      return false;
    }

    return true;
  }

  get publishDisabledReason(): string {
    if (this.readOnly || this.isPublished) return 'Question paper is in read-only mode';
    if (!this.title || !this.title.trim()) return 'Title is required to publish';
    if (!this.institute) return 'Institute is required to publish';
    if (!this.subject_id) return 'Subject is required to publish';
    if (this.durationMinutes === null || isNaN(Number(this.durationMinutes))) return 'Duration is required to publish';
    if (!this.sections.length || this.totalPaperQuestionsCount === 0) return 'Add at least one section with questions to publish';
    if (!this.selectedPaperUsers.length) return 'Assign at least one user to publish';

    const targetMarks =
      this.totalMarksOverride !== null &&
      this.totalMarksOverride !== undefined &&
      Number(this.totalMarksOverride) > 0
        ? Number(this.totalMarksOverride)
        : 50;

    if (this.totalPaperMarks !== targetMarks) {
      return `Section marks (${this.totalPaperMarks}) do not tally with Total Marks (${targetMarks})`;
    }
    return '';
  }

  save(publish: boolean = false) {
    if (publish && !this.canPublish) {
      notify(this.publishDisabledReason || 'Cannot publish: section marks do not tally or required details are missing.', 'error');
      return;
    }

    // basic validation
    if (!this.title || !this.title.trim()) {
      notify('Title is required', 'error');
      return;
    }
    if (!this.institute) {
      notify('Institute is required', 'error');
      return;
    }
    if (!this.subject_id) {
      notify('Subject is required', 'error');
      return;
    }
    if (this.durationMinutes === null || isNaN(Number(this.durationMinutes))) {
      notify('Duration is required', 'error');
      return;
    }
    if (
      this.passMark !== null &&
      this.passMark !== undefined &&
      (Number(this.passMark) < 0 || Number(this.passMark) > 100)
    ) {
      notify('Pass Percentage must be between 0 and 100', 'error');
      return;
    }
    if (!this.sections.length || this.totalPaperQuestionsCount === 0) {
      notify('Please add at least one section with questions before saving', 'error');
      return;
    }
    if (!this.selectedPaperUsers.length) {
      notify('Please select at least one user to assign this question paper.', 'error');
      return;
    }

    this.syncModelCategoriesFromSections();

    const currentUser = this.getCurrentUserId();
    const calcMarks = this.totalPaperMarks > 0 ? this.totalPaperMarks : null;
    const finalTotalMarks =
      this.totalMarksOverride !== null &&
      this.totalMarksOverride !== undefined &&
      Number(this.totalMarksOverride) >= 0
        ? Number(this.totalMarksOverride)
        : calcMarks;

    const shouldPublish = publish || this.isPublished;

    const payload: any = {
      test_mode: 'paper',
      title: String(this.title).trim(),
      total_marks: finalTotalMarks,
      description: this.description || null,
      institute_id: this.institute || null,
      subject_id: this.subject_id || null,
      subject_name: this.subject_name || null,
      duration_minutes: Number(this.durationMinutes),
      pass_mark: this.passMark !== null ? Number(this.passMark) : null,
      number_of_attempts: this.numberOfAttempts !== null ? Number(this.numberOfAttempts) : null,
      start_time: this.startDateTime || null,
      published: shouldPublish ? 1 : 0,
      departments: Array.isArray(this.selectedDepartments)
        ? this.selectedDepartments.filter((id) => id !== 'ALL')
        : [],
      teams: Array.isArray(this.selectedTeams)
        ? this.selectedTeams.filter((id) => id !== 'ALL')
        : [],
      assigned_user_ids: [...this.selectedPaperUsers],
      categories: Array.isArray(this.model.categories) ? this.model.categories : [],
      total_questions: this.totalPaperQuestionsCount,
      sections: this.sections.map((sec, idx) => ({
        section_id: sec.section_id || null,
        name: sec.name,
        sub_heading: sec.sub_heading || sec.instructions || '',
        instructions: sec.instructions || sec.sub_heading || '',
        question_type: sec.question_type,
        target_count: (sec as any).targetCount || null,
        order_number: idx + 1,
        questions: (sec.questions || []).map((q, qIdx) => ({
          question_id: q.id,
          category_id: q.category_id || null,
          order_number: qIdx + 1,
          marks: q.marks !== null && q.marks !== undefined ? Number(q.marks) : 1,
        })),
      })),
    };

    // attach audit fields when available
    if (currentUser) {
      if (this.editMode && this.editExamId) payload.updated_by = currentUser;
      else payload.created_by = currentUser;
    }

    const targetTab = shouldPublish ? 'published' : 'drafts';

    // If editing an existing exam, call update endpoint
    if (this.editMode && this.editExamId) {
      payload.exam_id = this.editExamId;
      this.loader.show();
      const url = `${API_BASE}/update-exam`;
      this.http.post<any>(url, payload).subscribe({
        next: (res) => {
          try {
            const defaultMsg = publish
              ? 'Question paper published successfully'
              : (this.isPublished
                  ? 'Question paper updated successfully'
                  : 'Question paper draft updated successfully');
            const msg = res?.statusMessage || res?.message || defaultMsg;
            const ok = typeof res?.status === 'undefined' ? true : !!res.status;
            notify(msg, ok ? 'success' : 'error');
          } catch (e) {}
          try {
            sessionStorage.setItem('question_papers_return_state', 'true');
            sessionStorage.removeItem('edit_exam');
          } catch (e) {}
          this.isSavedOrSubmitted = true;
          this.router.navigate(['/question-papers'], {
            queryParams: { tab: targetTab },
          });
        },
        error: (err) => {
          console.error('Failed to update exam', err);
          try {
            notify(this.getExamSaveErrorMessage(err, 'Failed to update exam'), 'error');
          } catch (e) {}
          this.loader.hide();
        },
        complete: () => {
          this.loader.hide();
        },
      });
      return;
    }

    const url = `${API_BASE}/register-exam`;
    this.loader.show();
    this.http.post<any>(url, payload).subscribe({
      next: (res) => {
        try {
          const defaultMsg = publish
            ? 'Question paper published successfully'
            : 'Question paper draft saved successfully';
          const msg = res?.statusMessage || res?.message || defaultMsg;
          const ok = typeof res?.status === 'undefined' ? true : !!res.status;
          notify(msg, ok ? 'success' : 'error');
        } catch (e) {}
        try {
          sessionStorage.setItem('question_papers_return_state', 'true');
          sessionStorage.removeItem('edit_exam');
        } catch (e) {}
        this.isSavedOrSubmitted = true;
        this.router.navigate(['/question-papers'], {
          queryParams: { tab: targetTab },
        });
      },
      error: (err) => {
        console.error('Failed to create exam', err);
        try {
          notify(this.getExamSaveErrorMessage(err, 'Failed to create exam'), 'error');
        } catch (e) {}
        this.loader.hide();
      },
      complete: () => {
        this.loader.hide();
      },
    });
  }

  reset() {
    this.loader.show();
    this.title = '';
    this.description = '';
    this.institute = '';
    this.subject_id = '';
    this.subject_name = '';
    this.sections = [];
    this.durationMinutes = null;
    this.passMark = null;
    this.startDateTime = '';
    // if not in edit mode, clear any leftover edit payload
    try {
      if (!this.editMode) sessionStorage.removeItem('edit_exam');
    } catch (e) {}
    this.loader.hide();
  }

  markDirty(): void {
    if (!this.readOnly && !this.isSavedOrSubmitted) {
      this.isDirty = true;
    }
  }

  hasUnsavedChanges(): boolean {
    if (this.readOnly || this.isSavedOrSubmitted) return false;
    return this.isDirty;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.readOnly || this.isSavedOrSubmitted || !this.hasUnsavedChanges()) {
      return true;
    }
    return new Observable<boolean>((observer) => {
      this.pendingDeactivateResolve = (allow: boolean) => {
        observer.next(allow);
        observer.complete();
      };
      this.showUnsavedChangesModal = true;
      this.cdr.detectChanges();
    });
  }

  confirmDiscardAndLeave(): void {
    this.showUnsavedChangesModal = false;
    this.isSavedOrSubmitted = true;
    if (this.pendingDeactivateResolve) {
      const resolve = this.pendingDeactivateResolve;
      this.pendingDeactivateResolve = null;
      resolve(true);
    } else {
      this.executeCancelNavigation();
    }
  }

  cancelDiscardModal(): void {
    this.showUnsavedChangesModal = false;
    if (this.pendingDeactivateResolve) {
      const resolve = this.pendingDeactivateResolve;
      this.pendingDeactivateResolve = null;
      resolve(false);
    }
  }

  goBack(): void {
    if (this.hasUnsavedChanges()) {
      this.showUnsavedChangesModal = true;
      this.cdr.detectChanges();
    } else {
      this.executeCancelNavigation();
    }
  }

  cancel(): void {
    this.goBack();
  }

  private executeCancelNavigation(): void {
    try {
      sessionStorage.removeItem('edit_exam');
      sessionStorage.setItem('question_papers_return_state', 'true');
    } catch (e) {}
    this.router.navigate(['/question-papers']);
  }

  @HostListener('window:beforeunload', ['$event'])
  warnBeforeUnload(event: BeforeUnloadEvent): void {
    if (this.hasUnsavedChanges()) {
      event.preventDefault();
      event.returnValue = '';
    }
  }

  get isStep1Valid(): boolean {
    return !!(
      this.title &&
      this.title.trim() &&
      this.institute &&
      this.subject_id &&
      this.durationMinutes &&
      this.selectedDepartments.length > 0 &&
      this.selectedTeams.length > 0
    );
  }

  validateStep1AndProceed() {
    // No-op in single-page mode — save() handles validation
  }

  getSelectedDepartmentsDisplay(): string {
    if (!this.selectedDepartments || !this.selectedDepartments.length) return '—';
    if (this.selectedDepartments.includes('ALL')) return 'All Departments';
    const names = this.departments
      .filter((d) => this.selectedDepartments.includes(d.id))
      .map((d) => d.name);
    return names.length ? names.join(', ') : `${this.selectedDepartments.length} selected`;
  }

  getSelectedTeamsDisplay(): string {
    if (!this.selectedTeams || !this.selectedTeams.length) return '—';
    if (this.selectedTeams.includes('ALL')) return 'All Teams';
    const names = this.teams.filter((t) => this.selectedTeams.includes(t.id)).map((t) => t.name);
    return names.length ? names.join(', ') : `${this.selectedTeams.length} selected`;
  }

  get instituteNameDisplay(): string {
    // 1. If this.institute is selected, look up in loaded institutes list
    if (this.institute) {
      const want = String(this.institute).trim().toLowerCase();
      if (this.institutes && this.institutes.length) {
        const found = this.institutes.find(
          (i) =>
            String(i.id).toLowerCase() === want || (i.name && i.name.trim().toLowerCase() === want)
        );
        if (found && found.name) return found.name;
      }
      // If this.institute is non-numeric (e.g. an actual name string)
      if (isNaN(Number(this.institute)) && this.institute.trim().length > 1) {
        return this.institute.trim();
      }
    }

    // 2. Fallback to logged-in user profile from session storage
    try {
      const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile');
      if (raw) {
        const u = JSON.parse(raw);
        const name =
          u?.institute_name ||
          (u?.institute && (u.institute.institute_name || u.institute.name)) ||
          u?.institute_short_name;
        if (name && typeof name === 'string' && name.trim()) {
          return name.trim();
        }
      }
    } catch (e) {}

    // 3. Fallback to direct 'institute' key in session storage
    const sessionInst = sessionStorage.getItem('institute');
    if (sessionInst && sessionInst.trim()) {
      return sessionInst.trim();
    }

    // 4. If single institute in loaded list, use its name
    if (this.institutes && this.institutes.length === 1 && this.institutes[0]?.name) {
      return this.institutes[0].name;
    }

    return 'INSTITUTE NAME';
  }

  get isStep2Valid(): boolean {
    return (
      this.sections.length > 0 && this.sections.some((s) => s.questions && s.questions.length > 0)
    );
  }

  validateStep2AndProceed() {
    // No-op in single-page mode
  }
}
