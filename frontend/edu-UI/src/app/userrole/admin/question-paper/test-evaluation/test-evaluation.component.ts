import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
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
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { AuthService } from 'src/app/home/service/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { API_BASE } from 'src/app/shared/api.config';
import { notify } from 'src/app/shared/global-notify';
import { Subscription } from 'rxjs';
import { getInstituteTerminology, InstituteTerminology } from 'src/app/shared/services/institute-terminology.service';

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
  status: 'Completed' | 'Need to Check' | 'AI Evaluated' | 'Not Evaluated' | 'evaluated';
  marks: string;
  actionText: string;
  actionClass: string;
  scannedPagesData?: ScannedPageItem[];
}

export interface BulkFileItem {
  id: number;
  fileName: string;
  studentName: string;
  matchedBy: string;
  isMatched: boolean;
  pagesInfo: string;
  isPageWarning?: boolean;
  aiStatus: 'Completed' | 'Need to Check' | 'AI Evaluated' | 'Waiting';
  evaluation: string;
  actionText: string;
  actionClass: string;
  selectedStudent?: string;
  selectedUserId?: string;
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
    MatButtonModule
  ],
  templateUrl: './test-evaluation.component.html',
  styleUrls: ['./test-evaluation.component.scss']
})
export class TestEvaluationComponent implements OnInit, OnDestroy {
  scannerVideoRef?: ElementRef<HTMLVideoElement>;
  private scannerVideoElement?: HTMLVideoElement;

