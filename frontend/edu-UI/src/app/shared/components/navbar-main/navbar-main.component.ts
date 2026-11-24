import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, TemplateRef, ViewChild, HostListener } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { AuthService } from '../../../home/service/auth.service';
import { Router, NavigationEnd ,RouterModule} from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { API_BASE } from 'src/app/shared/api.config';
import { APP_VERSION } from '../../../../environments/version';
import { PageMetaService } from '../../services/page-meta.service';
import { GlobalInstituteContextService } from '../../services/global-institute-context.service';
import { SidenavService } from '../../services/sidenav.service';
import { getInstituteTerminology, InstituteTerminology } from '../../services/institute-terminology.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AiCreditNotificationService, AiCreditNotificationItem } from '../../services/ai-credit-notification.service';

@Component({
  selector: 'app-navbar-main',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatDialogModule, MatSnackBarModule, MatButtonModule],
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit, OnDestroy {
  @ViewChild('logoutConfirmationDialog') logoutConfirmationDialog!: TemplateRef<any>;
  isUserPanelOpen = false;
  isLogin = false;
  appVersion = APP_VERSION;
  moduleName: string = '';
  moduleData: string = '';

  // Notifications State
  isNotificationPanelOpen = false;
  hasUnreadNotification = false;
  unreadNotificationCount = 0;
  creditNotifications: AiCreditNotificationItem[] = [];

  // Floating Toast State (Top-Right Floating Tooltip/Toast)
  floatingToast: AiCreditNotificationItem | null = null;
  private toastTimer: any = null;
  private newNotifSubscription?: Subscription;

  creditAlertLevel: 'none' | 'warning' | 'critical' | 'exhausted' = 'none';
  creditAlert: {
    title: string;
    message: string;
    remainingText: string;
    tierClass: string;
    icon: string;
  } | null = null;

  get highestAlertLevel(): 'warning' | 'critical' | 'exhausted' | 'info' {
    const unread = this.creditNotifications.filter(n => !n.is_read);
    if (unread.some(n => n.severity === 'EXHAUSTED')) return 'exhausted';
    if (unread.some(n => n.severity === 'CRITICAL')) return 'critical';
    if (unread.some(n => n.severity === 'WARNING')) return 'warning';
    return 'info';
  }

  instituteShortName = (() => {
    try {
      const userStr = sessionStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        return user?.institute_short_name || '';
      }
      return '';
    } catch (e) {
      return '';
    }
  })();

  private routerSubscription!: Subscription;
  private authSubscription?: Subscription;
  private userSubscription?: Subscription;
  private pageMetaSubscription?: Subscription;
  private globalInstituteSubscription?: Subscription;
  private aiNotifSubscription?: Subscription;
  private aiUnreadSubscription?: Subscription;

  username = sessionStorage.getItem('username') || 'Guest';
  userRole = sessionStorage.getItem('userRole') || 'unknown user role';
  displayName = this.getStoredDisplayName();
  displayInstitute = sessionStorage.getItem('institute') || '';
  instituteDisplayName = this.getStoredInstituteName();
  get isAdminUser(): boolean {
    let sessionUserRole = '';
    try {
      const rawUser = sessionStorage.getItem('user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        sessionUserRole = u?.role || u?.user_role || '';
      }
    } catch (e) { /* ignore */ }
    const role = String(this.userObj?.user_role || this.userObj?.role || sessionUserRole || this.userRole || sessionStorage.getItem('userRole') || '').toLowerCase().trim();
    return ['admin', 'super_admin', 'superadmin', 'super-admin'].some(r => role === r || role.includes(r));
  }

  get isSuperAdmin(): boolean {
    let sessionUserRole = '';
    try {
      const rawUser = sessionStorage.getItem('user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        sessionUserRole = u?.role || u?.user_role || '';
      }
    } catch (e) { /* ignore */ }
    const role = String(this.userObj?.user_role || this.userObj?.role || sessionUserRole || this.userRole || sessionStorage.getItem('userRole') || '').toLowerCase().trim();
    return ['super_admin', 'superadmin', 'super-admin'].some(r => role === r || role.includes('super'));
  }

  get terminology(): InstituteTerminology {
    let industryType = this.userObj?.industry_type || 
                       this.userObj?.industry || 
                       sessionStorage.getItem('industry_type') || 
                       sessionStorage.getItem('industry') || 
                       (this.globalInstituteContext?.activeInstitute as any)?.industry_type || 
                       this.globalInstituteContext?.activeInstitute?.industry || 
                       '';
    if (!industryType) {
      const instName = (this.userInstituteDisplay || '').toLowerCase();
      if (instName.includes('school')) industryType = 'School';
      else if (instName.includes('college')) industryType = 'College';
    }
    return getInstituteTerminology(industryType);
  }

  get deptLabel(): string {
    return this.terminology.deptLabel;
  }

  get teamLabel(): string {
    return this.terminology.teamLabel;
  }

  userObj: any = (() => {
    try {
      const rawUser = sessionStorage.getItem('user');
      return rawUser ? JSON.parse(rawUser) : null;
    } catch (e) {
      return null;
    }
  })();
  initials = this.username ? this.username.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase() : 'G';

  get userInstituteDisplay(): string {
    const inst = this.userObj?.institute_name || 
                 this.userObj?.institute || 
                 this.instituteDisplayName || 
                 this.displayInstitute || 
                 this.instituteShortName || 
                 sessionStorage.getItem('institute') || 
                 '—';
    return inst && String(inst).trim() ? String(inst).trim() : '—';
  }

  get userEmailDisplay(): string {
    const email = this.userObj?.email || sessionStorage.getItem('email') || '';
    return email && String(email).trim() ? String(email).trim() : '—';
  }

  get roleDisplay(): string {
    let sessionUserRole = '';
    try {
      const rawUser = sessionStorage.getItem('user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        sessionUserRole = u?.role || u?.user_role || '';
      }
    } catch (e) { /* ignore */ }
    const rawRole = this.userObj?.user_role || this.userObj?.role || sessionUserRole || this.userRole || sessionStorage.getItem('userRole') || '';
    const r = String(rawRole).toLowerCase().trim();
    if (['super_admin', 'superadmin', 'super-admin'].some(role => r === role || r.includes('super'))) return 'Super Admin';
    if (r === 'admin') return 'Admin';
    if (r === 'user' || r === 'student') return 'User';
    if (rawRole && String(rawRole).trim()) {
      const str = String(rawRole).trim();
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '—';
  }

  get teamDisplay(): string {
    const team = this.userObj?.team_name || 
                 this.userObj?.team || 
                 (typeof this.userObj?.team === 'object' ? this.userObj?.team?.team_name : '') || 
                 sessionStorage.getItem('team') || 
                 '—';
    return team && String(team).trim() ? String(team).trim() : '—';
  }

  get departmentDisplay(): string {
    const dept = this.userObj?.department_name || 
                 this.userObj?.department || 
                 (typeof this.userObj?.department === 'object' ? this.userObj?.department?.department_name : '') || 
                 sessionStorage.getItem('department') || 
                 '—';
    return dept && String(dept).trim() ? String(dept).trim() : '—';
  }

  get campusDisplay(): string {
    const campus = this.userObj?.campus_name || 
                   this.userObj?.campus || 
                   (typeof this.userObj?.campus === 'object' ? this.userObj?.campus?.campus_name : '') || 
                   sessionStorage.getItem('campus') || 
                   '—';
    return campus && String(campus).trim() ? String(campus).trim() : '—';
  }

  get cityDisplay(): string {
    const city = this.userObj?.city_name || 
                 this.userObj?.city || 
                 (typeof this.userObj?.city === 'object' ? this.userObj?.city?.city_name : '') || 
                 sessionStorage.getItem('city') || 
                 '—';
    return city && String(city).trim() ? String(city).trim() : '—';
  }

  constructor(
    public router: Router,
    private authService: AuthService,
    private pageMeta: PageMetaService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private http: HttpClient,
    private globalInstituteContext: GlobalInstituteContextService,
    private sidenavService: SidenavService,
    private notificationService: NotificationService,
    private aiNotificationService: AiCreditNotificationService
  ) {
    this.pageMetaSubscription = this.pageMeta.getMetaObservable().subscribe(m => {
      this.moduleName = m.title || '';
      this.moduleData = m.subtitle || '';
    });

    this.authSubscription = this.authService.isLoggedIn$.subscribe(v => {
      this.isLogin = !!v;
      if (this.isLogin) {
        this.checkAiCreditAlerts();
        this.initAiNotifications();
      }
    });
    this.userSubscription = this.authService.user$.subscribe(u => {
      if (u) {
        this.userObj = u;
        this.displayName = this.getUserDisplayName(u);
        this.displayInstitute = u.institute_name || u.institute || sessionStorage.getItem('institute') || '';
        this.instituteShortName = u.institute_short_name || this.instituteShortName;
        this.instituteDisplayName = this.getNavbarInstituteName(u.institute_name || u.institute || this.displayInstitute || this.instituteShortName);
        this.userRole = u.role || this.userRole;
        this.initials = (this.displayName || 'G').split(' ').map((s: string) => s[0]).slice(0,2).join('').toUpperCase();
        this.checkAiCreditAlerts();
        this.initAiNotifications();
      } else {
        this.displayName = this.getStoredDisplayName();
        this.displayInstitute = sessionStorage.getItem('institute') || '';
        this.instituteDisplayName = this.getNavbarInstituteName();
        this.initials = (this.displayName || 'G').split(' ').map((s: string) => s[0]).slice(0,2).join('').toUpperCase();
      }
    });

    this.globalInstituteSubscription = this.globalInstituteContext.selectedInstitute$.subscribe(() => {
      this.instituteDisplayName = this.getNavbarInstituteName();
      this.checkAiCreditAlerts();
      if (this.isAdminUser) {
        const activeInst = this.globalInstituteContext.activeInstituteId || (this.userObj?.institute_id ? String(this.userObj.institute_id) : null);
        this.aiNotificationService.setInstituteScope(activeInst);
      }
    });

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeUserPanel();
        this.closeNotifications();
      });
  }

  toggleMobileNav(): void {
    this.sidenavService.toggleMobile();
  }

  ngOnInit(): void {
    this.checkAiCreditAlerts();
    this.initAiNotifications();
  }

  toggleNotifications(event?: MouseEvent): void {
    if (event) event.stopPropagation();
    this.isNotificationPanelOpen = !this.isNotificationPanelOpen;
    if (this.isNotificationPanelOpen) {
      this.closeUserPanel();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isNotificationPanelOpen) {
      const target = event.target as HTMLElement;
      if (!target.closest('.notifications-wrapper')) {
        this.closeNotifications();
      }
    }
  }

  closeNotifications(): void {
    this.isNotificationPanelOpen = false;
  }

  markNotificationAsRead(notificationId: string, event?: Event): void {
    if (event) event.stopPropagation();
    this.creditNotifications = this.creditNotifications.filter(n => n.notification_id !== notificationId);
    this.unreadNotificationCount = Math.max(0, this.unreadNotificationCount - 1);
    this.hasUnreadNotification = this.unreadNotificationCount > 0;
    this.aiNotificationService.markAsRead(notificationId).subscribe();
  }

  markAllNotificationsAsRead(event?: Event): void {
    if (event) event.stopPropagation();
    this.creditNotifications = [];
    this.unreadNotificationCount = 0;
    this.hasUnreadNotification = false;
    this.aiNotificationService.markAllAsRead().subscribe({
      error: (err) => console.warn('[AiNotification] mark-all-read error:', err)
    });
  }

  onNotificationClick(notif: AiCreditNotificationItem): void {
    if (!notif) return;

    // 1. Mark as read on backend
    if (!notif.is_read) {
      this.aiNotificationService.markAsRead(notif.notification_id).subscribe({
        error: (err) => console.warn('[AiNotification] mark-read error:', err)
      });
    }

    // 2. Immediately remove from dropdown list so it completely disappears
    this.creditNotifications = this.creditNotifications.filter(n => n.notification_id !== notif.notification_id);
    this.unreadNotificationCount = Math.max(0, this.unreadNotificationCount - 1);
    this.hasUnreadNotification = this.unreadNotificationCount > 0;

    // 3. Close notification dropdown
    this.closeNotifications();

    // 4. For regular school admins, navigate to their credits page.
    // For Super Admin: Do NOT switch organization and do NOT hijack context.
    // Super Admin stays on Profluent Lab Pvt. Ltd at all times.
    if (!this.isSuperAdmin) {
      this.router.navigate(['/admin/ai-credits']).catch(() => {
        this.router.navigateByUrl('/admin/ai-credits');
      });
    }
  }

  markNotificationsAsRead(): void {
    this.markAllNotificationsAsRead();
  }

  private initAiNotifications(): void {
    if (!this.isAdminUser) return;
    const activeInst = this.globalInstituteContext.activeInstituteId || (this.userObj?.institute_id ? String(this.userObj.institute_id) : null);
    this.aiNotificationService.init(activeInst);

    if (!this.aiNotifSubscription) {
      this.aiNotifSubscription = this.aiNotificationService.notifications$.subscribe(notifs => {
        // Only keep unread notifications in the dropdown list so read ones disappear
        this.creditNotifications = (notifs || []).filter(n => !n.is_read);
      });
    }
    if (!this.aiUnreadSubscription) {
      this.aiUnreadSubscription = this.aiNotificationService.unreadCount$.subscribe(count => {
        this.unreadNotificationCount = count || 0;
        this.hasUnreadNotification = (count > 0);
      });
    }
    if (!this.newNotifSubscription) {
      this.newNotifSubscription = this.aiNotificationService.newNotification$.subscribe(notif => {
        this.showFloatingToast(notif);
      });
    }
  }

  showFloatingToast(notif: AiCreditNotificationItem): void {
    if (!notif) return;
    this.floatingToast = notif;
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.floatingToast = null;
    }, 7000);
  }

  onToastClick(): void {
    if (!this.floatingToast) return;
    const notif = this.floatingToast;
    this.floatingToast = null;
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.onNotificationClick(notif);
  }

  dismissToast(event?: Event): void {
    if (event) event.stopPropagation();
    this.floatingToast = null;
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }

  getNotificationTitle(notif: AiCreditNotificationItem): string {
    if (!notif) return 'Notification';
    let baseTitle = notif.title || '';
    
    // Format credit addition if credits_amount or message has numbers
    if (notif.credits_amount) {
      const amt = Math.abs(Number(notif.credits_amount)).toLocaleString();
      baseTitle = `${amt} credits added by ${notif.created_by || 'Super Admin'}`;
    } else {
      const match = (notif.message || '').match(/Added\s+([0-9,]+)\s+credits/i);
      if (match && match[1]) {
        baseTitle = `${match[1]} credits added by ${notif.created_by || 'Super Admin'}`;
      }
    }

    // For Super Admin: prefix with organization / institute name for all industries
    const orgName = notif.institute_name || '';
    if (this.isSuperAdmin && orgName && !baseTitle.toLowerCase().includes(orgName.toLowerCase())) {
      return `${orgName}: ${baseTitle}`;
    }

    return baseTitle || 'Notification';
  }

  isCreditNotification(notif: any): boolean {
    const et = String(notif?.event_type || '').toUpperCase();
    return ['LOW_BALANCE', 'CRITICAL_BALANCE', 'EXHAUSTED', 'ALLOCATION', 'RENEWAL', 'ADJUSTMENT'].includes(et) ||
           String(notif?.title || '').toLowerCase().includes('credit');
  }

  dismissNotification(notif: AiCreditNotificationItem, event: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (!notif) return;

    if (!notif.is_read) {
      this.aiNotificationService.markAsRead(notif.notification_id).subscribe({
        error: (err) => console.warn('[AiNotification] mark-read error:', err)
      });
    }

    this.creditNotifications = this.creditNotifications.filter(n => n.notification_id !== notif.notification_id);
    this.unreadNotificationCount = Math.max(0, this.unreadNotificationCount - 1);
    this.hasUnreadNotification = (this.unreadNotificationCount > 0);
  }

  getNotificationIcon(notif: AiCreditNotificationItem): string {
    const sev = String(notif?.severity || '').toUpperCase();
    const evt = String(notif?.event_type || '').toUpperCase();
    const title = String(notif?.title || '').toLowerCase();
    const msg = String(notif?.message || '').toLowerCase();

    if (
      sev === 'EXHAUSTED' ||
      sev === 'CRITICAL' ||
      evt === 'EXHAUSTED' ||
      evt === 'CRITICAL_BALANCE' ||
      title.includes('insufficient') ||
      title.includes('exhausted') ||
      msg.includes('insufficient') ||
      msg.includes('exhausted')
    ) {
      return 'report_problem';
    }
    if (sev === 'WARNING' || evt === 'LOW_BALANCE' || title.includes('low') || msg.includes('low balance')) {
      return 'warning_amber';
    }
    return 'auto_awesome';
  }

  getCardTierClass(notif: AiCreditNotificationItem): string {
    const sev = String(notif?.severity || '').toUpperCase();
    const evt = String(notif?.event_type || '').toUpperCase();
    const title = String(notif?.title || '').toLowerCase();
    const msg = String(notif?.message || '').toLowerCase();

    if (
      sev === 'EXHAUSTED' ||
      sev === 'CRITICAL' ||
      evt === 'EXHAUSTED' ||
      evt === 'CRITICAL_BALANCE' ||
      title.includes('insufficient') ||
      title.includes('exhausted') ||
      msg.includes('insufficient') ||
      msg.includes('exhausted')
    ) {
      return 'tier-critical';
    }
    if (sev === 'WARNING' || evt === 'LOW_BALANCE' || title.includes('low') || msg.includes('low balance')) {
      return 'tier-warning';
    }
    return 'tier-info';
  }

  formatRelativeTime(dateStr?: string | null): string {
    if (!dateStr) return '';
    try {
      const now = new Date();
      const past = new Date(dateStr.endsWith('Z') ? dateStr : dateStr + 'Z');
      const diffSec = Math.floor((now.getTime() - past.getTime()) / 1000);
      if (diffSec < 60) return 'Just now';
      const diffMin = Math.floor(diffSec / 60);
      if (diffMin < 60) return `${diffMin}m ago`;
      const diffHr = Math.floor(diffMin / 60);
      if (diffHr < 24) return `${diffHr}h ago`;
      const diffDay = Math.floor(diffHr / 24);
      if (diffDay < 7) return `${diffDay}d ago`;
      return past.toLocaleDateString();
    } catch {
      return '';
    }
  }

  trackNotificationById(index: number, item: AiCreditNotificationItem): string {
    return item?.notification_id || String(index);
  }

  navigateToCredits(): void {
    this.closeNotifications();
    this.router.navigate(['/admin/ai-credits']);
  }

  checkAiCreditAlerts(): void {
    if (!this.isLogin || !this.isAdminUser) {
      this.creditAlertLevel = 'none';
      this.creditAlert = null;
      this.hasUnreadNotification = false;
      return;
    }
    const activeInstituteId = this.globalInstituteContext.activeInstituteId || (this.userObj?.institute_id ? String(this.userObj.institute_id) : '');
    const url = activeInstituteId ? `${API_BASE}/ai-credits/summary?institute_id=${encodeURIComponent(activeInstituteId)}` : `${API_BASE}/ai-credits/summary`;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (!res || !res.status || !res.data) return;
        const data = res.data;
        const remaining = Number(data.remaining_credits ?? 0);
        const allocated = Number(data.allocated_credits ?? 0);

        if (allocated === 0) {
          this.creditAlertLevel = 'none';
          this.creditAlert = null;
          this.hasUnreadNotification = false;
          return;
        }

        let newLevel: 'none' | 'warning' | 'critical' | 'exhausted' = 'none';
        let alertObj: any = null;

        if (remaining <= 0) {
          newLevel = 'exhausted';
          alertObj = {
            title: 'AI Quota Exhausted',
            message: 'Your AI credits have reached 0. AI features are paused until refilled.',
            remainingText: '0 credits left',
            tierClass: 'tier-exhausted',
            icon: 'error'
          };
        } else if (remaining <= 5000) {
          newLevel = 'critical';
          alertObj = {
            title: 'Critical Low Balance Alert',
            message: `Only ${remaining.toLocaleString()} AI credits remaining! Refill immediately.`,
            remainingText: `${remaining.toLocaleString()} credits left (≤ 5,000)`,
            tierClass: 'tier-critical',
            icon: 'warning'
          };
        } else if (remaining <= 40000) {
          newLevel = 'warning';
          alertObj = {
            title: 'Low Balance Warning',
            message: `Remaining credits: ${remaining.toLocaleString()} (below the 40,000 threshold).`,
            remainingText: `${remaining.toLocaleString()} credits left (≤ 40,000)`,
            tierClass: 'tier-warning',
            icon: 'notifications_active'
          };
        } else {
          newLevel = 'none';
        }

        this.creditAlertLevel = newLevel;
        this.creditAlert = alertObj;

        if (newLevel !== 'none') {
          const lastTier = sessionStorage.getItem('last_notified_credit_tier');
          const isRead = sessionStorage.getItem('credit_notification_read') === 'true';

          // Pop up toast once per session unless tier escalates
          if (lastTier !== newLevel) {
            sessionStorage.setItem('last_notified_credit_tier', newLevel);
            sessionStorage.removeItem('credit_notification_read');
            this.hasUnreadNotification = true;

            if (newLevel === 'exhausted') {
              this.notificationService.error('AI Quota Exhausted! 0 credits remaining.');
            } else if (newLevel === 'critical') {
              this.notificationService.critical(`Critical Balance: Only ${remaining.toLocaleString()} credits remaining!`);
            } else if (newLevel === 'warning') {
              this.notificationService.warning(`Low Balance: ${remaining.toLocaleString()} credits left (below 40,000).`);
            }
          } else {
            this.hasUnreadNotification = !isRead;
          }
        } else {
          this.hasUnreadNotification = false;
        }
      },
      error: () => {}
    });
  }

  private getUserDisplayName(user: any, fallback: string = 'Guest'): string {
    const fullName = [user?.first_name, user?.last_name].filter(Boolean).join(' ').trim();
    return user?.full_name || user?.fullname || user?.fullName || user?.displayName || fullName || user?.user_name || user?.name || user?.email || fallback;
  }

  private getStoredDisplayName(): string {
    try {
      const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile');
      if (raw) return this.getUserDisplayName(JSON.parse(raw), sessionStorage.getItem('username') || 'Guest');
    } catch (e) { /* ignore */ }
    return sessionStorage.getItem('username') || 'Guest';
  }
  private getStoredInstituteName(): string {
    try {
      const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile');
      if (raw) {
        const user = JSON.parse(raw);
        return user?.institute_name || user?.institute || user?.institute_short_name || sessionStorage.getItem('institute') || this.instituteShortName || '';
      }
    } catch (e) { /* ignore */ }
    return sessionStorage.getItem('institute') || this.instituteShortName || '';
  }

  private getNavbarInstituteName(fallback?: string): string {
    const activeInstitute = this.globalInstituteContext.activeContext;
    return activeInstitute?.institute_name || fallback || this.getStoredInstituteName();
  }
  openUserPanel(event?: MouseEvent): void {
    if (event) event.stopPropagation();
    this.isUserPanelOpen = true;
  }

  closeUserPanel(): void {
    this.isUserPanelOpen = false;
  }
  private updateLoginStatus(): void {
    // kept for compatibility; primary source of truth is AuthService
    this.isLogin = this.authService.isLoggedIn;
  }

  openSettings(): void {
    this.closeUserPanel();
    const role = String(this.userObj?.user_role || this.userObj?.role || sessionStorage.getItem('userRole') || '').toLowerCase();
    if (['admin', 'super_admin', 'superadmin', 'super-admin'].includes(role)) {
      this.router.navigate(['/admin/settings']);
    } else {
      this._snackBar.open('Settings are available to administrators only', 'Close', { duration: 3000 });
    }
  }

  confirmLogout() {
    this.closeUserPanel();
    this.dialog.open(this.logoutConfirmationDialog, { width: '420px', panelClass: 'logout-dialog-panel' });
  }

  logout(): void {
    const url = `${API_BASE}/logout`;
    // include token and user id from sessionStorage if available
    const payload: any = {};
    const token = sessionStorage.getItem('token');
    // parse user and attach user_id to payload if present
    let userId: any = null;
    // explicit saved key (some flows may write user_id separately)
    try { userId = sessionStorage.getItem('user_id') || null; } catch (e) { userId = null; }
    try {
      const rawUser = sessionStorage.getItem('user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        // try a list of common id keys used by different backends
        const idKeys = ['id', 'user_id', 'userId', 'userid', '_id', 'uid'];
        for (const k of idKeys) {
          if (!userId && u && (u[k] !== undefined && u[k] !== null)) {
            userId = u[k];
            break;
          }
        }
      }
    } catch (e) { /* ignore parse errors */ }

    // fallback: use username if no numeric id is available (server may accept this)
    if (!userId) {
      try { userId = sessionStorage.getItem('username') || null; } catch (e) { userId = null; }
    }

    if (userId) payload.user_id = userId;
    else console.warn('NavbarMainComponent.logout: user_id not found in sessionStorage; sending logout without user_id');

    // prepare headers: include Authorization only when token is present
    const headers: any = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    this.http.post(url, payload, { headers, observe: 'response' }).subscribe({
      next: (res) => {
        // clear client session via AuthService so all subscribers update
        try { this.authService.logout(); } catch (e) { try { sessionStorage.clear(); } catch (e) {} }
        this.dialog.closeAll();
        this._snackBar.open('You have been logged out', 'Close', { duration: 3000 });
        this.router.navigate(['/']);
      },
      error: (err) => {
        // Even if server logout failed, clear local session and notify user
        try { this.authService.logout(); } catch (e) { try { sessionStorage.clear(); } catch (e) {} }
        this.dialog.closeAll();
        this._snackBar.open('Logout completed locally (server not reachable).', 'Close', { duration: 4000 });
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
    if (this.authSubscription) this.authSubscription.unsubscribe();
    if (this.userSubscription) this.userSubscription.unsubscribe();
    if (this.pageMetaSubscription) this.pageMetaSubscription.unsubscribe();
    if (this.globalInstituteSubscription) this.globalInstituteSubscription.unsubscribe();
    if (this.aiNotifSubscription) this.aiNotifSubscription.unsubscribe();
    if (this.aiUnreadSubscription) this.aiUnreadSubscription.unsubscribe();
    if (this.newNotifSubscription) this.newNotifSubscription.unsubscribe();
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.aiNotificationService.closeStream();
  }
}

