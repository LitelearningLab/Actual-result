import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { API_BASE } from 'src/app/shared/api.config';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import {
  ConfirmOneTimeReviewDialogComponent,
  ReviewTargetRow,
} from 'src/app/shared/components/test-review-modal/test-review-modal.component';

export interface PaperTestResultRow extends ReviewTargetRow {
  schedule_id: string;
  test_id: string;
  exam_id: string;
  title: string;
  attempt_id: string;
  review_attempt_id: string;
  review_mode: string;
  multiple_review: boolean;
  manual_review_enabled: boolean;
  user_review: boolean;
  review_available: boolean;
  review_consumed: boolean;
  submitted_date?: string | null;
  created_date?: string | null;
}

@Component({
  selector: 'app-paper-test-results',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    ConfirmOneTimeReviewDialogComponent,
  ],
  templateUrl: './paper-test-results.component.html',
  styleUrls: ['./paper-test-results.component.scss'],
})
export class PaperTestResultsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['sno', 'title', 'actions'];
  dataSource = new MatTableDataSource<PaperTestResultRow>([]);
  results: PaperTestResultRow[] = [];
  loading = false;
  search = '';
  isAdminUser = false;

  private refreshTimer?: ReturnType<typeof setInterval>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private pageMeta: PageMetaService,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    try {
      this.loader.hide();
    } catch {}
    this.pageMeta.setMeta('Paper Test Results', 'View your evaluated paper test results');
    this.detectUserRole();
    this.loadResults(true);
    // Keep review access status synced (e.g. if admin grants Manual Review or scheduled window opens)
    this.refreshTimer = setInterval(() => this.loadResults(false), 5000);
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = undefined;
    }
  }

  private detectUserRole(): void {
    try {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      const u = raw ? JSON.parse(raw) : null;
      const role = String(u?.role || u?.user_role || sessionStorage.getItem('userRole') || '').toLowerCase();
      this.isAdminUser = ['admin', 'super_admin', 'superadmin', 'super-admin'].includes(role);
    } catch {
      this.isAdminUser = false;
    }
  }

  private getCurrentUserId(): string {
    try {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      const u = raw ? JSON.parse(raw) : null;
      return String(u?.user_id || u?.id || '');
    } catch {
      return '';
    }
  }

  loadResults(showLoader: boolean = true): void {
    const userId = this.getCurrentUserId();
    if (!userId) return;

    if (showLoader) this.loading = true;
    const url = `${API_BASE}/get-user-paper-results?user_id=${encodeURIComponent(userId)}`;

    this.http.get<any>(url).subscribe({
      next: (res) => {
        const list = Array.isArray(res?.data) ? res.data : [];
        this.results = list.map((x: any) => {
          const isMulti = Boolean(x.multiple_review);
          const schedId = String(x.schedule_id || x.test_id || '');
          const locallyConsumed = !isMulti && this.isConsumedLocally(schedId);
          const serverAvailable = Boolean(x.review_available ?? x.user_review);
          const canReview = isMulti ? serverAvailable : serverAvailable && !locallyConsumed && !x.review_consumed;

          return {
            ...x,
            schedule_id: schedId,
            test_id: schedId,
            title: x.title || 'Untitled Test',
            multiple_review: isMulti,
            user_review: canReview,
            review_available: canReview,
            review_consumed: Boolean(x.review_consumed) || locallyConsumed,
          } as PaperTestResultRow;
        });

        this.dataSource.data = this.results;
        this.applyFilter();
        setTimeout(() => {
          if (this.paginator) this.dataSource.paginator = this.paginator;
          if (this.sort) this.dataSource.sort = this.sort;
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const q = (this.search || '').trim().toLowerCase();
    this.dataSource.filterPredicate = (row: PaperTestResultRow) =>
      !q || (row.title || '').toLowerCase().includes(q);
    this.dataSource.filter = q || '__all__';
  }

  getSNo(index: number): number {
    if (!this.paginator) return index + 1;
    return this.paginator.pageIndex * this.paginator.pageSize + index + 1;
  }

  canReview(row: PaperTestResultRow): boolean {
    return Boolean(row?.review_available && row?.user_review);
  }

  getReviewTooltip(row: PaperTestResultRow): string {
    if (this.canReview(row)) return 'View your evaluated test result';
    if (row.review_consumed && !row.multiple_review) {
      return 'Single-time review has already been viewed';
    }
    if (row.review_mode === 'scheduled') {
      return 'Review is only available during the scheduled review window';
    }
    return 'Review access has not been granted by Admin yet';
  }

  openReview(row: PaperTestResultRow, event?: Event): void {
    if (event) event.stopPropagation();
    if (!this.canReview(row)) return;

    if (
      String(row.review_mode || '').toLowerCase() === 'instant' &&
      !row.multiple_review
    ) {
      this.dialog
        .open(ConfirmOneTimeReviewDialogComponent, {
          width: '32.8rem',
          maxWidth: 'calc(100vw - 2rem)',
          autoFocus: false,
          restoreFocus: true,
          disableClose: true,
          data: { reviewMode: row.review_mode || '' },
        })
        .afterClosed()
        .subscribe((confirmed: boolean) => {
          if (confirmed) this.launchPaperReviewTab(row);
        });
      return;
    }

    this.launchPaperReviewTab(row);
  }

  private launchPaperReviewTab(row: PaperTestResultRow): void {
    const queryParams: any = {
      exam_id: row.schedule_id || row.test_id,
      from_report: 'true',
      open_sheet: 'true',
      student_review: 'true',
    };
    const attemptId = row.review_attempt_id || row.attempt_id;
    if (attemptId) {
      queryParams.attempt_id = String(attemptId);
    }

    const urlTree = this.router.createUrlTree(['/user/paper-review'], { queryParams });
    const fullUrl = window.location.origin + this.router.serializeUrl(urlTree);
    window.open(fullUrl, '_blank');

    if (!row.multiple_review) {
      this.onReviewConsumed({ row, attemptNumber: 1 });
      setTimeout(() => this.loadResults(false), 1500);
    }
  }

  onReviewConsumed(ev: { row: ReviewTargetRow; attemptNumber: number }): void {
    const row = ev?.row;
    if (!row || row.multiple_review) return;
    const key = String(row.schedule_id || row.test_id || '');
    if (key) {
      try {
        const raw = sessionStorage.getItem('consumed_paper_reviews') || '[]';
        const list = JSON.parse(raw);
        if (Array.isArray(list) && !list.includes(key)) {
          list.push(key);
          sessionStorage.setItem('consumed_paper_reviews', JSON.stringify(list));
        }
      } catch {}
    }
    const target = this.results.find((r) => r.schedule_id === key);
    if (target) {
      target.review_consumed = true;
      target.review_available = false;
      target.user_review = false;
      this.dataSource.data = [...this.results];
    }
  }

  onReviewClosed(): void {
    this.loadResults(false);
  }

  private isConsumedLocally(scheduleId: string): boolean {
    if (!scheduleId) return false;
    try {
      const raw = sessionStorage.getItem('consumed_paper_reviews') || '[]';
      const list = JSON.parse(raw);
      return Array.isArray(list) && list.includes(scheduleId);
    } catch {
      return false;
    }
  }

  get mobileRows(): PaperTestResultRow[] {
    return this.dataSource.filteredData || [];
  }
}

