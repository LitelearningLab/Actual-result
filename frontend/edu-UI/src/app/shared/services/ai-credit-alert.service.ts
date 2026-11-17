import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AiCreditAlertComponent, AiCreditAlertData } from '../components/ai-credits-alert/ai-credit-alert.component';

@Injectable({ providedIn: 'root' })
export class AiCreditAlertService {
  constructor(private dialog: MatDialog) {}

  /**
   * Opens the AI Credit Alert Dialog directly with custom configuration
   */
  show(config: AiCreditAlertData): Observable<boolean> {
    const dialogRef = this.dialog.open(AiCreditAlertComponent, {
      data: config,
      width: '440px',
      panelClass: 'ai-credit-dialog-panel',
      disableClose: false,
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
      status === 403 ||
      normalizedMsg.includes('quota exhausted') ||
      normalizedMsg.includes('credits used') ||
      normalizedMsg.includes('allocate more credits') ||
      normalizedMsg.includes('allocate ai credits') ||
      normalizedMsg.includes('ai access has not been granted') ||
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