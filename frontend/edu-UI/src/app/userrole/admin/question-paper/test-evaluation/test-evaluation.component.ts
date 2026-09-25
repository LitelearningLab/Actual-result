import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface StudentEvaluation {
  sno: number;
  name: string;
  rollNo: string;
  pagesInfo: string;
  missingPagesWarning?: string;
  status: 'Completed' | 'Need to Check' | 'AI Evaluated' | 'Not Evaluated';
  marks: string;
  actionText: string;
  actionClass: string;
}

@Component({
  selector: 'app-test-evaluation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './test-evaluation.component.html',
  styleUrls: ['./test-evaluation.component.scss']
})
export class TestEvaluationComponent implements OnInit {
  selectedClass = 'Class 12';
  selectedSection = 'A';
  selectedSubject = 'Physics';
  selectedTest = 'Physics – Unit Test 1';

  uploadTab: 'user' | 'bulk' = 'user';
  searchQuery = '';
  selectedStatus = 'All statuses';

  // Filters Options
  classList = ['Class 10', 'Class 11', 'Class 12'];
  sectionList = ['A', 'B', 'C', 'D'];
  subjectList = ['Physics', 'Chemistry', 'Mathematics', 'Biology'];
  testList = ['Physics – Unit Test 1', 'Physics – Unit Test 2', 'C++ Descriptive'];
  statusList = ['All statuses', 'Completed', 'Need to Check', 'AI Evaluated', 'Not Evaluated'];

  // Test KPI Summary Data (Image 2 Design)
  testDetails = {
    title: 'Physics – Unit Test 1',
    class: 'Class 12',
    section: 'Section A',
    subject: 'Physics',
    totalMarks: '50 marks',
    totalQuestions: '23 questions',
    totalStudents: 40,
    evaluated: 25,
    needToCheck: 4,
    notEvaluated: 3,
    aiEvaluated: 8
  };

  // Student Evaluation Table Data (Image 1 Layout)
  students: StudentEvaluation[] = [
    {
      sno: 1,
      name: 'Arun Kumar',
      rollNo: 'Roll no. 12A01',
      pagesInfo: '5 of 5 pages',
      status: 'Completed',
      marks: '44 / 50',
      actionText: 'View Result',
      actionClass: 'btn-outline-blue'
    },
    {
      sno: 2,
      name: 'Priya S',
      rollNo: 'Roll no. 12A02',
      pagesInfo: '5 of 5 pages',
      status: 'Completed',
      marks: '45 / 50',
      actionText: 'View Result',
      actionClass: 'btn-outline-blue'
    },
    {
      sno: 3,
      name: 'Karthik R',
      rollNo: 'Roll no. 12A03',
      pagesInfo: '4 of 5 pages',
      missingPagesWarning: 'Page 3 is missing',
      status: 'Need to Check',
      marks: 'Not marked',
      actionText: 'Check and Review',
      actionClass: 'btn-solid-blue'
    },
    {
      sno: 4,
      name: 'Divya M',
      rollNo: 'Roll no. 12A04',
      pagesInfo: '5 of 5 pages',
      status: 'AI Evaluated',
      marks: 'AI suggests 38 / 50',
      actionText: 'Review',
      actionClass: 'btn-solid-blue'
    },
    {
      sno: 5,
      name: 'Rahul V',
      rollNo: 'Roll no. 12A05',
      pagesInfo: '0 of 5 pages',
      status: 'Not Evaluated',
      marks: 'Not marked',
      actionText: 'Evaluate',
      actionClass: 'btn-solid-blue'
    }
  ];

  filteredStudents: StudentEvaluation[] = [];

  ngOnInit(): void {
    this.filterStudents();
  }

  setUploadTab(tab: 'user' | 'bulk'): void {
    this.uploadTab = tab;
  }

  filterStudents(): void {
    let list = [...this.students];

    if (this.searchQuery && this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(
        (s) => s.name.toLowerCase().includes(q) || s.rollNo.toLowerCase().includes(q)
      );
    }

    if (this.selectedStatus && this.selectedStatus !== 'All statuses') {
      list = list.filter((s) => s.status === this.selectedStatus);
    }

    this.filteredStudents = list;
  }

  refreshData(): void {
    this.searchQuery = '';
    this.selectedStatus = 'All statuses';
    this.filterStudents();
  }
}
