import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef, TemplateRef, ViewContainerRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Overlay, OverlayRef, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { AuthService } from 'src/app/home/service/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { API_BASE, resolveMediaUrl } from 'src/app/shared/api.config';
import { notify } from 'src/app/shared/global-notify';
import { Subscription, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getInstituteTerminology, InstituteTerminology } from 'src/app/shared/services/institute-terminology.service';
import { MathRenderComponent } from 'src/app/shared/components/math-render/math-render.component';
import * as pdfjsLib from 'pdfjs-dist';

if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.min.js';
}

export interface ScannedPageItem {
  id: string;
  pageNumber: number;
  status: 'scanned' | 'ready';
  dataUrl?: string;
  blob?: Blob;
  thumbnailUrl?: string;
  timestamp?: number;
}

export interface StudentEvaluation {
  sno: number;
  user_id?: string;
  name: string;
  rollNo: string;
  pagesInfo: string;
  missingPagesWarning?: string;
  status: 'Manual Reviewed' | 'Need to Check' | 'AI Evaluated' | 'Not Evaluated' | 'Completed' | 'evaluated' | 'Evaluating...' | 'Failed';
  marks: string;
  actionText: string;
  actionClass: string;
  scannedPagesData?: ScannedPageItem[];
  matchedFile?: string;
  matchedBy?: string;
  isMatched?: boolean;
  rawFile?: File;
  isUploaded?: boolean;
}

export interface BulkFileItem {
  id: number;
  fileName: string;
  studentName: string;
  matchedBy: string;
  isMatched: boolean;
  isScanning?: boolean;
  pagesInfo: string;
  isPageWarning?: boolean;
  aiStatus: 'Manual Reviewed' | 'Need to Check' | 'AI Evaluated' | 'Waiting' | 'Completed' | 'Evaluating...' | 'Failed';
  evaluation: string;
  actionText: string;
  actionClass: string;
  selectedStudent?: string;
  selectedUserId?: string;
  file?: File;
  isUploaded?: boolean;
}

@Component({
  selector: 'app-test-evaluation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    OverlayModule,
    PortalModule,
    MathRenderComponent,
  ],
  templateUrl: './test-evaluation.component.html',
  styleUrls: ['./test-evaluation.component.scss']
})
export class TestEvaluationComponent implements OnInit, OnDestroy {
  resolveMediaUrl = resolveMediaUrl;
  scannerVideoRef?: ElementRef<HTMLVideoElement>;
  private scannerVideoElement?: HTMLVideoElement;

  @ViewChild('scannerVideo') set scannerVideo(element: ElementRef<HTMLVideoElement> | undefined) {
    this.scannerVideoRef = element;
    this.scannerVideoElement = element?.nativeElement;
    if (this.scannerVideoElement && this.mediaStream && this.isCameraStreaming) {
      this.attachStreamToVideo();
    }
  }

  @ViewChild('filtersBtn') filtersBtn?: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;
  filtersOverlayRef: OverlayRef | null = null;

  instituteFilterSearch = '';
  deptFilterSearch = '';
  teamFilterSearch = '';
  subjectFilterSearch = '';
  testFilterSearch = '';

  get filteredInstitutesList() {
    const q = (this.instituteFilterSearch || '').toLowerCase().trim();
    if (!q) return this.institutes;
    return this.institutes.filter(i => i.name && i.name.toLowerCase().includes(q));
  }

  get filteredClassList() {
    const q = (this.deptFilterSearch || '').toLowerCase().trim();
    if (!q) return this.classList;
    return this.classList.filter(c => c.name && c.name.toLowerCase().includes(q));
  }

  get filteredSectionList() {
    const q = (this.teamFilterSearch || '').toLowerCase().trim();
    if (!q) return this.sectionList;
    return this.sectionList.filter(s => s.name && s.name.toLowerCase().includes(q));
  }

  get filteredSubjectList() {
    const q = (this.subjectFilterSearch || '').toLowerCase().trim();
    if (!q) return this.subjectList;
    return this.subjectList.filter(sub => sub.name && sub.name.toLowerCase().includes(q));
  }

  get filteredExamsList() {
    const q = (this.testFilterSearch || '').toLowerCase().trim();
    if (!q) return this.testList;
    return this.testList.filter(t => t.title && t.title.toLowerCase().includes(q));
  }

  // ─── Role & Institute State ───
  isSuperAdmin = false;
  loggedInstituteId = '';
  loggedInstituteName = '';
  selectedInstitute = '';
  institutes: Array<{ institute_id: string; name: string; industry_type?: string; industry?: string }> = [];

  get terminology(): InstituteTerminology {
    let industry = '';
    if (this.isSuperAdmin) {
      if (this.selectedInstitute) {
        const inst = this.institutes.find(i => String(i.institute_id) === String(this.selectedInstitute));
        industry = inst?.industry_type || inst?.industry || '';
      }
    } else {
      const u = this.auth.currentUserValue || JSON.parse(sessionStorage.getItem('user') || '{}');
      industry = u?.industry_type || u?.industry || '';
    }
    if (!industry && this.activeInstituteName) {
      const lower = this.activeInstituteName.toLowerCase();
      if (lower.includes('school')) industry = 'School';
      else if (lower.includes('college')) industry = 'College';
    }
    return getInstituteTerminology(industry);
  }

  // ─── Filter Selectors State ───
  selectedClass = 'ALL';
  selectedSection = 'ALL';
  selectedSubject = 'ALL';
  selectedExamId = '';

  classList: Array<{ id: string; name: string }> = [];
  allInstituteTeams: Array<{ id: string; name: string; department_id?: string | null; department_name?: string | null }> = [];
  sectionList: Array<{ id: string; name: string }> = [];
  subjectList: Array<{ id: string; name: string }> = [];
  allPublishedExams: Array<any> = [];
  testList: Array<{ exam_id: string; title: string }> = [];
  isLoadingExams = false;

  uploadTab: 'user' | 'bulk' = 'bulk';
  searchQuery = '';
  selectedStatus = 'All statuses';
  statusList = ['All statuses', 'AI Evaluated', 'Manual Reviewed', 'Need to Check', 'Not Evaluated'];

  // Test KPI Summary Data
  testDetails = {
    title: 'Select a published test',
    class: '—',
    section: '—',
    subject: '—',
    totalMarks: '0 marks',
    totalQuestions: '0 questions',
    totalStudents: 0,
    aiEvaluated: 0,
    manualReview: 0,
    needToCheck: 0,
    notEvaluated: 0
  };

  students: StudentEvaluation[] = [];
  filteredStudents: StudentEvaluation[] = [];

  // Bulk Upload File Data
  availableStudents: string[] = ['Choose student'];
  bulkFiles: BulkFileItem[] = [];

  // ─── Camera & Scanner State ───
  mediaStream: MediaStream | null = null;
  isCameraStreaming = false;
  cameraError = '';
  availableCameras: Array<{ id: string; label: string }> = [];
  selectedCameraId = '';
  scannedPages: ScannedPageItem[] = [];
  activeScanPageIndex = 0;
  isFlashing = false;
  selectedStudentForScan: StudentEvaluation | null = null;
  isScanModalOpen = false;

  // ─── Attach File Modal State ───
  isAttachModalOpen = false;
  selectedStudentForAttach: StudentEvaluation | null = null;
  selectedFilesList: Array<{ id: string; name: string; size: string; pages: string }> = [];
  uploadedRawFiles: File[] = [];
  isUploading = false;
  isAttachConfirmPopupOpen = false;
  pendingAttachStudent: StudentEvaluation | null = null;
  attachMode: 'replace' | 'add' = 'replace';

  // ─── Confirm Remove Modal State ───
  isConfirmRemoveModalOpen = false;
  studentToRemove: StudentEvaluation | null = null;
  isRemovingSheet = false;

  // ─── Split-View Evaluation State ───
  currentView: 'list' | 'evaluate' = 'list';
  splitMode: 'split' | 'viewer-expanded' | 'eval-expanded' = 'split';
  evaluatingStudent: StudentEvaluation | null = null;
  evaluationDetails: any = null;
  isLoadingEvaluation = false;
  activeSheetPageIndex = 0;
  zoomLevel = 100;

  // ── PDF.js Canvas State ──
  @ViewChild('pdfCanvas') pdfCanvasRef?: ElementRef<HTMLCanvasElement>;
  pdfDoc: any = null;
  currentLoadedPdfUrl = '';
  isRenderingPdfPage = false;
  private pdfRenderTask: any = null;

  // ── Drag & Pan (Hand Tool) for Answer Sheet ──
  isPanningSheet = false;
  panX = 0;
  panY = 0;
  private dragStartX = 0;
  private dragStartY = 0;
  evaluationCategoryFilter: 'all' | 'needs_attention' | 'reviewed' = 'all';
  aiConfidenceThreshold = 70;

  private authSubscription?: Subscription;

