import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/home/service/auth.service';

@Injectable({ providedIn: 'root' })
export class UnauthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.auth.authReady$.pipe(
      filter(ready => ready),
      take(1),
      map(() => this.resolveRoute())
    );
  }

  private resolveRoute(): boolean | UrlTree {
    if (this.auth.isLoggedIn) {
      let role = '';
      let studentDefaultRoute = '/user/exam';
      try {
        const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile');
        const u = raw ? JSON.parse(raw) : null;
        role = u?.role || sessionStorage.getItem('userRole') || '';
        const allowOnline =
          u?.allow_online_test !== undefined && u?.allow_online_test !== null
            ? !!u.allow_online_test
            : true;
        const allowPaper =
          u?.allow_paper_test !== undefined && u?.allow_paper_test !== null
            ? !!u.allow_paper_test
            : true;
        if (!allowOnline && allowPaper) {
          studentDefaultRoute = '/user/paper-test-results';
        }
      } catch (e) {}
      role = (role || '').toLowerCase();

      if (role.includes('super')) {
        return this.router.parseUrl('/super-admin-dashboard');
      } else if (role === 'admin') {
        return this.router.parseUrl('/admin-dashboard');
      }
      // return this.router.parseUrl('/user-dashboard');
      return this.router.parseUrl(studentDefaultRoute);
    }
    return true;
  }
}
