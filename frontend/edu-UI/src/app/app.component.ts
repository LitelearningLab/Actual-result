import { Component, Inject, OnDestroy } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from './home/service/auth.service';
import { SessionService } from './shared/services/session.service';
import { GlobalInstituteContextService } from './shared/services/global-institute-context.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'edu-UI';
  isLoggedIn$: Observable<boolean>;
  isAuthRoute = false;
  private globalInstituteSub: Subscription;
  private routerSub: Subscription;

  constructor(
    private auth: AuthService,
    private sessionService: SessionService,
    public globalInstituteContext: GlobalInstituteContextService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isLoggedIn$ = this.auth.isLoggedIn$;
    this.sessionService.startListening();
    this.syncGlobalInstituteBodyClass(this.globalInstituteContext.isGlobalFilterActive());
    this.globalInstituteSub = this.globalInstituteContext.selectedInstitute$.subscribe(() => {
      this.syncGlobalInstituteBodyClass(this.globalInstituteContext.isGlobalFilterActive());
    });

    this.checkIsAuthRoute(this.router.url);
    this.routerSub = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkIsAuthRoute(event.urlAfterRedirects || event.url);
    });
  }

  private checkIsAuthRoute(url: string): void {
    const cleanUrl = (url || '').split('?')[0].split('#')[0];
    this.isAuthRoute = cleanUrl === '/' || cleanUrl.endsWith('/login') || cleanUrl === '/login' || cleanUrl === '/home/login' || cleanUrl === '/register';
  }

  ngOnDestroy(): void {
    try { this.globalInstituteSub?.unsubscribe(); } catch (e) {}
    try { this.routerSub?.unsubscribe(); } catch (e) {}
    this.syncGlobalInstituteBodyClass(false);
  }

  private syncGlobalInstituteBodyClass(isActive: boolean): void {
    try {
      this.document.body.classList.toggle('global-institute-active', isActive);
    } catch (e) {}
  }
}
