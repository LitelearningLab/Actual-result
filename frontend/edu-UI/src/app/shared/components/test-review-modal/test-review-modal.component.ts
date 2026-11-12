import { Component, EventEmitter, HostListener, Inject, Optional, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as XLSX from 'xlsx';
import * as docx from 'docx-preview';
import { API_BASE, resolveMediaUrl } from 'src/app/shared/api.config';
import { notify } from 'src/app/shared/global-notify';

export interface ReviewTargetRow {
  schedule_id?: string;
  test_id?: string;
  title?: string;
  review_attempt_id?: string;
  attempt_id?: string;
  target_attempt_number?: number;
  review_mode?: string;
  multiple_review?: boolean;
  user_review?: boolean;
  review_available?: boolean;
  scheduleTest?: string;
  start_time?: string;
  [key: string]: any;
}

@Component({
  selector: 'app-confirm-one-time-review-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="instant-review-dialog">
      <div class="dialog-icon" aria-hidden="true">
        <mat-icon>visibility</mat-icon>
      </div>
      <h2>{{ isInstantReview ? 'One-time Instant Review' : 'One-time Review' }}</h2>
      <p class="dialog-message">
        {{ isInstantReview ? 'This test uses Instant Review.' : 'This test allows a single-time review.' }}
      </p>
      <div class="dialog-warning">
        <mat-icon class="warning-icon">warning_amber</mat-icon>
        <span>You can view this review only once. After you close it, the Review button will no longer be available.</span>
      </div>
      <div class="dialog-actions">
        <button mat-flat-button class="review-button" [mat-dialog-close]="true">
          View Review
        </button>
        <button mat-button class="cancel-button" [mat-dialog-close]="false">
          Cancel
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        border-radius: 1.25rem;
        overflow: hidden;
        background: #ffffff;
      }
      .instant-review-dialog {
        box-sizing: border-box;
        padding: 1.75rem 1.5rem 1.5rem;
        text-align: center;
        background: #ffffff;
        color: #0f172a;
        border-radius: 1.25rem;
        border: 1px solid #e2e8f0;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .dialog-icon {
        width: 3.75rem;
        height: 3.75rem;
        margin: 0 auto 0.875rem;
        border-radius: 50%;
        background: #ecfdf5;
        color: #059669;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .dialog-icon mat-icon {
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
        line-height: 2rem;
      }
      h2 {
        margin: 0 0 0.5rem;
        font-size: 1.35rem;
        font-weight: 700;
        line-height: 1.25;
        color: #0f172a !important;
      }
      .dialog-message {
        font-size: 0.95rem;
        font-weight: 500;
        color: #334155 !important;
        margin: 0 0 0.75rem;
        line-height: 1.5;
      }
      .dialog-warning {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        background: #fffbe6;
        border: 1px solid #fef08a;
        border-radius: 0.625rem;
        padding: 0.75rem 0.875rem;
        text-align: left;
        margin-top: 0.25rem;
        color: #b45309 !important;
        font-size: 0.84rem;
        font-weight: 600;
        line-height: 1.45;
      }
      .dialog-warning .warning-icon {
        font-size: 1.125rem;
        width: 1.125rem;
        height: 1.125rem;
        color: #d97706;
        flex-shrink: 0;
        margin-top: 1px;
      }
      .dialog-actions {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        margin-top: 1.5rem;
        width: 100%;
      }
      .dialog-actions button {
        height: 2.75rem;
        min-height: 44px;
        width: 100%;
        border-radius: 0.625rem;
        font-size: 0.95rem;
        font-weight: 700;
        cursor: pointer;
      }
      .review-button {
        background: #059669 !important;
        color: #ffffff !important;
        border: none !important;
        box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
      }
      .review-button:hover {
        background: #047857 !important;
      }
      .cancel-button {
        border: 1px solid #cbd5e1 !important;
        color: #334155 !important;
        background: #ffffff !important;
      }
      .cancel-button:hover {
        background: #f8fafc !important;
        color: #1e293b !important;
      }
      @media (min-width: 480px) {
        .dialog-actions {
          flex-direction: row-reverse;
        }
        .dialog-actions button {
          flex: 1;
        }
      }
    `,
  ],
})
export class ConfirmOneTimeReviewDialogComponent {
  readonly isInstantReview: boolean;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) data?: { reviewMode?: string }) {
    this.isInstantReview = String(data?.reviewMode || '').toLowerCase() === 'instant';
  }
}

@Component({
  selector: 'app-test-review-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatTooltipModule,
    ConfirmOneTimeReviewDialogComponent,
  ],
  templateUrl: './test-review-modal.component.html',
  styleUrls: ['./test-review-modal.component.scss'],
})
export class TestReviewModalComponent {
  @Output() reviewConsumed = new EventEmitter<{ row: ReviewTargetRow; attemptNumber: number }>();
  @Output() reviewClosed = new EventEmitter<void>();

  reviewOpen = false;
  reviewLoading = false;
  reviewAttempts: Array<any> = [];
  reviewSelectedAttempt = 0;

  previewModalImage: { url: string; title: string; filename?: string; mime_type?: string } | null = null;
  imageZoom = 1;

  resolveMediaUrl = resolveMediaUrl;

  private currentReviewRow: ReviewTargetRow | null = null;
  private currentReviewAttemptNo: number | null = null;
  private currentReviewIsAdmin = false;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  get selectedReviewTitle(): string {
    try {
      if (!this.reviewAttempts || !this.reviewAttempts.length) return this.currentReviewRow?.title || '';
      const idx = Number(this.reviewSelectedAttempt) || 0;
      return this.reviewAttempts[idx]?.title || this.currentReviewRow?.title || '';
    } catch {
      return '';
    }
  }

  get selectedReviewDate(): string {
    try {
      const idx = Number(this.reviewSelectedAttempt) || 0;
      const att = this.reviewAttempts?.[idx];
      const raw = att?.submitted_date || att?.started_date || this.currentReviewRow?.start_time;
      if (raw) {
        const d = new Date(raw);
        if (!isNaN(d.getTime())) {
          const pad = (n: number) => String(n).padStart(2, '0');
          return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
        }
      }
      return '';
    } catch {
      return '';
    }
  }

  isMultipleReviewEnabled(row: any): boolean {
    if (!row) return false;
    const m =
      row.multiple_review !== undefined
        ? row.multiple_review
        : row.multiple_reviews !== undefined
          ? row.multiple_reviews
          : row.user_multiple_review;
    if (m === true || m === 1 || m === '1' || m === 'true') return true;
    const mode = String(row.review_mode || '').toLowerCase();
    return mode === 'multiple' || mode === 'multi';
  }

  openReview(row: ReviewTargetRow, options?: { isAdminUser?: boolean }): void {
    this.currentReviewRow = row;
    this.currentReviewAttemptNo = row.target_attempt_number || null;
    this.currentReviewIsAdmin = Boolean(options?.isAdminUser);

    if (!this.currentReviewIsAdmin && !this.isMultipleReviewEnabled(row)) {
      this.dialog
        .open(ConfirmOneTimeReviewDialogComponent, {
          width: '32.8rem',
          maxWidth: 'calc(100vw - 2rem)',
          autoFocus: false,
          restoreFocus: true,
          disableClose: true,
          data: { reviewMode: row.review_mode || '' },
        })
        .afterClosed()
        .subscribe((confirmed: boolean) => {
          if (confirmed) this.fetchAndShowReview(row);
        });
      return;
    }

    this.fetchAndShowReview(row);
  }

  private fetchAndShowReview(row: ReviewTargetRow): void {
    const userRaw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
    let userId = '';
    try {
      const parsed = userRaw ? JSON.parse(userRaw) : null;
      userId = parsed?.user_id || parsed?.id || '';
    } catch {
      userId = '';
    }
    const schedulerId = row.schedule_id || row.test_id || '';
    if (!userId || !schedulerId) {
      try {
        notify('Missing user or test identifiers for review', 'error');
      } catch {}
      return;
    }

    const attemptId = row.review_attempt_id || row.attempt_id || '';
    const attemptParam = attemptId ? `&attempt_id=${encodeURIComponent(String(attemptId))}` : '';
    const url = `${API_BASE}/review-user-exam?user_id=${encodeURIComponent(String(userId))}&scheduler_id=${encodeURIComponent(String(schedulerId))}${attemptParam}`;

    this.reviewLoading = true;
    this.reviewAttempts = [];
    this.reviewOpen = true;
    this.reviewSelectedAttempt = 0;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        try {
          const attempts = Array.isArray(res?.data)
            ? res.data
            : Array.isArray(res?.attempts)
              ? res.attempts
              : Array.isArray(res?.data?.attempts)
                ? res.data.attempts
                : [];

          this.reviewAttempts = attempts.map((a: any, idx: number) => {
            const items = Array.isArray(a.review)
              ? a.review
              : Array.isArray(a.items)
                ? a.items
                : Array.isArray(a.questions)
                  ? a.questions
                  : [];

            const mappedItems = items.map((it: any) => {
              const options = Array.isArray(it.options)
                ? it.options
                : Array.isArray(it.choices)
                  ? it.choices
                  : [];
              const normalizedOptions = options.map((o: any) => {
                const rawText =
                  o.option_text !== undefined && o.option_text !== null
                    ? o.option_text
                    : o.text !== undefined && o.text !== null
                      ? o.text
                      : typeof o === 'string'
                        ? o
                        : '';
                const cleanText =
                  typeof rawText === 'string' && (rawText === "''" || rawText === '""')
                    ? ''
                    : typeof rawText === 'string'
                      ? rawText.trim()
                      : String(rawText || '');
                return {
                  id: o.id || o.options_id || o.option_id || cleanText || '',
                  is_correct:
                    typeof o.is_correct !== 'undefined'
                      ? Number(o.is_correct)
                      : typeof o.isCorrect !== 'undefined'
                        ? Number(o.isCorrect)
                        : 0,
                  option_text: cleanText,
                  text: cleanText,
                  image_url: o.image_url || o.url || '',
                  gcs_path: o.gcs_path || '',
                };
              });

              const selectedArr = Array.isArray(it.selected_option)
                ? it.selected_option.map((s: any) => String(s))
                : it.selected_option
                  ? [String(it.selected_option)]
                  : it.selected
                    ? Array.isArray(it.selected)
                      ? it.selected.map((s: any) => String(s))
                      : [String(it.selected)]
                    : [];

              const itemIsCorrect =
                typeof it.is_correct !== 'undefined'
                  ? Boolean(it.is_correct)
                  : typeof it.isCorrect !== 'undefined'
                    ? Boolean(it.isCorrect)
                    : null;

              const inferredCorrect =
                it.correct_option ||
                it.correct_answer ||
                it.answer ||
                (normalizedOptions.length ? normalizedOptions[0].option_text : '');

              return {
                title: row.title || '',
                question_text: it.question_text || it.question || it.q || '',
                question: it.question_text || it.question || it.q || '',
                correct_option: inferredCorrect,
                options: normalizedOptions,
                media: Array.isArray(it.media) ? it.media : [],
                question_type: it.question_type || it.type || 'choose',
                selected_option: selectedArr,
                is_correct: itemIsCorrect,
                marks_awarded:
                  typeof it.marks_awarded !== 'undefined'
                    ? it.marks_awarded
                    : typeof it.marks !== 'undefined'
                      ? it.marks
                      : 0,
                question_marks:
                  typeof it.question_marks !== 'undefined'
                    ? it.question_marks
                    : typeof it.marks !== 'undefined'
                      ? it.marks
                      : 0,
                feedback: it.feedback || null,
                review_comment: it.review_comment || it.reviewComment || null,
                answer_images: Array.isArray(it.answer_images) ? it.answer_images : [],
                student_text: it.student_text || '',
              };
            });

            return {
              attempt_id: a.attempt_id,
              title: row.title || '',
              attempt_number: a.attempt_number || a.attempt_no || a.attempt || idx + 1,
              items: mappedItems,
              answer_sheet_pages: Array.isArray(a.answer_sheet_pages) ? a.answer_sheet_pages : [],
              score: a.score ?? a.marks ?? 0,
              started_date: a.started_date || a.started_at || a.start_time || null,
              submitted_date: a.submitted_date || a.submitted_at || null,
              status: a.status || null,
              percentage: a.percentage ?? null,
              total_questions: a.total_questions ?? null,
              total_marks: a.total_marks ?? a.max_marks ?? null,
              time_taken: a.time_taken || null,
              result: a.result || null,
            };
          });

          if (!this.currentReviewIsAdmin && !this.isMultipleReviewEnabled(row)) {
            const effectiveAttNo =
              row.target_attempt_number ||
              this.currentReviewAttemptNo ||
              this.reviewAttempts[this.reviewSelectedAttempt]?.attempt_number ||
              1;
            this.reviewConsumed.emit({ row, attemptNumber: effectiveAttNo });
          }

          (this.reviewAttempts || []).forEach((att: any) => {
            (att.items || []).forEach((it: any) => {
              (it.media || []).forEach((m: any) => {
                if (this.isExcelFile(m)) this.loadExcelData(m);
              });
            });
          });
        } catch {
          this.reviewAttempts = [];
        }
        this.reviewLoading = false;
      },
      error: (err) => {
        const msg = err?.error?.statusMessage || err?.error?.message || 'This review is not available.';
        try {
          notify(msg, 'error');
        } catch {}
        if (!this.currentReviewIsAdmin && !this.isMultipleReviewEnabled(row)) {
          this.reviewConsumed.emit({ row, attemptNumber: row.target_attempt_number || 1 });
        }
        this.reviewLoading = false;
        this.reviewAttempts = [];
        this.reviewOpen = false;
      },
    });
  }

  closeReview(): void {
    if (
      !this.currentReviewIsAdmin &&
      this.currentReviewRow &&
      !this.isMultipleReviewEnabled(this.currentReviewRow)
    ) {
      const effectiveAttNo =
        this.currentReviewRow.target_attempt_number ||
        this.currentReviewAttemptNo ||
        this.reviewAttempts[this.reviewSelectedAttempt]?.attempt_number ||
        1;
      this.reviewConsumed.emit({ row: this.currentReviewRow, attemptNumber: effectiveAttNo });
    }
    this.reviewOpen = false;
    this.reviewAttempts = [];
    this.reviewSelectedAttempt = 0;
    this.currentReviewRow = null;
    this.currentReviewAttemptNo = null;
    this.currentReviewIsAdmin = false;
    this.reviewClosed.emit();
  }

  reviewComments(q: any, categories: string | string[]): any[] {
    try {
      const comments =
        q && q.review_comment && Array.isArray(q.review_comment.comments)
          ? q.review_comment.comments
          : [];
      if (!comments.length) return [];
      const cats = Array.isArray(categories) ? categories.map(String) : [String(categories)];
      const normalized = cats.map((c) => (c || '').toString().toLowerCase());
      return comments.filter((c: any) =>
        normalized.includes(((c && c.category) || '').toString().toLowerCase())
      );
    } catch {
      return [];
    }
  }

  hasComments(q: any, categories: string | string[]): boolean {
    return this.reviewComments(q, categories).length > 0;
  }

  getNonEmptyCategoryCount(q: any): number {
    let count = 0;
    if (this.hasComments(q, 'missing')) count++;
    if (this.hasComments(q, ['incorrct', 'incorrect', 'incor'])) count++;
    if (this.hasComments(q, 'incomplete')) count++;
    return count;
  }

  parseCard(pointText: string | null | undefined): { issue: string; label: string; solution: string } | null {
    if (!pointText) return null;
    const clean = String(pointText).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const match = clean.match(/^(.*?)\s*(Correct(?:\s+point)?|Needed(?:\s+point)?|Complete(?:\s+point)?)\s*:\s*(.*)$/i);
    if (match && (match[1].trim() || match[3].trim())) {
      const rawLabel = match[2].trim();
      const label = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1).toLowerCase();
      return {
        issue: match[1].trim(),
        label,
        solution: match[3].trim(),
      };
    }
    return null;
  }

  formatCardText(pointText: string | null | undefined): string {
    if (!pointText) return '';
    let str = String(pointText).trim();
    str = str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    str = str.replace(/\n/g, '<br/>');
    str = str.replace(/(?:<br\s*\/?>\s*){2,}/gi, '<br/>');
    return str;
  }

  formatDate(dateLike: any): string {
    if (!dateLike) return '';
    try {
      const d = dateLike instanceof Date ? dateLike : new Date(dateLike);
      if (isNaN(d.getTime())) return String(dateLike || '');
      const formatter = new Intl.DateTimeFormat('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      });
      const parts = formatter.formatToParts(d);
      const getPart = (type: string) => parts.find((p) => p.type === type)?.value || '';
      return `${getPart('day')}-${getPart('month')}-${getPart('year')} ${getPart('hour')}:${getPart('minute')} IST`;
    } catch {
      return String(dateLike || '');
    }
  }

  normalizeSelectedOptions(item: any): string[] {
    const sel = item && item.selected_option;
    if (!sel) return [];
    if (Array.isArray(sel)) return sel.map((s: any) => String(s));
    return [String(sel)];
  }

  getOptText(opt: any): string {
    if (!opt) return '';
    if (typeof opt === 'string') {
      const clean = opt.trim();
      return clean === "''" || clean === '""' ? '' : clean;
    }
    const val =
      opt.text !== undefined && opt.text !== null
        ? opt.text
        : opt.option_text !== undefined && opt.option_text !== null
          ? opt.option_text
          : '';
    if (typeof val === 'string') {
      const clean = val.trim();
      return clean === "''" || clean === '""' ? '' : clean;
    }
    return '';
  }

  getOptionLetter(index: number): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (typeof index !== 'number' || index < 0) return String(index + 1);
    return letters[index] || String(index + 1);
  }

  isOptionCorrect(opt: any): boolean {
    if (!opt) return false;
    const v =
      opt.is_correct !== undefined
        ? opt.is_correct
        : opt.isCorrect !== undefined
          ? opt.isCorrect
          : 0;
    return Number(v) === 1 || v === true;
  }

  isOptionSelected(item: any, opt: any): boolean {
    try {
      const arr = this.normalizeSelectedOptions(item);
      const optText = opt?.option_text ? String(opt.option_text).trim() : typeof opt === 'string' ? opt.trim() : '';
      const optId = opt?.options_id ? String(opt.options_id) : opt?.id ? String(opt.id) : '';
      const expandedArr: string[] = [];
      arr.forEach((s) => {
        if (s && s.includes(',')) {
          s.split(',').forEach((part) => expandedArr.push(part.trim()));
        } else if (s) {
          expandedArr.push(s.trim());
        }
      });
      return expandedArr.includes(optText) || (optId !== '' && expandedArr.includes(optId));
    } catch {
      return false;
    }
  }

  openImageModal(url: string | null | undefined, title?: string, filename?: string, mime?: string): void {
    if (!url) return;
    const resolved = this.resolveMediaUrl(url);
    if (!resolved) return;
    this.imageZoom = 1;
    this.previewModalImage = {
      url: resolved,
      title: title || 'Image Preview',
      filename: filename || '',
      mime_type: mime || '',
    };
  }

  closeImageModal(): void {
    this.previewModalImage = null;
    this.imageZoom = 1;
  }

  zoomIn(): void {
    if (this.imageZoom < 3) this.imageZoom = Math.min(3, +(this.imageZoom + 0.25).toFixed(2));
  }

  zoomOut(): void {
    if (this.imageZoom > 0.5) this.imageZoom = Math.max(0.5, +(this.imageZoom - 0.25).toFixed(2));
  }

  resetZoom(): void {
    this.imageZoom = 1;
  }

  onAnswerImageError(_event: any, img: any): void {
    if (img) img._loadError = true;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.previewModalImage) {
      this.closeImageModal();
      return;
    }
    if (this.reviewOpen) {
      this.closeReview();
    }
  }

  isExcelFile(m: any): boolean {
    const filename = (m.original_filename || m.file_url || m.url || '').toLowerCase();
    return filename.endsWith('.xlsx') || filename.endsWith('.xls') || filename.endsWith('.csv');
  }

  loadExcelData(m: any): void {
    if (m._excelData || m._loadingExcel) return;
    const directUrl = this.resolveMediaUrl(m.file_url || m.url);
    if (!directUrl && !m.gcs_path) return;
    m._loadingExcel = true;
    m._excelError = null;
    const gcsPath = m.gcs_path || '';
    const proxyUrl = `${API_BASE}/get-media-content?gcs_path=${encodeURIComponent(gcsPath)}&url=${encodeURIComponent(directUrl || '')}`;

    const parseBuffer = (buffer: ArrayBuffer) => {
      m._loadingExcel = false;
      try {
        const wb = XLSX.read(buffer, { type: 'array' });
        m._sheets = wb.SheetNames;
        m._activeSheet = wb.SheetNames[0];
        m._workbook = wb;
        const ws = wb.Sheets[m._activeSheet];
        m._excelData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
      } catch {
        m._excelError = 'Could not preview spreadsheet content.';
      }
    };

    this.http.get(proxyUrl, { responseType: 'arraybuffer' }).subscribe({
      next: (buffer: ArrayBuffer) => parseBuffer(buffer),
      error: () => {
        if (directUrl) {
          this.http.get(directUrl, { responseType: 'arraybuffer' }).subscribe({
            next: (buffer: ArrayBuffer) => parseBuffer(buffer),
            error: () => {
              m._loadingExcel = false;
              m._excelError = 'Could not load spreadsheet file.';
            },
          });
        } else {
          m._loadingExcel = false;
          m._excelError = 'Could not load spreadsheet file.';
        }
      },
    });
  }

  switchExcelSheet(m: any, sheetName: string): void {
    if (!m._workbook || !m._workbook.Sheets[sheetName]) return;
    m._activeSheet = sheetName;
    const ws = m._workbook.Sheets[sheetName];
    m._excelData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
  }

  getColLetter(colIndex: number): string {
    let letter = '';
    while (colIndex >= 0) {
      letter = String.fromCharCode((colIndex % 26) + 65) + letter;
      colIndex = Math.floor(colIndex / 26) - 1;
    }
    return letter;
  }

  isWordFile(m: any): boolean {
    const filename = (m.original_filename || m.file_url || m.url || '').toLowerCase();
    return filename.endsWith('.docx') || filename.endsWith('.doc');
  }

  toggleWordDoc(m: any, containerId: string): void {
    if (m._showDoc) {
      m._showDoc = false;
      return;
    }
    m._showDoc = true;
    if (m._docLoaded) return;
    this.renderWordDoc(m, containerId);
  }

  renderWordDoc(m: any, containerId: string): void {
    const directUrl = this.resolveMediaUrl(m.file_url || m.url);
    if (!directUrl && !m.gcs_path) return;
    m._loadingDoc = true;
    m._docError = null;
    const gcsPath = m.gcs_path || '';
    const proxyUrl = `${API_BASE}/get-media-content?gcs_path=${encodeURIComponent(gcsPath)}&url=${encodeURIComponent(directUrl || '')}`;

    const renderBuffer = async (buffer: ArrayBuffer) => {
      m._loadingDoc = false;
      m._docLoaded = true;
      try {
        const container = document.getElementById(containerId);
        if (container) {
          container.innerHTML = '';
          await docx.renderAsync(buffer, container, undefined, {
            inWrapper: false,
            ignoreWidth: false,
            ignoreHeight: false,
            className: 'docx-preview-content',
          });
        }
      } catch {
        m._docError = 'Could not preview Word document.';
      }
    };

    this.http.get(proxyUrl, { responseType: 'arraybuffer' }).subscribe({
      next: (buffer: ArrayBuffer) => renderBuffer(buffer),
      error: () => {
        if (directUrl) {
          this.http.get(directUrl, { responseType: 'arraybuffer' }).subscribe({
            next: (buffer: ArrayBuffer) => renderBuffer(buffer),
            error: () => {
              m._loadingDoc = false;
              m._docError = 'Could not load document file.';
            },
          });
        } else {
          m._loadingDoc = false;
          m._docError = 'Could not load document file.';
        }
      },
    });
  }
}

