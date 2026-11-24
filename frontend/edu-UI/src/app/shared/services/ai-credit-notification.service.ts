import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { API_BASE } from 'src/app/shared/api.config';
import { NotificationService } from 'src/app/shared/services/notification.service';

export interface AiCreditNotificationItem {
  notification_id: string;
  institute_id: string;
  institute_name?: string | null;
  event_type: 'LOW_BALANCE' | 'CRITICAL_BALANCE' | 'EXHAUSTED' | 'ALLOCATION' | 'RENEWAL' | 'ADJUSTMENT' | string;
  severity: 'INFO' | 'WARNING' | 'CRITICAL' | 'EXHAUSTED' | string;
  title: string;
  message: string;
  credits_amount?: number | null;
  remaining_credits?: number | null;
  allocated_credits?: number | null;
  is_read: boolean;
  read_at?: string | null;
  read_by?: string | null;
  created_by?: string | null;
  created_date?: string | null;
}

@Injectable({ providedIn: 'root' })
export class AiCreditNotificationService implements OnDestroy {
  private notificationsSubject = new BehaviorSubject<AiCreditNotificationItem[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$ = this.unreadCountSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  private newNotificationSubject = new Subject<AiCreditNotificationItem>();
  public newNotification$ = this.newNotificationSubject.asObservable();

  private eventSource?: EventSource;
  private reconnectTimer: any;
  private activeInstituteId: string | null = null;

  constructor(
    private http: HttpClient,
    private zone: NgZone,
    private toastService: NotificationService
  ) {}

  /**
   * Initializes real-time streaming and initial fetch for authorized admin
   */
  public init(instituteId?: string | null): void {
    this.activeInstituteId = instituteId || null;
    this.fetchNotifications();
    this.connectStream();
  }

  /**
   * Switches the active institute context (used for Super Admin or multi-tenant switches)
   */
  public setInstituteScope(instituteId?: string | null): void {
    if (this.activeInstituteId !== (instituteId || null)) {
      this.activeInstituteId = instituteId || null;
      this.fetchNotifications();
      this.connectStream();
    }
  }

  /**
   * Fetches the latest notifications from the server
   */
  public fetchNotifications(page = 1, pageSize = 25): void {
    this.isLoadingSubject.next(true);
    let url = `${API_BASE}/ai-credits/notifications?pageNumber=${page}&pageSize=${pageSize}`;
    if (this.activeInstituteId) {
      url += `&institute_id=${encodeURIComponent(this.activeInstituteId)}`;
    }

    this.http.get<{ status: boolean; data: any }>(url).subscribe({
      next: (res) => {
        this.isLoadingSubject.next(false);
        if (res && res.status && res.data) {
          const list: AiCreditNotificationItem[] = res.data.notifications || [];
          this.notificationsSubject.next(list);
          this.unreadCountSubject.next(res.data.unread_count || 0);
        }
      },
      error: () => {
        this.isLoadingSubject.next(false);
      }
    });
  }

  /**
   * Connects to Server-Sent Events (SSE) for zero-refresh real-time updates
   */
  public connectStream(): void {
    this.closeStream();

    const token = sessionStorage.getItem('token') || '';
    if (!token) return;

    let streamUrl = `${API_BASE}/ai-credits/notifications/stream?token=${encodeURIComponent(token)}`;
    if (this.activeInstituteId) {
      streamUrl += `&institute_id=${encodeURIComponent(this.activeInstituteId)}`;
    }

    try {
      this.eventSource = new EventSource(streamUrl);

      this.eventSource.addEventListener('credit_notification', (e: any) => {
        this.zone.run(() => {
          try {
            const newNotif: AiCreditNotificationItem = JSON.parse(e.data);
            if (!newNotif || !newNotif.notification_id) return;

            // Check if already in list to avoid any race condition
            const current = this.notificationsSubject.value;
            const exists = current.some((n) => n.notification_id === newNotif.notification_id);
            if (!exists) {
              this.notificationsSubject.next([newNotif, ...current]);
              this.unreadCountSubject.next(this.unreadCountSubject.value + 1);
              this.newNotificationSubject.next(newNotif);

              // Surface brief banner toast on critical alerts
              if (newNotif.severity === 'EXHAUSTED') {
                this.toastService.error(newNotif.title + ': ' + newNotif.message);
              } else if (newNotif.severity === 'CRITICAL') {
                this.toastService.critical(newNotif.title + ': ' + newNotif.message);
              } else if (newNotif.severity === 'WARNING') {
                this.toastService.warning(newNotif.title + ': ' + newNotif.message);
              }
            }
          } catch (err) {
            console.warn('[AiCreditNotificationService] Event parse error:', err);
          }
        });
      });

      this.eventSource.onerror = () => {
        this.closeStream();
        // Exponential reconnect with 6-second delay
        if (!this.reconnectTimer) {
          this.reconnectTimer = setTimeout(() => {
            this.reconnectTimer = null;
            this.connectStream();
          }, 6000);
        }
      };
    } catch (err) {
      console.warn('[AiCreditNotificationService] Stream connect error:', err);
    }
  }

  /**
   * Closes active SSE stream
   */
  public closeStream(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = undefined;
    }
  }

  /**
   * Marks a specific notification as read
   */
  public markAsRead(notificationId: string): Observable<any> {
    const url = `${API_BASE}/ai-credits/notifications/mark-read`;
    // Optimistic UI update
    const current = this.notificationsSubject.value;
    const updated = current.map((item) =>
      item.notification_id === notificationId ? { ...item, is_read: true } : item
    );
    this.notificationsSubject.next(updated);
    const unread = Math.max(0, this.unreadCountSubject.value - 1);
    this.unreadCountSubject.next(unread);

    return this.http.post(url, { notification_id: notificationId });
  }

  /**
   * Marks all notifications as read for current scoped institute
   */
  public markAllAsRead(): Observable<any> {
    const url = `${API_BASE}/ai-credits/notifications/mark-all-read`;
    // Optimistic UI update
    const current = this.notificationsSubject.value;
    const updated = current.map((item) => ({ ...item, is_read: true }));
    this.notificationsSubject.next(updated);
    this.unreadCountSubject.next(0);

    const payload: any = {};
    if (this.activeInstituteId) {
      payload.institute_id = this.activeInstituteId;
    }
    return this.http.post(url, payload);
  }

  ngOnDestroy(): void {
    this.closeStream();
  }
}