  @ViewChild('scannerVideo') set scannerVideo(element: ElementRef<HTMLVideoElement> | undefined) {
    this.scannerVideoRef = element;
    this.scannerVideoElement = element?.nativeElement;
    if (this.scannerVideoElement && this.mediaStream && this.isCameraStreaming) {
      this.attachStreamToVideo();
    }
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
  statusList = ['All statuses', 'Completed', 'Need to Check', 'AI Evaluated', 'Not Evaluated'];

  // Test KPI Summary Data
  testDetails = {
    title: 'Select a published test',
    class: '—',
    section: '—',
    subject: '—',
    totalMarks: '0 marks',
    totalQuestions: '0 questions',
    totalStudents: 0,
    evaluated: 0,
    needToCheck: 0,
    notEvaluated: 0,
    aiEvaluated: 0
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

  // ─── Split-View Evaluation State ───
  currentView: 'list' | 'evaluate' = 'list';
  splitMode: 'split' | 'viewer-expanded' | 'eval-expanded' = 'split';
  evaluatingStudent: StudentEvaluation | null = null;
  evaluationDetails: any = null;
  isLoadingEvaluation = false;
  activeSheetPageIndex = 0;
  zoomLevel = 100;
  evaluationCategoryFilter: 'all' | 'needs_attention' | 'reviewed' = 'all';
  isFinalizing = false;

  private authSubscription?: Subscription;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private loader: LoaderService,
    private pageMeta: PageMetaService,
    private cdr: ChangeDetectorRef
  ) {
    this.detectUserRole();
  }

  ngOnInit(): void {
    this.pageMeta.setMeta('Test Evaluation');
    this.initFilterCascade();
  }

  ngOnDestroy(): void {
    this.stopCameraStream();
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
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

  isFilterDrawerOpen = false;

  openFilterDrawer(): void {
    this.isFilterDrawerOpen = true;
  }

  closeFilterDrawer(): void {
    this.isFilterDrawerOpen = false;
  }

  toggleFilterDrawer(): void {
    this.isFilterDrawerOpen = !this.isFilterDrawerOpen;
  }

  applyFilterDrawer(): void {
    this.closeFilterDrawer();
    this.applyExamFilters();
    this.filterStudents();
  }

  resetFilterDrawer(): void {
    this.clearAppliedFilters();
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

    if (this.testList.length > 0) {
      const defaultId = this.selectedExamId && this.testList.some((t) => t.exam_id === this.selectedExamId)
        ? this.selectedExamId
        : this.testList[0].exam_id;
      this.selectedExamId = defaultId;
      this.onTestChange(defaultId);
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
    this.students = assigned.map((user: any, idx: number) => {
      const pCount = user.pages_count || 0;
      const rawStatus = user.evaluation_status || user.status || (pCount > 0 ? 'AI Evaluated' : 'Not Evaluated');
      const status = rawStatus === 'evaluated' ? 'Completed' : rawStatus;
      const totalMarksVal = exam.total_marks || 20;
      const scoreVal = user.marks_awarded != null ? user.marks_awarded : (user.score != null ? user.score : null);

      let marksDisplay = 'Not marked';
      if (scoreVal !== null) {
        marksDisplay = `${scoreVal} / ${totalMarksVal}`;
      }

      const isEvaluated = status === 'Completed' || status === 'AI Evaluated' || pCount > 0;

      return {
        sno: idx + 1,
        user_id: user.user_id,
        name: user.full_name || user.user_name || `Student ${idx + 1}`,
        rollNo: user.roll_no || user.user_name || `Roll No. ${idx + 1}`,
        pagesInfo: pCount > 0 ? `${pCount} of ${pCount} pages` : '0 of 0 pages',
        status: status,
        marks: marksDisplay,
        actionText: isEvaluated ? 'Review' : 'Evaluate',
        actionClass: 'btn-solid-blue'
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
      evaluated: 0,
      needToCheck: 0,
      notEvaluated: assigned.length,
      aiEvaluated: 0
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
      evaluated: 0,
      needToCheck: 0,
      notEvaluated: 0,
      aiEvaluated: 0
    };
  }

  setUploadTab(tab: 'user' | 'bulk'): void {
    this.uploadTab = tab;
  }

  refreshData(): void {
    if (this.activeInstituteId) {
      this.loadPublishedExams(this.activeInstituteId);
    } else if (this.selectedExamId) {
      this.onTestChange(this.selectedExamId);
    }
  }

  recalculateKpiTotals(): void {
    const total = this.students.length;
    let evaluated = 0;
    let needToCheck = 0;
    let notEvaluated = 0;
    let aiEvaluated = 0;

    for (const s of this.students) {
      if (s.status === 'Completed' || s.status === 'evaluated') {
        evaluated++;
      } else if (s.status === 'Need to Check') {
        needToCheck++;
      } else if (s.status === 'AI Evaluated') {
        aiEvaluated++;
      } else {
        notEvaluated++;
      }
    }

    this.testDetails.totalStudents = total;
    this.testDetails.evaluated = evaluated;
    this.testDetails.needToCheck = needToCheck;
    this.testDetails.notEvaluated = notEvaluated;
    this.testDetails.aiEvaluated = aiEvaluated;
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
    this.evaluatingStudent = student;
    this.currentView = 'evaluate';
    this.activeSheetPageIndex = 0;
    this.zoomLevel = 100;
    this.evaluationCategoryFilter = 'all';
    this.loadEvaluationDetails(this.selectedExamId, student.user_id);
  }

  closeStudentEvaluation(): void {
    this.currentView = 'list';
    this.evaluatingStudent = null;
    this.evaluationDetails = null;
    this.refreshData();
  }

  loadEvaluationDetails(examId: string, userId: string): void {
    this.isLoadingEvaluation = true;
    const url = `${API_BASE}/test-evaluation/student-evaluation-details?exam_id=${encodeURIComponent(examId)}&user_id=${encodeURIComponent(userId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        this.isLoadingEvaluation = false;
        if (res && res.status) {
          this.evaluationDetails = res;
          this.activeSheetPageIndex = 0;
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

  selectSheetPage(index: number): void {
    if (index >= 0 && index < this.evaluationPages.length) {
      this.activeSheetPageIndex = index;
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
  }

  get evaluationQuestions(): any[] {
    const questions: any[] = this.evaluationDetails?.questions || [];
    if (this.evaluationCategoryFilter === 'needs_attention') {
      return questions.filter(
        (q) =>
          q.manual_review_required ||
          (q.ai_confidence != null && q.ai_confidence < 70) ||
          (q.marks_awarded != null && q.marks_awarded < q.max_marks) ||
          (q.review_comments && q.review_comments.length > 0)
      );
    } else if (this.evaluationCategoryFilter === 'reviewed') {
      return questions.filter(
        (q) => q.marks_awarded != null && q.marks_awarded > 0 && !q.manual_review_required
      );
    }
    return questions;
  }

  getReviewComments(q: any, category: string): any[] {
    return (q.review_comments || []).filter((c: any) => c.category === category && !c.is_deleted);
  }

  hasReviewComments(q: any, category: string): boolean {
    return this.getReviewComments(q, category).length > 0;
  }

  getNonEmptyCategoryCount(q: any): number {
    let count = 0;
    if (this.hasReviewComments(q, 'missing')) count++;
    if (this.hasReviewComments(q, 'incorrect')) count++;
    if (this.hasReviewComments(q, 'incomplete')) count++;
    return count;
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

  // ─── Finalize Evaluation ───
  finalizeStudentEvaluation(): void {
    if (!this.selectedExamId || !this.evaluationDetails?.user_id) return;

    this.isFinalizing = true;
    const payload = {
      exam_id: this.selectedExamId,
      user_id: this.evaluationDetails.user_id,
      attempt_id: this.evaluationDetails.attempt_id
    };

    this.http.post<any>(`${API_BASE}/test-evaluation/finalize-evaluation`, payload).subscribe({
      next: (res) => {
        this.isFinalizing = false;
        if (res && res.status) {
          notify('Student evaluation successfully approved and finalized.', 'success');
          if (this.evaluatingStudent) {
            this.evaluatingStudent.status = 'Completed';
            this.evaluatingStudent.marks = `${res.data?.score || 0} / ${this.evaluationDetails?.summary?.total_marks || 0}`;
            this.evaluatingStudent.actionText = 'Review';
            this.evaluatingStudent.actionClass = 'btn-solid-blue';
          }
          this.closeStudentEvaluation();
        } else {
          notify(res?.statusMessage || 'Failed to finalize evaluation.', 'error');
        }
      },
      error: (err) => {
        this.isFinalizing = false;
        console.error('Error finalizing evaluation:', err);
        notify(err?.error?.statusMessage || 'Error finalizing evaluation.', 'error');
      }
    });
  }


  setSplitMode(mode: 'split' | 'viewer-expanded' | 'eval-expanded'): void {
    this.splitMode = mode;
  }

  // ─── Attach Answer Sheet Modal Handlers ───
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

  onMultipleFilesSelected(event: any): void {
    const files: FileList = event.target?.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const f = files[i];
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
    formData.append('replace', 'true');

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
            targetStudent.actionText = 'Review';
            targetStudent.actionClass = 'btn-solid-blue';
            this.recalculateKpiTotals();
            this.filterStudents();
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

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const baseName = f.name.replace(/\.[^/.]+$/, '').replace(/[_.-]/g, ' ').trim().toLowerCase();

      // Attempt matching against assigned students
      const matchedStudent = this.students.find((s) => {
        const sName = (s.name || '').toLowerCase();
        const sRoll = (s.rollNo || '').toLowerCase();
        return sName.includes(baseName) || baseName.includes(sName) || (sRoll && baseName.includes(sRoll));
      });

      const isMatched = !!matchedStudent;
      const fileItem: BulkFileItem = {
        id: Date.now() + i,
        fileName: f.name,
        studentName: matchedStudent ? matchedStudent.name : 'Student not identified',
        matchedBy: matchedStudent ? 'Matched by file name' : 'No student matched',
        isMatched: isMatched,
        pagesInfo: f.name.toLowerCase().endsWith('.pdf') ? '2 of 2 pages' : '1 of 1 pages',
        isPageWarning: false,
        aiStatus: isMatched ? (matchedStudent?.status === 'Completed' || matchedStudent?.status === 'AI Evaluated' ? 'Completed' : 'Waiting') : 'Waiting',
        evaluation: matchedStudent?.marks !== 'Not marked' ? matchedStudent?.marks || 'Ready for evaluation' : 'Ready for evaluation',
        actionText: isMatched ? 'Review' : 'Select student',
        actionClass: isMatched ? 'btn-solid-blue' : 'btn-disabled',
        selectedStudent: matchedStudent ? matchedStudent.name : undefined,
        selectedUserId: matchedStudent ? matchedStudent.user_id : undefined
      };

      this.bulkFiles.push(fileItem);
    }
  }

  evaluateAllMatchedBulk(): void {
    if (this.bulkFiles.length === 0) {
      notify('Please upload answer sheets first.', 'info');
      return;
    }
    const matched = this.bulkFiles.filter((f) => f.isMatched);
    if (matched.length === 0) {
      notify('No identified students to evaluate. Please select students for unmatched files.', 'info');
      return;
    }
    for (const f of matched) {
      f.aiStatus = 'Completed';
      f.evaluation = 'Evaluated';
      f.actionText = 'Review';
      f.actionClass = 'btn-solid-blue';
    }
    notify(`AI evaluation initiated for ${matched.length} matched answer sheets.`, 'success');
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
    } else {
      fileItem.studentName = 'Student not identified';
      fileItem.selectedUserId = undefined;
      fileItem.isMatched = false;
      fileItem.aiStatus = 'Waiting';
      fileItem.actionText = 'Select student';
      fileItem.actionClass = 'btn-disabled';
    }
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
}


