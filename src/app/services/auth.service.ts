import { Injectable } from '@angular/core';
import {
  signIn,
  type SignInOutput,
  signUp,
  type SignUpOutput,
  signOut,
  autoSignIn,
  getCurrentUser,
} from 'aws-amplify/auth';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private toastr: ToastrService, private router: Router) {
    this.isSignedIn.next(localStorage.getItem('isSignedIn') === 'true');
    localStorage.removeItem('isSignedIn');
  }

  signUp(username: string, password: string): Promise<SignUpOutput> {
    return signUp({ username, password });
  }

  signIn(username: string, password: string): Promise<SignInOutput> {
    this.isSignedIn.next(true);
    return signIn({ username, password });
  }

  signOut(): Promise<void> {
    this.isSignedIn.next(false);
    return signOut();
  }

  checkForAuthenticatedUser(): boolean {
    let isSignedIn = false;
    getCurrentUser()
      .then((user) => {
        isSignedIn = true;
        this.isSignedIn.next(true);
      })
      .catch((error) => {
        isSignedIn = false;
        this.isSignedIn.next(false);
      });
    return isSignedIn;
  }

  handleSignInNextStep(
    nextStep:
      | 'CONFIRM_SIGN_UP'
      | 'DONE'
      | 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE'
      | 'CONTINUE_SIGN_IN_WITH_MFA_SELECTION'
      | 'CONFIRM_SIGN_IN_WITH_SMS_CODE'
      | 'CONFIRM_SIGN_IN_WITH_TOTP_CODE'
      | 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP'
      | 'RESET_PASSWORD'
      | 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED',
    email: string = ''
  ) {
    switch (nextStep) {
      case 'CONFIRM_SIGN_UP':
        this.router.navigate(['/confirm-signup'], {
          queryParams: { username: email },
        });
        break;
      case 'DONE':
        this.isSignedIn.next(true);
        this.router.navigate(['/app']);
        break;
      default:
        break;
    }
  }

  handleSignUpNextStep(
    nextStep: 'CONFIRM_SIGN_UP' | 'COMPLETE_AUTO_SIGN_IN' | 'DONE',
    email: string = ''
  ) {
    switch (nextStep) {
      case 'DONE':
        this.router.navigate(['/app']);
        break;
      case 'CONFIRM_SIGN_UP':
        this.router.navigate(['/confirm-signup'], {
          queryParams: { username: email },
        });
        break;
      case 'COMPLETE_AUTO_SIGN_IN':
        this.handleAutoSignIn();
        break;
      default:
        break;
    }
  }

  private async handleAutoSignIn() {
    try {
      const { isSignedIn, nextStep } = await autoSignIn();

      if (isSignedIn) {
        this.handleSignInNextStep(nextStep.signInStep);
      }
    } catch (error: any) {
      this.toastr.error(error.message);
    }
  }
}
