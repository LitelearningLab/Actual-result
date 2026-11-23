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
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { API_BASE } from 'src/app/shared/api.config';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import {
  ConfirmOneTimeReviewDialogComponent,
  ReviewTargetRow,
} from 'src/app/shared/components/test-review-modal/test-review-modal.component';
import {
  DateRangePickerDialogComponent,
  DateRangeDialogResult,
} from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';

export interface PaperTestResultRow extends ReviewTargetRow {
  schedule_id: string;
  test_id: string;
  exam_id: string;
  title: string;
  subject_id?: string;
  subject_name?: string;
  start_time?: string;
  end_time?: string;
  attempt_id: string;
  review_attempt_id: string;
  review_mode: string;
  multiple_review: boolean;
  manual_review_enabled: boolean;
  user_review: boolean;
  review_available: boolean;
  review_consumed: boolean;
  submitted_date?: string;
  created_date?: string;
}

@Component({
  selector: 'app-paper-test-results',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
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

  // Filter state
  filtersOpen = false;
  filterSubject = '';
  filterFromDate: Date | null = null;
  filterToDate: Date | null = null;
  availableSubjects: string[] = [];

  private refreshTimer?: ReturnType<typeof setInterval>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private pageMeta: PageMetaService,
    private loader: LoaderService
  ) {}

  get activeFilterCount(): number {
    let count = 0;
    if (this.filterSubject) count++;
    if (this.filterFromDate || this.filterToDate) count++;
    return count;
  }

  toggleFilters(event?: Event): void {
    if (event) event.stopPropagation();
    this.filtersOpen = !this.filtersOpen;
  }

  closeFilters(): void {
    this.filtersOpen = false;
  }

  openDateRangePicker(): void {
    const dialogRef = this.dialog.open(DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.filterFromDate,
        endDate: this.filterToDate,
      },
    });

    dialogRef.afterClosed().subscribe((res: DateRangeDialogResult | undefined) => {
      if (res) {
        this.filterFromDate = res.startDate;
        this.filterToDate = res.endDate;
        this.applyFilter();
      }
    });
  }

  getDateRangeDisplay(): string {
    if (!this.filterFromDate && !this.filterToDate) return '';
    const fmt = (d: any) => {
      if (!d) return '';
      const dt = d instanceof Date ? d : new Date(d);
      if (isNaN(dt.getTime())) return '';
      const dd = String(dt.getDate()).padStart(2, '0');
      const mm = String(dt.getMonth() + 1).padStart(2, '0');
      const yyyy = dt.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    };
    if (this.filterFromDate && this.filterToDate) return `${fmt(this.filterFromDate)} - ${fmt(this.filterToDate)}`;
    if (this.filterFromDate) return `${fmt(this.filterFromDate)} - `;
    if (this.filterToDate) return ` - ${fmt(this.filterToDate)}`;
    return '';
  }

  get hasAppliedFilters(): boolean {
    return Boolean(this.filterSubject || this.filterFromDate || this.filterToDate);
  }

  removeAppliedFilter(key: 'subject' | 'date'): void {
    if (key === 'subject') {
      this.filterSubject = '';
    } else if (key === 'date') {
      this.filterFromDate = null;
      this.filterToDate = null;
    }
    this.applyFilter();
  }

  resetFilters(): void {
    this.filterSubject = '';
    this.filterFromDate = null;
    this.filterToDate = null;
    this.applyFilter();
  }

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
            start_time: x.start_time ? String(x.start_time) : undefined,
            end_time: x.end_time ? String(x.end_time) : undefined,
            submitted_date: x.submitted_date ? String(x.submitted_date) : undefined,
            created_date: x.created_date ? String(x.created_date) : undefined,
          } as PaperTestResultRow;
        });

        this.dataSource.data = this.results;

        // Populate available subjects dynamically from the results
        const subjectSet = new Set<string>();
        this.results.forEach((r) => {
          const s = (r.subject_name || '').trim();
          if (s) subjectSet.add(s);
        });
        this.availableSubjects = Array.from(subjectSet).sort();

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
    const fromTime = this.filterFromDate ? new Date(this.filterFromDate).setHours(0, 0, 0, 0) : null;
    const toTime = this.filterToDate ? new Date(this.filterToDate).setHours(23, 59, 59, 999) : null;

    this.dataSource.filterPredicate = (row: PaperTestResultRow) => {
      // 1. Search text filter (matches test title or subject name)
      const matchesSearch =
        !q ||
        (row.title || '').toLowerCase().includes(q) ||
        (row.subject_name || '').toLowerCase().includes(q);

      // 2. Subject filter
      const matchesSubject =
        !this.filterSubject ||
        (row.subject_name || '').toLowerCase() === this.filterSubject.trim().toLowerCase();

      // 3. Date Range filter (matches submitted_date, created_date, or start_time)
      const dateStr = row.submitted_date || row.created_date || row.start_time;
      let testTime: number | null = null;
      if (dateStr) {
        const d = new Date(dateStr);
        if (!isNaN(d.getTime())) {
          testTime = d.getTime();
        }
      }

      const matchesFrom = fromTime === null || (testTime !== null && testTime >= fromTime);
      const matchesTo = toTime === null || (testTime !== null && testTime <= toTime);

      return matchesSearch && matchesSubject && matchesFrom && matchesTo;
    };

    const hasAnyFilter = Boolean(q || this.filterSubject || this.filterFromDate || this.filterToDate);
    this.dataSource.filter = hasAnyFilter ? (q || '__filtered__') : '';
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

