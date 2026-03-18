import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmDialogData {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
     selector: 'app-confirm-dialog',
     template: `
     <h2 mat-dialog-title class="dialog-title">{{data.title || 'Confirm'}}</h2>
     <mat-dialog-content class="dialog-content">
          <p>{{data.message}}</p>
     </mat-dialog-content>
     <mat-dialog-actions align="end" class="dialog-actions">
          <button mat-button mat-dialog-close class="cancel-btn">{{data.cancelText || 'Cancel'}}</button>
          <button mat-flat-button [mat-dialog-close]="true" class="confirm-btn">{{data.confirmText || 'Confirm'}}</button>
     </mat-dialog-actions>
     `,
     styles: [`
          :host {
               display: block;
          }
          .dialog-title {
               font-size: 1.25rem;
               font-weight: 700;
               color: var(--theme-3-text-1, #1e293b);
               letter-spacing: -0.01em;
               margin: 0 0 0.5rem 0;
               padding: 0.25rem 0;
          }
          .dialog-content {
               color: #4a555f;
               line-height: 1.5;
               padding: 0.5rem 0 1rem 0;
          }
          .dialog-content p {
               margin: 0;
          }
          .dialog-actions {
               padding: 0.75rem 0 0.25rem 0;
               gap: 0.75rem;
          }
          .cancel-btn {
               border-radius: 0.5rem;
               padding: 0.5rem 1rem;
               font-weight: 600;
               transition: background 0.2s ease;
          }
          .cancel-btn:hover {
               background: rgba(0,0,0,0.04);
          }
          .confirm-btn {
               background-color: var(--button-1, #6366f1);
               color: white;
               border-radius: 0.5rem;
               padding: 0.5rem 1.25rem;
               font-weight: 600;
               transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
          }
          .confirm-btn:hover {
               background-color: var(--button-1-hover, #4f46e5);
               box-shadow: 0 0.25rem 0.75rem rgba(99,102,241,0.25);
               transform: translateY(-0.0625rem);
          }
     `]
})
export class ConfirmDialogComponent {
     constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}
}
