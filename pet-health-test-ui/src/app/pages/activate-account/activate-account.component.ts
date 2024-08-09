import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [CodeInputModule],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
})
export class ActivateAccountComponent {
  message = '';
  isOkay = true;
  submitted = false;
  router: Router = inject(Router);
  authService = inject(AuthenticationService);

  redirectToLogin() {
    this.router.navigate(['login']);
  }
  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }
  private confirmAccount(token: string) {
    this.authService.activateAccount(token).subscribe({
      next: () => {
        this.message =
          'Your account has been successfully activated.\nNow you can proceed to login';
        this.submitted = true;
        this.isOkay = true;
      },
      error: () => {
        this.message = 'Token has been expired or invalid';
        this.submitted = true;
        this.isOkay = false;
      },
    });
  }
}
