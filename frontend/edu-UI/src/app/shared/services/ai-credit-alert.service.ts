import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  AiCreditAlertComponent,
  AiCreditAlertData,
  AiCreditEstimationResult
} from '../components/ai-credits-alert/ai-credit-alert.component';

@Injectable({ providedIn: 'root' })
export class AiCreditAlertService {
  constructor(private dialog: MatDialog) {}

  /**
   * Opens the standard AI Credit Alert Dialog directly with custom configuration
   */
  show(config: AiCreditAlertData): Observable<boolean> {
    const dialogRef = this.dialog.open(AiCreditAlertComponent, {
      data: { ...config, mode: 'alert' },
      width: '440px',
      panelClass: 'ai-credit-dialog-panel',
      disableClose: false,
    });
    return dialogRef.afterClosed();
  }

  /**
   * Opens the Interactive AI Credit Estimation & Partial Processing Modal
   * Displays breakdown of tokens required, 1,000 token mandatory reserve preserved,
   * feasible student count, and pending student count with Continue / Cancel choices.
   */
  confirmEvaluationEstimate(config: AiCreditAlertData): Observable<AiCreditEstimationResult | null> {
    const dialogRef = this.dialog.open(AiCreditAlertComponent, {
      data: { ...config, mode: 'estimation', minimumReserve: 1000 },
      width: '520px',
      panelClass: 'ai-credit-estimation-panel',
      disableClose: true,
    });
    return dialogRef.afterClosed();
  }

  /**
   * Automatically inspects any HTTP error or API response.
   * If it detects insufficient credits or a 403 access restriction,
   * it pops up the dialog tailored to that action name and returns true.
   */
  handleAiError(error: any, actionName: string = 'this AI operation'): boolean {
    const status = error?.status || error?.statusCode;
    const msg =
      error?.error?.statusMessage ||
      error?.error?.message ||
      error?.error?.error ||
      error?.statusMessage ||
      error?.message ||
      '';

    const normalizedMsg = String(msg).toLowerCase();

    const isCreditError =
      status === 402 ||
      status === 403 ||
      error?.error?.credit_error ||
      error?.credit_error ||
      normalizedMsg.includes('quota exhausted') ||
      normalizedMsg.includes('credit quota') ||
      normalizedMsg.includes('credits') ||
      normalizedMsg.includes('credits used') ||
      normalizedMsg.includes('allocate more credits') ||
      normalizedMsg.includes('allocate ai credits') ||
      normalizedMsg.includes('ai access has not been granted') ||
      normalizedMsg.includes('reserve floor') ||
      normalizedMsg.includes('1,000 token reserve') ||
      normalizedMsg.includes('super admin');

    if (isCreditError) {
      this.show({
        actionName,
        title: 'AI Access Restricted',
        message: msg || undefined,
        confirmText: 'Understood'
      });
      return true;
    }

    return false;
  }
}
