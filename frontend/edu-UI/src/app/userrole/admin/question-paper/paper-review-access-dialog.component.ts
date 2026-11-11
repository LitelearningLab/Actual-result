import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { API_BASE } from 'src/app/shared/api.config';
import { notify } from 'src/app/shared/global-notify';
import { getLocaleDateFormat } from 'src/app/shared/date/localized-date-adapter';

export interface PaperReviewSettings {
  multiple_review: boolean;
  instant_review: boolean;
  review_mode: 'instant' | 'scheduled' | 'manual' | 'no_review';
  manual_review_enabled: boolean;
  reviewDate: Date | null;
  reviewTime: string;
  reviewEndDate: Date | null;
  reviewEndTime: string;
}

export function createDefaultPaperReviewSettings(): PaperReviewSettings {
  return {
    multiple_review: false,
    instant_review: false,
    review_mode: 'manual',
    manual_review_enabled: false,
    reviewDate: null,
    reviewTime: '09:00',
    reviewEndDate: null,
    reviewEndTime: '18:00',
  };
}

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function parseIsoToLocalDateAndTime(iso: any): { date: Date | null; time: string } {
  if (!iso) return { date: null, time: '' };
  const s = String(iso).trim();
  const normalized = s.endsWith('Z') || s.includes('+') ? s : `${s}Z`;
  const d = new Date(normalized);
  if (isNaN(d.getTime())) return { date: null, time: '' };
  return {
    date: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
    time: `${pad2(d.getHours())}:${pad2(d.getMinutes())}`,
  };
}

export function combineLocalDateAndTime(dateValue: any, timeValue: string): Date | null {
  if (!dateValue || !timeValue || !/^([01]\d|2[0-3]):[0-5]\d$/.test(String(timeValue))) {
    return null;
  }
  let date: Date | null = null;
  if (dateValue instanceof Date) {
    date = isNaN(dateValue.getTime()) ? null : dateValue;
  } else {
    const parsed = new Date(String(dateValue));
    if (!isNaN(parsed.getTime())) date = parsed;
  }
  if (!date) return null;
  const [hh, mm] = String(timeValue).split(':').map(Number);
  const combined = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hh, mm, 0, 0);
  return isNaN(combined.getTime()) ? null : combined;
}

export function extractPaperReviewSettings(row: any): PaperReviewSettings {
  const defaults = createDefaultPaperReviewSettings();
  if (!row) return defaults;

  const rawMode = String(row.review_mode || '').toLowerCase();
  const instantReview =
    row.instant_review === true ||
    row.user_review === 1 ||
    row.user_review === true ||
    rawMode === 'instant';

  let reviewMode: 'instant' | 'scheduled' | 'manual' | 'no_review' = 'manual';
  if (instantReview) {
    reviewMode = 'instant';
  } else if (rawMode === 'scheduled') {
    reviewMode = 'scheduled';
  } else if (rawMode === 'no_review' || rawMode === 'manual') {
    reviewMode = 'manual';
  }

  const startParsed = parseIsoToLocalDateAndTime(row.review_at);
  const endParsed = parseIsoToLocalDateAndTime(row.review_end_at);

  return {
    multiple_review: Boolean(row.multiple_review),
    instant_review: instantReview,
    review_mode: reviewMode,
    manual_review_enabled: Boolean(row.manual_review_enabled),
    reviewDate: startParsed.date,
    reviewTime: startParsed.time || '09:00',
    reviewEndDate: endParsed.date,
    reviewEndTime: endParsed.time || '18:00',
  };
}

export function validatePaperReviewSettings(cfg: PaperReviewSettings): string | null {
  if (!cfg.instant_review && cfg.review_mode === 'scheduled') {
    const startDt = combineLocalDateAndTime(cfg.reviewDate, cfg.reviewTime);
    const endDt = combineLocalDateAndTime(cfg.reviewEndDate, cfg.reviewEndTime);
    if (!startDt) return 'Please choose a valid Review Start Date and Time.';
    if (!endDt) return 'Please choose a valid Review End Date and Time.';
    if (endDt.getTime() < startDt.getTime()) {
      return 'Review End Date & Time must be after Review Start Date & Time.';
    }
  }
  return null;
}

