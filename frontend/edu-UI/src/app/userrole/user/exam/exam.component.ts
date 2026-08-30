import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from 'src/app/shared/api.config';
import { notify } from 'src/app/shared/global-notify';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AuthService } from 'src/app/home/service/auth.service';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';
import { DateRangePickerDialogComponent, DateRangeDialogResult } from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';

export interface UserTestRow {
  test_id?: string;
  schedule_id?: string;
  title?: string;
  start_time?: string;
  end_time?: string;
  scheduleTest?: string;
  schedule_sort_time?: number;
  duration_mins?: number;
  total_questions?: number;
  total_marks?: number;
  published?: boolean;
  pass_mark?: number;
  number_of_attempts?: number;
  user_attempt?: number;
  attempts_history?: any[];
  target_attempt_number?: number;
  type?: string;
  user_review?: boolean;
  review_available?: boolean;
  review_attempt_id?: string;
  review_mode?: string;
  multiple_review?: boolean;
  attempted?: boolean;
  completed_by_user?: boolean;
  expired?: boolean;
  institute_id?: string;
  created_by?: string;
  created_date?: string;
  user_percentage?: number | null;
  user_score?: number | null;
  user_result?: string | null;
}

@Component({
  selector: 'app-confirm-start-test-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class='start-confirm-dialog'>
      <div class='dialog-icon' aria-hidden='true'>
        <mat-icon>rocket_launch</mat-icon>
      </div>
      <h2>Start Test</h2>
      <p class='dialog-message'>Are you sure you want to start this test?</p>
      <p class='dialog-warning'>Once you start, the test timer will begin and cannot be paused.</p>
      <div class='dialog-actions'>
        <button mat-button class='cancel-button' [mat-dialog-close]='false'>Cancel</button>
        <button mat-flat-button class='start-button' [mat-dialog-close]='true'>Start Test</button>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .start-confirm-dialog {
      box-sizing: border-box;
      height: 18.4rem;
      padding: 1.35rem 1.25rem 0.9rem;
      text-align: center;
      color: #16293d;
    }
    .dialog-icon {
      width: 4rem;
      height: 4rem;
      margin: 0 auto 0.8rem;
      border-radius: 50%;
      background: #f0edff;
      color: #287cff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dialog-icon mat-icon {
      width: 2rem;
      height: 2rem;
      font-size: 2rem;
      line-height: 2rem;
    }
    h2 {
      margin: 0 0 0.45rem;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.25;
    }
    p { margin: 0; color: #657180; }
    .dialog-message { font-size: 1.15rem; }
    .dialog-warning {
      margin-top: 0.3rem;
      font-size: 0.95rem;
      line-height: 1.45;
    }
    .dialog-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.9rem;
      margin-top: 1rem;
    }
    .dialog-actions button {
      height: 2.85rem;
      border-radius: 0.7rem;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.08em;
    }
    .cancel-button { border: 0.0625rem solid #dfe4ea; color: #354252; }
    .start-button { background: #287cff; color: #fff; }
    @media (max-width: 30rem) {
      .start-confirm-dialog { height: auto; }
      .dialog-actions { grid-template-columns: 1fr; }
    }
  `]
})
export class ConfirmStartTestDialogComponent {}

@Component({
  selector: 'app-confirm-instant-review-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="instant-review-dialog">
      <div class="dialog-icon" aria-hidden="true"><mat-icon>visibility</mat-icon></div>
      <h2>One-time Instant Review</h2>
      <p>This test uses Instant Review.</p>
      <p class="dialog-warning">You can view this review only once. After you close it, the Review button will no longer be available.</p>
      <div class="dialog-actions">
        <button mat-button class="cancel-button" [mat-dialog-close]="false">Cancel</button>
        <button mat-flat-button class="review-button" [mat-dialog-close]="true">View Review</button>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .instant-review-dialog { box-sizing: border-box; padding: 1.5rem; text-align: center; color: #16293d; }
    .dialog-icon { width: 4rem; height: 4rem; margin: 0 auto 0.8rem; border-radius: 50%; background: #e8fff7; color: #0b9f70; display: flex; align-items: center; justify-content: center; }
    .dialog-icon mat-icon { width: 2rem; height: 2rem; font-size: 2rem; line-height: 2rem; }
    h2 { margin: 0 0 0.55rem; font-size: 1.5rem; font-weight: 700; }
    p { margin: 0; color: #657180; font-size: 1rem; line-height: 1.5; }
    .dialog-warning { margin-top: 0.45rem; color: #9b5b00; font-weight: 600; }
    .dialog-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; margin-top: 1.25rem; }
    .dialog-actions button { height: 2.85rem; border-radius: 0.7rem; font-weight: 700; }
    .cancel-button { border: 0.0625rem solid #dfe4ea; color: #354252; }
    .review-button { background: #20dca3; color: #073c2d; }
    @media (max-width: 30rem) { .dialog-actions { grid-template-columns: 1fr; } }
  `]
})
export class ConfirmInstantReviewDialogComponent {}

@Component({
  selector: 'app-user-exams',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule, MatTabsModule, MatPaginatorModule, MatDialogModule, MatDatepickerModule, MatCheckboxModule, MatAutocompleteModule, ConfirmStartTestDialogComponent, ConfirmInstantReviewDialogComponent],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class UserExamComponent implements OnInit, AfterViewInit, OnDestroy{
  exams: UserTestRow[] = [];
  loading = false;
  instituteId = '';
  // table and filters
  displayedColumns: string[] = ['sno','title','duration','questions','pass_mark','number_of_attempts','status','actions'];
  dataSource = new MatTableDataSource<UserTestRow>([]);
  // Per-tab filtered tables
  activeSource = new MatTableDataSource<UserTestRow>([]);
  completeSource = new MatTableDataSource<UserTestRow>([]);
  search = '';
  filterPublished: string = '';
  filtersOpen = false;
  isSuperAdmin = false;
  institutes: Array<{ name: string; institute_id: string }> = [];
  filterInstitute = '';
  instituteSearch = '';
  selectedInstitutes: string[] = [];
  instituteFilterSearch = '';
  filterScheduleName = '';
  filterCreatedAfter: Date | null = null;
  filterCreatedBefore: Date | null = null;
  selectedTabIndex = 0;
  private currentUserId = '';

  @ViewChild(MatSort) sort!: MatSort;

  private examsUrl = `${API_BASE}/get-user-exams-details`;
  private launchUrl = `${API_BASE}/launch-exam`;
  private reviewRefreshTimer?: ReturnType<typeof setInterval>;

  isGlobalInstituteActive = false;

  constructor(
    private http: HttpClient,
    private pageMeta: PageMetaService,
    private loader: LoaderService,
    private router: Router,
    private dialog: MatDialog,
    private auth: AuthService,
    private globalInstituteContext: GlobalInstituteContextService
  ) {
    try {
      this.isGlobalInstituteActive = this.globalInstituteContext.isGlobalFilterActive();
      this.globalInstituteContext.activeInstitute$.subscribe(() => {
        this.isGlobalInstituteActive = this.globalInstituteContext.isGlobalFilterActive();
      });
    } catch (e) {}

    // try to read institute id from sessionStorage
    try{
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      if (raw){
        const obj = JSON.parse(raw);
        this.instituteId = obj?.institute_id || obj?.instituteId || obj?.institute || '';
        this.currentUserId = String(obj?.user_id || obj?.id || '');
        this.isSuperAdmin = ['super_admin', 'superadmin', 'super-admin'].includes(String(obj?.role || '').toLowerCase());
      }
    }catch(e){}

    this.currentUserId = this.currentUserId || String(sessionStorage.getItem('user_id') || '');
    const currentAuthUser = this.auth.currentUserValue;
    this.isSuperAdmin = this.isSuperAdmin || ['super_admin', 'superadmin', 'super-admin'].includes(String(currentAuthUser?.role || '').toLowerCase());

    if (this.isSuperAdmin) this.loadInstitutes();
    if (this.instituteId || this.isSuperAdmin) this.loadExams();
  }

  get isAdminUser(): boolean {
    if (this.isSuperAdmin) return true;
    try {
      const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      if (raw) {
        const obj = JSON.parse(raw);
        const role = String(obj?.role || obj?.user_role || obj?.role_name || '').toLowerCase();
        if (['admin', 'super_admin', 'superadmin', 'super-admin'].includes(role)) {
          return true;
        }
      }
      const authRole = String(
        this.auth.currentUserValue?.role || this.auth.currentUserValue?.user_role || ''
      ).toLowerCase();
      if (['admin', 'super_admin', 'superadmin', 'super-admin'].includes(authRole)) {
        return true;
      }
    } catch (e) {}
    return false;
  }

  isPass(row: UserTestRow): boolean {
    if (row.user_result) {
      const res = String(row.user_result).trim().toLowerCase();
      if (res === 'pass' || res === 'passed') return true;
      if (res === 'fail' || res === 'failed') return false;
      if (res === 'evaluated') return true;
    }
    const pct = row.user_percentage != null ? row.user_percentage : (row.user_score != null && row.total_marks ? (row.user_score / row.total_marks * 100) : null);
    const passMark = row.pass_mark != null ? row.pass_mark : 50;
    if (pct != null) {
      return pct >= passMark;
    }
    return false;
  }

  getSNo(src: MatTableDataSource<UserTestRow>, row: UserTestRow): number {
    if (!src || !src.data) return 1;
    const idx = src.data.indexOf(row);
    const pageIndex = src.paginator?.pageIndex || 0;
    const pageSize = src.paginator?.pageSize || 25;
    return idx >= 0 ? (pageIndex * pageSize + idx + 1) : 1;
  }

  getUsedAttempts(row: UserTestRow): number {
    if (row.user_attempt !== undefined && row.user_attempt !== null) {
      return row.user_attempt;
    }
    if (row.completed_by_user || row.attempted) {
      return 1;
    }
    return 0;
  }

  getRemainingAttempts(row: UserTestRow): number {
    const max = row.number_of_attempts || 1;
    const used = this.getUsedAttempts(row);
    const rem = max - used;
    return rem > 0 ? rem : 0;
  }

  getAttemptProgressPercent(row: UserTestRow): number {
    const max = row.number_of_attempts || 1;
    const used = this.getUsedAttempts(row);
    if (max <= 0) return 0;
    const pct = (used / max) * 100;
    return Math.min(Math.max(pct, 0), 100);
  }

  // Expandable row state & methods
  expandedRows: Set<string> = new Set<string>();

  hasMultipleAttempts(row: UserTestRow): boolean {
    const maxAtt = row.number_of_attempts || 0;
    const hist = this.getAttemptHistory(row);
    return maxAtt > 1 || hist.length > 1;
  }

  getRowKey(row: UserTestRow): string {
    return String(row.schedule_id || row.test_id || row.title || '');
  }

  isRowExpanded(row: UserTestRow): boolean {
    return this.expandedRows.has(this.getRowKey(row));
  }

  toggleRowExpand(row: UserTestRow, event?: MouseEvent): void {
    if (event) event.stopPropagation();
    const key = this.getRowKey(row);
    if (this.expandedRows.has(key)) {
      this.expandedRows.delete(key);
    } else {
      this.expandedRows.add(key);
    }
  }

  getAttemptHistory(row: UserTestRow): Array<any> {
    if (row.attempts_history && row.attempts_history.length > 0) {
      return row.attempts_history;
    }
    if (row.completed_by_user || row.attempted) {
      return [{
        attempt_id: row.review_attempt_id || '',
        attempt_number: 1,
        status: 'evaluated',
        score: row.user_score,
        percentage: row.user_percentage,
        result: row.user_result || (this.isPass(row) ? 'Passed' : 'Failed'),
        submitted_date: row.end_time || row.start_time
      }];
    }
    return [];
  }

  formatAttemptDate(v: any, is24Hour: boolean = false): string {
    if (!v) return '—';
    let d: Date;
    if (typeof v === 'number') {
      d = new Date(v > 1e12 ? v : v * 1000);
    } else if (/^\d+$/.test(String(v))) {
      const n = Number(v);
      d = new Date(n > 1e12 ? n : n * 1000);
    } else {
      d = new Date(String(v));
    }
    if (isNaN(d.getTime())) return String(v);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dd = String(d.getDate()).padStart(2, '0');
    const mmm = months[d.getMonth()];
    const yyyy = d.getFullYear();
    const mm = String(d.getMinutes()).padStart(2, '0');

    if (is24Hour) {
      const hh24 = String(d.getHours()).padStart(2, '0');
      return `${dd}-${mmm}-${yyyy} ${hh24}:${mm}`;
    }

    let hh = d.getHours();
    const ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12;
    hh = hh ? hh : 12;
    const hhStr = String(hh).padStart(2, '0');
    return `${dd} ${mmm} ${yyyy}, ${hhStr}:${mm} ${ampm}`;
  }

  isAttemptPass(att: any, row: UserTestRow): boolean {
    if (att) {
      const res = String(att.result || att.feedback || '').trim().toLowerCase();
      if (res === 'pass' || res === 'passed') return true;
      if (res === 'fail' || res === 'failed') return false;
      if (res === 'evaluated') return true;
    }
    const pct = att?.percentage != null ? att.percentage : (att?.score != null && row.total_marks ? (att.score / row.total_marks * 100) : null);
    const passMark = row.pass_mark != null ? row.pass_mark : 50;
    if (pct != null) {
      return pct >= passMark;
    }
    return false;
  }

  viewAttemptReview(row: UserTestRow, att: any, event?: Event): void {
    if (event) event.stopPropagation();
    const rows = this.getAttemptRows(row);
    const targetItem = rows.find(r => r.attemptObj === att || (att && r.attemptNumber === att.attempt_number));
    if (targetItem && !targetItem.canReview) {
      return;
    }
    const targetRow: UserTestRow = {
      ...row,
      review_attempt_id: att?.attempt_id || row.review_attempt_id,
      target_attempt_number: att?.attempt_number
    } as any;
    this.viewReview(targetRow);
  }

  trackByAttempt(index: number, item: any): any {
    return item?.attemptNumber || index;
  }

  getAttemptRows(row: UserTestRow): Array<any> {
    if (!row) return [];
    if ((row as any)._cachedAttemptRows && (row as any)._cachedTabIndex === this.selectedTabIndex) {
      return (row as any)._cachedAttemptRows;
    }
    const history = this.getAttemptHistory(row);
    const maxAttempts = row.number_of_attempts || 1;
    const isCompletedTab = this.selectedTabIndex === 1;
    const isUpcoming = this.isUpcomingTest(row.type);
    const canStartActive = !isCompletedTab && !isUpcoming;
    let rows: Array<any> = [];

    if (history && history.length > 0) {
      rows = history.map((att: any, idx: number) => {
        const attNum = att.attempt_number || (idx + 1);
        const isPassResult = this.isAttemptPass(att, row);
        const usedCount = attNum;
        const remainingCount = Math.max(0, maxAttempts - usedCount);
        const pct = (usedCount / maxAttempts) * 100;

        // Active Tab: ALWAYS show original scheduled window for all rows (Attempt 1, Attempt 2, etc.)
        // Completed Tab: ALWAYS show actual taken time (start - submit) for each attempt row
        let scheduleRange = '';
        if (isCompletedTab) {
          const attStart = att.started_date ? this.formatAttemptDate(att.started_date, true) : '';
          const attEnd = att.submitted_date ? this.formatAttemptDate(att.submitted_date, true) : (attStart || '');
          scheduleRange = (attStart || attEnd) ? `${attStart || '—'} - ${attEnd || '—'}` : '';
        } else {
          scheduleRange = row.scheduleTest || '';
        }

        const isAttSubmitted = att && (att.status === 'submitted' || att.status === 'evaluated' || !!att.submitted_date);
        const rowReviewAllowed = (row.user_review !== false) && (row.review_available !== false);
        const canReviewAttempt = Boolean(isAttSubmitted && rowReviewAllowed);

        return {
          attemptNumber: attNum,
          isFirst: idx === 0,
          attemptObj: att,
          scoreDisplay: att.percentage != null ? (Number(att.percentage).toFixed(2) + '%') : (att.score != null ? att.score + '%' : '—'),
          attemptsUsedDisplay: `${usedCount} / ${maxAttempts}`,
          attemptsRemainingDisplay: `${remainingCount} Remaining`,
          progressPercent: Math.min(Math.max(pct, 0), 100),
          statusType: isPassResult ? 'PASS' : 'FAIL',
          canReview: canReviewAttempt,
          showReviewBtn: true,
          canStart: false,
          scheduleRange: scheduleRange
        };
      });

      const hasPassedAnyAttempt = history.some(att => this.isAttemptPass(att, row));
      if (canStartActive && !hasPassedAnyAttempt && history.length < maxAttempts) {
        const nextAttNum = history.length + 1;
        const remainingCount = Math.max(0, maxAttempts - history.length);
        rows.push({
          attemptNumber: nextAttNum,
          isFirst: false,
          attemptObj: null,
          scoreDisplay: '—',
          attemptsUsedDisplay: `${history.length} / ${maxAttempts}`,
          attemptsRemainingDisplay: `${remainingCount} Remaining`,
          progressPercent: (history.length / maxAttempts) * 100,
          statusType: 'ACTIVE',
          canReview: false,
          showReviewBtn: false,
          canStart: true,
          scheduleRange: row.scheduleTest || ''
        });
      }
    } else {
      const usedCount = this.getUsedAttempts(row);
      const remainingCount = this.getRemainingAttempts(row);
      const isMultipleReview = this.isMultipleReviewEnabled(row);
      const isAttLocallyConsumed = !isMultipleReview && this.isAttemptReviewConsumedLocally(row, 1);
      const isReviewForbidden = !isMultipleReview && (isAttLocallyConsumed || (row as any).review_consumed === true || row.user_review === false || row.review_available === false);
      const canReviewDefault = isMultipleReview ? ((row.user_review !== false) && (row.review_available !== false)) : (!isReviewForbidden && (!!row.user_review || !!row.review_available));

      let scheduleRange = '';
      if (isCompletedTab) {
        const rowStart = row.start_time ? this.formatAttemptDate(row.start_time, true) : '';
        const rowEnd = row.end_time ? this.formatAttemptDate(row.end_time, true) : (rowStart || '');
        scheduleRange = (rowStart || rowEnd) ? `${rowStart || '—'} - ${rowEnd || '—'}` : '';
      } else {
        scheduleRange = row.scheduleTest || '';
      }

      rows = [{
        attemptNumber: 1,
        isFirst: true,
        attemptObj: null,
        scoreDisplay: row.user_percentage != null ? (Number(row.user_percentage).toFixed(2) + '%') : '—',
        attemptsUsedDisplay: `${usedCount} / ${maxAttempts}`,
        attemptsRemainingDisplay: `${remainingCount} Remaining`,
        progressPercent: this.getAttemptProgressPercent(row),
        statusType: isUpcoming ? 'UPCOMING' : (isCompletedTab ? (this.isPass(row) ? 'PASS' : 'FAIL') : 'ACTIVE'),
        canReview: canReviewDefault,
        showReviewBtn: isCompletedTab || row.completed_by_user || row.attempted,
        canStart: canStartActive,
        scheduleRange: scheduleRange
      }];
    }

    (row as any)._cachedAttemptRows = rows;
    (row as any)._cachedTabIndex = this.selectedTabIndex;
    return rows;
  }

  stopFilterSearchEvent(event: Event) {
    event.stopPropagation();
  }

  loadInstitutes(): void {
    this.http.get<any>(`${API_BASE}/get-institutes`).subscribe({
      next: res => this.institutes = (Array.isArray(res?.data) ? res.data : []).map((item: any) => ({
        name: item.name || item.institute_name || item.short_name || '',
        institute_id: String(item.institute_id || item.id || '')
      })),
      error: () => this.institutes = []
    });
  }

  get filteredInstitutesForFilter() {
    const term = (this.instituteFilterSearch || '').trim().toLowerCase();
    let list = this.institutes || [];
    if (term) {
      list = list.filter(i =>
        (i.name || '').toLowerCase().includes(term) ||
        (!!i.institute_id && this.selectedInstitutes.includes(i.institute_id))
      );
    }
    return [...list].sort((a, b) => {
      const aSel = !!a.institute_id && this.selectedInstitutes.includes(a.institute_id);
      const bSel = !!b.institute_id && this.selectedInstitutes.includes(b.institute_id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllInstitutesSelected(): boolean {
    const ids: string[] = (this.filteredInstitutesForFilter || []).map(i => i.institute_id || '').filter((id): id is string => !!id);
    return ids.length > 0 && ids.every(id => (this.selectedInstitutes || []).includes(id));
  }

  toggleSelectAllInstitutes() {
    const ids: string[] = (this.filteredInstitutesForFilter || []).map(i => i.institute_id || '').filter((id): id is string => !!id);
    if (this.isAllInstitutesSelected()) {
      this.selectedInstitutes = [];
    } else {
      this.selectedInstitutes = [...ids];
    }
  }

  filteredInstitutes() {
    const query = this.instituteSearch.trim().toLowerCase();
    return query ? this.institutes.filter(item => item.name.toLowerCase().includes(query)) : this.institutes;
  }

  selectInstitute(institute: { name: string; institute_id: string }): void {
    this.filterInstitute = institute.institute_id;
    this.instituteSearch = institute.name;
  }

  resetFilters(): void {
    this.filterInstitute = '';
    this.instituteSearch = '';
    this.selectedInstitutes = [];
    this.instituteFilterSearch = '';
    this.filterScheduleName = '';
    this.filterCreatedAfter = null;
    this.filterCreatedBefore = null;
    this.applyFilter();
  }

  get availableScheduleNames(): string[] {
    const baseList: UserTestRow[] = this.selectedTabIndex === 0
      ? (this.activeSource?.data || [])
      : (this.completeSource?.data || []);

    const afterTime = this.filterCreatedAfter ? new Date(this.filterCreatedAfter).setHours(0, 0, 0, 0) : null;
    const beforeTime = this.filterCreatedBefore ? new Date(this.filterCreatedBefore).setHours(23, 59, 59, 999) : null;

    const filtered = baseList.filter(row => {
      const createdTime = row.created_date ? new Date(row.created_date).getTime() : NaN;
      const byAfter = afterTime === null || (!isNaN(createdTime) && createdTime >= afterTime);
      const byBefore = beforeTime === null || (!isNaN(createdTime) && createdTime <= beforeTime);
      return byAfter && byBefore;
    });

    const titles = filtered.map(item => item.title || '').filter((t): t is string => !!t.trim());
    return Array.from(new Set(titles)).sort();
  }

  openCreatedDateRangePicker(): void {
    const dialogRef = this.dialog.open(DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.filterCreatedAfter,
        endDate: this.filterCreatedBefore,
      },
    });

    dialogRef.afterClosed().subscribe((res: DateRangeDialogResult | undefined) => {
      if (res) {
        this.filterCreatedAfter = res.startDate;
        this.filterCreatedBefore = res.endDate;
      }
    });
  }

  getCreatedDateRangeDisplay(): string {
    const start = this.filterCreatedAfter;
    const end = this.filterCreatedBefore;
    if (!start && !end) return '';
    const format = (d: any) => {
      if (!d) return '';
      const dt = d instanceof Date ? d : new Date(d);
      if (isNaN(dt.getTime())) return '';
      const dd = String(dt.getDate()).padStart(2, '0');
      const mm = String(dt.getMonth() + 1).padStart(2, '0');
      const yyyy = dt.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    };
    if (start && end) return `${format(start)} - ${format(end)}`;
    if (start) return `${format(start)} - `;
    if (end) return ` - ${format(end)}`;
    return '';
  }


  toggleFilters(event: MouseEvent): void {
    event.stopPropagation();
    this.filtersOpen = !this.filtersOpen;
  }

  @HostListener('document:click')
  closeFiltersOnOutsideClick(): void {
    if (this.filtersOpen) this.filtersOpen = false;
  }

  // Review modal state
  reviewOpen = false;
  reviewLoading = false;
  reviewAttempts: Array<{ title?: string, attempt_number: number, items: Array<{
    question_text?: string,
    question?: string,
    correct_option?: string,
    options?: Array<{ is_correct?: number, option_text?: string }>,
    question_type?: string,
    selected_option?: string[],
    is_correct?: boolean | number,
    marks_awarded?: number,
    question_marks?: number,
    feedback?: string,
    review_comment?: { comments?: any[] }
  }>, score?: number, started_date?: string, submitted_date?: string, status?: string, percentage?: number, total_questions?: number, total_marks?: number, time_taken?: string, result?: string }> = [];
  reviewSelectedAttempt = 0;

  // Safe getter to return the currently selected attempt's title or empty string
  get selectedReviewTitle(): string {
    try {
      if (!this.reviewAttempts || !this.reviewAttempts.length) return '';
      const idx = Number(this.reviewSelectedAttempt) || 0;
      if (idx < 0 || idx >= this.reviewAttempts.length) return '';
      return this.reviewAttempts[idx]?.title || '';
    } catch (e) { return ''; }
  }

  private currentReviewRow: UserTestRow | null = null;
  private currentReviewAttemptNo: number | null = null;

  isMultipleReviewEnabled(row: any): boolean {
    if (!row) return false;
    const m = row.multiple_review !== undefined ? row.multiple_review : (row.multiple_reviews !== undefined ? row.multiple_reviews : (row.user_multiple_review !== undefined ? row.user_multiple_review : row.multiple));
    if (m === true || m === 1 || m === '1' || m === 'true') return true;
    const mode = String(row.review_mode || '').toLowerCase();
    if (mode === 'multiple' || mode === 'multi') return true;
    return false;
  }

  private getAttemptKey(row: UserTestRow, attNumber?: number): string {
    const schedId = String(row.schedule_id || row.test_id || '');
    const targetNo = attNumber || (row as any).target_attempt_number;
    if (targetNo) return `${schedId}_att_${targetNo}`;
    return schedId;
  }

  isAttemptReviewConsumedLocally(row: UserTestRow, attNumber?: number): boolean {
    if (!row) return false;
    const key = this.getAttemptKey(row, attNumber);
    try {
      const raw = sessionStorage.getItem('consumed_reviews') || '[]';
      const list = JSON.parse(raw);
      return Array.isArray(list) && (list.includes(String(key)) || list.includes(String(row.schedule_id || row.test_id || '')));
    } catch (e) {
      return false;
    }
  }

  private markReviewConsumed(targetRow: UserTestRow | null, attNumber?: number): void {
    if (!targetRow) return;
    if (this.isMultipleReviewEnabled(targetRow)) return;
    const targetNo = attNumber || (targetRow as any).target_attempt_number || 1;
    const key = this.getAttemptKey(targetRow, targetNo);
    if (key) {
      try {
        const raw = sessionStorage.getItem('consumed_reviews') || '[]';
        const list = JSON.parse(raw);
        if (Array.isArray(list) && !list.includes(key)) {
          list.push(key);
          sessionStorage.setItem('consumed_reviews', JSON.stringify(list));
        }
      } catch (e) {}
    }

    const realRow = this.exams.find(e =>
      (e.schedule_id && targetRow.schedule_id && String(e.schedule_id) === String(targetRow.schedule_id)) ||
      (e.test_id && targetRow.test_id && String(e.test_id) === String(targetRow.test_id)) ||
      (e.title && targetRow.title && e.title === targetRow.title)
    ) || targetRow;

    [realRow, targetRow].forEach(r => {
      if (!r) return;
      if (r.attempts_history && r.attempts_history.length) {
        r.attempts_history.forEach((att: any) => {
          if (!targetNo || Number(att.attempt_number) === Number(targetNo)) {
            att.review_available = false;
            att.user_review = false;
            att.review_viewed = true;
            att.review_consumed = true;
          }
        });
        const allConsumed = r.attempts_history.every((att: any) =>
          Boolean(att.review_viewed || att.review_consumed || att.already_viewed)
        );
        if (allConsumed) {
          (r as any).review_consumed = true;
          r.user_review = false;
          r.review_available = false;
        }
      } else {
        (r as any).review_consumed = true;
        r.user_review = false;
        r.review_available = false;
      }
      delete (r as any)._cachedAttemptRows;
    });

    try {
      this.completeSource.data = [...this.completeSource.data];
      this.activeSource.data = [...this.activeSource.data];
    } catch (e) {}
  }

  private isReviewConsumedLocally(scheduleId: string): boolean {
    if (!scheduleId) return false;
    try {
      const raw = sessionStorage.getItem('consumed_reviews') || '[]';
      const list = JSON.parse(raw);
      return Array.isArray(list) && list.includes(String(scheduleId));
    } catch (e) {
      return false;
    }
  }

  /**
   * Fetch review details for a user's exam and open modal.
   * Expects API: GET /review-user-exam?user_id=...&scheduler_id=...
   * Response shape assumed: { data: { attempts: [ { attempt_no, items: [ { question, answer, user_answer, status } ] } ] } }
   */
  viewReview(row: UserTestRow){
    this.currentReviewRow = row;
    this.currentReviewAttemptNo = (row as any).target_attempt_number || null;
    // Warn before the API consumes a one-time Instant Review (candidates/students only).
    if (!this.isAdminUser && (row.review_mode || '').toLowerCase() === 'instant' && !row.multiple_review) {
      this.dialog.open(ConfirmInstantReviewDialogComponent, {
        width: '32.8rem',
        maxWidth: 'calc(100vw - 2rem)',
        autoFocus: false,
        restoreFocus: true,
        disableClose: true
      }).afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) this.openReview(row);
      });
      return;
    }
    this.openReview(row);
  }

  private openReview(row: UserTestRow){
    try{
      const userRaw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
      const userId = userRaw ? (JSON.parse(userRaw)?.user_id || JSON.parse(userRaw)?.id || '') : '';
      const schedulerId = row.schedule_id || row.test_id || '';
      if(!userId || !schedulerId) { try { notify('Missing user or test identifiers for review', 'error'); } catch(e){}; return; }
      const attemptId = (row as any).review_attempt_id || (row as any).attempt_id || '';
      const attemptParam = attemptId ? `&attempt_id=${encodeURIComponent(String(attemptId))}` : '';
      const url = `${API_BASE}/review-user-exam?user_id=${encodeURIComponent(String(userId))}&scheduler_id=${encodeURIComponent(String(schedulerId))}${attemptParam}`;
      this.reviewLoading = true; this.reviewAttempts = []; this.reviewOpen = true; this.reviewSelectedAttempt = 0;
      this.http.get<any>(url).subscribe({ next: (res) => {
        try{
              // API may return attempts as an array in res.data
              const attempts = Array.isArray(res?.data) ? res.data : (Array.isArray(res?.attempts) ? res.attempts : (Array.isArray(res?.data?.attempts) ? res.data.attempts : []));
              this.reviewAttempts = (Array.isArray(attempts) ? attempts : []).map((a:any, idx:number) => {
                const items = Array.isArray(a.review) ? a.review : (Array.isArray(a.items) ? a.items : (Array.isArray(a.questions) ? a.questions : []));
                const mappedItems = (items || []).map((it:any) => {
                  const options = Array.isArray(it.options) ? it.options : (Array.isArray(it.choices) ? it.choices : []);
                  // ensure option objects have is_correct numeric flag and option_text
                  const normalizedOptions = (options || []).map((o:any) => ({ is_correct: (typeof o.is_correct !== 'undefined') ? Number(o.is_correct) : ((typeof o.isCorrect !== 'undefined') ? Number(o.isCorrect) : 0), option_text: o.option_text || o.text || o.label || '' }));
                  const selectedArr = Array.isArray(it.selected_option) ? it.selected_option.map((s:any)=>String(s)) : (it.selected_option ? [String(it.selected_option)] : (it.selected ? (Array.isArray(it.selected) ? it.selected.map((s:any)=>String(s)) : [String(it.selected)]) : []));
                  // determine boolean correctness for the item
                  const itemIsCorrect = (typeof it.is_correct !== 'undefined') ? Boolean(it.is_correct) : ((typeof it.isCorrect !== 'undefined') ? Boolean(it.isCorrect) : null);
                  const inferredCorrect = (it.correct_option || it.correct_answer || it.answer) || (normalizedOptions && normalizedOptions.length ? normalizedOptions[0].option_text : '');
                  return {
                    title: row.title || '',
                    question_text: it.question_text || it.question || it.q || '',
                    question: it.question_text || it.question || it.q || '',
                    correct_option: inferredCorrect,
                    options: normalizedOptions,
                    question_type: it.question_type || it.type || 'choose',
                    selected_option: selectedArr,
                    is_correct: itemIsCorrect,
                    marks_awarded: (typeof it.marks_awarded !== 'undefined') ? it.marks_awarded : (typeof it.marks !== 'undefined' ? it.marks : 0),
                    question_marks: (typeof it.question_marks !== 'undefined') ? it.question_marks : (typeof it.marks !== 'undefined' ? it.marks : 0),
                    feedback: it.feedback || null,
                    review_comment: it.review_comment || it.reviewComment || null
                  } as any;
                });
                return {
                  title: row.title || '',
                  attempt_number: a.attempt_number || a.attempt_no || a.attempt || (idx+1),
                  items: mappedItems,
                  score: a.score || a.marks || 0,
                  started_date: a.started_date || a.started_at || a.start_time || null,
                  submitted_date: a.submitted_date || a.submitted_at || null,
                  status: a.status || null,
                  percentage: a.percentage || null,
                  total_questions: a.total_questions || null,
                  total_marks: a.total_marks || a.max_marks || null,
                  time_taken: a.time_taken || null,
                  result: a.result || null
                };
              });
              const targetAttemptNo = (row as any).target_attempt_number;
              const targetAttemptId = (row as any).review_attempt_id;
              if (targetAttemptNo) {
                const idx = this.reviewAttempts.findIndex(a => Number(a.attempt_number) === Number(targetAttemptNo));
                if (idx >= 0) this.reviewSelectedAttempt = idx;
              } else if (targetAttemptId) {
                const idx = this.reviewAttempts.findIndex(a => String((a as any).attempt_id || '') === String(targetAttemptId));
                if (idx >= 0) this.reviewSelectedAttempt = idx;
              }
        }catch(e){ this.reviewAttempts = []; }
        this.reviewLoading = false;
      }, error: (err) => {
        console.warn('Failed to load review', err);
        const msg = err?.error?.statusMessage || err?.error?.message || 'This review is not available.';
        try { notify(msg, 'error'); } catch (e) {}

        this.markReviewConsumed(row, (row as any).target_attempt_number);

        this.reviewLoading = false; this.reviewAttempts = []; this.reviewOpen = false;
      } });
    }catch(e){ try { notify('Failed to request review', 'error'); } catch(e){} }
  }

  closeReview(){
    this.reviewOpen = false;
    this.reviewAttempts = [];
    this.reviewSelectedAttempt = 0;
    this.currentReviewRow = null;
    this.currentReviewAttemptNo = null;
    this.loadExams(false);
  }

  /** Filter review comments by category (missing / incorrect / incomplete) */
  reviewComments(q: any, categories: string | string[]): any[] {
    try {
      const comments = (q && q.review_comment && Array.isArray(q.review_comment.comments)) ? q.review_comment.comments : [];
      if (!comments || !comments.length) return [];
      const cats = Array.isArray(categories) ? categories.map(String) : [String(categories)];
      const normalized = cats.map(c => (c || '').toString().toLowerCase());
      return (comments || []).filter((c: any) => normalized.includes(((c && c.category) || '').toString().toLowerCase()));
    } catch (e) {
      return [];
    }
  }

  /** Convert string to Title Case */
  toTitleCase(str: string | null | undefined): string {
    if (!str) return '';
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

  ngOnInit(): void{

    this.pageMeta.setMeta('User Tests', 'Explore and manage your tests');
    // Refresh server-calculated review availability without interrupting the student UI.
    this.reviewRefreshTimer = setInterval(() => this.loadExams(false), 60000);
    
  }
  loadExams(showLoader = true){
    if(!this.instituteId) return;
    // Skip a polling cycle while another exam-list request is still active.
    if(this.loading) return;
    if(showLoader) this.loader.show();
    this.loading = true;
    // include session user data as a payload in the query string
    const userRaw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
    let userObj: any = null;
    try { userObj = userRaw ? JSON.parse(userRaw) : null; } catch(e) { userObj = null; }
    const userId = userObj?.user_id || userObj?.id || '';

    // send user_id as query param via GET request to fetch exams for the user's institute
    const url = `${this.examsUrl}?user_id=${encodeURIComponent(userId)}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
      const arr = Array.isArray(res?.data) ? res.data : [];
      const fmtDate = (v: any): string => {
        if (v === null || v === undefined || v === '') return '';
        let d: Date;
        if (typeof v === 'number') {
          d = new Date(v > 1e12 ? v : v * 1000);
        } else if (/^\d+$/.test(String(v))) {
          const n = Number(v);
          d = new Date(n > 1e12 ? n : n * 1000);
        } else {
          d = new Date(String(v));
        }
        if (isNaN(d.getTime())) return String(v);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const dd = String(d.getDate()).padStart(2, '0');
        const mmm = months[d.getMonth()];
        const yyyy = d.getFullYear();
        const hh = String(d.getHours()).padStart(2, '0');
        const mm = String(d.getMinutes()).padStart(2, '0');
        return `${dd}-${mmm}-${yyyy} ${hh}:${mm}`;
      };
      const dateTimestamp = (v: any): number => {
        if (v === null || v === undefined || v === '') return 0;
        const numericValue = typeof v === 'number' || /^\d+$/.test(String(v)) ? Number(v) : null;
        const timestamp = numericValue !== null
          ? (numericValue > 1e12 ? numericValue : numericValue * 1000)
          : new Date(String(v)).getTime();
        return Number.isFinite(timestamp) ? timestamp : 0;
      };

      this.exams = arr.map((x: any) => {
        const normalizedType = (x.type || '').toString().toLowerCase();
        const schedId = String(x.schedule_id || x.test_id || x.id || x.exam_id || '');
        const isMultipleReview = this.isMultipleReviewEnabled(x);

        if (isMultipleReview && schedId) {
          try {
            const raw = sessionStorage.getItem('consumed_reviews') || '[]';
            let list = JSON.parse(raw);
            if (Array.isArray(list) && list.includes(schedId)) {
              list = list.filter((id: string) => id !== schedId);
              sessionStorage.setItem('consumed_reviews', JSON.stringify(list));
            }
          } catch (e) {}
        }

        const rawAvailable = (typeof x.review_available !== 'undefined' && x.review_available !== null) ? Boolean(x.review_available) :
                             ((typeof x.user_review !== 'undefined' && x.user_review !== null) ? Boolean(x.user_review) : Boolean(x.review));
        const reviewAvailable = rawAvailable !== false;
        const attempted = Boolean(x.attempted);
        const completedByUser = Boolean(x.completed_by_user);
        const expired = Boolean(x.expired);
        const isCompleted = completedByUser;

        // Schedule window (always preserved from original schedule start/end settings)
        const rawScheduleStart = x.start_time || x.start || x.start_date;
        const rawScheduleEnd = x.end_time || x.end || x.end_date;
        const startVal = fmtDate(rawScheduleStart);
        const endVal = fmtDate(rawScheduleEnd);
        const scheduleTest = (startVal || endVal) ? `${startVal || '—'} - ${endVal || '—'}` : '—';
        return {
          test_id: x.test_id || x.id || x.exam_id,
          schedule_id: schedId,
          institute_id: x.institute_id || '',
          title: x.schedule_title || x.name || '', //exam_title
          created_by: x.created_by || '',
          created_date: x.created_date || '',
          // whether review is available for this user on this exam
          user_review: reviewAvailable,
          review_available: reviewAvailable,
          review_consumed: false,
          review_attempt_id: x.review_attempt_id || '',
          review_mode: x.review_mode || '',
          multiple_review: isMultipleReview,
          attempted,
          completed_by_user: completedByUser,
          expired,
          start_time: startVal,
          end_time: endVal,
          // Keep the raw timestamp for reliable chronological ordering despite the formatted weekday label.
          schedule_sort_time: dateTimestamp(rawScheduleStart),
          scheduleTest: scheduleTest,
          user_percentage: (x.user_percentage !== undefined && x.user_percentage !== null) ? x.user_percentage : (x.percentage !== undefined && x.percentage !== null ? x.percentage : null),
          user_score: (x.user_score !== undefined && x.user_score !== null) ? x.user_score : (x.score !== undefined && x.score !== null ? x.score : null),
          user_result: x.user_result || x.result || null,
          pass_mark: x.pass_mark || 0,
          number_of_attempts: x.number_of_attempts || 0,
          user_attempt: x.user_attempt !== undefined ? x.user_attempt : (attempted || completedByUser ? 1 : 0),
          attempts_history: x.attempts_history || [],
          duration_mins: x.duration_mins || x.duration || 0,
          total_questions: x.total_questions || x.questions_count || 0,
          total_marks: x.total_marks || x.marks || 0,
          type: x.type
        };
      });
      this.loading = false;
      this.exams.forEach(e => delete (e as any)._cachedAttemptRows);
      this.dataSource.data = this.exams;
      // populate per-tab sources
      this.updateTabDataSources();
      try{ 
        const configureSorting = (src: MatTableDataSource<UserTestRow>) => {
          src.sort = this.sort;
          src.sortingDataAccessor = (item: UserTestRow, property: string) => {
            if (property === 'scheduleTest') {
              const rawStart = item.start_time;
              if (!rawStart) return 0;
              const parts = rawStart.split(' ');
              if (parts.length >= 2) {
                const dateParts = parts[0].split('-');
                if (dateParts.length === 3) {
                  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                  const month = months.indexOf(dateParts[1]);
                  if (month >= 0) {
                    const timeParts = parts[1].split(':');
                    const d = new Date(Number(dateParts[2]), month, Number(dateParts[0]), Number(timeParts[0] || 0), Number(timeParts[1] || 0));
                    return d.getTime();
                  }
                }
              }
              const fallback = Date.parse(rawStart);
              return isNaN(fallback) ? 0 : fallback;
            }
            return (item as any)[property];
          };
        };

        configureSorting(this.dataSource);
        configureSorting(this.activeSource);
        configureSorting(this.completeSource);
      }catch(e){}
      if(showLoader) this.loader.hide();
      },
      error: (err) => {
        console.warn('Failed to load tests', err);
        this.loading = false;
        // Preserve the current table if only the background availability refresh fails.
        if(showLoader) {
          this.exams = [];
          this.loader.hide();
        }
      }
    });

  }

  private updateTabDataSources(){
    const lc = (s?: string) => (s || '').toString().toLowerCase();
    const isActive = (t?: string) => ['active','live'].includes(lc(t));
    // Only this user's persisted submitted/evaluated attempts belong in Completed.
    const isComplete = (exam: UserTestRow) => Boolean(exam.completed_by_user);
    const isUpcoming = (t?: string) => ['upcoming','scheduled','pending','upcomming'].includes(lc(t));

    const byScheduleDate = (a: UserTestRow, b: UserTestRow) =>
      // Show the most recently dated tests first in both tabs.
      (b.schedule_sort_time || 0) - (a.schedule_sort_time || 0);
    this.activeSource.data = this.exams.filter(e => isActive(e.type) || isUpcoming(e.type)).sort(byScheduleDate);
    this.completeSource.data = this.exams.filter(isComplete).sort(byScheduleDate);
  }

  isUpcomingTest(type?: string): boolean {
    return ['upcoming','scheduled','pending','upcomming'].includes((type || '').toString().toLowerCase());
  }

  // Helpers used by the template to safely check selected options
  normalizeSelectedOptions(item: any): string[] {
    const sel = item && item.selected_option;
    if (!sel) return [];
    if (Array.isArray(sel)) return sel.map((s: any) => String(s));
    return [String(sel)];
  }

  // Return option letter (A, B, C...)
  getOptionLetter(index: number): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (typeof index !== 'number' || index < 0) return String(index + 1);
    return letters[index] || String(index + 1);
  }

  isOptionSelected(item: any, opt: any): boolean {
    try {
      const arr = this.normalizeSelectedOptions(item);
      const optText = (opt && opt.option_text) ? String(opt.option_text).trim() : (typeof opt === 'string' ? opt.trim() : '');
      const optId = (opt && opt.options_id) ? String(opt.options_id) : (opt && opt.id ? String(opt.id) : '');
      const expandedArr: string[] = [];
      arr.forEach(s => {
        if (s && s.includes(',')) {
          s.split(',').forEach(part => expandedArr.push(part.trim()));
        } else if (s) {
          expandedArr.push(s.trim());
        }
      });
      return expandedArr.includes(optText) || (optId !== '' && expandedArr.includes(optId));
    } catch (e) { return false; }
  }

  // Returns a CSS class for a review row based on correctness
  getRowClass(item: any): string {
    if (typeof item?.is_correct === 'boolean') return item.is_correct ? 'row-correct' : 'row-incorrect';
    if (typeof item?.is_correct === 'number') return item.is_correct ? 'row-correct' : 'row-incorrect';
    return '';
  }

  // Determine option highlight status: 'selected-correct', 'selected-incorrect', 'correct', or ''
  optionStatus(item: any, opt: any): string {
    try{
      const optText = (opt && opt.option_text) ? String(opt.option_text) : '';
      const selected = this.normalizeSelectedOptions(item);
      const isSelected = selected.indexOf(optText) >= 0;
      const isCorrect = (opt && (Number(opt.is_correct) === 1 || opt.is_correct === 1 || opt.is_correct === true));
      if (isSelected && isCorrect) return 'option-selected-correct';
      if (isSelected && !isCorrect) return 'option-selected-incorrect';
      if (!isSelected && isCorrect) return 'option-correct';
      return '';
    }catch(e){ return ''; }
  }

  // Safe template-friendly check for option correctness
  isOptionCorrect(opt: any): boolean {
    try{
      if (!opt) return false;
      const v = opt.is_correct !== undefined ? opt.is_correct : (opt.isCorrect !== undefined ? opt.isCorrect : 0);
      return Number(v) === 1 || v === true;
    }catch(e){ return false; }
  }

  confirmStartTest(ex: UserTestRow, event?: Event): void {
    if (event) {
      try { event.preventDefault(); event.stopPropagation(); } catch (e) {}
    }
    if (!ex) return;
    const scheduleId = ex.schedule_id || ex.test_id || '';
    const targetEx = { ...ex, schedule_id: scheduleId };
    try {
      const dialogRef = this.dialog.open(ConfirmStartTestDialogComponent, {
        width: '32.8rem',
        maxWidth: 'calc(100vw - 2rem)',
        autoFocus: false,
        restoreFocus: true
      });
      if (dialogRef) {
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) this.launchTest(targetEx);
        });
        return;
      }
    } catch (err) {
      console.warn('Dialog open error, launching directly:', err);
    }
    if (window.confirm('Are you sure you want to start this test? Once started, the timer will begin and cannot be paused.')) {
      this.launchTest(targetEx);
    }
  }

  launchTest(ex: UserTestRow){
    const scheduleId = ex?.schedule_id || ex?.test_id || '';
    if (!scheduleId) { try { notify('Schedule id missing', 'error'); } catch(e){}; return; }
    const userRaw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
    const userId = userRaw ? (JSON.parse(userRaw)?.user_id || JSON.parse(userRaw)?.id || '') : '';
    const url = `${this.launchUrl}?schedule_id=${encodeURIComponent(String(scheduleId))}&user_id=${encodeURIComponent(String(userId))}`;
    // call launch API and navigate to user-exam page with payload
    this.http.get<any>(url).subscribe({
      next: (res) => {
        // store the returned exam payload (questions etc) in sessionStorage for the user-exam page
        try{ sessionStorage.setItem('launched_exam', JSON.stringify(res?.data || res)); }catch(e){}
        // navigate to user exam page
        // window.location.href = '/user-exam';
        this.router.navigate(['/user/exam/run'])
      },
      error: (err) => {
        console.warn('Failed to launch exam', err);
        const message = err?.error?.statusMessage || err?.error?.message || 'Could not launch test';
        try { notify(message, 'error'); } catch(e){}
        // If an administrator unpublished this schedule after the last list
        // refresh, immediately remove the stale Active row from the screen.
        if (err?.status === 404 && message === 'Schedule not found') {
          this.loadExams(false);
        }
      }
    });
  }

  applyFilter(){
    const q = (this.search || '').trim().toLowerCase();
    const predicate = (row: UserTestRow) => {
      const byText = (row.title || '').toLowerCase().includes(q) || (row.test_id || '').toLowerCase().includes(q);
      const byPublished = this.filterPublished === '' ? true : ((this.filterPublished === 'live') ? !!row.published : !row.published);
      const byInstitute = !this.isSuperAdmin || !this.filterInstitute || String(row.institute_id || '') === String(this.filterInstitute);
      const byScheduleName = !this.filterScheduleName || (row.title || '').toLowerCase().includes(this.filterScheduleName.trim().toLowerCase());
      const createdTime = row.created_date ? new Date(row.created_date).getTime() : NaN;
      const afterTime = this.filterCreatedAfter ? new Date(this.filterCreatedAfter).setHours(0, 0, 0, 0) : null;
      const beforeTime = this.filterCreatedBefore ? new Date(this.filterCreatedBefore).setHours(23, 59, 59, 999) : null;
      const byCreatedAfter = afterTime === null || (!isNaN(createdTime) && createdTime >= afterTime);
      const byCreatedBefore = beforeTime === null || (!isNaN(createdTime) && createdTime <= beforeTime);
      return byText && byPublished && byInstitute && byScheduleName && byCreatedAfter && byCreatedBefore;
    };
    [this.dataSource, this.activeSource, this.completeSource].forEach(ds => {
      ds.filterPredicate = predicate;
      // MatTableDataSource skips its predicate for an empty filter string.
      ds.filter = q || '__structured_filters__';
    });
  }

  ngAfterViewInit(): void {
    try{ this.dataSource.sort = this.sort; }catch(e){}
  }

  ngOnDestroy(): void {
    if(this.reviewRefreshTimer) clearInterval(this.reviewRefreshTimer);
  }

  // Format a date dynamically converting GMT/UTC timezone offsets to IST
  formatDate(dateLike: any): string {
    if (!dateLike) return '';
    try {
      const dateStr = String(dateLike).replace(/^On\s+/i, '').trim();

      if (typeof dateLike === 'string' && (dateLike.includes('GMT') || dateLike.includes('UTC'))) {
        return dateLike.replace(/^On\s+/i, '').replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST').trim();
      }

      const d = (dateLike instanceof Date) ? dateLike : new Date(dateLike);
      if (isNaN(d.getTime())) {
        return dateStr.replace(/^On\s+/i, '').replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST').trim();
      }

      const formatter = new Intl.DateTimeFormat('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      });
      const parts = formatter.formatToParts(d);
      const getPart = (type: string) => parts.find(p => p.type === type)?.value || '';

      const day = getPart('day');
      const month = getPart('month');
      const year = getPart('year');
      const hour = getPart('hour');
      const min = getPart('minute');

      return `${day}-${month}-${year} ${hour}:${min} IST`;
    } catch (e) {
      return String(dateLike || '').replace(/^On\s+/i, '').replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST').trim();
    }
  }
}
