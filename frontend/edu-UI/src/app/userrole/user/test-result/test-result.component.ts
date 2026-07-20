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
        this.result = JSON.parse(raw) as TestResult;
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
