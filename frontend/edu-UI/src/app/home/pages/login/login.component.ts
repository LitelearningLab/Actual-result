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
  lockoutRemainingSeconds = 0;
  formattedCountdown = '00:00';
  lockoutMessage = '';
  private lockoutTimer: any = null;

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

  startLockoutCountdown(seconds: number, message?: string): void {
    this.stopLockoutCountdown();
    this.showLockoutModal = true;
    this.isAccountLocked = true;
    this.isActiveSessionWarning = false;
    this.lockType = 'tab_closed';
    this.lockoutRemainingSeconds = seconds;
    this.lockoutMessage = message || 'The previous session was closed without logging out.';
    this.updateFormattedCountdown();

    this.lockoutTimer = setInterval(() => {
      this.lockoutRemainingSeconds--;
      if (this.lockoutRemainingSeconds <= 0) {
        this.closeLockoutModal();
      } else {
        this.updateFormattedCountdown();
      }
    }, 1000);
  }

  showActiveSessionWarning(message?: string): void {
    this.stopLockoutCountdown();
    this.showLockoutModal = true;
    this.isActiveSessionWarning = true;
    this.isAccountLocked = false;
    this.lockType = 'active_session';
    this.lockoutMessage = message || 'This account is already active on another device. Please log out from the other device before signing in here.';
  }

  stopLockoutCountdown(): void {
    if (this.lockoutTimer) {
      clearInterval(this.lockoutTimer);
      this.lockoutTimer = null;
    }
    this.isAccountLocked = false;
    this.isActiveSessionWarning = false;
    this.lockType = '';
    this.lockoutRemainingSeconds = 0;
    this.formattedCountdown = '00:00';
  }

  private updateFormattedCountdown(): void {
    const mins = Math.floor(Math.max(0, this.lockoutRemainingSeconds) / 60);
    const secs = Math.max(0, this.lockoutRemainingSeconds) % 60;
    const mm = mins < 10 ? `0${mins}` : `${mins}`;
    const ss = secs < 10 ? `0${secs}` : `${secs}`;
    this.formattedCountdown = `${mm}:${ss}`;
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
        if (result.lockType === 'active_session') {
          this.showActiveSessionWarning(result.statusMessage);
        } else if (result.lockType === 'tab_closed' || (result.remainingSeconds && result.remainingSeconds > 0)) {
          this.startLockoutCountdown(result.remainingSeconds || 90, result.statusMessage);
        } else {
          this.stopLockoutCountdown();
          this.notify.error(result.statusMessage || 'Login failed. Please check your credentials.');
        }
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
