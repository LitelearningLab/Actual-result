import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private snack: MatSnackBar) {}

  success(message: string, action = 'Close') {
    this.snack.open(message, action, { duration: 4000, horizontalPosition: 'right', verticalPosition: 'bottom', panelClass: ['snack-success'] });
  }

  error(message: string, action = 'Close') {
    this.snack.open(message, action, { duration: 6000, horizontalPosition: 'right', verticalPosition: 'bottom', panelClass: ['snack-error'] });
  }

  warning(message: string, action = 'Close') {
    this.snack.open(message, action, { duration: 6000, horizontalPosition: 'right', verticalPosition: 'bottom', panelClass: ['snack-warning'] });
  }

  critical(message: string, action = 'Close') {
    this.snack.open(message, action, { duration: 8000, horizontalPosition: 'right', verticalPosition: 'bottom', panelClass: ['snack-critical'] });
  }

  info(message: string, action = 'Close') {
    this.snack.open(message, action, { duration: 4000, horizontalPosition: 'right', verticalPosition: 'bottom' });
  }
}
