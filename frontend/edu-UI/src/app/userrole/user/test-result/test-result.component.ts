import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { notify } from 'src/app/shared/global-notify';

@Component({
  selector: 'app-user-test-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class UserTestResultComponent implements OnInit {
  result: TestResult | null = null;
  percent = 0;
  accuracy = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    try{
      const raw = sessionStorage.getItem('test_result') || sessionStorage.getItem('last_submission');
      if (raw){
        const storedResult = JSON.parse(raw) as TestResult;
        const currentUserId = this.getCurrentUserId();
        const resultOwnerId = storedResult.owner_user_id || storedResult.user_id || storedResult.user;

        // Never render a result left in this tab by a different login.
        if (currentUserId && resultOwnerId && this.sameUser(currentUserId, resultOwnerId)) {
          this.result = storedResult;
        } else {
          this.clearStoredResult();
        }
      }
    }catch(e){ /* ignore parse errors */ }

    const r = this.result;
    this.percent = r && r.total_marks ? Math.round(((r.score||0) / (r.total_marks||1)) * 100) : 0;
    this.accuracy = r && r.total_questions ? Math.round(((r.correct||0) / (r.total_questions||1)) * 100) : 0;
  }

  downloadPdf(){
    try { notify('Download PDF - not implemented yet', 'info'); } catch(e){}
  }

  reviewAnswers(){
    // store and navigate to review page if exists
    try{ sessionStorage.setItem('review_questions', JSON.stringify(this.result?.questions||[])); }catch(e){}
    try { notify('Review answers - implement navigation to review page', 'info'); } catch(e){}
  }

  backToDashboard(){
    this.router.navigate(['/user-dashboard']);
  }

  viewAvailableTests(){
    this.router.navigate(['/user/exam']);
  }

  private getCurrentUserId(): string {
    try {
      const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile') || sessionStorage.getItem('user_info');
      const user = raw ? JSON.parse(raw) : null;
      return String(user?.user_id || user?.id || user?.userId || user?.email || '');
    } catch (e) {
      return '';
    }
  }

  private sameUser(currentUserId: string, resultOwnerId: string): boolean {
    return String(currentUserId).trim().toLowerCase() === String(resultOwnerId).trim().toLowerCase();
  }

  private clearStoredResult(): void {
    this.result = null;
    ['test_result', 'last_submission', 'review_questions'].forEach(key => sessionStorage.removeItem(key));
  }
}

export interface QuestionResult {
  id?: string;
  question?: string;
  answer?: string;
  correct_answer?: string;
  marks_awarded?: number;
  marks?: number;
}

export interface TestResult {
  owner_user_id?: string;
  user_id?: string;
  test_id?: string;
  title?: string;
  user?: string;
  total_marks?: number;
  score?: number;
  total_questions?: number;
  correct?: number;
  incorrect?: number;
  time_taken_mins?: number;
  started_at?: string;
  completed_at?: string;
  questions?: QuestionResult[];
  statusMessage?: string;
}

// ...existing code...
