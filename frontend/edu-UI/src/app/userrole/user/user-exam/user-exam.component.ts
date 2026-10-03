import { Component, OnInit, OnDestroy, NgZone, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { API_BASE } from 'src/app/shared/api.config';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { notify } from 'src/app/shared/global-notify';

// Web Speech API typings
declare var webkitSpeechRecognition: any;

interface QuestionOption {
  id?: string;
  options_id?: string;
  option_id?: string;
  text?: string;
  option_text?: string;
  image_url?: string;
  gcs_path?: string;
  [key: string]: any;
}

interface Question {
  id?: string;
  question?: string;
  text?: string;
  type?: string; // 'choose' | 'multi' | 'fill' | 'paragraph'
  options?: QuestionOption[];
  marks?: number;
  media?: Array<any>;
}

@Component({
  selector: 'app-user-exam-runner',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './user-exam.component.html',
  styleUrls: ['./user-exam.component.scss']
})
export class UserExamRunnerComponent implements OnInit, OnDestroy {
  exam: any = null;
  questions: Question[] = [];
  answers: { [key: string]: any } = {};
  currentIndex = 0;

  showConfirm = false;
  isSubmitted = false;

  // Voice input & scan text properties
  recognition: any = null;
  recordingQuestionId: string | number | null = null;
  speechSupported = false;
  baseAnswerBeforeRecording = '';
  enableMicrophone = true;
  enableScanText = true;

  // Answer Image & Camera properties
  extractingQuestionId: string | number | null = null;
  uploadProgressText = '';
  showCameraModal = false;
  activeCameraQuestionId: string | number | null = null;
  cameraStream: MediaStream | null = null;
  cameraCapturedPhoto: string | null = null;

  // Lightbox Preview properties
  showImagePreviewModal = false;
  previewImages: string[] = [];
  previewActiveIndex = 0;
  previewQuestionId: string | number | null = null;

  // ── Image Cropper & Rotation Properties ──
  showCropModal = false;
  rawImageForCrop: string | null = null;
  cropTargetQuestionId: string | number | null = null;
  cropEditExistingIndex: number | null = null;
  cropRotation = 0;
  cropBox = { x: 5, y: 5, width: 90, height: 90 };
  private activeCropDragHandle: string | null = null;
  private cropDragStartX = 0;
  private cropDragStartY = 0;
  private cropDragStartBox = { x: 5, y: 5, width: 90, height: 90 };

  getTextAnswer(questionId: string | number): string {
    const key = questionId !== undefined && questionId !== null && questionId !== '' ? questionId : '';
    const ans = this.answers[key] !== undefined ? this.answers[key] : (this.answers[String(key)] !== undefined ? this.answers[String(key)] : '');
    if (!ans) return '';
    if (typeof ans === 'string') return ans;
    if (typeof ans === 'object' && !Array.isArray(ans)) {
      return (ans.text || ans.textAnswer || '').toString();
    }
    return '';
  }

  setTextAnswer(questionId: string | number, text: string) {
    const key = questionId !== undefined && questionId !== null && questionId !== '' ? questionId : '';
    const existingImages = this.getAnswerImages(key);
    if (existingImages.length > 0) {
      this.answers[key] = {
        text: text,
        images: existingImages
      };
    } else {
      this.answers[key] = text;
    }
    this.persistExamState();
    this.scheduleAutosave();
  }

  getAnswerImages(questionId: string | number): string[] {
    const key = questionId !== undefined && questionId !== null && questionId !== '' ? questionId : '';
    const ans = this.answers[key] !== undefined ? this.answers[key] : (this.answers[String(key)] !== undefined ? this.answers[String(key)] : null);
    if (!ans) return [];
    if (typeof ans === 'object' && !Array.isArray(ans)) {
      const imgs = ans.images || ans.answerImages || ans.answer_images;
      return Array.isArray(imgs) ? imgs : [];
    }
    if (Array.isArray(ans)) {
      const isImageArr = ans.some(item => typeof item === 'string' && (item.startsWith('data:image') || item.endsWith('.jpg') || item.endsWith('.png') || item.endsWith('.webp')));
      if (isImageArr) return ans;
    }
    return [];
  }

  addAnswerImages(questionId: string | number, newImages: string[]) {
    const key = questionId !== undefined && questionId !== null && questionId !== '' ? questionId : '';
    const currentImages = this.getAnswerImages(key);
    const updatedImages = [...currentImages, ...newImages];
    const currentText = this.getTextAnswer(key);
    this.answers[key] = {
      text: currentText,
      images: updatedImages
    };
    this.persistExamState();
    this.scheduleAutosave();
  }

  removeAnswerImage(questionId: string | number, index: number) {
    const key = questionId !== undefined && questionId !== null && questionId !== '' ? questionId : '';
    const currentImages = this.getAnswerImages(key);
    if (index >= 0 && index < currentImages.length) {
      currentImages.splice(index, 1);
      const currentText = this.getTextAnswer(key);
      if (currentImages.length > 0) {
        this.answers[key] = {
          text: currentText,
          images: currentImages
        };
      } else {
        this.answers[key] = currentText;
      }
      this.persistExamState();
      this.scheduleAutosave();
      notify('Answer photo removed.', 'info');
    }
  }

  isAnswered(q: any, i: number): boolean {
    if (!q) return false;
    const key = q.id !== undefined && q.id !== null && q.id !== '' ? q.id : i;
    const ans = this.answers[key] !== undefined ? this.answers[key] : (this.answers[String(key)] !== undefined ? this.answers[String(key)] : this.answers[Number(key)]);
    if (ans === undefined || ans === null) return false;
    if (Array.isArray(ans)) return ans.length > 0;
    if (typeof ans === 'string') return ans.trim().length > 0;
    if (typeof ans === 'object') {
      const text = (ans.text || ans.textAnswer || '').trim();
      const images = ans.images || ans.answerImages || [];
      return text.length > 0 || (Array.isArray(images) && images.length > 0);
    }
    return true;
  }

  get answeredCount() {
    return this.questions.filter((q, i) => this.isAnswered(q, i)).length;
  }
  get progressPercent() {
    return this.questions.length ? Math.round((this.answeredCount / this.questions.length) * 100) : 0;
  }

  totalSeconds = 0;
  remaining = 0;
  intervalRef: any = null;
  examTitle = '';
  examId = '';
  attempt_id = '';
  schedule_id = '';
  submitting = false;
  testStopped = false;
  private statusIntervalRef: any = null;
  private submitUrl = `${API_BASE}/submit-exam`;
  private autosaveUrl = `${API_BASE}/autosave-exam`;
  private autosaveTimer: any = null;
  private statusUrl = `${API_BASE}/active-exam-status`;

  constructor(
    private http: HttpClient,
    private confirmService: ConfirmService,
    private ngZone: NgZone,
    private router: Router,
    private loader: LoaderService
  ) {
    // Initialize speech recognition
    this.initSpeechRecognition();
  }

  @HostListener('window:beforeunload', ['$event'])
  warnBeforeUnload(event: BeforeUnloadEvent): void {
    if (!this.isSubmitted && !this.testStopped && !!this.attempt_id && !!this.exam) {
      this.persistExamState();
      try {
        const payload = JSON.stringify({
          attempt_id: this.attempt_id,
          answers: this.answers,
          remaining_seconds: this.remaining
        });
        if (navigator.sendBeacon) {
          navigator.sendBeacon(this.autosaveUrl, new Blob([payload], { type: 'application/json' }));
        }
      } catch (e) {}
      event.preventDefault();
      event.returnValue = '';
    }
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.isSubmitted || this.submitting || this.testStopped || !this.attempt_id || !this.exam) {
      return true;
    }
    return this.confirmService.confirm({
      title: 'Leave Test?',
      message: 'Are you sure you want to leave the test?\n\nLeaving will immediately complete and submit your test with the answers you have saved so far. Unanswered questions will remain unanswered.',
      confirmText: 'Leave',
      cancelText: 'Cancel'
    }).pipe(
      switchMap(ok => {
        if (!ok) return of(false);
        return this.executeSubmit().pipe(
          map(() => true),
          catchError(() => of(true))
        );
      })
    );
  }

  promptLeaveTest() {
    if (this.submitting || this.isSubmitted || this.testStopped) return;
    this.confirmService.confirm({
      title: 'Leave Test?',
      message: 'Are you sure you want to leave the test?\n\nLeaving will immediately complete and submit your test with the answers you have saved so far. Unanswered questions will remain unanswered.',
      confirmText: 'Leave',
      cancelText: 'Cancel'
    }).subscribe(ok => {
      if (ok) {
        this.submit();
      }
    });
  }

  initSpeechRecognition() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.speechSupported = true;
      this.recognition = new SpeechRecognition();
      
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      this.recognition.continuous = !isMobile;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event: any) => {
        this.ngZone.run(() => {
          if (this.recordingQuestionId === null || this.testStopped) return;

          let accumulatedFinal = '';
          let currentInterim = '';

          for (let i = 0; i < event.results.length; i++) {
            const res = event.results[i];
            if (res.isFinal) {
              accumulatedFinal += res[0].transcript + ' ';
            } else {
              currentInterim += res[0].transcript;
            }
          }

          const base = this.baseAnswerBeforeRecording ? this.baseAnswerBeforeRecording.trim() + ' ' : '';
          const fullText = (base + accumulatedFinal + currentInterim).replace(/\s+/g, ' ').trim();
          this.setTextAnswer(this.recordingQuestionId, fullText);
        });
      };

      this.recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        this.ngZone.run(() => {
          if (event.error === 'no-speech') {
            return;
          }
          if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            notify('Microphone access denied. Please allow microphone access in your browser settings.', 'error');
            this.recordingQuestionId = null;
          } else if (event.error === 'network') {
            notify('Voice input error: Network connection required for speech recognition.', 'error');
            this.recordingQuestionId = null;
          } else if (event.error !== 'aborted') {
            notify('Voice input error: ' + event.error, 'error');
            this.recordingQuestionId = null;
          }
        });
      };

      this.recognition.onend = () => {
        this.ngZone.run(() => {
          // If still recording on mobile (where continuous=false), restart automatically
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          if (isMobile && this.recordingQuestionId !== null && !this.testStopped) {
            this.baseAnswerBeforeRecording = this.getTextAnswer(this.recordingQuestionId);
            try {
              this.recognition.start();
              return;
            } catch (e) {}
          }

          if (this.recordingQuestionId !== null) {
            const currentAnswer = this.getTextAnswer(this.recordingQuestionId);
            if (currentAnswer && typeof currentAnswer === 'string') {
              this.setTextAnswer(this.recordingQuestionId, currentAnswer.trim());
            }
            this.recordingQuestionId = null;
          }
        });
      };
    } else {
      this.speechSupported = false;
    }
  }

  async toggleVoiceInput(questionId: string | number) {
    if (this.testStopped || this.submitting || this.isSubmitted) return;
    if (!this.enableMicrophone) {
      notify('Microphone input is disabled by the administrator for this test.', 'error');
      return;
    }
    if (!this.speechSupported) {
      notify('Voice input is not supported in your browser. Please use Google Chrome or Edge.', 'error');
      return;
    }

    if (this.recordingQuestionId === questionId) {
      // Stop recording
      this.recordingQuestionId = null;
      try {
        this.recognition.stop();
      } catch (e) {}
      const currentAnswer = this.getTextAnswer(questionId);
      if (currentAnswer && typeof currentAnswer === 'string') {
        this.setTextAnswer(questionId, currentAnswer.trim());
      }
    } else {
      // Stop any existing recording first
      if (this.recordingQuestionId !== null) {
        try { this.recognition.stop(); } catch(e) {}
      }

      // Request microphone permission explicitly on mobile if mediaDevices is available
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach(track => track.stop());
        } catch (err: any) {
          notify('Microphone permission denied. Please allow microphone access in your browser settings.', 'error');
          return;
        }
      }

      this.recordingQuestionId = questionId;
      this.baseAnswerBeforeRecording = this.getTextAnswer(questionId);
      try {
        this.recognition.start();
      } catch (e) {
        try { this.recognition.stop(); } catch(err){}
        setTimeout(() => {
          try { this.recognition.start(); } catch(err){}
        }, 150);
      }
    }
  }

  isRecording(questionId: string | number): boolean {
    return this.recordingQuestionId === questionId;
  }

  // ── Handwritten Image Upload (Multiple Selection, No OCR) ──
  isExtracting(qId: string | number): boolean {
    if (this.extractingQuestionId === null || qId === null || qId === undefined) return false;
    return String(this.extractingQuestionId) === String(qId);
  }

  async onImageSelected(event: any, questionId: string | number) {
    if (this.testStopped || this.submitting || this.isSubmitted) return;
    const files: FileList = event?.target?.files;
    if (!files || files.length === 0) return;

    const validFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        validFiles.push(file);
      }
    }

    if (validFiles.length === 0) {
      notify('Please select valid image files (JPEG, PNG, WebP, etc.).', 'error');
      if (event?.target) event.target.value = '';
      return;
    }

    this.extractingQuestionId = questionId;
    this.uploadProgressText = `Loading 1 / ${validFiles.length}...`;

    try {
      const readPromises = validFiles.map((file, idx) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.ngZone.run(() => {
              this.uploadProgressText = `Loading ${idx + 1} / ${validFiles.length}...`;
            });
            resolve(reader.result as string);
          };
          reader.onerror = (err) => reject(err);
          reader.readAsDataURL(file);
        });
      });

      const dataUrls = await Promise.all(readPromises);
      if (dataUrls.length === 1) {
        // Automatically open Crop modal for single photo upload/camera capture
        this.openCropModal(dataUrls[0], questionId);
      } else {
        this.addAnswerImages(questionId, dataUrls);
        notify(`${dataUrls.length} answer photos added successfully.`, 'success');
      }
    } catch (err) {
      console.error('Failed to load image files', err);
      notify('Failed to load selected images. Please try again.', 'error');
    } finally {
      this.extractingQuestionId = null;
      this.uploadProgressText = '';
      if (event?.target) event.target.value = '';
    }
  }

  // ── Camera Snapshot Capture Methods ──
  async openCamera(questionId: string | number, nativeFallbackInput?: HTMLInputElement) {
    if (this.testStopped || this.submitting || this.isSubmitted) return;

    // Check if WebRTC getUserMedia is supported in the current browsing context (requires HTTPS or localhost)
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      if (nativeFallbackInput) {
        // Fallback directly to native device camera capture (works on mobile browsers and non-HTTPS origins)
        nativeFallbackInput.click();
        return;
      }
      notify('Camera access requires a secure connection (HTTPS or localhost) or is not supported on this browser.', 'error');
      return;
    }

    this.activeCameraQuestionId = questionId;
    this.cameraCapturedPhoto = null;
    this.showCameraModal = true;

    try {
      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          }
        });
      } catch (e) {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
      }

      this.cameraStream = stream;
      setTimeout(() => {
        const videoEl = document.querySelector('.camera-video-element') as HTMLVideoElement;
        if (videoEl) {
          videoEl.srcObject = stream;
          videoEl.play().catch(err => console.warn('Video play warning:', err));
        }
      }, 100);
    } catch (err: any) {
      console.error('Camera access error:', err);
      this.closeCameraModal();
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        notify('Camera permission was denied. Please allow camera access in your browser settings.', 'error');
      } else {
        notify('Could not access camera: ' + (err.message || 'Device camera unavailable'), 'error');
      }
    }
  }

  captureCameraPhoto() {
    const videoEl = document.querySelector('.camera-video-element') as HTMLVideoElement;
    if (!videoEl || !videoEl.videoWidth || !videoEl.videoHeight) {
      notify('Camera video stream is loading. Please try in a moment.', 'info');
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = videoEl.videoWidth;
    canvas.height = videoEl.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
      this.cameraCapturedPhoto = canvas.toDataURL('image/jpeg', 0.92);
    }
  }

  retakeCameraPhoto() {
    this.cameraCapturedPhoto = null;
    setTimeout(() => {
      const videoEl = document.querySelector('.camera-video-element') as HTMLVideoElement;
      if (videoEl && this.cameraStream) {
        videoEl.srcObject = this.cameraStream;
        videoEl.play().catch(() => {});
      }
    }, 50);
  }

  acceptCameraPhoto(andCrop = true) {
    if (this.cameraCapturedPhoto && this.activeCameraQuestionId !== null) {
      const qId = this.activeCameraQuestionId;
      const photo = this.cameraCapturedPhoto;
      this.closeCameraModal();
      if (andCrop) {
        // Open Crop & Rotate tool immediately
        this.openCropModal(photo, qId);
      } else {
        // Attach raw full photo directly
        this.addAnswerImages(qId, [photo]);
        notify('Answer photo attached.', 'success');
      }
    }
  }

  closeCameraModal() {
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => track.stop());
      this.cameraStream = null;
    }
    this.showCameraModal = false;
    this.cameraCapturedPhoto = null;
    this.activeCameraQuestionId = null;
  }

  // ── Image Cropper & Rotation Methods ──
  openCropModal(imageUrl: string, questionId: string | number | null, existingIndex: number | null = null) {
    if (!imageUrl || questionId === null || questionId === undefined) return;
    this.rawImageForCrop = imageUrl;
    this.cropTargetQuestionId = questionId;
    this.cropEditExistingIndex = existingIndex;
    this.cropRotation = 0;
    this.cropBox = { x: 5, y: 5, width: 90, height: 90 };
    this.showCropModal = true;
  }

  rotateCropImage(degrees = 90) {
    this.cropRotation = (this.cropRotation + degrees) % 360;
  }

  resetCropBox() {
    this.cropBox = { x: 0, y: 0, width: 100, height: 100 };
    this.cropRotation = 0;
  }

  closeCropModal() {
    this.showCropModal = false;
    this.rawImageForCrop = null;
    this.cropTargetQuestionId = null;
    this.cropEditExistingIndex = null;
    this.activeCropDragHandle = null;
  }

  startCropDrag(event: MouseEvent | TouchEvent, handle: string) {
    event.preventDefault();
    event.stopPropagation();
    this.activeCropDragHandle = handle;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    this.cropDragStartX = clientX;
    this.cropDragStartY = clientY;
    this.cropDragStartBox = { ...this.cropBox };

    const onMove = (moveEvt: MouseEvent | TouchEvent) => {
      this.handleCropDragMove(moveEvt);
    };

    const onEnd = () => {
      this.activeCropDragHandle = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };

    window.addEventListener('mousemove', onMove, { passive: false });
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
  }

  private handleCropDragMove(event: MouseEvent | TouchEvent) {
    if (!this.activeCropDragHandle) return;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    const containerEl = document.querySelector('.crop-image-container') as HTMLElement;
    if (!containerEl) return;
    const rect = containerEl.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const deltaXPercent = ((clientX - this.cropDragStartX) / rect.width) * 100;
    const deltaYPercent = ((clientY - this.cropDragStartY) / rect.height) * 100;

    const minSize = 10;
    let newX = this.cropDragStartBox.x;
    let newY = this.cropDragStartBox.y;
    let newWidth = this.cropDragStartBox.width;
    let newHeight = this.cropDragStartBox.height;

    if (this.activeCropDragHandle === 'move') {
      newX = Math.max(0, Math.min(100 - newWidth, this.cropDragStartBox.x + deltaXPercent));
      newY = Math.max(0, Math.min(100 - newHeight, this.cropDragStartBox.y + deltaYPercent));
    } else if (this.activeCropDragHandle === 'nw') {
      newX = Math.max(0, Math.min(this.cropDragStartBox.x + this.cropDragStartBox.width - minSize, this.cropDragStartBox.x + deltaXPercent));
      newY = Math.max(0, Math.min(this.cropDragStartBox.y + this.cropDragStartBox.height - minSize, this.cropDragStartBox.y + deltaYPercent));
      newWidth = (this.cropDragStartBox.x + this.cropDragStartBox.width) - newX;
      newHeight = (this.cropDragStartBox.y + this.cropDragStartBox.height) - newY;
    } else if (this.activeCropDragHandle === 'ne') {
      newY = Math.max(0, Math.min(this.cropDragStartBox.y + this.cropDragStartBox.height - minSize, this.cropDragStartBox.y + deltaYPercent));
      newWidth = Math.max(minSize, Math.min(100 - this.cropDragStartBox.x, this.cropDragStartBox.width + deltaXPercent));
      newHeight = (this.cropDragStartBox.y + this.cropDragStartBox.height) - newY;
    } else if (this.activeCropDragHandle === 'sw') {
      newX = Math.max(0, Math.min(this.cropDragStartBox.x + this.cropDragStartBox.width - minSize, this.cropDragStartBox.x + deltaXPercent));
      newWidth = (this.cropDragStartBox.x + this.cropDragStartBox.width) - newX;
      newHeight = Math.max(minSize, Math.min(100 - this.cropDragStartBox.y, this.cropDragStartBox.height + deltaYPercent));
    } else if (this.activeCropDragHandle === 'se') {
      newWidth = Math.max(minSize, Math.min(100 - this.cropDragStartBox.x, this.cropDragStartBox.width + deltaXPercent));
      newHeight = Math.max(minSize, Math.min(100 - this.cropDragStartBox.y, this.cropDragStartBox.height + deltaYPercent));
    }

    this.cropBox = {
      x: Math.max(0, Math.min(100 - minSize, newX)),
      y: Math.max(0, Math.min(100 - minSize, newY)),
      width: Math.max(minSize, Math.min(100 - newX, newWidth)),
      height: Math.max(minSize, Math.min(100 - newY, newHeight))
    };
  }

  applyCrop() {
    if (!this.rawImageForCrop || this.cropTargetQuestionId === null || this.cropTargetQuestionId === undefined) return;
    const targetQId = this.cropTargetQuestionId;
    const existingIndex = this.cropEditExistingIndex;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Step 1: Create canvas with rotation
      const rotCanvas = document.createElement('canvas');
      const rotCtx = rotCanvas.getContext('2d');
      if (!rotCtx) return;

      const angle = (this.cropRotation % 360 + 360) % 360;
      if (angle === 90 || angle === 270) {
        rotCanvas.width = img.height;
        rotCanvas.height = img.width;
      } else {
        rotCanvas.width = img.width;
        rotCanvas.height = img.height;
      }

      rotCtx.translate(rotCanvas.width / 2, rotCanvas.height / 2);
      rotCtx.rotate((angle * Math.PI) / 180);
      rotCtx.drawImage(img, -img.width / 2, -img.height / 2);

      // Step 2: Extract sub-rectangle corresponding to cropBox percentages
      const cropPxX = Math.round((this.cropBox.x / 100) * rotCanvas.width);
      const cropPxY = Math.round((this.cropBox.y / 100) * rotCanvas.height);
      const cropPxW = Math.round((this.cropBox.width / 100) * rotCanvas.width);
      const cropPxH = Math.round((this.cropBox.height / 100) * rotCanvas.height);

      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = Math.max(1, cropPxW);
      finalCanvas.height = Math.max(1, cropPxH);
      const finalCtx = finalCanvas.getContext('2d');
      if (!finalCtx) return;

      finalCtx.drawImage(
        rotCanvas,
        cropPxX, cropPxY, cropPxW, cropPxH,
        0, 0, finalCanvas.width, finalCanvas.height
      );

      const croppedDataUrl = finalCanvas.toDataURL('image/jpeg', 0.92);

      if (existingIndex !== null && existingIndex >= 0) {
        const currentImgs = this.getAnswerImages(targetQId);
        if (existingIndex < currentImgs.length) {
          currentImgs[existingIndex] = croppedDataUrl;
          const currentText = this.getTextAnswer(targetQId);
          this.answers[targetQId] = {
            text: currentText,
            images: currentImgs
          };
          this.persistExamState();
          this.scheduleAutosave();
          notify('Answer photo updated.', 'success');
        }
      } else {
        this.addAnswerImages(targetQId, [croppedDataUrl]);
        notify('Answer photo cropped and attached.', 'success');
      }

      this.closeCropModal();
    };
    img.src = this.rawImageForCrop;
  }

  // ── Lightbox Preview Methods ──
  openImagePreview(questionId: string | number, index: number) {
    this.previewQuestionId = questionId;
    this.previewImages = this.getAnswerImages(questionId);
    this.previewActiveIndex = Math.max(0, Math.min(index, this.previewImages.length - 1));
    this.showImagePreviewModal = true;
  }

  prevPreviewImage() {
    if (this.previewImages.length <= 1) return;
    this.previewActiveIndex = (this.previewActiveIndex - 1 + this.previewImages.length) % this.previewImages.length;
  }

  nextPreviewImage() {
    if (this.previewImages.length <= 1) return;
    this.previewActiveIndex = (this.previewActiveIndex + 1) % this.previewImages.length;
  }

  closeImagePreview() {
    this.showImagePreviewModal = false;
    this.previewImages = [];
    this.previewActiveIndex = 0;
    this.previewQuestionId = null;
  }

  persistExamState() {
    if (!this.exam) return;
    try {
      const wrapper = this.exam?.data ? this.exam.data : this.exam;
      const examDetail = wrapper?.exam_detail || wrapper || {};
      examDetail.saved_answers = { ...this.answers };
      examDetail.remaining_seconds = this.remaining;
      if (this.exam.data && this.exam.data !== examDetail) {
        this.exam.data.saved_answers = { ...this.answers };
        this.exam.data.remaining_seconds = this.remaining;
        this.exam.data.test_end_time = examDetail.test_end_time;
        this.exam.data.test_start_time = examDetail.test_start_time;
      }
      this.exam.saved_answers = { ...this.answers };
      this.exam.answers = { ...this.answers };
      this.exam.remaining_seconds = this.remaining;
      this.exam.test_end_time = examDetail.test_end_time;
      this.exam.test_start_time = examDetail.test_start_time;
      this.exam.enable_microphone = this.enableMicrophone;
      this.exam.enable_scan_text = this.enableScanText;
      examDetail.enable_microphone = this.enableMicrophone;
      examDetail.enable_scan_text = this.enableScanText;

      sessionStorage.setItem('launched_exam', JSON.stringify(this.exam));
      if (this.attempt_id) {
        localStorage.setItem('exam_answers_' + this.attempt_id, JSON.stringify(this.answers));
        localStorage.setItem('exam_state_' + this.attempt_id, JSON.stringify({
          test_start_time: examDetail.test_start_time,
          test_end_time: examDetail.test_end_time,
          duration_mins: examDetail.duration_mins || this.totalSeconds / 60,
          remaining_seconds: this.remaining
        }));
      }
    } catch (e) {
      console.warn('Failed to persist exam state to storage', e);
    }
  }

  clearExamState() {
    try {
      sessionStorage.removeItem('launched_exam');
      if (this.attempt_id) {
        localStorage.removeItem('exam_answers_' + this.attempt_id);
        localStorage.removeItem('exam_state_' + this.attempt_id);
      }
    } catch (e) {}
  }

  ngOnInit() {
    this.loader.hide();
    try {
      const raw = sessionStorage.getItem('launched_exam');
      this.exam = raw ? JSON.parse(raw) : null;
    } catch(e){}

    if (this.exam) {
      const wrapper = this.exam?.data ? this.exam.data : this.exam;
      const examDetail = wrapper?.exam_detail || wrapper || {};
      this.schedule_id = this.exam.schedule_id || examDetail?.schedule_id || wrapper?.schedule_id || this.exam.id || '';
      this.examTitle = examDetail?.title || wrapper?.title || this.exam.title || this.exam.name || '';
      this.examId = this.exam.exam_id || examDetail?.exam_id || wrapper?.exam_id || this.exam.id || '';
      this.attempt_id = this.exam.attempt_id || examDetail?.attempt_id || wrapper?.attempt_id || '';
      
      const micVal = wrapper?.enable_microphone ?? examDetail?.enable_microphone ?? this.exam?.enable_microphone ?? wrapper?.enableMicrophone ?? examDetail?.enableMicrophone ?? this.exam?.enableMicrophone;
      this.enableMicrophone = micVal !== undefined && micVal !== null ? (micVal === true || micVal === 1 || String(micVal).toLowerCase() === 'true') : true;

      const scanVal = wrapper?.enable_scan_text ?? examDetail?.enable_scan_text ?? this.exam?.enable_scan_text ?? wrapper?.enableScanText ?? examDetail?.enableScanText ?? this.exam?.enableScanText;
      this.enableScanText = scanVal !== undefined && scanVal !== null ? (scanVal === true || scanVal === 1 || String(scanVal).toLowerCase() === 'true') : true;
      const rawQs = Array.isArray(wrapper?.questions) ? wrapper.questions : (Array.isArray(this.exam.questions) ? this.exam.questions : []);
      this.questions = rawQs.map((q: any) => ({
        id: q.question_id || q.id,
        question: q.question_text || q.question || '',
        text: q.question_text || q.question || '',
        type: q.question_type || q.type,
        media: Array.isArray(q.media) ? q.media : [],
        options: (Array.isArray(q.options) ? q.options : []).map((o: any) => {
          if (typeof o === 'string') {
            const cleanStr = (o === "''" || o === '""') ? '' : o;
            return { id: o, text: cleanStr, image_url: '', gcs_path: '' };
          }
          const rawText = o.text !== undefined && o.text !== null ? o.text : (o.option_text !== undefined && o.option_text !== null ? o.option_text : '');
          const cleanText = (typeof rawText === 'string' && (rawText === "''" || rawText === '""')) ? '' : String(rawText || '');
          return {
            id: o.id || o.options_id || o.option_id || cleanText || '',
            text: cleanText,
            image_url: o.image_url || o.url || '',
            gcs_path: o.gcs_path || ''
          };
        }),
        marks: q.marks !== undefined && q.marks !== null ? Number(q.marks) : (q.points !== undefined && q.points !== null ? Number(q.points) : 1)
      }));

      // 1. Restore saved answers from all available storage levels
      let restoredAnswers: any = {};
      if (examDetail?.saved_answers && typeof examDetail.saved_answers === 'object') {
        restoredAnswers = { ...restoredAnswers, ...examDetail.saved_answers };
      }
      if (this.exam?.saved_answers && typeof this.exam.saved_answers === 'object') {
        restoredAnswers = { ...restoredAnswers, ...this.exam.saved_answers };
      }
      if (this.exam?.answers && typeof this.exam.answers === 'object') {
        restoredAnswers = { ...restoredAnswers, ...this.exam.answers };
      }
      if (this.attempt_id) {
        try {
          const localAns = localStorage.getItem('exam_answers_' + this.attempt_id);
          if (localAns) {
            const parsedLocal = JSON.parse(localAns);
            if (parsedLocal && typeof parsedLocal === 'object') {
              restoredAnswers = { ...restoredAnswers, ...parsedLocal };
            }
          }
        } catch (e) {}
      }

      // Ensure multi-choice answers are normalized to arrays for checkbox state
      this.questions.forEach((q, i) => {
        const key = q.id !== undefined && q.id !== null && q.id !== '' ? String(q.id) : String(i);
        const qType = (q.type || '').toLowerCase();
        if (qType === 'multi') {
          const val = restoredAnswers[key] !== undefined ? restoredAnswers[key] : (restoredAnswers[q.id || ''] !== undefined ? restoredAnswers[q.id || ''] : restoredAnswers[i]);
          if (val !== undefined && val !== null && !Array.isArray(val)) {
            restoredAnswers[key] = [String(val)];
          }
        }
      });

      this.answers = restoredAnswers;

      // 2. Setup persistent countdown timer based on start / end timestamps
      const mins = Number(examDetail?.duration_mins || this.exam?.duration_mins || this.exam?.duration || 30);
      this.totalSeconds = mins * 60;

      let localState: any = null;
      if (this.attempt_id) {
        try {
          const rawState = localStorage.getItem('exam_state_' + this.attempt_id);
          if (rawState) localState = JSON.parse(rawState);
        } catch (e) {}
      }

      const now = Date.now();
      const existingEndTime = Number(examDetail?.test_end_time || (localState?.test_end_time && Number(localState.test_end_time) > now ? localState.test_end_time : null));

      if (existingEndTime && !isNaN(existingEndTime) && existingEndTime > 0) {
        // Page was refreshed during an active session -> continue from saved end time
        this.remaining = Math.max(0, Math.floor((existingEndTime - now) / 1000));
        examDetail.test_end_time = existingEndTime;
        examDetail.test_start_time = examDetail.test_start_time || localState?.test_start_time || (existingEndTime - (this.totalSeconds * 1000));
      } else {
        // Fresh start or newly resumed test -> initialize remaining seconds and calculate new end time
        const serverRemSec = (examDetail?.remaining_seconds !== undefined && examDetail?.remaining_seconds !== null)
          ? Math.max(0, Math.floor(Number(examDetail.remaining_seconds)))
          : null;

        if (serverRemSec !== null) {
          this.remaining = serverRemSec;
        } else if (localState?.remaining_seconds !== undefined && localState?.remaining_seconds !== null) {
          this.remaining = Math.max(0, Math.floor(Number(localState.remaining_seconds)));
        } else {
          this.remaining = this.totalSeconds;
        }

        const endTime = now + (this.remaining * 1000);
        const startTime = endTime - (this.totalSeconds * 1000);

        examDetail.test_start_time = startTime;
        examDetail.test_end_time = endTime;
      }

      examDetail.remaining_seconds = this.remaining;
      this.persistExamState();

      if (this.remaining <= 0) {
        this.autoSubmit();
      } else {
        this.startTimer();
        this.startStatusPolling();
      }
    }
  }

  ngOnDestroy() {
    this.stopTimer();
    this.stopStatusPolling();
    this.stopSpeechRecognition();
    this.closeCameraModal();
    this.closeImagePreview();
    if (this.autosaveTimer) clearTimeout(this.autosaveTimer);
  }

  startTimer() {
    this.stopTimer();
    const updateCountdown = () => {
      const wrapper = this.exam?.data ? this.exam.data : this.exam;
      const examDetail = wrapper?.exam_detail || wrapper || {};
      const endTime = Number(examDetail?.test_end_time);
      if (endTime && !isNaN(endTime)) {
        this.remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      } else if (this.remaining > 0) {
        this.remaining--;
      }
      if (this.remaining <= 0) {
        this.stopTimer();
        this.autoSubmit();
      }
    };
    updateCountdown();
    this.intervalRef = setInterval(() => {
      this.ngZone.run(() => {
        updateCountdown();
      });
    }, 1000);
  }

  autoSubmit() {
    if (this.submitting || this.isSubmitted || this.testStopped) return;
    try { notify('Time is up! Your test will be submitted automatically.', 'info'); } catch(e){}
    this.submit();
  }

  stopTimer() { if (this.intervalRef) { clearInterval(this.intervalRef); this.intervalRef = null; } }

  startStatusPolling() {
    this.stopStatusPolling();
    if (!this.attempt_id) return;
    this.checkActiveExamStatus();
    this.statusIntervalRef = setInterval(() => this.checkActiveExamStatus(), 4000);
  }

  checkActiveExamStatus() {
    if (this.testStopped || !this.attempt_id) return;
    this.http.get<any>(this.statusUrl, { params: { attempt_id: this.attempt_id, remaining_seconds: this.remaining } }).subscribe({
      next: (res) => {
        if (res?.published === false) this.stopActiveTest();
        if (['submitted', 'evaluated'].includes(res?.attempt_status)) {
          this.stopTimer();
          this.stopStatusPolling();
          this.ngZone.run(() => this.router.navigate(['/user/exam']));
        }
      },
      error: (err) => {
        if (err?.error?.errorCode === 'EXAM_UNPUBLISHED') this.stopActiveTest();
      }
    });
  }

  stopStatusPolling() {
    if (this.statusIntervalRef) { clearInterval(this.statusIntervalRef); this.statusIntervalRef = null; }
  }

  stopSpeechRecognition() {
    if (!this.recognition || this.recordingQuestionId === null) return;
    try { this.recognition.stop(); } catch(e) {}
    this.recordingQuestionId = null;
  }

  stopActiveTest() {
    if (this.testStopped) return;
    this.testStopped = true;
    this.submitting = false;
    this.showConfirm = false;
    this.stopTimer();
    this.stopStatusPolling();
    this.stopSpeechRecognition();
  }

  acknowledgeStoppedTest() {
    this.clearExamState();
    this.ngZone.run(() => this.router.navigate(['/user/exam']));
  }

  formatTime(sec: number) { const m = Math.floor(sec / 60); const s = sec % 60; return `${m}:${s.toString().padStart(2, '0')}`; }

  getOptVal(o: any): string {
    if (!o) return '';
    if (typeof o === 'string') return o;
    return o.id || o.options_id || o.option_id || o.text || o.option_text || String(o);
  }

  getOptText(o: any): string {
    if (!o) return '';
    if (typeof o === 'string') return (o === "''" || o === '""') ? '' : o;
    const txt = o.text !== undefined && o.text !== null ? o.text : (o.option_text !== undefined && o.option_text !== null ? o.option_text : '');
    if (typeof txt === 'string') {
      if (txt === "''" || txt === '""') return '';
      return txt.trim();
    }
    return '';
  }

  resolveMediaUrl(url: string | null | undefined): string {
    if (!url) return '';
    const str = String(url).trim();
    if (str.startsWith('http://') || str.startsWith('https://') || str.startsWith('data:') || str.startsWith('blob:')) {
      return str;
    }
    if (str.startsWith('/edu/api/')) {
      const base = API_BASE.replace(/\/edu\/api\/?$/, '');
      return `${base}${str}`;
    }
    if (str.startsWith('/')) {
      return `${API_BASE}${str}`;
    }
    return `${API_BASE}/${str}`;
  }

  isMultiSelected(qid: any, optVal: any): boolean {
    const key = String(qid);
    const answers = this.answers[key] || this.answers[qid] || [];
    return Array.isArray(answers) && answers.some(a => String(a) === String(optVal));
  }

  toggleMulti(qid: any, optId: any) {
    if (this.testStopped || this.submitting || this.isSubmitted) return;
    const key = String(qid);
    const set = Array.isArray(this.answers[key]) ? [...this.answers[key]] : [];
    const valStr = String(optId);
    const idx = set.findIndex(item => String(item) === valStr);
    if (idx >= 0) set.splice(idx, 1);
    else set.push(valStr);
    if (set.length === 0) {
      delete this.answers[key];
      delete this.answers[qid];
    } else {
      this.answers[key] = set;
    }
    this.persistExamState();
    this.scheduleAutosave();
  }

  selectOne(qid: any, optId: any) {
    if (this.testStopped || this.submitting || this.isSubmitted) return;
    this.answers[String(qid)] = String(optId);
    this.persistExamState();
    this.scheduleAutosave();
  }

  scheduleAutosave() {
    if (this.testStopped || this.submitting || this.isSubmitted || !this.attempt_id) return;
    this.persistExamState();
    if (this.autosaveTimer) clearTimeout(this.autosaveTimer);
    this.autosaveTimer = setTimeout(() => {
      if (this.testStopped || this.submitting || this.isSubmitted) return;
      this.http.post<any>(this.autosaveUrl, {
        attempt_id: this.attempt_id,
        answers: this.answers,
        remaining_seconds: this.remaining
      }).subscribe({
        error: (err) => { if (err?.status !== 409) console.warn('Answer autosave failed', err); }
      });
    }, 500);
  }

  scrollToQuestion(index: number) {
    try {
      const el = document.getElementById('q-' + index);
      if (el) {
        const scrollContainer =
          document.querySelector('.exam-runner-fullscreen') ||
          document.querySelector('.public-layout') ||
          document.querySelector('.app-content');
        const isMobile = window.innerWidth <= 768;
        const stickyOffset = isMobile ? 120 : 100;
        if (scrollContainer) {
          const containerRect = scrollContainer.getBoundingClientRect();
          const elementRect = el.getBoundingClientRect();
          const scrollTop = scrollContainer.scrollTop + elementRect.top - containerRect.top - stickyOffset;
          scrollContainer.scrollTo({ top: Math.max(0, scrollTop), behavior: 'smooth' });
        } else {
          const y = el.getBoundingClientRect().top + window.pageYOffset - stickyOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }
      this.currentIndex = index;
    } catch (e) { console.warn('scrollToQuestion failed', e); }
  }

  prevQuestion() {
    if (this.currentIndex <= 0) return;
    this.currentIndex--;
    this.scrollToQuestion(this.currentIndex);
  }

  nextQuestion() {
    if (this.currentIndex >= (this.questions.length - 1)) return;
    this.currentIndex++;
    this.scrollToQuestion(this.currentIndex);
  }

  getDisplayTestTitle(): string {
    const raw = this.examTitle || this.exam?.title || this.exam?.name || '';
    if (!raw) return '';
    if (raw.toLowerCase().startsWith('test scheduled name:')) {
      return raw;
    }
    return `Test Scheduled Name: ${raw}`;
  }

  openConfirm() {
    if (this.testStopped) return;
    const total = this.questions.length;
    const answered = this.answeredCount;
    const unanswered = total - answered;

    let message = '';
    if (unanswered > 0) {
      message = `You have answered ${answered} of ${total} questions and left ${unanswered} unanswered.\n\nAre you sure you want to submit the test now?`;
    } else {
      message = `You have answered all ${total} questions. Are you sure you want to submit the test?`;
    }

    this.confirmService.confirm({
      title: 'Submit Test',
      message: message,
      confirmText: 'Submit',
      cancelText: 'Cancel'
    }).subscribe(ok => {
      if (ok) {
        this.submit();
      }
    });
  }

  private buildSubmitPayload(): any {
    const userRaw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user') || sessionStorage.getItem('user_info');
    let userId = '';
    try { const u = userRaw ? JSON.parse(userRaw) : null; userId = u?.user_id || u?.id || u?.email || ''; } catch (e) {}

    const timeTakenMins = Math.round((this.totalSeconds - this.remaining) / 60);
    const resolvedScheduleId = this.schedule_id || this.exam?.schedule_id || this.exam?.data?.exam_detail?.schedule_id || this.exam?.data?.schedule_id || this.exam?.id || this.exam?.exam_id || '';

    return {
      exam_id: this.examId || this.exam?.exam_id || this.exam?.data?.exam_detail?.exam_id,
      schedule_id: resolvedScheduleId,
      user_id: userId,
      attempt_id: this.attempt_id || this.exam?.attempt_id,
      answers: this.answers,
      submitted_at: new Date().toISOString(),
      time_taken_mins: timeTakenMins
    };
  }

  private handleSuccessfulSubmit(res: any) {
    this.isSubmitted = true;
    const userRaw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user') || sessionStorage.getItem('user_info');
    let userId = '';
    try { const u = userRaw ? JSON.parse(userRaw) : null; userId = u?.user_id || u?.id || u?.email || ''; } catch (e) {}

    const completedAt = new Date().toISOString();
    const result = {
      ...(res?.data || res || {}),
      owner_user_id: userId,
      test_id: this.examId,
      title: this.examTitle,
      user: userId,
      date: completedAt,
      score: res?.score || 0,
      total_marks: res?.total_marks || 0,
      status: 'Submitted'
    };
    try {
      this.clearExamState();
      const existing = JSON.parse(sessionStorage.getItem('user_completed_exams') || '[]');
      existing.push(result);
      sessionStorage.setItem('user_completed_exams', JSON.stringify(existing));
    } catch (e) {}

    this.stopTimer();
    this.stopStatusPolling();
    this.stopSpeechRecognition();
  }

  executeSubmit(): Observable<any> {
    if (this.submitting || this.testStopped) return of(null);
    this.showConfirm = false;
    this.submitting = true;
    try { this.loader.show(); } catch (e) {}
    this.stopTimer();
    this.stopStatusPolling();
    const payload = this.buildSubmitPayload();

    return this.http.post<any>(this.submitUrl, payload).pipe(
      tap(res => {
        this.handleSuccessfulSubmit(res);
      }),
      catchError(err => {
        this.submitting = false;
        try { this.loader.hide(); } catch (e) {}
        if (err?.status === 409 && err?.error?.errorCode === 'EXAM_UNPUBLISHED') {
          this.stopActiveTest();
        } else if (err?.error?.errorCode === 'ALREADY_SUBMITTED' || (err?.status === 400 && String(err?.error?.statusMessage || '').toLowerCase().includes('already submitted'))) {
          this.handleSuccessfulSubmit(err?.error || {});
          this.ngZone.run(() => this.router.navigate(['/user/exam']));
          return of(err?.error || {});
        } else {
          this.startTimer();
          this.startStatusPolling();
          notify(err?.error?.statusMessage || 'Failed to submit exam. Please try again.', 'error');
        }
        return throwError(() => err);
      })
    );
  }

  submit() {
    this.executeSubmit().subscribe({
      next: () => {
        this.ngZone.run(() => {
          this.router.navigate(['/user/exam']).then(() => {
            try { this.loader.hide(); } catch (e) {}
          }).catch(() => {
            try { this.loader.hide(); } catch (e) {}
          });
        });
      },
      error: () => {
        try { this.loader.hide(); } catch (e) {}
      }
    });
  }
}
