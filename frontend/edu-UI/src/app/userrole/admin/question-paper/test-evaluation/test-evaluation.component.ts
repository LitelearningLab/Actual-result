import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';

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
  name: string;
  rollNo: string;
  pagesInfo: string;
  missingPagesWarning?: string;
  status: 'Completed' | 'Need to Check' | 'AI Evaluated' | 'Not Evaluated';
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

  selectedClass = 'Class 12';
  selectedSection = 'A';
  selectedSubject = 'Physics';
  selectedTest = 'Physics – Unit Test 1';

  uploadTab: 'user' | 'bulk' = 'bulk';
  searchQuery = '';
  selectedStatus = 'All statuses';

  // Filters Options
  classList = ['Class 10', 'Class 11', 'Class 12'];
  sectionList = ['A', 'B', 'C', 'D'];
  subjectList = ['Physics', 'Chemistry', 'Mathematics', 'Biology'];
  testList = ['Physics – Unit Test 1', 'Physics – Unit Test 2', 'C++ Descriptive'];
  statusList = ['All statuses', 'Completed', 'Need to Check', 'AI Evaluated', 'Not Evaluated'];

  // Test KPI Summary Data (Image 2 Design)
  testDetails = {
    title: 'Physics – Unit Test 1',
    class: 'Class 12',
    section: 'Section A',
    subject: 'Physics',
    totalMarks: '50 marks',
    totalQuestions: '23 questions',
    totalStudents: 40,
    evaluated: 25,
    needToCheck: 4,
    notEvaluated: 3,
    aiEvaluated: 8
  };

  // Student Evaluation Table Data (Image 1 Layout)
  students: StudentEvaluation[] = [
    {
      sno: 1,
      name: 'Arun Kumar',
      rollNo: 'Roll no. 12A01',
      pagesInfo: '5 of 5 pages',
      status: 'Completed',
      marks: '44 / 50',
      actionText: 'View Result',
      actionClass: 'btn-outline-blue'
    },
    {
      sno: 2,
      name: 'Priya S',
      rollNo: 'Roll no. 12A02',
      pagesInfo: '5 of 5 pages',
      status: 'Completed',
      marks: '45 / 50',
      actionText: 'View Result',
      actionClass: 'btn-outline-blue'
    },
    {
      sno: 3,
      name: 'Karthik R',
      rollNo: 'Roll no. 12A03',
      pagesInfo: '4 of 5 pages',
      missingPagesWarning: 'Page 3 is missing',
      status: 'Need to Check',
      marks: 'Not marked',
      actionText: 'Check and Review',
      actionClass: 'btn-solid-blue'
    },
    {
      sno: 4,
      name: 'Divya M',
      rollNo: 'Roll no. 12A04',
      pagesInfo: '5 of 5 pages',
      status: 'AI Evaluated',
      marks: 'AI suggests 38 / 50',
      actionText: 'Review',
      actionClass: 'btn-solid-blue'
    },
    {
      sno: 5,
      name: 'Rahul V',
      rollNo: 'Roll no. 12A05',
      pagesInfo: '0 of 5 pages',
      status: 'Not Evaluated',
      marks: 'Not marked',
      actionText: 'Evaluate',
      actionClass: 'btn-solid-blue'
    }
  ];

  filteredStudents: StudentEvaluation[] = [];

  // Bulk Upload File Data (Image 1 & Image 3)
  availableStudents = ['Choose student', 'Arun Kumar', 'Priya S', 'Karthik R', 'Divya M', 'Rahul V', 'Srinivas M'];
  
  bulkFiles: BulkFileItem[] = [
    {
      id: 1,
      fileName: 'Arun_Kumar.pdf',
      studentName: 'Arun Kumar',
      matchedBy: 'Matched by file name',
      isMatched: true,
      pagesInfo: '5 / 5',
      aiStatus: 'Completed',
      evaluation: '42 / 50',
      actionText: 'Open',
      actionClass: 'btn-outline-blue'
    },
    {
      id: 2,
      fileName: 'Priya_S.pdf',
      studentName: 'Priya S',
      matchedBy: 'Matched by file name',
      isMatched: true,
      pagesInfo: '5 / 5',
      aiStatus: 'Completed',
      evaluation: '45 / 50',
      actionText: 'Open',
      actionClass: 'btn-outline-blue'
    },
    {
      id: 3,
      fileName: 'Karthik_R.pdf',
      studentName: 'Karthik R',
      matchedBy: 'Matched by file name',
      isMatched: true,
      pagesInfo: '4 / 5',
      isPageWarning: true,
      aiStatus: 'Need to Check',
      evaluation: 'Not marked',
      actionText: 'Check and Review',
      actionClass: 'btn-solid-blue'
    },
    {
      id: 4,
      fileName: 'Divya_M.pdf',
      studentName: 'Divya M',
      matchedBy: 'Matched by file name',
      isMatched: true,
      pagesInfo: '5 / 5',
      aiStatus: 'AI Evaluated',
      evaluation: 'Waiting for review',
      actionText: 'Review',
      actionClass: 'btn-solid-blue'
    },
    {
      id: 5,
      fileName: 'scan_0032.pdf',
      studentName: 'Student not identified',
      matchedBy: '',
      isMatched: false,
      pagesInfo: '5 pages found',
      aiStatus: 'Waiting',
      evaluation: 'Not marked',
      actionText: 'Select student',
      actionClass: 'btn-disabled',
      selectedStudent: 'Choose student'
    }
  ];

  // Attach Answer Sheet Modal State (Supports Unlimited Multi-File Uploads)
  isAttachModalOpen = false;
  selectedStudentForAttach: StudentEvaluation | null = null;
  selectedFilesList: Array<{ id: string; name: string; size: string; pages: string }> = [
    {
      id: 'file_1',
      name: 'Arun_Kumar_Physics_Unit_Test.pdf',
      size: '2.4 MB',
      pages: '5 pages found'
    }
  ];

  // Scan Answer Sheet Modal State
  isScanModalOpen = false;
  selectedStudentForScan: StudentEvaluation | null = null;
  availableCameras: Array<{ id: string; label: string }> = [
    { id: 'default', label: 'Built-in camera' }
  ];
  selectedCameraId = 'default';
  isCameraStreaming = false;
  cameraError = '';
  mediaStream: MediaStream | null = null;
  isFlashing = false;

  scannedPages: ScannedPageItem[] = [];
  activeScanPageIndex = 0;

  constructor(private pageMeta: PageMetaService) {}

  ngOnInit(): void {
    this.pageMeta.setMeta('Test Evaluation');
    this.recalculateKpiTotals();
    this.filterStudents();
  }

  ngOnDestroy(): void {
    this.stopCameraStream();
  }

  recalculateKpiTotals(): void {
    const total = this.students.length;
    const evaluated = this.students.filter((s) => s.status === 'Completed').length;
    const aiEvaluated = this.students.filter((s) => s.status === 'AI Evaluated').length;
    const needToCheck = this.students.filter((s) => s.status === 'Need to Check').length;
    const notEvaluated = this.students.filter((s) => s.status === 'Not Evaluated').length;

    this.testDetails = {
      ...this.testDetails,
      totalStudents: total,
      evaluated,
      aiEvaluated,
      needToCheck,
      notEvaluated
    };
  }

  setUploadTab(tab: 'user' | 'bulk'): void {
    this.uploadTab = tab;
  }

  filterStudents(): void {
    let list = [...this.students];

    if (this.searchQuery && this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(
        (s) => s.name.toLowerCase().includes(q) || s.rollNo.toLowerCase().includes(q)
      );
    }

    if (this.selectedStatus && this.selectedStatus !== 'All statuses') {
      list = list.filter((s) => s.status === this.selectedStatus);
    }

    this.filteredStudents = list;
  }

  refreshData(): void {
    this.searchQuery = '';
    this.selectedStatus = 'All statuses';
    this.recalculateKpiTotals();
    this.filterStudents();
  }

  // ─── Attach Answer Sheet Modal Handlers ───
  openAttachModal(student?: StudentEvaluation): void {
    this.selectedStudentForAttach = student || null;
    this.isAttachModalOpen = true;
    if (student && this.selectedFilesList.length === 0) {
      this.selectedFilesList.push({
        id: `file_${Date.now()}`,
        name: `${student.name.replace(/\s+/g, '_')}_Physics_Unit_Test.pdf`,
        size: '2.4 MB',
        pages: '5 pages found'
      });
    }
  }

  closeAttachModal(): void {
    this.isAttachModalOpen = false;
    this.selectedStudentForAttach = null;
  }

  removeFileFromList(index: number): void {
    if (index >= 0 && index < this.selectedFilesList.length) {
      this.selectedFilesList.splice(index, 1);
    }
  }

  onMultipleFilesSelected(event: any): void {
    const files: FileList = event.target?.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const f = files[i];
        const sizeMb = (f.size / (1024 * 1024)).toFixed(1);
        this.selectedFilesList.push({
          id: `file_${Date.now()}_${i}`,
          name: f.name,
          size: `${sizeMb > '0.0' ? sizeMb : '0.8'} MB`,
          pages: '5 pages found'
        });
      }
    }
  }

  attachAndEvaluateAll(): void {
    if (this.selectedStudentForAttach) {
      this.selectedStudentForAttach.status = 'AI Evaluated';
      this.selectedStudentForAttach.marks = 'AI suggests 42 / 50';
      this.selectedStudentForAttach.actionText = 'Review';
      this.selectedStudentForAttach.actionClass = 'btn-solid-blue';
      this.recalculateKpiTotals();
      this.filterStudents();
    }
    
    // Also if bulk files exist, update unmatched status
    if (this.selectedFilesList.length > 0 && this.bulkFiles.length > 0) {
      const unmatched = this.bulkFiles.find((bf) => !bf.isMatched);
      if (unmatched) {
        unmatched.studentName = 'Arun Kumar';
        unmatched.matchedBy = 'Matched by file upload';
        unmatched.isMatched = true;
        unmatched.aiStatus = 'AI Evaluated';
        unmatched.evaluation = 'Waiting for review';
        unmatched.actionText = 'Review';
        unmatched.actionClass = 'btn-solid-blue';
      }
    }

    this.closeAttachModal();
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
          } else if (this.availableCameras.length > 0 && !this.availableCameras.some((c) => c.id === this.selectedCameraId)) {
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
      this.mediaStream.getTracks().forEach((track) => {
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
    return this.scannedPages.filter((p) => p.status === 'scanned').length;
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
      ? Math.max(...this.scannedPages.map((p) => p.pageNumber)) + 1
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
      this.scannedPages.forEach((p, i) => (p.pageNumber = i + 1));
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
    const validScanned = this.scannedPages.filter((p) => p.status === 'scanned');

    if (validScanned.length === 0) {
      this.closeScanModal();
      return;
    }

    if (this.selectedStudentForScan) {
      // Retain only valid captured pages
      this.scannedPages = validScanned;
      this.selectedStudentForScan.scannedPagesData = [...validScanned];
      this.selectedStudentForScan.pagesInfo = `${validScanned.length} of ${validScanned.length} pages`;
      this.selectedStudentForScan.missingPagesWarning = undefined;
      this.selectedStudentForScan.status = 'AI Evaluated';
      this.selectedStudentForScan.marks = 'AI suggests 44 / 50';
      this.selectedStudentForScan.actionText = 'Review';
      this.selectedStudentForScan.actionClass = 'btn-solid-blue';

      this.recalculateKpiTotals();
      this.filterStudents();
    }

    this.closeScanModal();
  }

  onStudentSelectedForUnmatched(fileItem: BulkFileItem, studentName: string): void {
    fileItem.selectedStudent = studentName;
    if (studentName && studentName !== 'Choose student') {
      fileItem.studentName = studentName;
      fileItem.matchedBy = 'Manually assigned';
      fileItem.isMatched = true;
      fileItem.aiStatus = 'AI Evaluated';
      fileItem.actionText = 'Review';
      fileItem.actionClass = 'btn-solid-blue';
    } else {
      fileItem.studentName = 'Student not identified';
      fileItem.isMatched = false;
      fileItem.aiStatus = 'Waiting';
      fileItem.actionText = 'Select student';
      fileItem.actionClass = 'btn-disabled';
    }
  }

  get unmatchedCount(): number {
    return this.bulkFiles.filter((f) => !f.isMatched).length;
  }
}


