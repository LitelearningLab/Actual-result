import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService, LoginResult } from '../../service/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { APP_VERSION } from '../../../../environments/version';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  appVersion = APP_VERSION;
  loginForm: FormGroup;
  hide = true;

  showLockoutModal = false;
  isAccountLocked = false;
  isActiveSessionWarning = false;
  lockType = '';
  lockoutMessage = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private notify: NotificationService, private loader: LoaderService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false]
    });
  }

  ngOnDestroy(): void {
    this.stopLockoutCountdown();
  }

  closeLockoutModal(): void {
    this.showLockoutModal = false;
    this.stopLockoutCountdown();
  }

  showActiveSessionWarning(message?: string): void {
    this.showLockoutModal = true;
    this.isActiveSessionWarning = true;
    this.isAccountLocked = false;
    this.lockType = 'active_session';
    this.lockoutMessage = message || 'THIS ACCOUNT IS ALREADY ACTIVE ON ANOTHER DEVICE.\n\nPlease log out from the other device before signing in here.\n\nIf a logged-in device remains inactive for 15 minutes, the application will log out automatically.';
  }

  stopLockoutCountdown(): void {
    this.showLockoutModal = false;
    this.isAccountLocked = false;
    this.isActiveSessionWarning = false;
    this.lockType = '';
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { username, password } = this.loginForm.value;
    this.loader.show();
    this.auth.login(username, password).then((result: LoginResult) => {
      this.loader.hide();
      if (result.ok) {
        this.stopLockoutCountdown();
        let role = '';
        try{ const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile'); const u = raw ? JSON.parse(raw) : null; role = u?.role || sessionStorage.getItem('userRole') || ''; }catch(e){}
        role = (role || '').toLowerCase();
        if (role === 'super-admin' || role === 'superadmin' || role === 'super_admin') {
          this.router.navigate(['/super-admin-dashboard']);
        } else if (role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/user-dashboard']);
        }
      } else {
        this.loader.hide();
        const lockType = result.lockType || (result as any).lock_type;
        const isLocked = result.isLocked || (result as any).is_locked;
        const msg = result.statusMessage || (result as any).status_Message || (result as any).message;

        if (lockType === 'active_session' || isLocked) {
          this.showActiveSessionWarning(msg);
        } else {
          this.stopLockoutCountdown();
          this.notify.error(msg || 'Login failed. Please check your credentials.');
        }
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
