import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { API_BASE } from 'src/app/shared/api.config';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, MatButtonModule, MatCardModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {
  threshold = new FormControl<number | null>(70, [Validators.required, Validators.min(0), Validators.max(100)]);
  loading = false;
  saving = false;

  constructor(private http: HttpClient, private snack: MatSnackBar, private pageMeta: PageMetaService) {}

  ngOnInit(): void {
    this.pageMeta.setMeta('Settings', 'Configure evaluation and review defaults');
    this.loadThreshold();
  }

  loadThreshold(): void {
    this.loading = true;
    this.http.get<any>(`${API_BASE}/settings/ai-confidence-threshold`).subscribe({
      next: response => {
        this.threshold.setValue(Number(response?.data?.ai_confidence_threshold ?? 70));
        this.loading = false;
      },
      error: error => {
        this.loading = false;
        this.snack.open(error?.error?.statusMessage || 'Unable to load AI confidence threshold', 'Close', { duration: 4000 });
      }
    });
  }

  save(): void {
    this.threshold.markAsTouched();
    if (this.threshold.invalid || this.threshold.value === null) return;
    this.saving = true;
    this.http.put<any>(`${API_BASE}/settings/ai-confidence-threshold`, {
      ai_confidence_threshold: Number(this.threshold.value)
    }).subscribe({
      next: response => {
        this.threshold.setValue(Number(response?.data?.ai_confidence_threshold ?? this.threshold.value));
        this.saving = false;
        this.snack.open('AI confidence threshold saved', 'Close', { duration: 3000 });
      },
      error: error => {
        this.saving = false;
        this.snack.open(error?.error?.statusMessage || 'Unable to save AI confidence threshold', 'Close', { duration: 4000 });
      }
    });
  }
}
