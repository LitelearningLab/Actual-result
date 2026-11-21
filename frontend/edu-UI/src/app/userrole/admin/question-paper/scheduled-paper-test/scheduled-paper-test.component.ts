import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { MathRenderComponent } from 'src/app/shared/components/math-render/math-render.component';
import { QuestionPaperComponent } from '../question-paper.component';

@Component({
  selector: 'app-scheduled-paper-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatDividerModule,
    MatDatepickerModule,
    MatCheckboxModule,
    OverlayModule,
    PortalModule,
    DirectivesModule,
    MathRenderComponent,
  ],
  templateUrl: './scheduled-paper-test.component.html',
  styleUrls: ['./scheduled-paper-test.component.scss'],
})
export class ScheduledPaperTestComponent extends QuestionPaperComponent implements OnInit {
  @ViewChild('filtersPanel') override filtersPanelTpl!: TemplateRef<any>;
  @ViewChild('filtersBtn', { read: ElementRef }) override filtersBtn!: ElementRef;
  @ViewChild(MatSort) override sort!: MatSort;

  override activeTab: 'drafts' | 'published' = 'published';
  protected override returnStateStorageKey = 'scheduled_paper_tests_table_return_state';

  override ngOnInit(): void {
    super.ngOnInit();
    this.activeTab = 'published';
    this.pageMeta.setMeta('Scheduled Paper Test', 'View and manage scheduled paper tests.');
    this.updateDisplayedColumns();
    this.updateFilteredExams();
  }

  override updateDisplayedColumns(): void {
    this.displayedColumns = [
      'sno',
      'title',
      'sections',
      'questions',
      'marks',
      'duration',
      'evaluation',
      'manual_review',
      'actions',
    ];
  }

  override updateFilteredExams(): void {
    let list = (this.allExams || []).filter((e) => this.isPublishedSchedule(e));
    const term = (this.filter || '').trim().toLowerCase();
    if (term) {
      list = list.filter(
        (e) =>
          (e.title || '').toLowerCase().includes(term) ||
          (e.description || '').toLowerCase().includes(term) ||
          (e.subject_name || '').toLowerCase().includes(term) ||
          (e.scheduler_name || '').toLowerCase().includes(term) ||
          this.getTestSubtitle(e).toLowerCase().includes(term)
      );
    }
    this.dataSource.data = list;
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
