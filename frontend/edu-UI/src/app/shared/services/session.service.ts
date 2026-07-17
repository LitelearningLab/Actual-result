import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { API_BASE } from '../api.config';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

// const API_BASE = (window as any)['API_BASE'] || '';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly idleTimeoutMs = 10 * 60 * 1000;
  private readonly activityEvents = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
  private listening = false;
  private lastActivityAt = Date.now();
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private promptOpen = false;
  private refreshInProgress = false;
  constructor(private dialog: MatDialog, private http: HttpClient, private router: Router, private ngZone: NgZone) {}

  startListening() {
    if (this.listening) return;
    this.listening = true;

    this.activityEvents.forEach(eventName => {
      window.addEventListener(eventName, () => this.recordActivity(), { passive: true });
    });

    window.addEventListener('sessionExpired', (ev: any) => {
      const msg = ev && ev.detail && ev.detail.message ? ev.detail.message : 'Your session has expired';
      if (this.hasBeenIdleForTenMinutes()) {
        this.ngZone.run(() => this.promptExtendOrLogout(msg));
      } else {
        // Active users should not be interrupted just because the current JWT expired.
        this.tryRefreshToken();
      }
    });

    this.scheduleIdleCheck();
  }

  private promptExtendOrLogout(message: string) {
    if (this.promptOpen || !this.hasLoggedInSession()) return;
    this.promptOpen = true;

    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Session Expired',
        message: message + '\nWould you like to extend your session?',
        confirmText: 'Extend',
        cancelText: 'Logout'
      },
      disableClose: true
    });

    ref.afterClosed().pipe(first()).subscribe((ok: boolean) => {
      this.promptOpen = false;
      if (ok) {
        this.recordActivity();
        this.tryRefreshToken();
      } else {
        this.doLogout();
      }
    });
  }

  private tryRefreshToken() {
     if (this.refreshInProgress || !this.hasLoggedInSession()) return;
     this.refreshInProgress = true;
     const raw = sessionStorage.getItem('user');
     let userId = null;
     if (raw) {
     try { userId = JSON.parse(raw).user_id || JSON.parse(raw).userId || null; } catch(e) { userId = null; }
     }
     const url = `${API_BASE}/refresh-token`;
     const payload: any = {};
     if (userId) payload.user_id = userId;
        this.http.post<any>(url, payload).pipe(first()).subscribe({ next: (res) => {
      // Expecting { token, user } on success
      try {
        if (res && res.token) {
        sessionStorage.setItem('token', res.token);
        }
        if (res && res.user) {
        sessionStorage.setItem('user', JSON.stringify(res.user));
        }
      } catch (e) {}
      // Close any session-expired dialogs now that token was refreshed
      try { this.dialog.closeAll(); } catch (e) {}
      }, error: () => { try { this.dialog.closeAll(); } catch (e) {} ; this.doLogout(); }, complete: () => {
        this.refreshInProgress = false;
      } });
  }

  private recordActivity(): void {
    if (this.promptOpen) return;
    this.lastActivityAt = Date.now();
    if (!this.idleTimer) this.scheduleIdleCheck();
  }

  private scheduleIdleCheck(): void {
    if (this.idleTimer) clearTimeout(this.idleTimer);

    const remainingMs = Math.max(0, this.idleTimeoutMs - (Date.now() - this.lastActivityAt));
    this.idleTimer = setTimeout(() => {
      this.idleTimer = null;
      if (!this.hasBeenIdleForTenMinutes()) {
        this.scheduleIdleCheck();
        return;
      }

      // The warning is exclusively an inactivity warning after 10 uninterrupted minutes.
      this.ngZone.run(() => this.promptExtendOrLogout('Your session has expired due to inactivity.'));
    }, remainingMs);
  }

  private hasBeenIdleForTenMinutes(): boolean {
    return Date.now() - this.lastActivityAt >= this.idleTimeoutMs;
  }

  private hasLoggedInSession(): boolean {
    try {
      return !!sessionStorage.getItem('token') && !!sessionStorage.getItem('user');
    } catch (e) {
      return false;
    }
  }

  private doLogout() {
    // Attempt to notify backend about logout. If it fails (e.g. expired token), still clear client state.
    try {
      const raw = sessionStorage.getItem('user');
      let userId = null;
      if (raw) {
        try { userId = JSON.parse(raw).user_id || JSON.parse(raw).userId || null; } catch(e) { userId = null; }
      }
      const url = `${API_BASE}/logout`;
      const payload: any = {};
      if (userId) payload.user_id = userId;
      this.http.post<any>(url, payload).pipe(first()).subscribe({ next: () => {
        // ignore server response
      }, error: () => {
        // ignore errors; we'll still clear client-side session
      }, complete: () => {
        this.clearAndRedirect();
      }});
      // Safety: if the POST hangs, ensure we still clear after a short timeout
      setTimeout(() => this.clearAndRedirect(), 3000);
    } catch (e) {
      this.clearAndRedirect();
    }
  }

  private clearAndRedirect() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = null;
    this.promptOpen = false;
    this.refreshInProgress = false;
    try {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('isLogin');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userRole');
      sessionStorage.removeItem('institute');
      sessionStorage.removeItem('institute_id');
    } catch (e) {}
    try { this.router.navigate(['/login']); } catch (e) { try { window.location.href = '/login'; } catch (e) {} }
  }
}
