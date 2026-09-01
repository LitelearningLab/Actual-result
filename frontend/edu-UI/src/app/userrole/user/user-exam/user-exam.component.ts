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
import { notify } from 'src/app/shared/global-notify';

// Web Speech API typings
declare var webkitSpeechRecognition: any;

interface QuestionOption {
  id?: string;
  options_id?: string;
  option_id?: string;
  text?: string;
  option_text?: string;
  [key: string]: any;
}

interface Question {
  id?: string;
  question?: string;
  text?: string;
  type?: string; // 'choose' | 'multi' | 'fill' | 'paragraph'
  options?: QuestionOption[];
  marks?: number;
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

  // Voice input properties
  recognition: any = null;
  recordingQuestionId: string | number | null = null;
  speechSupported = false;

  isAnswered(q: any, i: number): boolean {
    if (!q) return false;
    const key = q.id !== undefined && q.id !== null && q.id !== '' ? q.id : i;
    const ans = this.answers[key] !== undefined ? this.answers[key] : (this.answers[String(key)] !== undefined ? this.answers[String(key)] : this.answers[Number(key)]);
    if (ans === undefined || ans === null) return false;
    if (Array.isArray(ans)) return ans.length > 0;
    if (typeof ans === 'string') return ans.trim().length > 0;
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

  constructor(private http: HttpClient, private confirmService: ConfirmService, private ngZone: NgZone, private router: Router) {
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
      cancelText: 'Stay in Test'
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
      cancelText: 'Stay in Test'
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
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event: any) => {
        this.ngZone.run(() => {
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript;
            }
          }
          if (finalTranscript && this.recordingQuestionId !== null) {
            if (this.testStopped) return;
            const currentAnswer = this.answers[this.recordingQuestionId] || '';
            this.answers[this.recordingQuestionId] = currentAnswer + (currentAnswer ? ' ' : '') + finalTranscript;
            this.persistExamState();
            this.scheduleAutosave();
          }
        });
      };

      this.recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        this.ngZone.run(() => {
          this.recordingQuestionId = null;
          if (event.error === 'not-allowed') {
            notify('Microphone access denied. Please allow microphone access to use voice input.', 'error');
          } else if (event.error !== 'aborted') {
            notify('Voice input error: ' + event.error, 'error');
          }
        });
      };

      this.recognition.onend = () => {
        this.ngZone.run(() => {
          this.recordingQuestionId = null;
        });
      };
    } else {
      this.speechSupported = false;
    }
  }

  toggleVoiceInput(questionId: string | number) {
    if (this.testStopped) return;
    if (!this.speechSupported) {
      notify('Voice input is not supported in your browser. Please use Chrome or Edge.', 'error');
      return;
    }

    if (this.recordingQuestionId === questionId) {
      // Stop recording
      this.recognition.stop();
      this.recordingQuestionId = null;
    } else {
      // Stop any existing recording first
      if (this.recordingQuestionId !== null) {
        this.recognition.stop();
      }
      // Start new recording
      this.recordingQuestionId = questionId;
      try {
        this.recognition.start();
      } catch (e) {
        // Recognition might already be running
        this.recognition.stop();
        setTimeout(() => {
          try { this.recognition.start(); } catch(err){}
        }, 100);
      }
    }
  }

  isRecording(questionId: string | number): boolean {
    return this.recordingQuestionId === questionId;
  }

  persistExamState() {
    if (!this.exam) return;
    try {
      const wrapper = this.exam?.data ? this.exam.data : this.exam;
      const examDetail = wrapper?.exam_detail || wrapper || {};
      examDetail.saved_answers = { ...this.answers };
      if (this.exam.data && this.exam.data !== examDetail) {
        this.exam.data.saved_answers = { ...this.answers };
      }
      this.exam.saved_answers = { ...this.answers };
      this.exam.answers = { ...this.answers };

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
    try {
      const raw = sessionStorage.getItem('launched_exam');
      this.exam = raw ? JSON.parse(raw) : null;
    } catch(e){}

    if (this.exam) {
      const wrapper = this.exam?.data ? this.exam.data : this.exam;
      const examDetail = wrapper?.exam_detail || wrapper || {};
      this.schedule_id = this.exam.schedule_id || examDetail?.schedule_id || wrapper?.schedule_id || this.exam.id || '';
      this.examTitle = this.exam.title || this.exam.name || examDetail?.title || wrapper?.title || '';
      this.examId = this.exam.exam_id || examDetail?.exam_id || wrapper?.exam_id || this.exam.id || '';
      this.attempt_id = this.exam.attempt_id || examDetail?.attempt_id || wrapper?.attempt_id || '';
      const rawQs = Array.isArray(wrapper?.questions) ? wrapper.questions : (Array.isArray(this.exam.questions) ? this.exam.questions : []);
      this.questions = rawQs.map((q: any) => ({
        id: q.question_id || q.id,
        question: q.question_text || q.question || '',
        text: q.question_text || q.question || '',
        type: q.question_type || q.type,
        options: (Array.isArray(q.options) ? q.options : []).map((o: any) => {
          if (typeof o === 'string') return { id: o, text: o };
          return {
            id: o.id || o.options_id || o.option_id || o.text || o.option_text || '',
            text: o.text || o.option_text || o.id || o.options_id || ''
          };
        }),
        marks: q.marks || q.points || 0
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
      const serverRemSec = (examDetail?.remaining_seconds !== undefined && examDetail?.remaining_seconds !== null)
        ? Math.max(0, Math.floor(Number(examDetail.remaining_seconds)))
        : null;

      // When starting fresh or continuing a paused test, initialize remaining time
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
    if (typeof o === 'string') return o;
    return o.text || o.option_text || o.id || o.options_id || o.option_id || String(o);
  }

  isMultiSelected(qid: any, optVal: any): boolean {
    const key = String(qid);
    const answers = this.answers[key] || this.answers[qid] || [];
    return Array.isArray(answers) && answers.some(a => String(a) === String(optVal));
  }

  toggleMulti(qid: any, optId: any) {
    if (this.testStopped) return;
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
    if (this.testStopped) return;
    this.answers[String(qid)] = String(optId);
    this.persistExamState();
    this.scheduleAutosave();
  }

  scheduleAutosave() {
    if (this.testStopped || !this.attempt_id) return;
    this.persistExamState();
    if (this.autosaveTimer) clearTimeout(this.autosaveTimer);
    this.autosaveTimer = setTimeout(() => {
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
        if (scrollContainer) {
          const stickyOffset = 180;
          const containerRect = scrollContainer.getBoundingClientRect();
          const elementRect = el.getBoundingClientRect();
          const scrollTop = scrollContainer.scrollTop + elementRect.top - containerRect.top - stickyOffset;
          scrollContainer.scrollTo({ top: scrollTop, behavior: 'smooth' });
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  openConfirm() {
    if (this.testStopped) return;
    this.confirmService.confirm({ title: 'Submit Test', message: 'Are you sure you want to submit the test now?', confirmText: 'Submit', cancelText: 'Cancel' }).subscribe(ok => {
      if (!ok) return; this.submit();
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
    const payload = this.buildSubmitPayload();

    return this.http.post<any>(this.submitUrl, payload).pipe(
      tap(res => {
        this.handleSuccessfulSubmit(res);
      }),
      catchError(err => {
        this.submitting = false;
        if (err?.status === 409 && err?.error?.errorCode === 'EXAM_UNPUBLISHED') {
          this.stopActiveTest();
        } else {
          notify(err?.error?.statusMessage || 'Failed to submit exam. Please try again.', 'error');
        }
        return throwError(() => err);
      })
    );
  }

  submit() {
    this.executeSubmit().subscribe({
      next: () => {
        this.ngZone.run(() => this.router.navigate(['/user/exam']));
      },
      error: () => {}
    });
  }
}
