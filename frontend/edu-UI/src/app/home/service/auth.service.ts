import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { API_BASE } from 'src/app/shared/api.config';
import { PageAccessService } from 'src/app/shared/services/page-access.service';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';

export interface LoginResponse {
  status?: boolean | string;
  statusMessage?: string;
  token?: string;
  user?: any;
  is_locked?: boolean;
  lock_type?: 'active_session' | string;
  remaining_seconds?: number;
}

export interface LoginResult {
  ok: boolean;
  remainingSeconds?: number;
  statusMessage?: string;
  isLocked?: boolean;
  lockType?: 'active_session' | string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _logged = new BehaviorSubject<boolean>(false);
  readonly isLoggedIn$ = this._logged.asObservable();
  get isLoggedIn() { return this._logged.value; }

  private _authReady = new BehaviorSubject<boolean>(false);
  readonly authReady$ = this._authReady.asObservable();

  private _user = new BehaviorSubject<any | null>(null);
  readonly user$ = this._user.asObservable();

  // synchronous accessor for current user value
  get currentUserValue() { return this._user.value; }

  private heartbeatTimer: any = null;
  private visibilityListener: (() => void) | null = null;
  private unloadListener: (() => void) | null = null;

  constructor(
    private http: HttpClient, 
    private pageAccess: PageAccessService,
    private instituteContext: GlobalInstituteContextService
  ) {
    this.setupUnloadListener();
    this.restoreSession();
  }

