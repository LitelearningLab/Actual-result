import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { API_BASE } from '../api.config';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly idleTimeoutMs = 10 * 60 * 1000;
  private readonly activityEvents = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
  private listening = false;
  private lastActivityAt = Date.now();
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private promptOpen = false;
  private refreshInProgress = false;

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {}

  startListening() {
    if (this.listening) return;
    this.listening = true;

    this.activityEvents.forEach(eventName => {
      window.addEventListener(eventName, () => this.recordActivity(), { passive: true });
    });

    window.addEventListener('sessionExpired', (ev: any) => {
      const msg = ev && ev.detail && ev.detail.message ? ev.detail.message : 'Your session has expired';
      if (/another device|logged in from another|active on another/i.test(msg)) {
        this.ngZone.run(() => this.promptSingleDeviceLogout('Your account was logged in from another device. Please log in again if needed.'));
      } else {
        this.ngZone.run(() => this.promptExtendOrLogout(msg));
      }
    });

    this.scheduleIdleCheck();
  }

  private promptSingleDeviceLogout(message: string) {
    if (this.promptOpen || !this.hasLoggedInSession()) return;
    this.promptOpen = true;
    try {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
    } catch (e) {}

    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Logged Out',
        message: message,
        confirmText: 'OK',
        cancelText: ''
      },
      disableClose: true
    });

    ref.afterClosed().pipe(first()).subscribe(() => {
      this.promptOpen = false;
      this.clearAndRedirect();
    });
  }

  private promptExtendOrLogout(message: string) {
    if (this.promptOpen || !this.hasLoggedInSession()) return;
    this.promptOpen = true;

    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Session Expired',
        message: message + '\nWould you like to continue your session?',
        confirmText: 'Continue',
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

    this.http.post<any>(url, payload).pipe(first()).subscribe({
      next: (res) => {
        try {
          if (res && res.token) {
            console.debug('[SessionService] Token refreshed successfully. Updated sessionStorage token:', res.token.substring(0, 8) + '...');
            sessionStorage.setItem('token', res.token);
          }
          if (res && res.user) {
            sessionStorage.setItem('user', JSON.stringify(res.user));
          }
        } catch (e) {}
        try { this.dialog.closeAll(); } catch (e) {}
      },
      error: (err) => {
        this.refreshInProgress = false;
        if (err && (err.status === 401 || err.status === 403)) {
          const msg = err.error && (err.error.statusMessage || err.error.message) 
            ? err.error.statusMessage || err.error.message 
            : 'Your session could not be renewed. Please log in again.';
          this.ngZone.run(() => this.promptSingleDeviceLogout(msg));
        } else {
          console.warn('Unable to refresh the session; keeping existing login state.', err);
        }
      },
      complete: () => {
        this.refreshInProgress = false;
      }
    });
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

      // Do nothing when idle for Admin and Super Admin
      if (this.isAdminOrSuperAdmin()) return;

      // Inactivity warning for regular users after 10 uninterrupted minutes
      this.ngZone.run(() => {
        this.promptExtendOrLogout('Your session has expired due to inactivity.');
      });
    }, remainingMs);
  }

  private isAdminOrSuperAdmin(): boolean {
    try {
      const raw = sessionStorage.getItem('user');
      if (!raw) return false;
      const user = JSON.parse(raw);
      const role = String(user.role || user.user_role || '').toLowerCase();
      return ['admin', 'super_admin', 'superadmin', 'super-admin'].includes(role);
    } catch (e) {
      return false;
    }
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
    try {
      const raw = sessionStorage.getItem('user');
      let userId = null;
      if (raw) {
        try { userId = JSON.parse(raw).user_id || JSON.parse(raw).userId || null; } catch(e) { userId = null; }
      }
      const url = `${API_BASE}/logout`;
      const payload: any = {};
      if (userId) payload.user_id = userId;
      this.http.post<any>(url, payload).pipe(first()).subscribe({
        next: () => {},
        error: () => {},
        complete: () => {
          this.clearAndRedirect();
        }
      });
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
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('launched_exam');
      sessionStorage.removeItem('test_result');
      sessionStorage.removeItem('last_submission');
      sessionStorage.removeItem('review_questions');
    } catch (e) {}
    try {
      this.router.navigate(['/login']);
    } catch (e) {
      try { window.location.href = '/login'; } catch (e) {}
    }
  }
}