  // ── Bulk Evaluation Streaming & Bounded Queue State (Stage 3) ──
  isBulkEvaluating = false;
  activeBulkJobId: string | null = null;
  bulkProgress = {
    total: 0,
    completed: 0,
    failed: 0,
    percentage: 0,
    message: ''
  };
  private bulkEvalEventSource?: EventSource;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private loader: LoaderService,
    private pageMeta: PageMetaService,
    private cdr: ChangeDetectorRef,
    private overlay: Overlay,
    private vcr: ViewContainerRef
  ) {
    this.detectUserRole();
  }

  ngOnInit(): void {
    this.pageMeta.setMeta('Test Evaluation');
    this.loadAIConfidenceThreshold();
    this.initFilterCascade();
  }

  loadAIConfidenceThreshold(): void {
    this.http.get<any>(`${API_BASE}/settings/ai-confidence-threshold`).subscribe({
      next: (res) => {
        if (res && res.data && res.data.ai_confidence_threshold != null) {
          this.aiConfidenceThreshold = Number(res.data.ai_confidence_threshold);
        }
      },
      error: (err) => {
        console.warn('Could not load AI confidence threshold:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.stopCameraStream();
    if (this.bulkEvalEventSource) {
      this.bulkEvalEventSource.close();
      this.bulkEvalEventSource = undefined;
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    this.closeFiltersOverlay();
  }

  private detectUserRole(): void {
    try {
      const currentUser = this.auth.currentUserValue || JSON.parse(sessionStorage.getItem('user') || '{}');
      const role = (currentUser?.role || currentUser?.user_role || '').toLowerCase();
      this.isSuperAdmin = ['super_admin', 'superadmin', 'super-admin'].includes(role);
      this.loggedInstituteId = currentUser?.institute_id || currentUser?.institute || '';
      this.loggedInstituteName = currentUser?.institute_name || currentUser?.instituteName || 'My Institute';

      if (!this.isSuperAdmin && this.loggedInstituteId) {
        this.selectedInstitute = this.loggedInstituteId;
      }
    } catch (e) {
      this.isSuperAdmin = false;
    }

    this.authSubscription = this.auth.user$.subscribe((user: any) => {
      if (user) {
        const role = (user.role || user.user_role || '').toLowerCase();
        this.isSuperAdmin = ['super_admin', 'superadmin', 'super-admin'].includes(role);
        if (!this.isSuperAdmin && user.institute_id) {
          this.loggedInstituteId = user.institute_id;
          this.loggedInstituteName = user.institute_name || this.loggedInstituteName;
          this.selectedInstitute = this.loggedInstituteId;
        }
      }
    });
  }

  get activeInstituteId(): string {
    return this.isSuperAdmin ? this.selectedInstitute : this.loggedInstituteId;
  }

  get activeInstituteName(): string {
    if (this.isSuperAdmin) {
      const found = this.institutes.find((i) => String(i.institute_id) === String(this.selectedInstitute));
      return found ? found.name : '';
    }
    return this.loggedInstituteName || '';
  }

  get selectedExamTitle(): string {
    const found = this.testList.find((t) => t.exam_id === this.selectedExamId);
    return found ? found.title : (this.selectedExamId ? (this.testDetails.title || '') : '');
  }

  get selectedTest(): string {
    return this.selectedExamTitle;
  }

  get selectedClassName(): string {
    const c = this.classList.find(x => String(x.id) === String(this.selectedClass));
    return (c && c.id !== 'ALL') ? c.name : '';
  }

  get selectedSectionName(): string {
    const s = this.sectionList.find(x => String(x.id) === String(this.selectedSection));
    return (s && s.id !== 'ALL') ? s.name : '';
  }

  get selectedSubjectName(): string {
    const s = this.subjectList.find(x => String(x.id) === String(this.selectedSubject));
    return (s && s.id !== 'ALL') ? s.name : '';
  }

  get hasAppliedFilters(): boolean {
    return (
      (this.isSuperAdmin && !!this.selectedInstitute) ||
      (this.selectedClass && this.selectedClass !== 'ALL') ||
      (this.selectedSection && this.selectedSection !== 'ALL') ||
      (this.selectedSubject && this.selectedSubject !== 'ALL') ||
      !!this.selectedExamId ||
      (this.selectedStatus && this.selectedStatus !== 'All statuses') ||
      !!(this.searchQuery && this.searchQuery.trim()) ||
      this.bulkFiles.length > 0
    );
  }

  clearAppliedFilters(): void {
    this.selectedClass = 'ALL';
    this.selectedSection = 'ALL';
    this.selectedSubject = 'ALL';
    this.selectedExamId = '';
    this.searchQuery = '';
    this.selectedStatus = 'All statuses';
    this.bulkFiles = [];
    this.instituteFilterSearch = '';
    this.deptFilterSearch = '';
    this.teamFilterSearch = '';
    this.subjectFilterSearch = '';
    this.testFilterSearch = '';

    if (this.isSuperAdmin) {
      this.selectedInstitute = '';
      this.resetAllDependentDropdowns();
    } else {
      this.filterSectionList();
      this.applyExamFilters();
      this.filterStudents();
      this.resetTestDetails();
      this.recalculateKpiTotals();
    }

    if (this.currentView === 'evaluate') {
      this.closeStudentEvaluation();
    }
  }

  resetAllDependentDropdowns(): void {
    this.selectedClass = 'ALL';
    this.selectedSection = 'ALL';
    this.selectedSubject = 'ALL';
    this.selectedExamId = '';
    this.classList = [{ id: 'ALL', name: `All ${this.terminology.deptPlural}` }];
    this.sectionList = [{ id: 'ALL', name: `All ${this.terminology.teamPlural}` }];
    this.subjectList = [{ id: 'ALL', name: 'All Subjects' }];
    this.testList = [];
    this.allPublishedExams = [];
    this.allInstituteTeams = [];
    this.students = [];
    this.filteredStudents = [];
    this.bulkFiles = [];
    this.resetTestDetails();
    this.recalculateKpiTotals();
  }

  // ─── Filter Cascade Loading Logic ───
  initFilterCascade(): void {
    if (this.isSuperAdmin) {
      this.loadInstitutes();
    } else if (this.loggedInstituteId) {
      this.selectedInstitute = this.loggedInstituteId;
      this.onInstituteSelected(this.loggedInstituteId);
    }
  }

  loadInstitutes(): void {
    this.http.get<any>(`${API_BASE}/get-institute-list`).subscribe({
      next: (res) => {
        const data = res?.data || res || [];
        this.institutes = Array.isArray(data) ? data : [];
        // For Super Admin: Do NOT auto-select an institute. Wait for user selection like Test Reports.
        if (this.selectedInstitute && this.institutes.some(i => i.institute_id === this.selectedInstitute)) {
          this.onInstituteSelected(this.selectedInstitute);
        } else {
          this.selectedInstitute = '';
          this.resetAllDependentDropdowns();
        }
      },
      error: (err) => {
        console.error('Failed to load institutes:', err);
      }
    });
  }

  onInstituteChange(instituteId: string): void {
    this.selectedInstitute = instituteId;
    if (instituteId) {
      this.onInstituteSelected(instituteId);
    } else {
      this.resetAllDependentDropdowns();
    }
  }

  onInstituteSelected(instituteId: string): void {
    if (!instituteId) {
      this.resetAllDependentDropdowns();
      return;
    }

    // Reset all dependent filters
    this.selectedClass = 'ALL';
    this.selectedSection = 'ALL';
    this.selectedSubject = 'ALL';
    this.selectedExamId = '';
    this.testList = [];
    this.allPublishedExams = [];
    this.allInstituteTeams = [];
    this.students = [];
    this.filteredStudents = [];
    this.resetTestDetails();

    // Load dependent masters for this institute
    this.loadDepartments(instituteId);
    this.loadTeams(instituteId);
    this.loadSubjects(instituteId);
    this.loadPublishedExams(instituteId);
  }

  openFiltersOverlay(): void {
    if (!this.filtersBtn) return;
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (e) {}
      this.filtersOverlayRef = null;
    }

    this.instituteFilterSearch = '';
    this.deptFilterSearch = '';
    this.teamFilterSearch = '';
    this.subjectFilterSearch = '';
    this.testFilterSearch = '';

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
    this.filtersOverlayRef.keydownEvents().subscribe((ev: any) => {
      if (ev.key === 'Escape') this.closeFiltersOverlay();
    });

    const portal = new TemplatePortal(this.filtersPanelTpl, this.vcr);
    this.filtersOverlayRef.attach(portal);
  }

  closeFiltersOverlay(): void {
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (e) {}
      this.filtersOverlayRef = null;
    }
  }

  applyFiltersPanel(): void {
    this.closeFiltersOverlay();
    this.applyExamFilters();
    this.filterStudents();
  }

  resetFiltersAndReload(): void {
    this.instituteFilterSearch = '';
    this.deptFilterSearch = '';
    this.teamFilterSearch = '';
    this.subjectFilterSearch = '';
    this.testFilterSearch = '';
    this.clearAppliedFilters();
    this.closeFiltersOverlay();
  }

  stopFilterSearchEvent(event: Event): void {
    event.stopPropagation();
  }

  removeAppliedFilter(key: string): void {
    switch (key) {
      case 'institute':
        if (this.isSuperAdmin) {
          this.selectedInstitute = '';
          this.resetAllDependentDropdowns();
        }
        break;
      case 'class':
      case 'department':
        this.selectedClass = 'ALL';
        this.filterSectionList();
        this.applyExamFilters();
        this.filterStudents();
        break;
      case 'section':
      case 'team':
        this.selectedSection = 'ALL';
        this.applyExamFilters();
        this.filterStudents();
        break;
      case 'subject':
        this.selectedSubject = 'ALL';
        this.applyExamFilters();
        this.filterStudents();
        break;
      case 'test':
        this.selectedExamId = '';
        this.students = [];
        this.filteredStudents = [];
        this.resetTestDetails();
        this.recalculateKpiTotals();
        break;
      case 'status':
        this.selectedStatus = 'All statuses';
        this.filterStudents();
        break;
      case 'search':
        this.searchQuery = '';
        this.filterStudents();
        break;
    }
  }

  loadDepartments(instituteId: string): void {
    const url = `${API_BASE}/get-department-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        const raw = res?.data || res || [];
        const items = Array.isArray(raw) ? raw : [];
        this.classList = [
          { id: 'ALL', name: `All ${this.terminology.deptPlural}` },
          ...items.map((d: any) => ({
            id: String(d.department_id || d.id || d.dept_id || d.name || ''),
            name: String(d.name || d.department_name || d.department || d || '')
          })).filter((x: any) => !!x.name)
        ];
        this.filterSectionList();
      },
      error: (err) => {
        console.error('Failed to load departments/classes:', err);
        this.classList = [{ id: 'ALL', name: `All ${this.terminology.deptPlural}` }];
      }
    });
  }

  loadTeams(instituteId: string): void {
    const url = `${API_BASE}/get-teams-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        const raw = res?.data || res || [];
        const items = Array.isArray(raw) ? raw : [];
        this.allInstituteTeams = items.map((t: any) => ({
          id: String(t.team_id || t.id || t.teamId || t.name || ''),
          name: String(t.name || t.team_name || t.team || t || ''),
          department_id: t.department_id != null ? String(t.department_id) : (t.dept_id != null ? String(t.dept_id) : null),
          department_name: t.department_name || t.department || null
        })).filter((s: any) => !!s.name);
        this.filterSectionList();
      },
      error: (err) => {
        console.error('Failed to load teams/sections:', err);
        this.allInstituteTeams = [];
        this.sectionList = [{ id: 'ALL', name: `All ${this.terminology.teamPlural}` }];
      }
    });
  }

  loadSubjects(instituteId: string): void {
    const url = `${API_BASE}/get-subject-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        const raw = res?.data || res || [];
        const items = Array.isArray(raw) ? raw : [];
        this.subjectList = [
          { id: 'ALL', name: 'All Subjects' },
          ...items.map((s: any) => ({
            id: String(s.subject_id || s.id || s.subjectId || s.name || ''),
            name: String(s.subject_name || s.name || s.title || s || '')
          })).filter((x: any) => !!x.name)
        ];
      },
      error: (err) => {
        console.error('Failed to load subjects:', err);
        this.subjectList = [{ id: 'ALL', name: 'All Subjects' }];
      }
    });
  }

  filterSectionList(): void {
    if (!this.selectedClass || this.selectedClass === 'ALL') {
      // Show unique section options when All Classes is selected
      const seen = new Set<string>();
      const uniqueList: Array<{ id: string; name: string }> = [];
      for (const t of this.allInstituteTeams) {
        if (!seen.has(t.id)) {
          seen.add(t.id);
          uniqueList.push({ id: t.id, name: t.name });
        }
      }
      this.sectionList = [
        { id: 'ALL', name: `All ${this.terminology.teamPlural}` },
        ...uniqueList
      ];
    } else {
      // Find matching class name if department_name is used
      const selectedClassObj = this.classList.find(c => String(c.id) === String(this.selectedClass));
      const selectedClassName = (selectedClassObj?.name || '').toLowerCase().trim();

      const filtered = this.allInstituteTeams.filter((t) => {
        const teamDeptId = t.department_id ? String(t.department_id) : '';
        const teamDeptName = t.department_name ? t.department_name.toLowerCase().trim() : '';

        if (teamDeptId && teamDeptId === String(this.selectedClass)) return true;
        if (selectedClassName && teamDeptName && teamDeptName === selectedClassName) return true;
        return false;
      });

      this.sectionList = [
        { id: 'ALL', name: `All ${this.terminology.teamPlural}` },
        ...filtered.map(t => ({ id: t.id, name: t.name }))
      ];
    }

    // If current selectedSection is no longer in sectionList, reset to 'ALL'
    if (this.selectedSection !== 'ALL' && !this.sectionList.some(s => s.id === this.selectedSection)) {
      this.selectedSection = 'ALL';
    }
  }

  loadPublishedExams(instituteId: string): void {
    this.isLoadingExams = true;
    const url = `${API_BASE}/get-exams-details?test_mode=paper&published=1&institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.isLoadingExams = false;
        const raw = res?.data || res || [];
        this.allPublishedExams = (Array.isArray(raw) ? raw : []).filter(
          (e: any) => e.published === 1 || e.published === true
        );
        this.applyExamFilters();
      },
      error: (err) => {
        this.isLoadingExams = false;
        console.error('Failed to load published paper exams:', err);
        this.allPublishedExams = [];
        this.applyExamFilters();
      }
    });
  }

  onClassChange(classId: string): void {
    this.selectedClass = classId;
    this.selectedSection = 'ALL';
    this.filterSectionList();
    this.applyExamFilters();
  }

  onSectionChange(sectionId: string): void {
    this.selectedSection = sectionId;
    this.applyExamFilters();
  }

  onSubjectChange(subjectId: string): void {
    this.selectedSubject = subjectId;
    this.applyExamFilters();
  }

  applyExamFilters(): void {
    let filtered = [...this.allPublishedExams];

    // Filter by Class / Department
    if (this.selectedClass && this.selectedClass !== 'ALL') {
      filtered = filtered.filter((e) => {
        const depts = (e.departments || []).map((d: any) => String(d));
        return depts.includes(String(this.selectedClass));
      });
    }

    // Filter by Section / Team
    if (this.selectedSection && this.selectedSection !== 'ALL') {
      filtered = filtered.filter((e) => {
        const teams = (e.teams || []).map((t: any) => String(t));
        return teams.includes(String(this.selectedSection));
      });
    }

    // Filter by Subject
    if (this.selectedSubject && this.selectedSubject !== 'ALL') {
      filtered = filtered.filter((e) => {
        return (
          String(e.subject_id) === String(this.selectedSubject) ||
          String(e.subject_name).toLowerCase() === String(this.selectedSubject).toLowerCase()
        );
      });
    }

    this.testList = filtered.map((e) => ({
      exam_id: e.exam_id,
      title: e.title
    }));

    if (this.testList.length > 0 && this.selectedExamId && this.testList.some((t) => t.exam_id === this.selectedExamId)) {
      this.onTestChange(this.selectedExamId);
    } else {
      this.selectedExamId = '';
      this.students = [];
      this.filteredStudents = [];
      this.resetTestDetails();
      this.recalculateKpiTotals();
    }
  }

  onTestChange(examId: string): void {
    this.selectedExamId = examId;
    if (!examId) {
      this.students = [];
      this.filteredStudents = [];
      this.resetTestDetails();
      this.recalculateKpiTotals();
      return;
    }

    const exam = this.allPublishedExams.find((e) => e.exam_id === examId);
    if (!exam) return;

    // Resolve Department & Team names
    let deptName = '—';
    if (exam.departments && exam.departments.length > 0) {
      const matchD = this.classList.find((c) => c.id === String(exam.departments[0]));
      deptName = matchD ? matchD.name : this.terminology.deptLabel;
    }
    let teamName = '—';
    if (exam.teams && exam.teams.length > 0) {
      const matchT = this.allInstituteTeams.find((s) => s.id === String(exam.teams[0])) || this.sectionList.find((s) => s.id === String(exam.teams[0]));
      teamName = matchT ? matchT.name : this.terminology.teamLabel;
    }

    const assigned = exam.assigned_users || [];

    // Populate students list from QuestionPaperUserAssignment with real evaluation data
    const prevStudents = this.students || [];
    this.students = assigned.map((user: any, idx: number) => {
      const pCount = user.pages_count || 0;
      const rawStatus = user.evaluation_status || user.status || '';
      const totalMarksVal = exam.total_marks || 20;
      const scoreVal = user.marks_awarded != null ? user.marks_awarded : (user.score != null ? user.score : null);

      let marksDisplay = 'Not marked';
      if (scoreVal !== null) {
        marksDisplay = `${scoreVal} / ${totalMarksVal}`;
      }

      const isDbEvaluated = (scoreVal !== null && scoreVal !== undefined) ||
        rawStatus === 'AI Evaluated' || rawStatus === 'evaluated' || rawStatus === 'Completed' ||
        rawStatus === 'Manual Reviewed' || rawStatus === 'Need to Check';

      let status: StudentEvaluation['status'] = 'Not Evaluated';
      if (rawStatus === 'Manual Reviewed' || rawStatus === 'Manual Review' || rawStatus === 'manual_review') {
        status = 'Manual Reviewed';
      } else if (rawStatus === 'Need to Check') {
        status = 'Need to Check';
      } else if (isDbEvaluated) {
        status = 'AI Evaluated';
      } else {
        status = 'Not Evaluated';
      }

      // Check for any staged or matched bulk file for this student
      const prevStudent = prevStudents.find((s) => String(s.user_id) === String(user.user_id));
      const matchedBulk = this.bulkFiles.find(
        (bf) => (bf.selectedUserId && String(bf.selectedUserId) === String(user.user_id)) ||
                (bf.studentName && (user.full_name || user.user_name) && bf.studentName.toLowerCase() === (user.full_name || user.user_name || '').toLowerCase())
      );

      const rawFile = matchedBulk?.file || undefined;
      const isUploaded = (pCount > 0 && isDbEvaluated);
      const matchedFile = (isDbEvaluated || status !== 'Not Evaluated') ? undefined : (matchedBulk?.fileName || undefined);
      const matchedBy = (isDbEvaluated || status !== 'Not Evaluated') ? undefined : (matchedBulk?.matchedBy || undefined);
      const isMatched = !!matchedBulk;
      const pagesInfo = pCount > 0
        ? `${pCount} of ${pCount} pages`
        : (matchedBulk?.pagesInfo || '0 of 0 pages');


      const isEvaluated = isDbEvaluated;

      return {
        sno: idx + 1,
        user_id: user.user_id,
        name: user.full_name || user.user_name || `Student ${idx + 1}`,
        rollNo: user.roll_no || user.user_name || `Roll No. ${idx + 1}`,
        pagesInfo: pagesInfo,
        status: status,
        marks: marksDisplay,
        actionText: isEvaluated ? 'Review' : 'Evaluate',
        actionClass: 'btn-solid-blue',
        rawFile: rawFile,
        isUploaded: isUploaded,
        matchedFile: matchedFile,
        matchedBy: matchedBy,
        isMatched: isMatched
      };
    });

    this.testDetails = {
      title: exam.title,
      class: deptName,
      section: teamName,
      subject: exam.subject_name || 'General',
      totalMarks: `${exam.total_marks || 0} marks`,
      totalQuestions: `${exam.total_questions || 0} questions`,
      totalStudents: assigned.length,
      aiEvaluated: 0,
      manualReview: 0,
      needToCheck: 0,
      notEvaluated: assigned.length
    };

    // Update available student list for Bulk Upload assignment
    this.availableStudents = ['Choose student', ...this.students.map((s) => s.name)];

    this.recalculateKpiTotals();
    this.filterStudents();
  }

  private resetTestDetails(): void {
    this.testDetails = {
      title: 'No published paper test found',
      class: '—',
      section: '—',
      subject: '—',
      totalMarks: '0 marks',
      totalQuestions: '0 questions',
      totalStudents: 0,
      aiEvaluated: 0,
      manualReview: 0,
      needToCheck: 0,
      notEvaluated: 0
    };
  }

  setUploadTab(tab: 'user' | 'bulk'): void {
    this.uploadTab = tab;
  }

  refreshData(): void {
    if (this.selectedExamId) {
      // Prioritize refreshing the currently active test locally with zero delay
      this.onTestChange(this.selectedExamId);
    } else if (this.activeInstituteId) {
      this.loadPublishedExams(this.activeInstituteId);
    }
  }

  recalculateKpiTotals(): void {
    const total = this.students.length;
    let aiEvaluated = 0;
    let manualReview = 0;
    let needToCheck = 0;
    let notEvaluated = 0;

    for (const s of this.students) {
      if (s.status === 'Manual Reviewed') {
        manualReview++;
      } else if (s.status === 'Need to Check') {
        needToCheck++;
      } else if (s.status === 'AI Evaluated' || s.status === 'Completed' || s.status === 'evaluated') {
        aiEvaluated++;
      } else {
        notEvaluated++;
      }
    }

    this.testDetails.totalStudents = total;
    this.testDetails.aiEvaluated = aiEvaluated;
    this.testDetails.manualReview = manualReview;
    this.testDetails.needToCheck = needToCheck;
    this.testDetails.notEvaluated = notEvaluated;
  }

  filterStudents(): void {
    let list = [...this.students];

    if (this.selectedStatus && this.selectedStatus !== 'All statuses') {
      list = list.filter((s) => s.status === this.selectedStatus);
    }

    if (this.searchQuery && this.searchQuery.trim()) {
      const q = this.searchQuery.trim().toLowerCase();
      list = list.filter(
        (s) =>
          (s.name && s.name.toLowerCase().includes(q)) ||
          (s.rollNo && s.rollNo.toLowerCase().includes(q))
      );
    }

    this.filteredStudents = list;
  }

  // ─── Split-View Evaluation Handlers ───
  openStudentEvaluation(student: StudentEvaluation): void {
    if (!this.selectedExamId || !student.user_id) {
      notify('Exam or student ID is missing.', 'info');
      return;
    }

    // Fallback: If student.rawFile was detached or missing, recover from this.bulkFiles
    if (!student.rawFile) {
      const matchedBulk = this.bulkFiles.find(
        (bf) => (bf.selectedUserId && String(bf.selectedUserId) === String(student.user_id)) ||
                (bf.studentName && student.name && bf.studentName.toLowerCase() === student.name.toLowerCase())
      );
      if (matchedBulk?.file) {
        student.rawFile = matchedBulk.file;
        student.matchedFile = matchedBulk.fileName;
        student.isMatched = true;
      }
    }

    this.evaluatingStudent = student;
    this.currentView = 'evaluate';
    this.activeSheetPageIndex = 0;
    this.zoomLevel = 100;
    this.evaluationCategoryFilter = 'all';

    // Pre-populate evaluationDetails from in-memory student data to avoid 0/0 flicker
    const parsedMarks = parseFloat(String(student.marks || '').split('/')[0]) || 0;
    const totalExamMarks = parseFloat(String(this.testDetails?.totalMarks || '').replace(/[^\d.]/g, '')) || 10;
    const pct = totalExamMarks > 0 ? Math.round((parsedMarks / totalExamMarks) * 100) : 0;

    this.evaluationDetails = {
      status: true,
      student_name: student.name,
      roll_no: student.rollNo,
      summary: {
        total_marks: totalExamMarks,
        marks_awarded: parsedMarks,
        percentage: pct,
        status: student.status || 'AI Evaluated',
        total_questions: parseInt(String(this.testDetails?.totalQuestions || '').replace(/[^\d.]/g, ''), 10) || 0
      },
      questions: [],
      pages: []
    };

    // If student has a matched local file that hasn't been uploaded to backend yet, upload & evaluate first
    if (student.rawFile && !student.isUploaded) {
      this.isLoadingEvaluation = true;
      student.status = 'Evaluating...';
      student.matchedFile = undefined;
      const formData = new FormData();
      formData.append('exam_id', this.selectedExamId);
      formData.append('user_id', student.user_id);
      formData.append('replace', 'true');
      formData.append('file', student.rawFile);

      this.http.post<any>(`${API_BASE}/test-evaluation/upload-answer-sheet`, formData).subscribe({
        next: (res) => {
          student.isUploaded = true;
          if (res && res.status) {
            const pagesCount = res.data?.total_pages || res.data?.pages?.length || 1;
            student.pagesInfo = `${pagesCount} of ${pagesCount} pages`;
            student.status = 'AI Evaluated';
            student.matchedFile = undefined;
            student.actionText = 'Review';
            if (res.data?.marks) {
              student.marks = res.data.marks;
            }

            // Sync in-memory cache in allPublishedExams immediately
            const currentExam = this.allPublishedExams.find(e => e.exam_id === this.selectedExamId);
            if (currentExam && Array.isArray(currentExam.assigned_users)) {
              const u = currentExam.assigned_users.find((au: any) => String(au.user_id) === String(student.user_id));
              if (u) {
                u.pages_count = pagesCount;
                u.evaluation_status = 'AI Evaluated';
                u.status = 'AI Evaluated';
                u.score = res.data?.score != null ? res.data.score : u.score;
                u.marks_awarded = res.data?.score != null ? res.data.score : u.marks_awarded;
                u.percentage = res.data?.percentage != null ? res.data.percentage : u.percentage;
              }
            }
          }
          this.loadEvaluationDetails(this.selectedExamId, student.user_id!);
        },
        error: (err) => {
          console.error('Error auto-uploading matched sheet:', err);
          notify(err?.error?.statusMessage || 'Failed to upload answer sheet for evaluation.', 'error');
          this.loadEvaluationDetails(this.selectedExamId, student.user_id!);
        }
      });
    } else {
      this.loadEvaluationDetails(this.selectedExamId, student.user_id);
    }
  }

  closeStudentEvaluation(): void {
    this.currentView = 'list';
    this.evaluatingStudent = null;
    this.evaluationDetails = null;
    this.pdfDoc = null;
    this.currentLoadedPdfUrl = '';
    if (this.pdfRenderTask) {
      try {
        this.pdfRenderTask.cancel();
      } catch {}
      this.pdfRenderTask = null;
    }
    this.refreshData();
  }

  removeUploadedSheet(student: StudentEvaluation, event?: Event): void {
    this.openConfirmRemoveModal(student, event);
  }

  openConfirmRemoveModal(student: StudentEvaluation, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    if (!student) return;
    this.studentToRemove = student;
    this.isConfirmRemoveModalOpen = true;
    this.isRemovingSheet = false;
  }

  closeConfirmRemoveModal(force: boolean = false): void {
    if (this.isRemovingSheet && !force) return;
    this.isConfirmRemoveModalOpen = false;
    this.studentToRemove = null;
    this.isRemovingSheet = false;
  }

  confirmRemoveUploadedSheet(): void {
    const student = this.studentToRemove;
    if (!student) return;

    this.isRemovingSheet = true;
    const examId = this.selectedExamId;
    const userId = student.user_id;

    // Also find and reset the student directly inside this.students by user_id
const targetInList = this.students.find(s => String(s.user_id) === String(userId));
if (targetInList) {
  targetInList.isUploaded = false;
  targetInList.rawFile = undefined;
  targetInList.matchedFile = undefined;
  targetInList.matchedBy = undefined;
  targetInList.isMatched = false;
  targetInList.pagesInfo = '0 of 0 pages';
  targetInList.missingPagesWarning = undefined;
  targetInList.status = 'Not Evaluated';
  targetInList.marks = 'Not marked';
  targetInList.actionText = 'Evaluate';
  targetInList.actionClass = 'btn-outline-blue';
}


    const bIdx = this.bulkFiles.findIndex(
      (f) => (f.selectedUserId && f.selectedUserId === student.user_id) || (f.studentName && f.studentName === student.name)
    );
    if (bIdx !== -1) {
      this.bulkFiles.splice(bIdx, 1);
    }

    // Also update in-memory assigned_users in allPublishedExams so filters don't revert to old evaluation
    const currentExam = this.allPublishedExams.find(e => e.exam_id === examId);
    if (currentExam && Array.isArray(currentExam.assigned_users)) {
      const u = currentExam.assigned_users.find((au: any) => String(au.user_id) === String(userId));
      if (u) {
        u.pages_count = 0;
        u.evaluation_status = 'Not Evaluated';
        u.status = 'Not Evaluated';
        u.marks_awarded = null;
        u.score = null;
        u.percentage = null;
      }
    }

    this.recalculateKpiTotals();
    this.filterStudents();

    // Immediately close modal and transition back to list view with zero delay
    this.closeConfirmRemoveModal(true);
    if (this.currentView === 'evaluate') {
      this.currentView = 'list';
      this.evaluatingStudent = null;
      this.evaluationDetails = null;
      this.pdfDoc = null;
      this.currentLoadedPdfUrl = '';
      if (this.pdfRenderTask) {
        try {
          this.pdfRenderTask.cancel();
        } catch {}
        this.pdfRenderTask = null;
      }
    }

    if (examId && userId) {
      this.http.post<any>(`${API_BASE}/test-evaluation/remove-answer-sheet`, {
        exam_id: examId,
        user_id: userId
      }).subscribe({
        next: (res) => {
          notify(`Answer sheet removed for ${student.name}`, 'info');
          this.refreshData();
        },
        error: (err) => {
          console.error('Error removing answer sheet from server:', err);
          notify('Notice: Server cleanup encountered an error.', 'error');
          this.refreshData();
        }
      });
    } else {
      notify(`Answer sheet removed for ${student.name}`, 'info');
    }
  }

  loadEvaluationDetails(examId: string, userId: string): void {
    this.isLoadingEvaluation = true;
    const url = `${API_BASE}/test-evaluation/student-evaluation-details?exam_id=${encodeURIComponent(examId)}&user_id=${encodeURIComponent(userId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.isLoadingEvaluation = false;
        if (res && res.status) {
          this.evaluationDetails = res;
          if (res.ai_confidence_threshold != null) {
            this.aiConfidenceThreshold = Number(res.ai_confidence_threshold);
          }
          this.activeSheetPageIndex = 0;
          this.pdfDoc = null;
          this.currentLoadedPdfUrl = '';
          const firstPage = this.evaluationPages[0];
          if (this.isPdfPage(firstPage)) {
            setTimeout(() => {
              this.loadAndRenderPdf(this.getPdfUrl(firstPage), firstPage.page_number || 1);
            }, 60);
          }
        } else {
          notify(res?.statusMessage || 'Could not load evaluation details.', 'error');
        }
      },
      error: (err) => {
        this.isLoadingEvaluation = false;
        console.error('Failed to load evaluation details:', err);
        notify(err?.error?.statusMessage || 'Failed to load evaluation details.', 'error');
      }
    });
  }

  get evaluationPages(): any[] {
    const rawPages: any[] = this.evaluationDetails?.pages || [];
    const uniqueMap = new Map<number, any>();
    for (const p of rawPages) {
      const pnum = Number(p.page_number) || 1;
      if (!uniqueMap.has(pnum)) {
        uniqueMap.set(pnum, p);
      }
    }
    return Array.from(uniqueMap.values()).sort((a, b) => a.page_number - b.page_number);
  }

  get currentSheetPage(): any {
    if (this.evaluationPages.length > 0 && this.activeSheetPageIndex >= 0 && this.activeSheetPageIndex < this.evaluationPages.length) {
      return this.evaluationPages[this.activeSheetPageIndex];
    }
    return null;
  }

  getPageImageUrl(page: any): string {
    if (!page) return '';
    const rawUrl = page.image_url || page.dataUrl || '';
    if (!rawUrl) return '';
    if (rawUrl.startsWith('data:') || rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      return rawUrl;
    }
    if (rawUrl.startsWith('/edu/api')) {
      const baseHost = API_BASE.replace(/\/edu\/api\/?$/, '');
      return `${baseHost}${rawUrl}`;
    }
    return `${API_BASE}/${rawUrl.replace(/^\//, '')}`;
  }

  isPdfPage(page: any): boolean {
    if (!page) return false;
    const rawUrl = (page.image_url || page.dataUrl || page.url || '').toLowerCase();
    // If the page URL is an image, ALWAYS render with native <img>
    if (rawUrl.includes('.jpg') || rawUrl.includes('.jpeg') || rawUrl.includes('.png') || rawUrl.includes('.webp') || rawUrl.startsWith('data:image/')) {
      return false;
    }
    // Only treat as PDF if the URL itself is a PDF or explicitly application/pdf
    if (rawUrl.includes('.pdf') || page.mime_type === 'application/pdf') {
      return true;
    }
    return false;
  }

  getPdfUrl(page: any): string {
    if (this.evaluationDetails?.pdf_url) {
      const pUrl = this.evaluationDetails.pdf_url;
      if (pUrl.startsWith('http://') || pUrl.startsWith('https://')) return pUrl;
      return `${API_BASE}/${pUrl.replace(/^\//, '')}`;
    }
    return this.getPageImageUrl(page);
  }

  async loadAndRenderPdf(pdfUrl: string, pageNumber: number): Promise<void> {
    if (!pdfUrl) return;
    try {
      if (!this.pdfDoc || this.currentLoadedPdfUrl !== pdfUrl) {
        this.currentLoadedPdfUrl = pdfUrl;
        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
          cMapPacked: true,
        });
        this.pdfDoc = await loadingTask.promise;
      }
      await this.renderPdfPage(pageNumber);
    } catch (err) {
      console.error('Failed to load PDF document in viewer:', err);
      this.isRenderingPdfPage = false;
    }
  }

  async renderPdfPage(pageNumber: number): Promise<void> {
    if (!this.pdfDoc || !this.pdfCanvasRef?.nativeElement) return;
    const canvas = this.pdfCanvasRef.nativeElement;
    const context = canvas.getContext('2d');
    if (!context) return;

    if (this.pdfRenderTask) {
      try {
        this.pdfRenderTask.cancel();
      } catch {}
      this.pdfRenderTask = null;
    }

    try {
      this.isRenderingPdfPage = true;
      const safePageNum = Math.max(1, Math.min(pageNumber, this.pdfDoc.numPages || pageNumber));
      const page = await this.pdfDoc.getPage(safePageNum);

      const dpr = window.devicePixelRatio || 1;
      const baseViewport = page.getViewport({ scale: 1.5 });

      canvas.width = Math.floor(baseViewport.width * dpr);
      canvas.height = Math.floor(baseViewport.height * dpr);
      canvas.style.width = `${Math.floor(baseViewport.width)}px`;
      canvas.style.height = `${Math.floor(baseViewport.height)}px`;

      const renderContext = {
        canvasContext: context,
        viewport: page.getViewport({ scale: 1.5 * dpr }),
      };

      this.pdfRenderTask = page.render(renderContext);
      await this.pdfRenderTask.promise;
      this.pdfRenderTask = null;
      this.isRenderingPdfPage = false;
      this.cdr.detectChanges();
    } catch (err: any) {
      if (err?.name !== 'RenderingCancelledException') {
        console.error('Error rendering PDF page:', err);
      }
      this.isRenderingPdfPage = false;
      this.cdr.detectChanges();
    }
  }

  selectSheetPage(index: number): void {
    if (index >= 0 && index < this.evaluationPages.length) {
      this.activeSheetPageIndex = index;
      this.panX = 0;
      this.panY = 0;
      const targetPage = this.evaluationPages[index];
      if (this.isPdfPage(targetPage)) {
        setTimeout(() => {
          this.loadAndRenderPdf(this.getPdfUrl(targetPage), targetPage.page_number || (index + 1));
        }, 0);
      }
    }
  }

  jumpToPage(pageNum: number): void {
    const idx = this.evaluationPages.findIndex((p) => p.page_number === pageNum);
    if (idx >= 0) {
      this.selectSheetPage(idx);
    } else if (pageNum > 0 && pageNum <= this.evaluationPages.length) {
      this.selectSheetPage(pageNum - 1);
    }
  }

  zoomIn(): void {
    this.zoomLevel = Math.min(250, this.zoomLevel + 25);
  }

  zoomOut(): void {
    this.zoomLevel = Math.max(50, this.zoomLevel - 25);
  }

  resetZoom(): void {
    this.zoomLevel = 100;
    this.panX = 0;
    this.panY = 0;
  }

  resetImage(): void {
    this.resetZoom();
  }

  // ── Drag / Pan mouse handlers (Translate-based) ──
  startSheetPan(event: MouseEvent): void {
    if (event.button !== 0) return;
    this.isPanningSheet = true;
    this.dragStartX = event.clientX - this.panX;
    this.dragStartY = event.clientY - this.panY;
  }

  onSheetPan(event: MouseEvent): void {
    if (!this.isPanningSheet) return;
    event.preventDefault();
    this.panX = event.clientX - this.dragStartX;
    this.panY = event.clientY - this.dragStartY;
  }

  stopSheetPan(): void {
    this.isPanningSheet = false;
  }

  @HostListener('window:mouseup')
  onWindowMouseUp(): void {
    if (this.isPanningSheet) {
      this.isPanningSheet = false;
    }
  }

  isQuestionNeedsAttention(q: any): boolean {
    if (!q) return false;
    return (
      q.manual_review_required ||
      (this.isDescriptive(q) && q.ai_confidence != null && q.ai_confidence < this.aiConfidenceThreshold) ||
      (q.marks_awarded != null && q.marks_awarded < q.max_marks) ||
      (q.review_comments && q.review_comments.length > 0)
    );
  }

  get evaluationQuestions(): any[] {
    const questions: any[] = this.evaluationDetails?.questions || [];
    if (this.evaluationCategoryFilter === 'needs_attention') {
      return questions.filter((q) => this.isQuestionNeedsAttention(q));
    } else if (this.evaluationCategoryFilter === 'reviewed') {
      return questions.filter((q) => !this.isQuestionNeedsAttention(q));
    }
    return questions;
  }

  get needsAttentionQuestionsCount(): number {
    const questions: any[] = this.evaluationDetails?.questions || [];
    return questions.filter((q) => this.isQuestionNeedsAttention(q)).length;
  }

  get reviewedQuestionsCount(): number {
    const total = this.evaluationDetails?.questions?.length || 0;
    return Math.max(0, total - this.needsAttentionQuestionsCount);
  }

  getReviewComments(q: any, category: string): any[] {
    return (q.review_comments || []).filter((c: any) => c.category === category && !c.is_deleted);
  }

  hasReviewComments(q: any, category: string): boolean {
    return this.getReviewComments(q, category).length > 0;
  }

  isDescriptive(q: any): boolean {
    if (!q) return false;
    const type = String(q.question_type || '').toLowerCase();
    return type === 'descriptive' || type === 'paragraph';
  }

  isObjective(q: any): boolean {
    if (!q) return false;
    return !this.isDescriptive(q);
  }

  hasStudentAnswer(q: any): boolean {
    if (!q || !q.student_answer) return false;
    const text = String(q.student_answer).trim();
    if (!text) return false;
    const lower = text.toLowerCase();
    return (
      lower !== 'unattempted' &&
      lower !== 'none' &&
      lower !== 'not answered' &&
      lower !== 'not attempted' &&
      lower !== 'null' &&
      lower !== 'undefined'
    );
  }

  isOptionCorrect(opt: any): boolean {
    if (!opt) return false;
    return opt.is_correct === 1 || opt.is_correct === true || opt.is_correct === '1' || opt.is_correct === 'true';
  }

  isStudentSelectedOption(q: any, opt: any, index: number): boolean {
    if (!q || !opt) return false;
    const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index];
    const letterLower = letter.toLowerCase();

    // 1. Direct selected_option_id check (authoritative if present)
    if (q.selected_option_id) {
      return (
        !!opt.id &&
        String(q.selected_option_id).trim().toLowerCase() === String(opt.id).trim().toLowerCase()
      );
    }

    // 2. Check selected_option field (array or single value)
    if (q.selected_option) {
      const optIdLower = opt.id ? String(opt.id).trim().toLowerCase() : '';
      if (Array.isArray(q.selected_option)) {
        const selNorm = q.selected_option.map((s: any) => String(s).trim().toLowerCase());
        if (
          (optIdLower && selNorm.includes(optIdLower)) ||
          selNorm.includes(letterLower) ||
          (opt.text && selNorm.includes(opt.text.trim().toLowerCase()))
        ) {
          return true;
        }
      } else {
        const selStr = String(q.selected_option).trim().toLowerCase();
        if (
          (optIdLower && selStr === optIdLower) ||
          selStr === letterLower ||
          (opt.text && selStr === opt.text.trim().toLowerCase())
        ) {
          return true;
        }
      }
    }

    // 3. Fallback: Match from student_answer text when selected_option_id is not set
    const studentAns = (q.student_answer || '').trim();
    if (studentAns) {
      const cleanAns = studentAns
        .replace(/\[(unclear|illegible|scratch|scribble)\]/gi, '')
        .replace(/[*#_]/g, '')
        .replace(/^OPTION\s+/i, '')
        .trim();

      if (!cleanAns) return false;

      // Check letter patterns: A, A), (A), A., A-, A:
      const letterPatterns = [
        letter,
        `${letter})`,
        `(${letter})`,
        `${letter}.`,
        `${letter}-`,
        `${letter}:`
      ];

      const cleanAnsUpper = cleanAns.toUpperCase();
      if (letterPatterns.includes(cleanAnsUpper)) {
        return true;
      }

      // Check if student wrote letter pattern followed by text e.g. "B) Under" or "(B) Under"
      for (const pat of letterPatterns) {
        if (cleanAnsUpper.startsWith(`${pat} `) || cleanAnsUpper.startsWith(`${pat}\t`)) {
          return true;
        }
      }

      // Check direct or normalized text equality
      if (opt.text) {
        const normalize = (s: string) =>
          String(s || '')
            .replace(/\[(unclear|illegible|scratch|scribble)\]/gi, '')
            .replace(/[*#_]/g, '')
            .replace(/[\u2212−]/g, '-')
            .replace(/[²]/g, '^2')
            .replace(/[³]/g, '^3')
            .replace(/[±]/g, '+-')
            .replace(/\\pm/g, '+-')
            .replace(/√/g, 'sqrt')
            .replace(/\\sqrt/g, 'sqrt')
            .replace(/\\times/g, '*')
            .replace(/\\(sin|cos|tan|cot|sec|csc|ln|log|exp)\b/gi, '$1')
            .replace(/[$]/g, '')
            .replace(/\\/g, '')
            .replace(/[{}]/g, '')
            .replace(/\s+/g, '')
            .toLowerCase();

        const stripEq = (s: string) => s.replace(/^[a-z]\([a-z]\)=/, '').replace(/^[a-z]=/, '');

        const normClean = normalize(cleanAns);
        const normOpt = normalize(opt.text);

        if (cleanAns.toLowerCase() === opt.text.trim().toLowerCase()) {
          return true;
        }
        if (normClean && normOpt && (normClean === normOpt || normClean.replace(/[()]/g, '') === normOpt.replace(/[()]/g, ''))) {
          return true;
        }
        if (stripEq(normClean) && stripEq(normOpt) && (stripEq(normClean) === stripEq(normOpt) || stripEq(normClean).replace(/[()]/g, '') === stripEq(normOpt).replace(/[()]/g, ''))) {
          return true;
        }
      }
    }

    return false;
  }

  hasStudentSelectedAnyOption(q: any): boolean {
    if (!q || !q.options || !q.options.length) return false;
    return q.options.some((opt: any, index: number) => this.isStudentSelectedOption(q, opt, index));
  }

  getNonEmptyCategoryCount(q: any): number {
    let count = 0;
    if (this.hasReviewComments(q, 'missing')) count++;
    if (this.hasReviewComments(q, 'incorrect')) count++;
    if (this.hasReviewComments(q, 'incomplete')) count++;
    return count;
  }

  /**
   * Format review comment point for UI rendering:
   * Splits into student issue (Line 1) and correction/needed/complete (Line 2 in green).
   */
  parseCard(pointText: string | null | undefined): { issue: string; label: string; solution: string } | null {
    if (!pointText) return null;
    let clean = String(pointText).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    clean = clean.replace(/^(Incorrect|Incomplete|Missed)\s*:\s*/i, '').trim();

    const match = clean.match(/^(.*?)\s*(Correct|Needed|Complete)\s*:\s*(.*)$/i);
    if (match && (match[1].trim() || match[3].trim())) {
      const rawLabel = match[2].trim();
      const label = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1).toLowerCase();
      return {
        issue: match[1].trim(),
        label: label,
        solution: match[3].trim()
      };
    }
    return null;
  }

  formatCardText(pointText: string | null | undefined): string {
    if (!pointText) return '';
    let clean = String(pointText).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    return clean.replace(/^(Incorrect|Incomplete|Missed)\s*:\s*/i, '').trim();
  }

  // ─── Teacher Mark Override Handlers ───
  startEditMarks(q: any): void {
    q._editingMarks = true;
    q._editedMarks = q.marks_awarded != null ? q.marks_awarded : 0;
    q._marksEditReason = '';
    q._marksReasonError = false;
  }

  cancelEditMarks(q: any): void {
    q._editingMarks = false;
    q._marksReasonError = false;
  }

  saveMarks(q: any): void {
    if (!q._marksEditReason || !q._marksEditReason.trim()) {
      q._marksReasonError = true;
      return;
    }
    q._savingMarks = true;
    q._marksReasonError = false;

    let loggedUserId = '';
    const rawUser = localStorage.getItem('user_profile') || localStorage.getItem('user') || localStorage.getItem('user_info');
    if (rawUser) {
      try {
        const uObj = JSON.parse(rawUser);
        loggedUserId = uObj.user_id || uObj.id || '';
      } catch (e) {}
    }

    const payload = {
      answer_id: q.answer_id,
      question_id: q.question_id,
      attempt_id: this.evaluationDetails?.attempt_id,
      schedule_id: this.selectedExamId,
      user_id: this.evaluationDetails?.user_id,
      marks_awarded: Number(q._editedMarks) || 0,
      updated_by: loggedUserId,
      edit_reason: q._marksEditReason.trim()
    };

    this.http.post<any>(`${API_BASE}/update-descriptive-marks`, payload).subscribe({
      next: (res) => {
        q._savingMarks = false;
        q._editingMarks = false;
        if (res && res.status) {
          q.marks_awarded = Number(q._editedMarks) || 0;
          notify('Marks updated and logged to audit trail.', 'success');

          // Transition status to 'Manual Reviewed'
          if (this.evaluatingStudent) {
            this.evaluatingStudent.status = 'Manual Reviewed';
          }
          const matchedStudent = this.students.find(
            (s) => (this.evaluatingStudent?.user_id && s.user_id === this.evaluatingStudent.user_id) ||
                   (this.evaluationDetails?.user_id && s.user_id === this.evaluationDetails.user_id)
          );
          if (matchedStudent) {
            matchedStudent.status = 'Manual Reviewed';
          }
          if (this.evaluationDetails?.summary) {
            this.evaluationDetails.summary.status = 'Manual Reviewed';
          }
          this.recalculateKpiTotals();
          this.filterStudents();

          // Reload evaluation details to refresh MarksHistory & Summary
          if (this.selectedExamId && this.evaluationDetails?.user_id) {
            this.loadEvaluationDetails(this.selectedExamId, this.evaluationDetails.user_id);
          }
        } else {
          notify(res?.statusMessage || 'Failed to update marks.', 'error');
        }
      },
      error: (err) => {
        q._savingMarks = false;
        console.error('Error saving marks:', err);
        notify(err?.error?.statusMessage || 'Error saving marks.', 'error');
      }
    });
  }

  // ─── Rubric Comment Handlers ───
  startEditComment(comment: any): void {
    comment._editing = true;
    comment._editedText = comment.comment_text;
  }

  cancelEditComment(comment: any): void {
    comment._editing = false;
  }

  saveReviewComment(comment: any): void {
    if (!comment._editedText || !comment._editedText.trim()) return;

    const payload = {
      comment_id: comment.comment_id,
      action: 'edit',
      comment_text: comment._editedText.trim(),
      edit_reason: 'Teacher modified rubric feedback'
    };

    this.http.post<any>(`${API_BASE}/update-review-comment`, payload).subscribe({
      next: (res) => {
        if (res && res.status) {
          comment.comment_text = comment._editedText.trim();
          comment._editing = false;
          notify('Rubric point updated.', 'success');

          // Transition status to 'Manual Reviewed'
          if (this.evaluatingStudent) {
            this.evaluatingStudent.status = 'Manual Reviewed';
          }
          const matchedStudent = this.students.find(
            (s) => (this.evaluatingStudent?.user_id && s.user_id === this.evaluatingStudent.user_id) ||
                   (this.evaluationDetails?.user_id && s.user_id === this.evaluationDetails.user_id)
          );
          if (matchedStudent) {
            matchedStudent.status = 'Manual Reviewed';
          }
          if (this.evaluationDetails?.summary) {
            this.evaluationDetails.summary.status = 'Manual Reviewed';
          }
          this.recalculateKpiTotals();
          this.filterStudents();
        } else {
          notify(res?.statusMessage || 'Failed to update comment.', 'error');
        }
      },
      error: (err) => {
        console.error('Error updating review comment:', err);
        notify('Error updating review comment.', 'error');
      }
    });
  }

  confirmDeleteComment(comment: any, q: any): void {
    const payload = {
      comment_id: comment.comment_id,
      action: 'delete'
    };

    this.http.post<any>(`${API_BASE}/update-review-comment`, payload).subscribe({
      next: (res) => {
        if (res && res.status) {
          comment.is_deleted = 1;
          notify('Rubric point deleted.', 'success');

          // Transition status to 'Manual Reviewed'
          if (this.evaluatingStudent) {
            this.evaluatingStudent.status = 'Manual Reviewed';
          }
          const matchedStudent = this.students.find(
            (s) => (this.evaluatingStudent?.user_id && s.user_id === this.evaluatingStudent.user_id) ||
                   (this.evaluationDetails?.user_id && s.user_id === this.evaluationDetails.user_id)
          );
          if (matchedStudent) {
            matchedStudent.status = 'Manual Reviewed';
          }
          if (this.evaluationDetails?.summary) {
            this.evaluationDetails.summary.status = 'Manual Reviewed';
          }
          this.recalculateKpiTotals();
          this.filterStudents();
        } else {
          notify(res?.statusMessage || 'Failed to delete comment.', 'error');
        }
      },
      error: (err) => {
        console.error('Error deleting review comment:', err);
        notify('Error deleting review comment.', 'error');
      }
    });
  }


  setSplitMode(mode: 'split' | 'viewer-expanded' | 'eval-expanded'): void {
    this.splitMode = mode;
  }

  // ─── Attach Answer Sheet Modal Handlers ───
  hasAttachedSheet(student?: StudentEvaluation | null): boolean {
    if (!student) return false;
    if (student.pagesInfo && !student.pagesInfo.startsWith('0 of 0')) return true;
    if (student.isUploaded) return true;
    if (student.status && student.status !== 'Not Evaluated') return true;
    if (student.matchedFile || student.rawFile || (student.scannedPagesData && student.scannedPagesData.length > 0)) return true;
    return false;
  }

  onAttachClick(student: StudentEvaluation): void {
    if (this.hasAttachedSheet(student)) {
      this.pendingAttachStudent = student;
      this.isAttachConfirmPopupOpen = true;
    } else {
      this.attachMode = 'replace';
      this.openAttachModal(student);
    }
  }

  chooseAttachAction(action: 'replace' | 'add'): void {
    this.attachMode = action;
    const targetStudent = this.pendingAttachStudent;
    this.closeAttachConfirmPopup();
    if (targetStudent) {
      this.openAttachModal(targetStudent);
    }
  }

  closeAttachConfirmPopup(): void {
    this.isAttachConfirmPopupOpen = false;
    this.pendingAttachStudent = null;
  }

  openAttachModal(student?: StudentEvaluation): void {
    this.selectedStudentForAttach = student || this.evaluatingStudent || null;
    this.isAttachModalOpen = true;
    this.selectedFilesList = [];
    this.uploadedRawFiles = [];
  }

  closeAttachModal(): void {
    this.isAttachModalOpen = false;
    this.selectedStudentForAttach = null;
    this.selectedFilesList = [];
    this.uploadedRawFiles = [];
    this.isUploading = false;
  }

  removeFileFromList(index: number): void {
    if (index >= 0 && index < this.selectedFilesList.length) {
      this.selectedFilesList.splice(index, 1);
      if (index < this.uploadedRawFiles.length) {
        this.uploadedRawFiles.splice(index, 1);
      }
    }
  }

  onModalDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onModalDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onModalFileDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.isUploading) return;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processFilesForAttach(files);
    }
  }

  onMultipleFilesSelected(event: any): void {
    const files: FileList = event.target?.files;
    if (files && files.length > 0) {
      this.processFilesForAttach(files);
    }
    // Reset file input value so user can re-select same file if needed
    if (event.target) {
      event.target.value = '';
    }
  }

  private processFilesForAttach(files: FileList | File[]): void {
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      // Avoid duplicate additions of the exact same filename
      const exists = this.uploadedRawFiles.some(existing => existing.name === f.name && existing.size === f.size);
      if (!exists) {
        this.uploadedRawFiles.push(f);
        const sizeMb = (f.size / (1024 * 1024)).toFixed(1);
        this.selectedFilesList.push({
          id: `file_${Date.now()}_${i}`,
          name: f.name,
          size: `${Number(sizeMb) > 0 ? sizeMb : '0.8'} MB`,
          pages: f.name.toLowerCase().endsWith('.pdf') ? 'PDF Document' : 'Image File'
        });
      }
    }
  }

  attachAndEvaluateAll(): void {
    const targetStudent = this.selectedStudentForAttach || this.evaluatingStudent;
    const userId = targetStudent?.user_id;
    const examId = this.selectedExamId;

    if (!examId || !userId) {
      notify('Please select a valid exam and student.', 'info');
      return;
    }

    if (this.uploadedRawFiles.length === 0) {
      notify('Please choose at least one PDF or image file to upload.', 'info');
      return;
    }

    this.isUploading = true;
    const formData = new FormData();
    formData.append('exam_id', examId);
    formData.append('user_id', userId);
    formData.append('replace', this.attachMode === 'add' ? 'false' : 'true');

    for (let i = 0; i < this.uploadedRawFiles.length; i++) {
      formData.append('file', this.uploadedRawFiles[i]);
    }

    this.http.post<any>(`${API_BASE}/test-evaluation/upload-answer-sheet`, formData).subscribe({
      next: (res) => {
        this.isUploading = false;
        if (res && res.status) {
          notify(res.statusMessage || 'Answer sheet uploaded successfully.', 'success');
          if (targetStudent) {
            const pagesCount = res.data?.total_pages || res.data?.pages?.length || 1;
            targetStudent.pagesInfo = `${pagesCount} of ${pagesCount} pages`;
            targetStudent.missingPagesWarning = undefined;
            targetStudent.status = 'AI Evaluated';
            if (res.data?.marks) {
              targetStudent.marks = res.data.marks;
            }
            targetStudent.matchedFile = undefined;
            targetStudent.isUploaded = true;
            targetStudent.actionText = 'Review';
            targetStudent.actionClass = 'btn-solid-blue';

            // Instantly sync in-memory cache in allPublishedExams so table never lags or shows stale data
            const currentExam = this.allPublishedExams.find(e => e.exam_id === examId);
            if (currentExam && Array.isArray(currentExam.assigned_users)) {
              const u = currentExam.assigned_users.find((au: any) => String(au.user_id) === String(userId));
              if (u) {
                u.pages_count = pagesCount;
                u.evaluation_status = 'AI Evaluated';
                u.status = 'AI Evaluated';
                u.score = res.data?.score != null ? res.data.score : u.score;
                u.marks_awarded = res.data?.score != null ? res.data.score : u.marks_awarded;
                u.percentage = res.data?.percentage != null ? res.data.percentage : u.percentage;
              }
            }

            this.recalculateKpiTotals();
            this.filterStudents();
            this.cdr.detectChanges();
          }
          this.closeAttachModal();
          if (targetStudent) {
            this.openStudentEvaluation(targetStudent);
          } else if (this.currentView === 'evaluate' && this.evaluatingStudent?.user_id === userId) {
            this.loadEvaluationDetails(examId, userId);
          }
        } else {
          notify(res?.statusMessage || 'Failed to upload answer sheet.', 'error');
        }
      },
      error: (err) => {
        this.isUploading = false;
        console.error('Error uploading answer sheet:', err);
        notify(err?.error?.statusMessage || 'Error uploading answer sheet.', 'error');
      }
    });
  }

  // ─── Scan Answer Sheet Modal Handlers (Production-Ready) ───
  openScanModal(student?: StudentEvaluation): void {
    this.selectedStudentForScan = student || this.students[0] || null;
    this.isScanModalOpen = true;
    this.cameraError = '';

    // Production standard: Start with Page 1 ready to capture (no fake pre-scanned pages)
    this.scannedPages = [
      { id: `p_${Date.now()}_1`, pageNumber: 1, status: 'ready' }
    ];
    this.activeScanPageIndex = 0;

    this.initCamera();
  }

  closeScanModal(): void {
    this.stopCameraStream();
    this.isScanModalOpen = false;
    this.selectedStudentForScan = null;
    this.cameraError = '';
  }

  async initCamera(): Promise<void> {
    this.cameraError = '';

    // Verify secure context (required for production/Azure HTTPS deployments)
    if (typeof window !== 'undefined' && !window.isSecureContext && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      this.cameraError = 'Camera access requires a secure connection (HTTPS). Please open this site over HTTPS or localhost.';
      this.isCameraStreaming = false;
      return;
    }

    if (typeof navigator === 'undefined' || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.cameraError = 'Camera API is not supported on this browser or platform.';
      this.isCameraStreaming = false;
      return;
    }

    try {
      // 1. Request camera permission from browser
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      };

      const initialStream = await navigator.mediaDevices.getUserMedia(constraints);
      this.mediaStream = initialStream;
      this.isCameraStreaming = true;
      this.cameraError = '';
      this.attachStreamToVideo();

      // 2. Enumerate real camera devices now that permission is granted
      await this.enumerateCameraDevices();
    } catch (err: any) {
      this.handleCameraError(err);
    }
  }

  async enumerateCameraDevices(): Promise<void> {
    try {
      if (typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter((d) => d.kind === 'videoinput');
        if (videoInputs.length > 0) {
          this.availableCameras = videoInputs.map((d, index) => ({
            id: d.deviceId,
            label: d.label || (index === 0 ? 'Integrated Camera' : `Camera ${index + 1}`)
          }));

          // Sync selected camera id if available
          const activeTrack = this.mediaStream?.getVideoTracks()[0];
          const activeSettings = activeTrack?.getSettings();
          if (activeSettings?.deviceId) {
            this.selectedCameraId = activeSettings.deviceId;
          } else if (this.availableCameras.length > 0 && !this.availableCameras.some((c: { id: string; label: string }) => c.id === this.selectedCameraId)) {
            this.selectedCameraId = this.availableCameras[0].id;
          }
        }
      }
    } catch (err: any) {
      console.warn('Could not enumerate camera devices:', err);
    }
  }

  async startCameraStream(deviceId?: string): Promise<void> {
    this.stopCameraStream();
    this.cameraError = '';
    try {
      if (typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints: MediaStreamConstraints = {
          video: deviceId && deviceId !== 'default'
            ? { deviceId: { exact: deviceId }, width: { ideal: 1920 }, height: { ideal: 1080 } }
            : { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } },
          audio: false
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        this.mediaStream = stream;
        this.isCameraStreaming = true;
        this.cameraError = '';
        this.attachStreamToVideo();
        await this.enumerateCameraDevices();
      }
    } catch (err: any) {
      this.handleCameraError(err);
    }
  }

  private attachStreamToVideo(): void {
    if (this.scannerVideoElement && this.mediaStream) {
      if (this.scannerVideoElement.srcObject !== this.mediaStream) {
        this.scannerVideoElement.srcObject = this.mediaStream;
      }
      this.scannerVideoElement.play().catch((err) => {
        console.warn('Video auto-play interrupted:', err);
      });
    }
  }

  private handleCameraError(err: any): void {
    this.stopCameraStream();
    console.error('Camera access error:', err);
    const errorName = err?.name || '';
    if (errorName === 'NotAllowedError' || errorName === 'PermissionDeniedError') {
      this.cameraError = 'Camera permission was denied. Please allow camera access in your browser settings to scan answer sheets.';
    } else if (errorName === 'NotFoundError' || errorName === 'DevicesNotFoundError') {
      this.cameraError = 'No camera device found. Please connect a webcam or camera to continue.';
    } else if (errorName === 'NotReadableError' || errorName === 'TrackStartError') {
      this.cameraError = 'Camera is in use by another application or tab. Please close other applications and retry.';
    } else if (errorName === 'OverconstrainedError') {
      this.cameraError = 'The requested camera resolution is not supported. Retrying standard resolution...';
      navigator.mediaDevices?.getUserMedia({ video: true })
        .then((stream) => {
          this.mediaStream = stream;
          this.isCameraStreaming = true;
          this.cameraError = '';
          this.attachStreamToVideo();
        })
        .catch(() => {
          this.cameraError = 'Could not initialize camera. Please check your camera connection.';
        });
    } else {
      this.cameraError = err?.message || 'Could not access the camera. Please check permissions and try again.';
    }
  }

  onCameraChange(deviceId: string): void {
    this.selectedCameraId = deviceId;
    this.startCameraStream(deviceId);
  }

  stopCameraStream(): void {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track: MediaStreamTrack) => {
        track.stop();
      });
      this.mediaStream = null;
    }
    if (this.scannerVideoElement) {
      this.scannerVideoElement.srcObject = null;
    }
    this.isCameraStreaming = false;
  }

  get completedScannedCount(): number {
    return this.scannedPages.filter((p: ScannedPageItem) => p.status === 'scanned').length;
  }

  get activePageNumber(): number {
    if (this.scannedPages[this.activeScanPageIndex]) {
      return this.scannedPages[this.activeScanPageIndex].pageNumber;
    }
    return this.scannedPages.length + 1;
  }

  get currentActivePage(): ScannedPageItem | null {
    return this.scannedPages[this.activeScanPageIndex] || null;
  }

  selectScanPage(index: number): void {
    if (index >= 0 && index < this.scannedPages.length) {
      this.activeScanPageIndex = index;
      if (this.scannedPages[index].status === 'ready') {
        if (!this.isCameraStreaming) {
          this.startCameraStream(this.selectedCameraId);
        } else {
          this.attachStreamToVideo();
        }
      }
    }
  }

  addNewPage(): void {
    // If the last page is already ready, focus on it
    const lastPage = this.scannedPages[this.scannedPages.length - 1];
    if (lastPage && lastPage.status === 'ready') {
      this.activeScanPageIndex = this.scannedPages.length - 1;
      if (!this.isCameraStreaming) {
        this.startCameraStream(this.selectedCameraId);
      } else {
        this.attachStreamToVideo();
      }
      return;
    }

    const nextPageNum = this.scannedPages.length > 0
      ? Math.max(...this.scannedPages.map((p: ScannedPageItem) => p.pageNumber)) + 1
      : 1;
    this.scannedPages.push({
      id: `p_${Date.now()}_${nextPageNum}`,
      pageNumber: nextPageNum,
      status: 'ready'
    });
    this.activeScanPageIndex = this.scannedPages.length - 1;

    if (!this.isCameraStreaming) {
      this.startCameraStream(this.selectedCameraId);
    } else {
      this.attachStreamToVideo();
    }
  }

  removePage(index: number, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.scannedPages.length > 1 && index >= 0 && index < this.scannedPages.length) {
      this.scannedPages.splice(index, 1);
      // Renumber sequentially
      this.scannedPages.forEach((p: ScannedPageItem, i: number) => (p.pageNumber = i + 1));
      this.activeScanPageIndex = Math.min(this.activeScanPageIndex, this.scannedPages.length - 1);
      const currentPage = this.scannedPages[this.activeScanPageIndex];
      if (currentPage && currentPage.status === 'ready' && !this.isCameraStreaming) {
        this.startCameraStream(this.selectedCameraId);
      }
    }
  }

  captureCurrentPage(): void {
    if (this.activeScanPageIndex < 0 || this.activeScanPageIndex >= this.scannedPages.length) {
      return;
    }

    const video = this.scannerVideoElement;
    if (!this.isCameraStreaming || !video || video.videoWidth === 0 || video.videoHeight === 0) {
      console.warn('Cannot capture frame: Camera is not actively streaming.');
      return;
    }

    // Trigger camera shutter flash
    this.isFlashing = true;
    setTimeout(() => (this.isFlashing = false), 220);

    // Capture real frame from video using full source dimensions
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const capturedDataUrl = canvas.toDataURL('image/jpeg', 0.92);

    const targetPage = this.scannedPages[this.activeScanPageIndex];
    targetPage.status = 'scanned';
    targetPage.dataUrl = capturedDataUrl;
    targetPage.timestamp = Date.now();

    // Convert to Blob for backend upload/storage readiness
    canvas.toBlob((blob) => {
      if (blob) {
        targetPage.blob = blob;
      }
    }, 'image/jpeg', 0.92);

    // Automatically create and advance to next page in ready state
    const nextPageNum = this.scannedPages.length + 1;
    this.scannedPages.push({
      id: `p_${Date.now()}_${nextPageNum}`,
      pageNumber: nextPageNum,
      status: 'ready'
    });
    this.activeScanPageIndex = this.scannedPages.length - 1;

    // Ensure camera stream remains live for next page
    if (!this.isCameraStreaming) {
      this.startCameraStream(this.selectedCameraId);
    } else {
      this.attachStreamToVideo();
    }
  }

  retakeCurrentPage(): void {
    if (this.activeScanPageIndex >= 0 && this.activeScanPageIndex < this.scannedPages.length) {
      const targetPage = this.scannedPages[this.activeScanPageIndex];
      targetPage.status = 'ready';
      targetPage.dataUrl = undefined;
      targetPage.blob = undefined;

      if (!this.isCameraStreaming) {
        this.startCameraStream(this.selectedCameraId);
      } else {
        this.attachStreamToVideo();
      }
    }
  }

  finishScanning(): void {
    const validScanned = this.scannedPages.filter((p: ScannedPageItem) => p.status === 'scanned');

    if (validScanned.length === 0) {
      this.closeScanModal();
      return;
    }

    const targetStudent = this.selectedStudentForScan || this.evaluatingStudent;
    const userId = targetStudent?.user_id;
    const examId = this.selectedExamId;

    if (!examId || !userId) {
      this.closeScanModal();
      return;
    }

    this.isUploading = true;
    const formData = new FormData();
    formData.append('exam_id', examId);
    formData.append('user_id', userId);
    formData.append('replace', 'true');

    for (let i = 0; i < validScanned.length; i++) {
      const p = validScanned[i];
      if (p.blob) {
        formData.append('file', p.blob, `scanned_page_${p.pageNumber}.jpg`);
      } else if (p.dataUrl) {
        const byteString = atob(p.dataUrl.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let j = 0; j < byteString.length; j++) {
          ia[j] = byteString.charCodeAt(j);
        }
        const blob = new Blob([ab], { type: 'image/jpeg' });
        formData.append('file', blob, `scanned_page_${p.pageNumber}.jpg`);
      }
    }

    this.http.post<any>(`${API_BASE}/test-evaluation/upload-answer-sheet`, formData).subscribe({
      next: (res) => {
        this.isUploading = false;
        if (res && res.status) {
          notify(res.statusMessage || 'Scanned pages saved successfully.', 'success');
          if (targetStudent) {
            const pagesCount = res.data?.total_pages || validScanned.length;
            targetStudent.scannedPagesData = [...validScanned];
            targetStudent.pagesInfo = `${pagesCount} of ${pagesCount} pages`;
            targetStudent.missingPagesWarning = undefined;
            targetStudent.status = 'AI Evaluated';
            targetStudent.matchedFile = undefined;
            targetStudent.isUploaded = true;
            targetStudent.actionText = 'Review';
            targetStudent.actionClass = 'btn-solid-blue';
            this.recalculateKpiTotals();
            this.filterStudents();
          }
          this.closeScanModal();
          if (targetStudent) {
            this.openStudentEvaluation(targetStudent);
          } else if (this.currentView === 'evaluate' && this.evaluatingStudent?.user_id === userId) {
            this.loadEvaluationDetails(examId, userId);
          }
        } else {
          notify(res?.statusMessage || 'Failed to save scanned pages.', 'error');
          this.closeScanModal();
        }
      },
      error: (err) => {
        this.isUploading = false;
        console.error('Error saving scanned pages:', err);
        notify(err?.error?.statusMessage || 'Error saving scanned pages.', 'error');
        this.closeScanModal();
      }
    });
  }

  onBulkFilesSelected(event: any): void {
    const files: FileList = event.target?.files;
    if (!files || files.length === 0) return;

    let fastMatchedCount = 0;
    let pendingScanCount = 0;

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const baseName = f.name.replace(/\.[^/.]+$/, '').replace(/[_.-]/g, ' ').trim().toLowerCase();

      // 1. Scenario 1: Fast match against assigned students via filename
      const matchedStudent = this.students.find((s) => {
        const sName = (s.name || '').toLowerCase();
        const sRoll = (s.rollNo || '').toLowerCase();
        return sName.includes(baseName) || baseName.includes(sName) || (sRoll && baseName.includes(sRoll));
      });

      const isMatched = !!matchedStudent;
      if (isMatched) fastMatchedCount++;
      else pendingScanCount++;

      const isAlreadyEvaluated = matchedStudent?.status === 'AI Evaluated' || matchedStudent?.status === 'Manual Reviewed' || matchedStudent?.status === 'Need to Check';

      const fileItem: BulkFileItem = {
        id: Date.now() + i,
        fileName: f.name,
        studentName: matchedStudent ? matchedStudent.name : 'Identifying student...',
        matchedBy: matchedStudent ? 'Matched by file name' : 'Scanning document pages...',
        isMatched: isMatched,
        isScanning: !isMatched,
        pagesInfo: f.name.toLowerCase().endsWith('.pdf') ? '2 of 2 pages' : '1 of 1 pages',
        isPageWarning: false,
        aiStatus: isMatched ? (isAlreadyEvaluated ? 'Completed' : 'Waiting') : 'Waiting',
        evaluation: matchedStudent?.marks !== 'Not marked' ? matchedStudent?.marks || 'Ready for evaluation' : 'Ready for evaluation',
        actionText: isMatched ? (isAlreadyEvaluated ? 'Review' : 'Evaluate') : 'Scanning...',
        actionClass: isMatched ? 'btn-solid-blue' : 'btn-disabled',
        selectedStudent: matchedStudent ? matchedStudent.name : undefined,
        selectedUserId: matchedStudent ? matchedStudent.user_id : undefined,
        file: f
      };

      if (matchedStudent) {
        matchedStudent.matchedFile = f.name;
        matchedStudent.matchedBy = 'Matched by file name';
        matchedStudent.isMatched = true;
        matchedStudent.rawFile = f;
        matchedStudent.isUploaded = false;
        matchedStudent.pagesInfo = fileItem.pagesInfo;
        matchedStudent.status = isAlreadyEvaluated ? matchedStudent.status : 'Not Evaluated';
        matchedStudent.actionText = isAlreadyEvaluated ? 'Review' : 'Evaluate';
        matchedStudent.actionClass = 'btn-solid-blue';
      }

      this.bulkFiles.push(fileItem);

      // 2. Scenario 2: Multi-Page Vision & OCR inspection if not matched by filename
      if (!isMatched) {
        this.identifyStudentFromFile(fileItem, f);
      }
    }

    this.recalculateKpiTotals();
    this.filterStudents();
    if (pendingScanCount > 0) {
      notify(`Added ${files.length} file(s). ${fastMatchedCount} matched by name, scanning ${pendingScanCount} document(s)...`, 'info');
    } else {
      notify(`Added ${files.length} file(s). ${this.matchedCount} student(s) matched.`, 'success');
    }
  }

  identifyStudentFromFile(fileItem: BulkFileItem, file: File): void {
    const formData = new FormData();
    formData.append('file', file);
    if (this.selectedExamId) {
      formData.append('exam_id', this.selectedExamId);
    }
    const studentRoster = this.students.map((s) => ({
      user_id: s.user_id,
      name: s.name,
      roll_no: s.rollNo
    }));
    formData.append('students', JSON.stringify(studentRoster));

    this.http.post<any>(`${API_BASE}/test-evaluation/identify-student`, formData).subscribe({
      next: (res) => {
        fileItem.isScanning = false;
        if (res && res.status && res.matched && (res.user_id || res.student_name)) {
          const foundStudent = this.students.find(
            (s) => (res.user_id && String(s.user_id) === String(res.user_id)) ||
                   (res.student_name && s.name && s.name.toLowerCase() === String(res.student_name).toLowerCase()) ||
                   (res.roll_no && s.rollNo && s.rollNo.toLowerCase() === String(res.roll_no).toLowerCase())
          );

          const isAlreadyEvaluated = foundStudent?.status === 'AI Evaluated' || foundStudent?.status === 'Manual Reviewed' || foundStudent?.status === 'Need to Check';

          fileItem.isMatched = true;
          fileItem.studentName = res.student_name || foundStudent?.name || 'Identified Student';
          fileItem.selectedUserId = res.user_id || foundStudent?.user_id;
          fileItem.selectedStudent = fileItem.studentName;
          fileItem.matchedBy = res.matched_by || 'Identified from test paper';
          fileItem.aiStatus = isAlreadyEvaluated ? 'Completed' : 'Waiting';
          fileItem.actionText = isAlreadyEvaluated ? 'Review' : 'Evaluate';
          fileItem.actionClass = 'btn-solid-blue';

          if (foundStudent) {
            foundStudent.matchedFile = fileItem.fileName;
            foundStudent.matchedBy = fileItem.matchedBy;
            foundStudent.isMatched = true;
            foundStudent.rawFile = fileItem.file;
            foundStudent.isUploaded = false;
            foundStudent.pagesInfo = fileItem.pagesInfo;
            foundStudent.status = isAlreadyEvaluated ? foundStudent.status : 'Not Evaluated';
            foundStudent.actionText = isAlreadyEvaluated ? 'Review' : 'Evaluate';
            foundStudent.actionClass = 'btn-solid-blue';
          }
          notify(`Identified ${fileItem.studentName} from ${fileItem.fileName} (${fileItem.matchedBy})`, 'success');
        } else {
          fileItem.isMatched = false;
          fileItem.studentName = 'Student not identified';
          fileItem.matchedBy = 'No student matched';
          fileItem.aiStatus = 'Waiting';
          fileItem.actionText = 'Select student';
          fileItem.actionClass = 'btn-disabled';
        }
        this.recalculateKpiTotals();
        this.filterStudents();
      },
      error: (err) => {
        fileItem.isScanning = false;
        fileItem.isMatched = false;
        fileItem.studentName = 'Student not identified';
        fileItem.matchedBy = 'No student matched';
        fileItem.aiStatus = 'Waiting';
        fileItem.actionText = 'Select student';
        fileItem.actionClass = 'btn-disabled';
        this.recalculateKpiTotals();
        this.filterStudents();
        console.warn('Student identification failed for file:', fileItem.fileName, err);
      }
    });
  }

  evaluateAllMatchedBulk(): void {
    // Ensure all matched bulkFiles have their rawFile and matching properties synced to this.students
    for (const bf of this.bulkFiles) {
      if (bf.isMatched && bf.file) {
        const targetStudent = this.students.find(
          (s) => (bf.selectedUserId && String(s.user_id) === String(bf.selectedUserId)) ||
                 (bf.studentName && s.name && s.name.toLowerCase() === bf.studentName.toLowerCase())
        );
        if (targetStudent) {
          targetStudent.rawFile = bf.file;
          targetStudent.matchedFile = bf.fileName;
          targetStudent.matchedBy = bf.matchedBy;
          targetStudent.isMatched = true;
          targetStudent.pagesInfo = bf.pagesInfo;
        }
      }
    }
    const studentsToEval = this.students.filter(
      (s) => (s.isMatched || s.matchedFile || s.rawFile || s.status === 'AI Evaluated' || s.pagesInfo !== '0 of 0 pages') && s.user_id
    );

    if (studentsToEval.length === 0 && this.bulkFiles.length === 0) {
      notify('Please upload or attach answer sheets first.', 'info');
      return;
    }

    if (!this.selectedExamId) {
      notify('Please select an exam first.', 'info');
      return;
    }

    const pendingUploads = this.students.filter((s) => s.rawFile && !s.isUploaded && s.user_id);

    if (pendingUploads.length > 0) {
      notify(`Queuing ${pendingUploads.length} answer sheet(s) for background AI evaluation...`, 'info');
      this.isUploading = true;
      this.isBulkEvaluating = true;
      this.bulkProgress = {
        total: pendingUploads.length,
        completed: 0,
        failed: 0,
        percentage: 0,
        message: 'Processing answer sheets in the background...'
      };

      // Set initial status to queued for all pending students
      for (const s of pendingUploads) {
        s.status = 'Evaluating...';
        s.actionText = 'Queued...';
        s.actionClass = 'btn-evaluating-pulse';
        s.matchedFile = undefined;
      }

      const formData = new FormData();
      formData.append('exam_id', this.selectedExamId);

      const manifest = pendingUploads.map((s) => ({
        user_id: s.user_id,
        name: s.name,
        file_name: s.rawFile?.name
      }));
      formData.append('manifest', JSON.stringify(manifest));

      pendingUploads.forEach((s) => {
        if (s.rawFile) {
          formData.append('files', s.rawFile, `${s.user_id}___${s.rawFile.name}`);
        }
      });

      this.http.post<any>(`${API_BASE}/test-evaluation/start-bulk-evaluation`, formData).subscribe({
        next: (res) => {
          if (res && res.status && res.job_id) {
            this.activeBulkJobId = res.job_id;
            this.startEvaluationEventStream(res.job_id);
          } else {
            this.isUploading = false;
            this.isBulkEvaluating = false;
            notify(res?.statusMessage || 'Failed to start bulk evaluation queue.', 'error');
          }
        },
        error: (err) => {
          this.isUploading = false;
          this.isBulkEvaluating = false;
          console.error('Error starting bulk evaluation:', err);
          notify(err?.error?.statusMessage || 'Failed to enqueue bulk answer sheets.', 'error');
        }
      });
    } else {
      // Update bulk files state
      for (const f of this.bulkFiles) {
        if (f.isMatched) {
          f.aiStatus = 'AI Evaluated';
          f.evaluation = 'Evaluated';
          f.actionText = 'Review';
          f.actionClass = 'btn-solid-blue';
          f.isUploaded = true;
        }
      }
      this.recalculateKpiTotals();
      this.filterStudents();
      notify('All matched sheets are already evaluated.', 'info');
    }
  }

  startEvaluationEventStream(jobId: string): void {
    if (this.bulkEvalEventSource) {
      this.bulkEvalEventSource.close();
      this.bulkEvalEventSource = undefined;
    }

    const token = sessionStorage.getItem('token') || '';
    const streamUrl = `${API_BASE}/test-evaluation/evaluation-stream/${jobId}?token=${encodeURIComponent(token)}`;

    this.bulkEvalEventSource = new EventSource(streamUrl);

    this.bulkEvalEventSource.addEventListener('job_snapshot', (e: any) => {
      try {
        const data = JSON.parse(e.data);
        this.bulkProgress.total = data.total || this.bulkProgress.total;
        this.bulkProgress.completed = data.completed || 0;
        this.bulkProgress.failed = data.failed || 0;
        this.bulkProgress.percentage = data.percentage || 0;
        if (data.students && Array.isArray(data.students)) {
          data.students.forEach((stData: any) => {
            const student = this.students.find((s) => String(s.user_id) === String(stData.user_id));
            if (student) {
              if (stData.status === 'evaluating') {
                student.status = 'Evaluating...';
                student.actionText = 'Evaluating...';
                student.actionClass = 'btn-evaluating-pulse';
              } else if (stData.status === 'completed') {
                student.status = 'AI Evaluated';
                student.matchedFile = undefined;
                student.marks = stData.marks || student.marks;
                student.isUploaded = true;
                student.actionText = 'Review';
                student.actionClass = 'btn-solid-blue';
              } else if (stData.status === 'failed') {
                student.status = 'Failed';
                student.actionText = 'Retry';
                student.actionClass = 'btn-retry-danger';
              }
            }
          });
        }
        this.recalculateKpiTotals();
        this.cdr.detectChanges();
      } catch (err) {
        console.warn('Error parsing job_snapshot:', err);
      }
    });

    this.bulkEvalEventSource.addEventListener('sheet_started', (e: any) => {
      try {
        const data = JSON.parse(e.data);
        const student = this.students.find((s) => String(s.user_id) === String(data.user_id));
        if (student) {
          student.status = 'Evaluating...';
          student.actionText = 'Evaluating...';
          student.actionClass = 'btn-evaluating-pulse';
        }
        this.bulkProgress.message = data.message || `Evaluating ${data.student_name}...`;
        this.cdr.detectChanges();
      } catch (err) {
        console.warn('Error parsing sheet_started:', err);
      }
    });

    this.bulkEvalEventSource.addEventListener('sheet_completed', (e: any) => {
      try {
        const data = JSON.parse(e.data);
        const student = this.students.find((s) => String(s.user_id) === String(data.user_id));
        if (student) {
          student.status = 'AI Evaluated';
          student.matchedFile = undefined;
          student.marks = data.marks || student.marks;
          student.isUploaded = true;
          student.pagesInfo = `${data.total_pages || 1} of ${data.total_pages || 1} pages`;
          student.actionText = 'Review';
          student.actionClass = 'btn-solid-blue';
        }
        // Update corresponding item in bulkFiles table if present
        for (const bf of this.bulkFiles) {
          if (String(bf.selectedUserId) === String(data.user_id)) {
            bf.aiStatus = 'AI Evaluated';
            bf.evaluation = data.marks || 'Evaluated';
            bf.actionText = 'Review';
            bf.actionClass = 'btn-solid-blue';
            bf.isUploaded = true;
          }
        }
        this.bulkProgress.completed = data.completed;
        this.bulkProgress.failed = data.failed || 0;
        this.bulkProgress.percentage = data.percentage;
        this.bulkProgress.message = data.message;
        this.recalculateKpiTotals();
        this.filterStudents();
        this.cdr.detectChanges();
      } catch (err) {
        console.warn('Error parsing sheet_completed:', err);
      }
    });

    this.bulkEvalEventSource.addEventListener('sheet_failed', (e: any) => {
      try {
        const data = JSON.parse(e.data);
        const student = this.students.find((s) => String(s.user_id) === String(data.user_id));
        if (student) {
          student.status = 'Failed';
          student.actionText = 'Retry';
          student.actionClass = 'btn-retry-danger';
        }
        this.bulkProgress.completed = data.completed;
        this.bulkProgress.failed = data.failed || 1;
        this.bulkProgress.percentage = data.percentage;
        this.bulkProgress.message = data.message;
        notify(data.message || 'A sheet evaluation encountered an error.', 'error');
        this.cdr.detectChanges();
      } catch (err) {
        console.warn('Error parsing sheet_failed:', err);
      }
    });

    this.bulkEvalEventSource.addEventListener('job_completed', (e: any) => {
      try {
        const data = JSON.parse(e.data);
        this.isBulkEvaluating = false;
        this.isUploading = false;
        this.bulkProgress.percentage = 100;
        this.bulkProgress.message = data.message || 'All evaluations complete.';
        notify(data.message || `Evaluation completed: ${data.completed} succeeded, ${data.failed} failed.`, data.failed > 0 ? 'info' : 'success');
        if (this.bulkEvalEventSource) {
          this.bulkEvalEventSource.close();
          this.bulkEvalEventSource = undefined;
        }
        this.recalculateKpiTotals();
        this.filterStudents();
        this.cdr.detectChanges();
      } catch (err) {
        console.warn('Error parsing job_completed:', err);
      }
    });

    this.bulkEvalEventSource.onerror = (err) => {
      console.warn('SSE connection notice / fallback poll check:', err);
      if (this.activeBulkJobId) {
        this.http.get<any>(`${API_BASE}/test-evaluation/evaluation-status/${this.activeBulkJobId}`).subscribe({
          next: (res) => {
            if (res && res.status && res.data) {
              const d = res.data;
              this.bulkProgress.completed = d.completed;
              this.bulkProgress.failed = d.failed;
              this.bulkProgress.percentage = d.percentage;
              if (d.status === 'completed' || d.status === 'failed') {
                this.isBulkEvaluating = false;
                this.isUploading = false;
                if (this.bulkEvalEventSource) {
                  this.bulkEvalEventSource.close();
                  this.bulkEvalEventSource = undefined;
                }
                this.recalculateKpiTotals();
                this.filterStudents();
                this.cdr.detectChanges();
              }
            }
          }
        });
      }
    };
  }

  onStudentSelectedForUnmatched(fileItem: BulkFileItem, studentName: string): void {
    fileItem.selectedStudent = studentName;
    if (studentName && studentName !== 'Choose student') {
      const foundStudent = this.students.find((s) => s.name === studentName);
      fileItem.studentName = studentName;
      fileItem.selectedUserId = foundStudent?.user_id;
      fileItem.matchedBy = 'Manually assigned';
      fileItem.isMatched = true;
      fileItem.aiStatus = 'AI Evaluated';
      fileItem.actionText = 'Review';
      fileItem.actionClass = 'btn-solid-blue';

      if (foundStudent) {
        foundStudent.matchedFile = fileItem.fileName;
        foundStudent.matchedBy = 'Manually assigned';
        foundStudent.isMatched = true;
        foundStudent.rawFile = fileItem.file;
        foundStudent.isUploaded = false;
        foundStudent.pagesInfo = fileItem.pagesInfo;
        foundStudent.status = foundStudent.status === 'Not Evaluated' ? 'AI Evaluated' : foundStudent.status;
        foundStudent.actionText = 'Review';
        foundStudent.actionClass = 'btn-solid-blue';
      }
    } else {
      fileItem.studentName = 'Student not identified';
      fileItem.selectedUserId = undefined;
      fileItem.isMatched = false;
      fileItem.aiStatus = 'Waiting';
      fileItem.actionText = 'Select student';
      fileItem.actionClass = 'btn-disabled';
    }

    this.recalculateKpiTotals();
    this.filterStudents();
  }

  removeBulkFile(fileItem: BulkFileItem, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    const idx = this.bulkFiles.findIndex((f) => f.id === fileItem.id || f.fileName === fileItem.fileName);
    if (idx !== -1) {
      this.bulkFiles.splice(idx, 1);
    }

    const matchedStudent = this.students.find(
      (s) => s.matchedFile === fileItem.fileName || (fileItem.selectedUserId && s.user_id === fileItem.selectedUserId) || (s.rawFile && s.rawFile === fileItem.file)
    );
    if (matchedStudent) {
      this.resetStudentEvaluationFile(matchedStudent);
    }

    const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    fileInputs.forEach((input) => (input.value = ''));

    this.recalculateKpiTotals();
    this.filterStudents();
    notify(`Removed "${fileItem.fileName}"`, 'info');
  }

  clearAllBulkFiles(): void {
    if (!this.bulkFiles || this.bulkFiles.length === 0) return;

    for (const f of this.bulkFiles) {
      const matchedStudent = this.students.find(
        (s) => s.matchedFile === f.fileName || (f.selectedUserId && s.user_id === f.selectedUserId) || (s.rawFile && s.rawFile === f.file)
      );
      if (matchedStudent) {
        this.resetStudentEvaluationFile(matchedStudent);
      }
    }

    this.bulkFiles = [];
    const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    fileInputs.forEach((input) => (input.value = ''));

    this.recalculateKpiTotals();
    this.filterStudents();
    this.refreshData();
    notify('All uploaded bulk files have been removed.', 'info');
  }

  removeMatchedStudentFile(student: StudentEvaluation, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    const fileName = student.matchedFile;
    if (fileName) {
      const bIdx = this.bulkFiles.findIndex((f) => f.fileName === fileName || (f.file && f.file === student.rawFile));
      if (bIdx !== -1) {
        this.bulkFiles.splice(bIdx, 1);
      }
    }
    this.resetStudentEvaluationFile(student);

    const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    fileInputs.forEach((input) => (input.value = ''));

    this.recalculateKpiTotals();
    this.filterStudents();
    notify(`Removed attached file for ${student.name}`, 'info');
  }

  resetStudentEvaluationFile(student: StudentEvaluation): void {
    student.matchedFile = undefined;
    student.matchedBy = undefined;
    student.isMatched = false;
    student.rawFile = undefined;
    student.missingPagesWarning = undefined;
    if (!student.isUploaded) {
      student.pagesInfo = '0 of 0 pages';
      student.status = 'Not Evaluated';
      student.marks = 'Not marked';
      student.actionText = 'Evaluate';
      student.actionClass = 'btn-outline-blue';
    }
  }

  getEligibleStudentsForLink(currentFile?: BulkFileItem): StudentEvaluation[] {
    if (!this.students || this.students.length === 0) {
      return [];
    }

    return this.students.filter((st) => {
      // Preserve current selection if this student is already selected for this unmatched file
      const isCurrentSelection =
        !!currentFile &&
        ((currentFile.selectedStudent && currentFile.selectedStudent === st.name) ||
         (currentFile.selectedUserId && String(currentFile.selectedUserId) === String(st.user_id)));

      if (isCurrentSelection) {
        return true;
      }

      // Exclude if already evaluated or marks awarded
      const isEvaluated =
        (st.status && st.status !== 'Not Evaluated') ||
        (st.marks && st.marks !== 'Not marked');
      if (isEvaluated) {
        return false;
      }

      // Exclude if student has uploaded sheets or attached sheets from DB / camera / attach modal
      if (st.isUploaded || (st.scannedPagesData && st.scannedPagesData.length > 0)) {
        return false;
      }

      // Exclude if already matched or linked to another file
      if (st.isMatched || st.matchedFile || st.rawFile) {
        return false;
      }

      // Exclude if matched to any other bulk file
      const isMatchedToOtherBulkFile = this.bulkFiles.some(
        (bf) =>
          bf !== currentFile &&
          bf.isMatched &&
          ((bf.selectedUserId && String(bf.selectedUserId) === String(st.user_id)) ||
           (bf.studentName && bf.studentName.toLowerCase() === st.name.toLowerCase()))
      );
      if (isMatchedToOtherBulkFile) {
        return false;
      }

      // Exclude if pagesInfo indicates attached pages
      if (st.pagesInfo && !st.pagesInfo.startsWith('0 of 0')) {
        return false;
      }

      return true;
    });
  }

  get isScanningBulkFiles(): boolean {
    return this.bulkFiles.some((f: BulkFileItem) => !!f.isScanning);
  }

  get unmatchedBulkFiles(): BulkFileItem[] {
    return this.bulkFiles.filter((f: BulkFileItem) => !f.isMatched);
  }

  get unmatchedCount(): number {
    return this.bulkFiles.filter((f: BulkFileItem) => !f.isMatched).length;
  }

  get matchedCount(): number {
    return this.bulkFiles.filter((f: BulkFileItem) => f.isMatched).length;
  }

  get bulkMissingPagesCount(): number {
    return this.bulkFiles.filter((f: BulkFileItem) => f.isPageWarning).length;
  }

  get bulkEvaluatedCount(): number {
    return this.bulkFiles.filter((f: BulkFileItem) => f.aiStatus === 'Completed' || f.aiStatus === 'AI Evaluated').length;
  }

  // Image Preview Modal
  previewModalImage: { url: string; title: string } | null = null;
  imageZoom: number = 1;

  openImageModal(url: string | null | undefined, title?: string) {
    if (!url) return;
    const resolved = this.resolveMediaUrl(url);
    if (!resolved) return;
    this.imageZoom = 1;
    this.previewModalImage = {
      url: resolved,
      title: title || 'Image Preview'
    };
  }

  closeImageModal() {
    this.previewModalImage = null;
    this.imageZoom = 1;
  }

  modalZoomIn() {
    if (this.imageZoom < 3) {
      this.imageZoom = Math.min(3, +(this.imageZoom + 0.25).toFixed(2));
    }
  }

  modalZoomOut() {
    if (this.imageZoom > 0.5) {
      this.imageZoom = Math.max(0.5, +(this.imageZoom - 0.25).toFixed(2));
    }
  }

  modalResetZoom() {
    this.imageZoom = 1;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.previewModalImage) {
      this.closeImageModal();
    }
  }
}


