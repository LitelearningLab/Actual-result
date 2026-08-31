import { CanDeactivateFn } from '@angular/router';
import { UserExamRunnerComponent } from '../../userrole/user/user-exam/user-exam.component';

export const userExamExitGuard: CanDeactivateFn<UserExamRunnerComponent> = component =>
  component.canDeactivate();
