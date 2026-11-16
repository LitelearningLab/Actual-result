import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { API_BASE } from 'src/app/shared/api.config';
import { Subscription } from 'rxjs';

interface CreditSummary {
  institute_id: string;
  institute_name: string;
  allocated_credits: number;
  used_credits: number;
  remaining_credits: number;
  percentage_used: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  total_operations: number;
  is_low_credit: boolean;
  alert_threshold: number;
}

export interface FeatureColumnItem {
  key?: string;
  feature: string;
  icon?: string;
  count: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  credits_consumed: number;
  last_used?: string | null;
}

interface FeatureBreakdownItem {
  key?: string;
  feature: string;
  icon?: string;
  count: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  credits_consumed: number;
  last_used?: string | null;
}

interface BreakdownTotals {
  count: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  credits_consumed: number;
}

interface ChartBar {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  value: number;
  prompt_value: number;
  comp_value: number;
}

export interface InstituteOverviewItem {
  institute_id: string;
  name: string;
  short_name: string;
  allocated_credits: number;
  used_credits: number;
  remaining_credits: number;
  percentage_used: number;
  prompt_tokens: number;
  completion_tokens: number;
  operations: number;
  threshold: number;
  status: string;
}

export interface InstituteOption {
  institute_id: string;
  name: string;
  short_name?: string;
}

@Component({
  selector: 'app-ai-credits',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  templateUrl: './ai-credits.component.html',
  styleUrls: ['./ai-credits.component.scss'],
})
export class AiCreditsComponent implements OnInit, OnDestroy {
  isLoading = false;
  summary: CreditSummary | null = null;
  breakdown: FeatureBreakdownItem[] = [];
  featureColumns: FeatureColumnItem[] = [];
  totals: BreakdownTotals | null = null;

  // Super Admin view state
  isSuperAdmin = false;
  selectedInstituteId = 'all';
  institutesList: InstituteOption[] = [];
  institutesOverview: InstituteOverviewItem[] = [];

  // Bar Chart state
  selectedPeriod: 'today' | 'weekly' | 'monthly' = 'weekly';
  chartBars: ChartBar[] = [];
  chartPeakLabel = 'N/A';
  chartPeakValue = 0;
  chartPeriodTotal = 0;
  chartAverage = 0;

  // Active hover tooltip
  hoveredBar: ChartBar | null = null;

