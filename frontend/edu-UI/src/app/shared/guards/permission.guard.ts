import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take } from 'rxjs/operators';
import { PageAccessService } from '../services/page-access.service';
import { AuthService } from 'src/app/home/service/auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  constructor(
    private pageAccess: PageAccessService,
    private auth: AuthService,
    private router: Router
  ) {}

  private normalizePageName(pageName: string): string {
    const aliases: Record<string, string> = {
      'category': 'Question Banks',
      'categories': 'Question Banks',
      'question bank': 'Question Banks',
      'question banks': 'Question Banks',
      'exam': 'Create/Edit Test',
      'exams': 'Create/Edit Test',
      'test': 'Create/Edit Test',
      'tests': 'Create/Edit Test',
      'manage test': 'Create/Edit Test',
      'create/edit test': 'Create/Edit Test',
      'create/edit paper test': 'Create/Edit Paper Test',
      'paper test': 'Create/Edit Paper Test',
      'create question paper': 'Create/Edit Paper Test',
      'question paper': 'Create/Edit Paper Test',
      'question papers': 'Create/Edit Paper Test',
      'create-question-paper': 'Create/Edit Paper Test',
      'question-papers': 'Create/Edit Paper Test',
      'schedule exam': 'Schedule Test',
      'schedule': 'Schedule Test',
      'schedule test': 'Schedule Test',
      'scheduled tests': 'Schedule Test',
      'schedule paper test': 'Schedule Paper Test',
      'scheduled paper tests': 'Schedule Paper Test',
      'scheduled paper test': 'Schedule Paper Test',
      'test evaluation': 'Paper Evaluation',
      'paper evaluation': 'Paper Evaluation',
      'exam reports': 'Test Reports',
      'test reports': 'Test Reports',
      'users': 'Users',
      'user': 'Users',
      'questions': 'Questions',
      'question': 'Questions'
    };
    const key = (pageName || '').trim().toLowerCase();
    return aliases[key] || pageName;
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.auth.authReady$.pipe(
      filter(ready => ready),
      take(1),
      switchMap(() => this.checkAccess(route))
    );
  }

  private checkAccess(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const pageName = this.normalizePageName((route.data && (route.data as any)['pageName']) || (route.data && (route.data as any)['page']) || '');
    const action = (route.data && (route.data as any)['action']) || 'view';
    const requiredRole = (route.data && (route.data as any)['requiredRole']) || null;
    const user = (this.auth as any).currentUserValue || null;
    if (!user) return of(this.router.createUrlTree(['/login']));

    const userRole = (user.role || user.user_role || '').toString().toLowerCase();

    // 1. Role verification if requiredRole is defined
    if (requiredRole) {
      const allowed = Array.isArray(requiredRole) ? requiredRole.map((r: any) => String(r).toLowerCase()) : [String(requiredRole).toLowerCase()];
      if (!allowed.includes(userRole)) {
        return of(this.router.createUrlTree(['/unauthorized']));
      }
    }

    // 2. Super Admins bypass page-level permission checks
    if (userRole === 'super_admin' || userRole === 'superadmin' || userRole === 'super-admin') {
      return of(true);
    }

    // 3. Candidate / Student roles bypass on student routes
    const isStudent = ['user', 'candidate', 'student', 'learner'].includes(userRole);
    if (isStudent) {
      return of(true);
    }

    // 4. Institute engine toggles check
    const allowOnline = user.allow_online_test !== undefined && user.allow_online_test !== null ? !!user.allow_online_test : true;
    const allowPaper = user.allow_paper_test !== undefined && user.allow_paper_test !== null ? !!user.allow_paper_test : true;

    // Mutating online test routes require allowOnline
    const isOnlineRoute = pageName === 'Create/Edit Test' || pageName === 'Schedule Test';
    if (isOnlineRoute && !allowOnline && action !== 'view') {
      return of(this.router.createUrlTree(['/unauthorized']));
    }

    // Mutating paper test routes require allowPaper
    const isPaperRoute = pageName === 'Create/Edit Paper Test' || pageName === 'Schedule Paper Test';
    if (isPaperRoute && !allowPaper && action !== 'view') {
      return of(this.router.createUrlTree(['/unauthorized']));
    }

    // Mutating Paper Evaluation requires allowPaper (viewing historical evaluations is allowed)
    if (pageName === 'Paper Evaluation' && !allowPaper && action !== 'view') {
      return of(this.router.createUrlTree(['/unauthorized']));
    }

    // 5. Default modules for Admin
    // Dashboard, Reports, AI Credits, and Paper Evaluation are default modules
    if (pageName === 'Test Reports' || pageName === 'Admin Dashboard' || pageName === 'AI Credits' || pageName === 'Paper Evaluation') {
      return of(true);
    }

    // 6. Granular permission check for add-on pages
    if (pageName) {
      const userId = user.id || user.user_id || user.userId || null;
      if (!userId) return of(this.router.createUrlTree(['/login']));

      return this.pageAccess.hasPermission(userId.toString(), pageName, action).pipe(
        map((has: boolean) => has ? true : this.router.createUrlTree(['/unauthorized'])),
        catchError(() => of(this.router.createUrlTree(['/unauthorized'])))
      );
    }

    return of(true);
  }
}
