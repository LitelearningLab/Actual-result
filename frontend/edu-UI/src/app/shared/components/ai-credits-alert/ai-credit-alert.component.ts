import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AiCreditAlertData {
  mode?: 'alert' | 'estimation';
  actionName?: string;         // e.g. "Paper Evaluation", "Question Generation", "AI Fine-Tuning"
  title?: string;              // default: "AI Access Restricted" or "AI Credit Estimation"
  message?: string;            // dynamic backend message or custom explanation
  quotaUsed?: number;          // optional: number of credits used
  quotaAllocated?: number;     // optional: total allocated credits
  confirmText?: string;        // default: "Understood"
  cancelText?: string;         // default: "Cancel"

  // Estimation & Partial Processing fields
  totalStudents?: number;
  totalPages?: number;
  estimatedTokens?: number;
  availableCredits?: number;
  minimumReserve?: number;     // default: 1000
  usableCredits?: number;
  feasibleCount?: number;
  pendingCount?: number;
  feasibleUserIds?: string[];
  pendingUserIds?: string[];
}

export interface AiCreditEstimationResult {
  action: 'continue' | 'cancel';
  allowedCount?: number;
  allowedUserIds?: string[];
}

@Component({
  selector: 'app-ai-credit-alert',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="ai-credit-dialog" [ngClass]="{ 'is-estimation': isEstimationMode }">
      <!-- Top Warning Icon -->
      <div class="dialog-icon-wrapper" [ngClass]="{ 'is-warning': isEstimationMode }">
        <svg *ngIf="!isEstimationMode" class="dialog-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#3b82f6" stroke-width="2"/>
          <path d="M12 8v5M12 16h.01" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <svg *ngIf="isEstimationMode" class="dialog-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Title -->
      <h2 class="dialog-title">{{ data.title || (isEstimationMode ? 'Insufficient Credits for Full Evaluation' : 'AI Access Restricted') }}</h2>

      <!-- Standard Alert Mode Template -->
      <ng-container *ngIf="!isEstimationMode">
        <div class="dialog-content">
          <p *ngIf="data.actionName" class="action-notice">
            You do not have enough AI credits to perform <strong>{{ data.actionName }}</strong>.
          </p>
          <p class="dialog-message">
            {{ displayMessage }}
          </p>
        </div>

        <div class="dialog-actions">
          <button mat-flat-button class="btn-understood" (click)="closeAlert()">
            {{ data.confirmText || 'Understood' }}
          </button>
        </div>
      </ng-container>

      <!-- Estimation & Partial Processing Mode Template -->
      <ng-container *ngIf="isEstimationMode">
        <div class="estimation-content">
          <p class="estimation-intro">
            Evaluating all <strong>{{ data.totalStudents || 0 }} students</strong> requires more AI credits than currently available. You can continue by evaluating only the students that fit within your usable credit balance, or cancel.
          </p>

          <!-- 4-Metric Grid -->
          <div class="metrics-grid">
            <div class="metric-card">
              <span class="m-label">Total Students / Pages</span>
              <span class="m-val">{{ data.totalStudents || 0 }} students <small>({{ data.totalPages || 0 }} pages)</small></span>
            </div>
            <div class="metric-card">
              <span class="m-label">Required Tokens (8k/page)</span>
              <span class="m-val highlight">{{ (data.estimatedTokens || 0) | number }}</span>
            </div>
            <div class="metric-card">
              <span class="m-label">Available Balance</span>
              <span class="m-val">{{ (data.availableCredits || 0) | number }}</span>
            </div>
            <div class="metric-card">
              <span class="m-label">1,000 Reserve Balance</span>
              <span class="m-val reserve-preserved">1,000 (Preserved)</span>
            </div>
          </div>

          <!-- Usable Balance Notice -->
          <div class="usable-balance-pill">
            <span>Usable Evaluation Credits: <strong>{{ (data.usableCredits || 0) | number }}</strong></span>
          </div>

          <!-- Capacity Comparison Banner -->
          <div class="capacity-banner">
            <div class="cap-item feasible">
              <span class="cap-badge">Can Evaluate Now</span>
              <span class="cap-count">{{ data.feasibleCount || 0 }} Student{{ (data.feasibleCount || 0) === 1 ? '' : 's' }}</span>
            </div>
            <div class="cap-divider">→</div>
            <div class="cap-item pending">
              <span class="cap-badge">Remaining Pending</span>
              <span class="cap-count">{{ data.pendingCount || 0 }} Student{{ (data.pendingCount || 0) === 1 ? '' : 's' }}</span>
            </div>
          </div>

          <p class="reserve-note">
            🛡️ <strong>Safety Guarantee:</strong> A mandatory <strong>1,000 token reserve</strong> is strictly maintained. Completed student marks are permanently saved. After your credits are recharged, pending students can be resumed without re-evaluating completed ones.
          </p>
        </div>

        <!-- Dual Action Buttons -->
        <div class="dialog-actions-dual">
          <button mat-stroked-button class="btn-cancel" (click)="onCancel()">
            {{ data.cancelText || 'Cancel' }}
          </button>
          <button
            mat-flat-button
            class="btn-continue"
            [disabled]="(data.feasibleCount || 0) <= 0"
            (click)="onContinue()"
          >
            <span *ngIf="(data.feasibleCount || 0) > 0">
              Continue ({{ data.feasibleCount }} Student{{ (data.feasibleCount || 0) === 1 ? '' : 's' }})
            </span>
            <span *ngIf="(data.feasibleCount || 0) <= 0">
              Insufficient Credits to Start
            </span>
          </button>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .ai-credit-dialog {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1.75rem 1.5rem;
      background: #ffffff;
      border-radius: 1.25rem;
      box-shadow: 0 25px 60px rgba(15, 23, 42, 0.25);
      border: 1px solid #e2e8f0;
      width: 100%;
      box-sizing: border-box;
      font-family: inherit;
    }
    .ai-credit-dialog.is-estimation {
      max-width: 520px;
      padding: 1.5rem;
    }
    .dialog-icon-wrapper {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background: #eff6ff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }
    .dialog-icon-wrapper.is-warning {
      background: #fef3c7;
    }
    .dialog-icon {
      width: 1.75rem;
      height: 1.75rem;
    }
    .dialog-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 0.5rem 0;
      letter-spacing: -0.01em;
    }
    .dialog-content {
      margin-bottom: 1.5rem;
      max-width: 380px;
    }
    .action-notice {
      font-size: 0.95rem;
      color: #334155;
      margin: 0 0 0.5rem 0;
      line-height: 1.45;
    }
    .action-notice strong {
      color: #2563eb;
    }
    .dialog-message {
      font-size: 0.925rem;
      color: #64748b;
      line-height: 1.5;
      margin: 0;
      word-break: break-word;
    }
    .dialog-actions {
      width: 100%;
    }
    .btn-understood {
      width: 100%;
      background: #2563eb !important;
      color: #ffffff !important;
      border-radius: 0.75rem;
      padding: 0.75rem 1.5rem;
      font-size: 0.975rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    }
    .btn-understood:hover {
      background: #1d4ed8 !important;
    }

    /* Estimation Mode Styles */
    .estimation-content {
      width: 100%;
      text-align: left;
      margin-bottom: 1.25rem;
    }
    .estimation-intro {
      font-size: 0.9rem;
      color: #334155;
      line-height: 1.45;
      margin: 0 0 1rem 0;
      text-align: center;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.625rem;
      margin-bottom: 0.75rem;
    }
    .metric-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 0.625rem;
      padding: 0.625rem 0.75rem;
      display: flex;
      flex-direction: column;
    }
    .m-label {
      font-size: 0.725rem;
      text-transform: uppercase;
      font-weight: 600;
      color: #64748b;
      letter-spacing: 0.03em;
      margin-bottom: 0.25rem;
    }
    .m-val {
      font-size: 0.95rem;
      font-weight: 700;
      color: #0f172a;
    }
    .m-val small {
      font-size: 0.75rem;
      color: #64748b;
      font-weight: 400;
    }
    .m-val.highlight {
      color: #dc2626;
    }
    .m-val.reserve-preserved {
      color: #059669;
    }
    .usable-balance-pill {
      background: #f0fdf4;
      border: 1px dashed #86efac;
      border-radius: 0.5rem;
      padding: 0.4rem 0.75rem;
      text-align: center;
      font-size: 0.85rem;
      color: #166534;
      margin-bottom: 0.875rem;
    }
    .capacity-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 0.75rem;
      padding: 0.75rem 1rem;
      margin-bottom: 0.875rem;
    }
    .cap-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }
    .cap-badge {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      padding: 0.15rem 0.5rem;
      border-radius: 9999px;
      margin-bottom: 0.25rem;
    }
    .cap-item.feasible .cap-badge {
      background: #dcfce7;
      color: #15803d;
    }
    .cap-item.pending .cap-badge {
      background: #fef3c7;
      color: #b45309;
    }
    .cap-count {
      font-size: 1.15rem;
      font-weight: 800;
      color: #0f172a;
    }
    .cap-divider {
      font-size: 1.25rem;
      color: #94a3b8;
      font-weight: 600;
      padding: 0 0.5rem;
    }
    .reserve-note {
      font-size: 0.775rem;
      color: #475569;
      background: #eff6ff;
      border-radius: 0.5rem;
      padding: 0.5rem 0.75rem;
      margin: 0;
      line-height: 1.4;
      text-align: left;
    }

    /* Dual Action Buttons */
    .dialog-actions-dual {
      display: flex;
      gap: 0.75rem;
      width: 100%;
    }
    .btn-cancel {
      flex: 1;
      border: 1px solid #cbd5e1 !important;
      color: #475569 !important;
      border-radius: 0.625rem;
      padding: 0.65rem 1rem;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-continue {
      flex: 2;
      background: #2563eb !important;
      color: #ffffff !important;
      border-radius: 0.625rem;
      padding: 0.65rem 1rem;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      cursor: pointer;
    }
    .btn-continue:disabled {
      background: #94a3b8 !important;
      box-shadow: none;
      cursor: not-allowed;
    }
  `]
})
export class AiCreditAlertComponent {
  constructor(
    public dialogRef: MatDialogRef<AiCreditAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AiCreditAlertData
  ) {}

  get isEstimationMode(): boolean {
    return this.data.mode === 'estimation';
  }

  get displayMessage(): string {
    if (this.data.message) {
      return this.data.message;
    }
    if (this.data.quotaUsed != null && this.data.quotaAllocated != null) {
      return `AI credit quota exhausted (${this.data.quotaUsed.toLocaleString()} / ${this.data.quotaAllocated.toLocaleString()} credits used). Please contact your Super Admin to allocate more credits.`;
    }
    return 'Your allocated AI credits are insufficient for this operation. Please contact your Super Admin to allocate more credits.';
  }

  closeAlert(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close({ action: 'cancel' });
  }

  onContinue(): void {
    this.dialogRef.close({
      action: 'continue',
      allowedCount: this.data.feasibleCount || 0,
      allowedUserIds: this.data.feasibleUserIds || []
    });
  }
}