export function buildPaperReviewPayload(cfg: PaperReviewSettings): Record<string, any> {
  const effectiveMode = cfg.instant_review
    ? 'instant'
    : cfg.review_mode === 'scheduled'
      ? 'scheduled'
      : 'manual';

  let reviewAtIso: string | null = null;
  let reviewEndAtIso: string | null = null;
  if (effectiveMode === 'scheduled') {
    const startDt = combineLocalDateAndTime(cfg.reviewDate, cfg.reviewTime);
    const endDt = combineLocalDateAndTime(cfg.reviewEndDate, cfg.reviewEndTime);
    reviewAtIso = startDt ? startDt.toISOString() : null;
    reviewEndAtIso = endDt ? endDt.toISOString() : null;
  }

  return {
    multiple_review: Boolean(cfg.multiple_review),
    instant_review: Boolean(cfg.instant_review),
    user_review: cfg.instant_review ? 1 : 0,
    review_mode: effectiveMode,
    manual_review_enabled: effectiveMode === 'manual' ? Boolean(cfg.manual_review_enabled) : false,
    review_at: reviewAtIso,
    review_end_at: reviewEndAtIso,
  };
}

@Component({
  selector: 'app-paper-review-access-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
  template: `
    <div class="review-access-box">
      <div class="toggle-setting">
        <mat-slide-toggle
          [(ngModel)]="settings.multiple_review"
          [disabled]="disabled"
          (ngModelChange)="emitChange()">
          Multiple Review
        </mat-slide-toggle>
        <span>
          {{ settings.multiple_review
            ? 'Students can open and review their results multiple times.'
            : 'Single-time review: students can view the review only once.' }}
        </span>
      </div>

      <div class="toggle-setting">
        <mat-slide-toggle
          [(ngModel)]="settings.instant_review"
          [disabled]="disabled"
          (ngModelChange)="onInstantChange($event)">
          Instant Review
        </mat-slide-toggle>
        <span>
          {{ settings.instant_review
            ? 'Review is available immediately once the paper is evaluated.'
            : 'Review access is controlled by Schedule Review (date-wise) or Manual Review.' }}
        </span>
      </div>

      <div *ngIf="!settings.instant_review" class="review-options">
        <mat-radio-group
          [(ngModel)]="settings.review_mode"
          [disabled]="disabled"
          (ngModelChange)="emitChange()"
          class="review-radio-group"
          aria-label="Review availability">
          <mat-radio-button value="scheduled">Schedule Review (Date-wise)</mat-radio-button>
          <mat-radio-button value="manual">Manual Review</mat-radio-button>
        </mat-radio-group>

        <div *ngIf="settings.review_mode === 'scheduled'" class="review-schedule-fields">
          <mat-form-field appearance="outline">
            <mat-label>Review Start Date ({{ dateFormatPlaceholder }})</mat-label>
            <input matInput [matDatepicker]="rStartPicker" [(ngModel)]="settings.reviewDate"
              [placeholder]="dateFormatPlaceholder" [disabled]="disabled" (ngModelChange)="emitChange()" />
            <mat-datepicker-toggle matSuffix [for]="rStartPicker" [disabled]="disabled"></mat-datepicker-toggle>
            <mat-datepicker #rStartPicker></mat-datepicker>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Review Start Time</mat-label>
            <input matInput type="time" [(ngModel)]="settings.reviewTime" [disabled]="disabled" (ngModelChange)="emitChange()" />
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Review End Date ({{ dateFormatPlaceholder }})</mat-label>
            <input matInput [matDatepicker]="rEndPicker" [(ngModel)]="settings.reviewEndDate"
              [placeholder]="dateFormatPlaceholder" [disabled]="disabled" (ngModelChange)="emitChange()" />
            <mat-datepicker-toggle matSuffix [for]="rEndPicker" [disabled]="disabled"></mat-datepicker-toggle>
            <mat-datepicker #rEndPicker></mat-datepicker>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Review End Time</mat-label>
            <input matInput type="time" [(ngModel)]="settings.reviewEndTime" [disabled]="disabled" (ngModelChange)="emitChange()" />
          </mat-form-field>
        </div>

        <div *ngIf="settings.review_mode === 'manual'" class="manual-review-hint">
          <mat-slide-toggle
            [(ngModel)]="settings.manual_review_enabled"
            [disabled]="disabled"
            (ngModelChange)="emitChange()">
            Enable Review Access Now
          </mat-slide-toggle>
          <span>You can also toggle Manual Review ON/OFF directly from the Published tab table.</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .review-access-box {
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
      }
      .toggle-setting {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.75rem 0.875rem;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 0.625rem;
        span {
          font-size: 0.8rem;
          color: #64748b;
          padding-left: 3rem;
        }
      }
      .review-options {
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
        padding: 0.875rem;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 0.625rem;
      }
      .review-radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
      }
      .review-schedule-fields {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.75rem;
      }
      .manual-review-hint {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding-top: 0.375rem;
        border-top: 1px dashed #cbd5e1;
        span {
          font-size: 0.78rem;
          color: #64748b;
          padding-left: 3rem;
        }
      }
      @media (max-width: 600px) {
        .review-schedule-fields {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class PaperReviewAccessFormComponent {
  @Input() settings: PaperReviewSettings = createDefaultPaperReviewSettings();
  @Input() disabled = false;
  @Output() settingsChange = new EventEmitter<PaperReviewSettings>();

  get dateFormatPlaceholder(): string {
    return getLocaleDateFormat();
  }

  onInstantChange(instant: boolean): void {
    if (instant) {
      this.settings.review_mode = 'instant';
    } else if (this.settings.review_mode === 'instant' || this.settings.review_mode === 'no_review') {
      this.settings.review_mode = 'manual';
    }
    this.emitChange();
  }

  emitChange(): void {
    this.settingsChange.emit({ ...this.settings });
  }
}

@Component({
  selector: 'app-paper-review-access-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    PaperReviewAccessFormComponent,
  ],
  template: `
    <div class="review-access-dialog">
      <div class="dialog-header">
        <div class="header-icon"><mat-icon>visibility</mat-icon></div>
        <div class="header-text">
          <h2>Manage Student Review Access</h2>
          <p>{{ scheduleTitle }}</p>
        </div>
        <button mat-icon-button type="button" (click)="close()" aria-label="Close">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="dialog-body">
        <app-paper-review-access-form
          [settings]="settings"
          [disabled]="saving"
          (settingsChange)="settings = $event">
        </app-paper-review-access-form>
      </div>

      <div class="dialog-footer">
        <button mat-stroked-button type="button" (click)="close()" [disabled]="saving">Cancel</button>
        <button mat-flat-button color="primary" type="button" (click)="save()" [disabled]="saving">
          <mat-icon>save</mat-icon>
          <span>{{ saving ? 'Saving...' : 'Save Access Settings' }}</span>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .review-access-dialog {
        padding: 1.25rem 1.5rem;
        background: #ffffff;
        max-width: 100%;
      }
      .dialog-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #e2e8f0;
        .header-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.625rem;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .header-text {
          flex: 1;
          min-width: 0;
          h2 { margin: 0; font-size: 1.1rem; font-weight: 700; color: #0f172a; }
          p { margin: 0.15rem 0 0; font-size: 0.825rem; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        }
      }
      .dialog-body {
        max-height: 65vh;
        overflow-y: auto;
        padding-right: 0.25rem;
      }
      .dialog-footer {
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
        margin-top: 1.25rem;
        padding-top: 0.875rem;
        border-top: 1px solid #e2e8f0;
        button {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
      }
    `,
  ],
})
export class PaperReviewAccessDialogComponent {
  settings: PaperReviewSettings;
  scheduleTitle: string;
  scheduleId: string;
  saving = false;

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<PaperReviewAccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { row: any }
  ) {
    const row = data?.row || {};
    this.scheduleId = String(row.schedule_id || row.test_id || '');
    this.scheduleTitle = String(row.scheduler_name || row.schedule_name || row.title || 'Published Paper');
    this.settings = extractPaperReviewSettings(row);
  }

  close(updated?: any): void {
    this.dialogRef.close(updated || null);
  }

  save(): void {
    const errMsg = validatePaperReviewSettings(this.settings);
    if (errMsg) {
      notify(errMsg, 'error');
      return;
    }
    const reviewPayload = buildPaperReviewPayload(this.settings);
    const payload = {
      schedule_id: this.scheduleId,
      review_only: true,
      ...reviewPayload,
    };

    this.saving = true;
    this.http.post<any>(`${API_BASE}/update-paper-schedule`, payload).subscribe({
      next: (res) => {
        this.saving = false;
        notify(res?.statusMessage || 'Review access settings updated', 'success');
        this.close(reviewPayload);
      },
      error: (err) => {
        this.saving = false;
        notify(err?.error?.statusMessage || 'Failed to update review access settings', 'error');
      },
    });
  }
}

