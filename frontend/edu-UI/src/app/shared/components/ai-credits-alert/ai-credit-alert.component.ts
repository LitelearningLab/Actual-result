import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AiCreditAlertData {
  actionName?: string;         // e.g. "Paper Evaluation", "Question Generation", "AI Fine-Tuning"
  title?: string;              // default: "AI Access Restricted"
  message?: string;            // dynamic backend message or custom explanation
  quotaUsed?: number;          // optional: number of credits used
  quotaAllocated?: number;     // optional: total allocated credits
  confirmText?: string;        // default: "Understood"
}

@Component({
  selector: 'app-ai-credit-alert',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="ai-credit-dialog">
      <!-- Top Warning Icon matching the screenshot -->
      <div class="dialog-icon-wrapper">
        <svg class="dialog-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#3b82f6" stroke-width="2"/>
          <path d="M12 8v5M12 16h.01" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Title -->
      <h2 class="dialog-title">{{ data.title || 'AI Access Restricted' }}</h2>

      <!-- Dynamic Message tailored to the specific action -->
      <div class="dialog-content">
        <p *ngIf="data.actionName" class="action-notice">
          You do not have enough AI credits to perform <strong>{{ data.actionName }}</strong>.
        </p>
        <p class="dialog-message">
          {{ displayMessage }}
        </p>
      </div>

      <!-- Action Button -->
      <div class="dialog-actions">
        <button mat-flat-button class="btn-understood" (click)="close()">
          {{ data.confirmText || 'Understood' }}
        </button>
      </div>
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
      padding: 2rem 1.75rem 1.75rem;
      background: #ffffff;
      border-radius: 1.25rem;
      box-shadow: 0 25px 60px rgba(15, 23, 42, 0.25);
      border: 1px solid #e2e8f0;
      width: 100%;
      box-sizing: border-box;
      font-family: inherit;
    }
    .dialog-icon-wrapper {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: #eff6ff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
    }
    .dialog-icon {
      width: 2rem;
      height: 2rem;
    }
    .dialog-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 0.75rem 0;
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
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    }
    .btn-understood:hover {
      background: #1d4ed8 !important;
      box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
      transform: translateY(-1px);
    }
  `]
})
export class AiCreditAlertComponent {
  constructor(
    public dialogRef: MatDialogRef<AiCreditAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AiCreditAlertData
  ) {}

  get displayMessage(): string {
    if (this.data.message) {
      return this.data.message;
    }
    if (this.data.quotaUsed != null && this.data.quotaAllocated != null) {
      return `AI credit quota exhausted (${this.data.quotaUsed.toLocaleString()} / ${this.data.quotaAllocated.toLocaleString()} credits used). Please contact your Super Admin to allocate more credits.`;
    }
    return 'Your allocated AI credits are insufficient for this operation. Please contact your Super Admin to allocate more credits.';
  }

  close(): void {
    this.dialogRef.close(true);
  }
}