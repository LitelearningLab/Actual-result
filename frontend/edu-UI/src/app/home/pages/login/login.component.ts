import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from '../../service/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
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
export class LoginComponent {
  appVersion = APP_VERSION;
  loginForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder, 
    private auth: AuthService, 
    private router: Router, 
    private notify: NotificationService, 
    private loader: LoaderService,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { username, password } = this.loginForm.value;
    // call AuthService which posts to the backend
    this.loader.show();
    this.auth.login(username, password).then((res) => {
      this.loader.hide();
      console.debug('[LoginComponent] login resolved', res);
      if (res && res.success) {
        try { console.debug('[LoginComponent] sessionStorage user after login', sessionStorage.getItem('user')); } catch(e) {}
        // route based on role if available
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
        if (res && res.alreadyLoggedIn) {
          const msg = res.message || 'This account is already being used on another device or session. Please log out from the existing session before logging in again.';
          this.dialog.open(ConfirmDialogComponent, {
            data: {
              title: 'Account Already Active',
              message: msg,
              confirmText: 'OK',
              cancelText: ''
            },
            disableClose: true
          });
        } else {
          this.notify.error(res?.message || 'Login failed. Please check your credentials.');
        }
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