  private subs: Subscription = new Subscription();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const userStr = sessionStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        const role = (user.user_role || user.role || '').toLowerCase();
        this.isSuperAdmin = role.includes('super');
      } catch (e) {
        console.error('Failed to parse user session', e);
      }
    }

    this.loadAllData();
  }

  loadAllData(): void {
    this.isLoading = true;
    if (this.isSuperAdmin) {
      this.loadInstitutesOverview();
    }
    this.loadSummary();
    this.loadBreakdown();
    this.loadAnalytics(this.selectedPeriod);
  }

  onInstituteChange(instId: string): void {
    this.selectedInstituteId = instId;
    this.loadAllData();
  }

  selectInstitute(instId: string): void {
    this.selectedInstituteId = instId;
    this.loadAllData();
  }

  private getAuthHeaders(): { [key: string]: string } {
    const token = sessionStorage.getItem('token');
    const headers: { [key: string]: string } = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const globalInst = sessionStorage.getItem('globalInstituteId');
    if (globalInst) {
      headers['X-Institute-Id'] = globalInst;
      headers['X-Global-Institute-Id'] = globalInst;
    }
    return headers;
  }

  loadInstitutesOverview(): void {
    if (!this.isSuperAdmin) return;
    this.http
      .get<{ status: boolean; data: InstituteOverviewItem[] }>(
        `${API_BASE}/ai-credits/institutes-overview`,
        { headers: this.getAuthHeaders() }
      )
      .subscribe({
        next: (res) => {
          if (res && res.status && res.data) {
            this.institutesOverview = res.data;
            this.institutesList = res.data.map((item) => ({
              institute_id: item.institute_id,
              name: item.name,
              short_name: item.short_name,
            }));
          }
        },
        error: (err) => {
          console.error('Error fetching institutes overview:', err);
        },
      });
  }

  loadSummary(): void {
    let url = `${API_BASE}/ai-credits/summary`;
    if (this.isSuperAdmin && this.selectedInstituteId) {
      url += `?institute_id=${encodeURIComponent(this.selectedInstituteId)}`;
    }

    this.http
      .get<{ status: boolean; data: CreditSummary }>(url, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (res) => {
          if (res && res.status && res.data) {
            this.summary = res.data;
          }
        },
        error: (err) => {
          console.error('Error fetching summary:', err);
        },
      });
  }

  loadBreakdown(): void {
    let url = `${API_BASE}/ai-credits/feature-breakdown`;
    if (this.isSuperAdmin && this.selectedInstituteId) {
      url += `?institute_id=${encodeURIComponent(this.selectedInstituteId)}`;
    }

    this.http
      .get<{
        status: boolean;
        data: {
          columns?: FeatureColumnItem[];
          breakdown: FeatureBreakdownItem[];
          totals: BreakdownTotals;
        };
      }>(url, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (res) => {
          if (res && res.status && res.data) {
            this.featureColumns = res.data.columns || res.data.breakdown || [];
            this.breakdown = res.data.breakdown || [];
            this.totals = res.data.totals || null;
          }
        },
        error: (err) => {
          console.error('Error fetching breakdown:', err);
        },
      });
  }

  loadAnalytics(period: 'today' | 'weekly' | 'monthly'): void {
    this.selectedPeriod = period;
    let url = `${API_BASE}/ai-credits/analytics?period=${period}`;
    if (this.isSuperAdmin && this.selectedInstituteId) {
      url += `&institute_id=${encodeURIComponent(this.selectedInstituteId)}`;
    }

    this.http
      .get<{
        status: boolean;
        data: {
          period: string;
          labels: string[];
          values: number[];
          prompt_values: number[];
          completion_values: number[];
          peak_label: string;
          peak_value: number;
          period_total: number;
          avg: number;
        };
      }>(url, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res && res.status && res.data) {
            const d = res.data;
            this.chartPeakLabel = d.peak_label || 'N/A';
            this.chartPeakValue = d.peak_value || 0;
            this.chartPeriodTotal = d.period_total || 0;
            this.chartAverage = d.avg || 0;
            this.buildChartBars(
              d.labels || [],
              d.values || [],
              d.prompt_values || [],
              d.completion_values || []
            );
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Error fetching analytics:', err);
        },
      });
  }

  buildChartBars(
    labels: string[],
    values: number[],
    promptValues: number[],
    compValues: number[]
  ): void {
    if (!labels || labels.length === 0) {
      this.chartBars = [];
      return;
    }

    const maxValue = Math.max(...values, 100);
    const chartHeight = 160; // Max height in SVG px
    const chartWidth = 700; // SVG viewBox width
    const barWidth = Math.max(
      18,
      Math.min(48, Math.floor((chartWidth - 80) / labels.length - 16))
    );
    const totalSlots = labels.length;
    const spacing = (chartWidth - 80) / totalSlots;

    this.chartBars = labels.map((label, i) => {
      const val = values[i] || 0;
      const height = Math.max(4, (val / maxValue) * chartHeight);
      const x = 50 + i * spacing + (spacing - barWidth) / 2;
      const y = 200 - height;

      return {
        x,
        y,
        width: barWidth,
        height,
        label,
        value: val,
        prompt_value: promptValues[i] || 0,
        comp_value: compValues[i] || 0,
      };
    });
  }

  getFeatureIcon(featureName: string): string {
    const f = (featureName || '').toLowerCase();
    if (f.includes('fine')) return 'tune';
    if (f.includes('anchor')) return 'pin_drop';
    if (f.includes('student') || f.includes('roster') || f.includes('identity')) return 'person_search';
    if (f.includes('split')) return 'call_split';
    if (f.includes('paper') || f.includes('sheet')) return 'description';
    if (f.includes('diagnos') || f.includes('misconception')) return 'analytics';
    if (f.includes('subtopic') || f.includes('taxonom')) return 'category';
    if (f.includes('question') && !f.includes('fine')) return 'help_outline';
    if (f.includes('eval') || f.includes('review')) return 'fact_check';
    return 'smart_toy';
  }

  getProgressColor(): string {
    const pct = this.summary?.percentage_used || 0;
    if (pct >= 90) return 'warn';
    if (pct >= 70) return 'accent';
    return 'primary';
  }

  getStatusBadgeClass(status: string): string {
    switch ((status || '').toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'low balance':
        return 'status-warning';
      case 'exhausted':
        return 'status-danger';
      case 'not allocated':
        return 'status-neutral';
      default:
        return 'status-neutral';
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
