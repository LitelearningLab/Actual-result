import { CanDeactivateFn } from '@angular/router';
import { CreateQuestionPaperComponent } from '../../userrole/admin/question-paper/create-question-paper.component';

export const questionPaperUnsavedChangesGuard: CanDeactivateFn<CreateQuestionPaperComponent> = component =>
  component.canDeactivate();
