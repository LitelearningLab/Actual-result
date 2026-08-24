import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { API_BASE } from 'src/app/shared/api.config';
import { PageAccessService } from 'src/app/shared/services/page-access.service';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';

interface LoginResponse {
  status?: boolean | string;
  statusMessage?: string;
  token?: string;
  user?: any;
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

  constructor(
    private http: HttpClient, 
    private pageAccess: PageAccessService,
    private instituteContext: GlobalInstituteContextService
  ) {
    this.restoreSession();
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
          const uid = user.id || user.user_id || user.userId;
          if (uid) this.pageAccess.fetchForUser(uid.toString()).subscribe();
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

  async login(identifier: string, password: string): Promise<boolean> {
  const url = `${API_BASE}/login`;
    try {
      const resp = await firstValueFrom(this.http.post<LoginResponse>(url, { identifier, email: identifier, password }));
      // treat presence of token or status true/success as success
      const ok = resp?.status === true && typeof resp.token === 'string' && resp.token.length > 0 && !!resp.user;
      if (ok) {
        try {
            // Clear any stale context filters or session variables inherited from parent tabs before writing new user session
            this.clearLocalSession();
            this._logged.next(true);

            if (resp.token) sessionStorage.setItem('token', resp.token);
            sessionStorage.setItem('isLogin', 'true');
            if (resp.user) {
            // normalize incoming user object: ensure `id` exists for compatibility
            try {
              const u = { ...resp.user } as any;
              if (!u.id && (u.user_id || u.userId)) u.id = u.user_id || u.userId;
              sessionStorage.setItem('user', JSON.stringify(u));
              this._user.next(u);
              // also set username for legacy components
              if (u.name) sessionStorage.setItem('username', u.name);
              if (u.user_id) sessionStorage.setItem('user_id',u.user_id);
              if (u.role) sessionStorage.setItem('userRole', u.role);
              if (u.institute) sessionStorage.setItem('institute', u.institute);
              if (u.institute_id) sessionStorage.setItem('institute_id', u.institute_id.toString());
            } catch (e) {
              sessionStorage.setItem('user', JSON.stringify(resp.user));
              this._user.next(resp.user);
            }
            }
            // fetch page access immediately for the logged in user
            try {
              // use the normalized user object from _user (ensures `id` present)
              const current = this._user.value;
              const uid = current && (current.id || current.user_id || current.userId);
              if (uid) {
                console.debug('[AuthService] Fetching page access for userId (post-login):', uid);
                this.pageAccess.fetchForUser(uid.toString()).subscribe(rows => {
                  console.debug('[AuthService] Fetched page access rows (post-login):', rows);
                });
              }
            } catch (e) {}
        } catch (e) {
          // ignore storage errors
        }
      } else {
        this._logged.next(false);
      }
      return ok;
    } catch (err) {
      this._logged.next(false);
      this._user.next(null);
      return false;
    }
  }

  logout() {
    // Capture the user before removing it so its permission cache can be cleared.
    const currentUser = this._user.value;
    try { this.http.post(`${API_BASE}/logout`, {}).subscribe({ error: () => {} }); } catch (e) {}
    this.clearLocalSession(currentUser);
  }

  private clearLocalSession(currentUser: any = this._user.value): void {
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
      // clear page access cache for current user
      try {
        const uid = currentUser && (currentUser.id || currentUser.user_id || currentUser.userId);
        if (uid) this.pageAccess.clearCache(uid.toString());
      } catch (e) {}
    } catch (e) {}
  }
}