  private setupUnloadListener(): void {
    if (this.unloadListener || typeof window === 'undefined') return;

    this.unloadListener = () => {
      let token: string | null = null;
      try { token = sessionStorage.getItem('token'); } catch (e) {}
      if (token) {
        const url = `${API_BASE}/logout?token=${encodeURIComponent(token)}`;
        try {
          if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify({ token })], { type: 'application/json' });
            navigator.sendBeacon(url, blob);
          } else {
            fetch(url, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              keepalive: true
            }).catch(() => {});
          }
        } catch (e) {}
      }
    };

    window.addEventListener('pagehide', this.unloadListener);
    window.addEventListener('beforeunload', this.unloadListener);
  }

  sendHeartbeatPing(): void {
    let token: string | null = null;
    try { token = sessionStorage.getItem('token'); } catch (e) {}

    if (!token) {
      console.debug('[HEARTBEAT] No token');
      this.stopHeartbeat();
      return;
    }

    console.debug('[HEARTBEAT] Sending token:', token.substring(0, 12));

    this.http.post<any>(`${API_BASE}/session/heartbeat`, {}).subscribe({
      next: (resp) => {
        console.debug('[HEARTBEAT] SUCCESS:', resp);
      },
      error: (err) => {
        console.error('[HEARTBEAT] FAILED', {
          status: err?.status,
          error: err?.error,
          token: token?.substring(0, 12)
        });
        if (err?.status === 401) {
          console.error('[HEARTBEAT] SERVER SAYS THIS SESSION IS INVALID');
          this.clearLocalSession();
        }
      }
    });
  }

  startHeartbeat(): void {
    this.stopHeartbeat();
    this.sendHeartbeatPing();
    this.heartbeatTimer = setInterval(() => {
      this.sendHeartbeatPing();
    }, 25000);

    if (!this.visibilityListener && typeof document !== 'undefined') {
      this.visibilityListener = () => {
        if (document.visibilityState === 'visible') {
          this.sendHeartbeatPing();
        }
      };
      document.addEventListener('visibilitychange', this.visibilityListener);
    }
  }

  stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    if (this.visibilityListener && typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', this.visibilityListener);
      this.visibilityListener = null;
    }
  }

  private restoreSession(): void {
    let token: string | null = null;
    try { token = sessionStorage.getItem('token'); } catch (e) {}
    if (!token) {
      this.clearLocalSession();
      this._authReady.next(true);
      return;
    }

    this.http.get<LoginResponse>(`${API_BASE}/session/validate`).subscribe({
      next: (resp) => {
        if (resp?.status === true && resp.user) {
          const user = { ...resp.user } as any;
          if (!user.id && (user.user_id || user.userId)) user.id = user.user_id || user.userId;
          this._user.next(user);
          this._logged.next(true);
          sessionStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('isLogin', 'true');
          if (user.role) sessionStorage.setItem('userRole', user.role);
          if (user.locale) sessionStorage.setItem('locale', user.locale);
          if (user.country_code) sessionStorage.setItem('country_code', user.country_code);
          if (user.country_name) sessionStorage.setItem('country_name', user.country_name);
          if (user.country_id) sessionStorage.setItem('country_id', user.country_id);
          const uid = user.id || user.user_id || user.userId;
          if (uid) this.pageAccess.fetchForUser(uid.toString()).subscribe();
          this.startHeartbeat();
        } else {
          this.clearLocalSession();
        }
        this._authReady.next(true);
      },
      error: () => {
        this.clearLocalSession();
        this._authReady.next(true);
      }
    });
  }

  async login(identifier: string, password: string): Promise<LoginResult> {
    const url = `${API_BASE}/login`;
    try {
      const resp = await firstValueFrom(this.http.post<LoginResponse>(url, { identifier, email: identifier, password }));
      const ok = resp?.status === true && typeof resp.token === 'string' && resp.token.length > 0 && !!resp.user;
      if (ok) {
        try {
            this._logged.next(true);

            if (resp.token) sessionStorage.setItem('token', resp.token);
            sessionStorage.setItem('isLogin', 'true');
            if (resp.user) {
              try {
                const u = { ...resp.user } as any;
                if (!u.id && (u.user_id || u.userId)) u.id = u.user_id || u.userId;
                sessionStorage.setItem('user', JSON.stringify(u));
                this._user.next(u);
                if (u.name) sessionStorage.setItem('username', u.name);
                if (u.user_id) sessionStorage.setItem('user_id', u.user_id);
                if (u.role) sessionStorage.setItem('userRole', u.role);
                if (u.institute) sessionStorage.setItem('institute', u.institute);
                if (u.institute_id) sessionStorage.setItem('institute_id', u.institute_id.toString());
                if (u.locale) sessionStorage.setItem('locale', u.locale);
                if (u.country_code) sessionStorage.setItem('country_code', u.country_code);
                if (u.country_name) sessionStorage.setItem('country_name', u.country_name);
                if (u.country_id) sessionStorage.setItem('country_id', u.country_id);
              } catch (e) {
                sessionStorage.setItem('user', JSON.stringify(resp.user));
                this._user.next(resp.user);
              }
            }
            try {
              const current = this._user.value;
              const uid = current && (current.id || current.user_id || current.userId);
              if (uid) {
                this.pageAccess.fetchForUser(uid.toString()).subscribe();
              }
            } catch (e) {}
            this.startHeartbeat();
        } catch (e) {}
        return { ok: true };
      } else {
        this._logged.next(false);
        return {
          ok: false,
          remainingSeconds: resp?.remaining_seconds,
          isLocked: resp?.is_locked,
          lockType: resp?.lock_type,
          statusMessage: resp?.statusMessage
        };
      }
    } catch (err: any) {
      let errResp = err?.error || err;
      if (typeof errResp === 'string') {
        try { errResp = JSON.parse(errResp); } catch(e){}
      }
      const lockType = errResp?.lock_type || errResp?.lockType || (errResp?.is_locked ? 'active_session' : undefined);
      const isLocked = errResp?.is_locked ?? errResp?.isLocked ?? (lockType ? true : false);
      const remainingSeconds = errResp?.remaining_seconds ?? errResp?.remainingSeconds ?? 0;
      const statusMessage = errResp?.statusMessage || errResp?.message || (typeof errResp === 'string' ? errResp : 'Login failed. Please check your credentials.');

      // 409 means another session is active. Do NOT clear an existing local session.
      if (err?.status === 409 && isLocked) {
        return {
          ok: false,
          remainingSeconds: remainingSeconds,
          isLocked: true,
          lockType: lockType,
          statusMessage: statusMessage
        };
      }

      this._logged.next(false);
      this._user.next(null);
      return {
        ok: false,
        remainingSeconds: remainingSeconds,
        isLocked: isLocked,
        lockType: lockType,
        statusMessage: statusMessage
      };
    }
  }

  logout() {
    const currentUser = this._user.value;
    try { this.http.post(`${API_BASE}/logout`, {}).subscribe({ error: () => {} }); } catch (e) {}
    this.clearLocalSession(currentUser);
  }

  private clearLocalSession(currentUser: any = this._user.value): void {
    this.stopHeartbeat();
    this._logged.next(false);
    this._user.next(null);
    try {
      if (this.instituteContext) {
        this.instituteContext.clearContext();
      }
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('isLogin');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userRole');
      sessionStorage.removeItem('institute');
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('institute_id');
      sessionStorage.removeItem('locale');
      sessionStorage.removeItem('country_code');
      sessionStorage.removeItem('country_name');
      sessionStorage.removeItem('country_id');
      sessionStorage.removeItem('launched_exam');
      sessionStorage.removeItem('test_result');
      sessionStorage.removeItem('last_submission');
      sessionStorage.removeItem('review_questions');
      sessionStorage.removeItem('edit_exam');
      sessionStorage.removeItem('view_exam');
      sessionStorage.removeItem('edit_category');
      sessionStorage.removeItem('view_user');
      sessionStorage.removeItem('edit_user');
      sessionStorage.removeItem('edit_question');
      sessionStorage.removeItem('view_question');
      sessionStorage.removeItem('super_admin_institute_context');
      sessionStorage.removeItem('global_institute_id');
      sessionStorage.removeItem('global_institute_name');
      try {
        const uid = currentUser && (currentUser.id || currentUser.user_id || currentUser.userId);
        if (uid) this.pageAccess.clearCache(uid.toString());
      } catch (e) {}
    } catch (e) {}
  }
}
