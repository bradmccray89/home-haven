import { fadeFromBottom } from '../../animations/fade';
import { ThemeService } from '../../services/theme.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeFromBottom],
})
export class LoginComponent implements OnInit, OnDestroy {
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);
  public loginForm = new FormGroup({
    username: this.email,
    password: this.password,
  });
  public showPassword: boolean = false;
  public showSignup: boolean = false;
  public showForgotPassword: boolean = false;
  public isDarkTheme: Observable<boolean> = this.themeService.isDarkTheme;
  public authSubscribe: Subscription | undefined;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private themeService: ThemeService,
    private titleService: Title,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.titleService.setTitle('Login | HomeHaven');
  }

  ngOnInit(): void {
    if (this.authService.isSignedIn.value) {
      this.userService
        .fetchUserAttributes()
        .then((attributes) => {
          if (attributes) {
            this.toastr.success('Already signed in as ' + attributes.email);
            this.router.navigate(['/app']);
          }
        })
        .catch((error) => {
          this.toastr.error(error.message);
        });
    }
  }

  ngOnDestroy(): void {
    this.authSubscribe?.unsubscribe();
  }

  async handleSignIn() {
    try {
      const { username, password } = this.loginForm.value;
      if (!username || !password) return;
      const { isSignedIn, nextStep } = await this.authService.signIn(
        username,
        password
      );
      this.authService.isSignedIn.next(isSignedIn);
      if (isSignedIn && nextStep.signInStep === 'DONE') {
        this.router.navigate(['/app']);
      }
    } catch (error: any) {
      if (error.toString().includes('UserAlreadyAuthenticatedException')) {
        this.toastr.error('You are already signed in');
        this.authService.isSignedIn.next(true);
        this.router.navigate(['/app']);
      } else {
        this.toastr.error(error.message);
      }
    }
  }

  signUp() {
    this.showSignup = true;
    this.titleService.setTitle('Signup | HomeHaven');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  closeSignup() {
    this.close();
    this.showSignup = false;
    this.clearForm();
  }

  forgotPassword() {
    this.showForgotPassword = true;
    this.titleService.setTitle('Forgot Password | HomeHaven');
  }

  closeForgotPassword() {
    this.close();
    this.showForgotPassword = false;
    this.clearForm();
  }

  close() {
    this.titleService.setTitle('Login | HomeHaven');
    this.showSignup = false;
    this.showForgotPassword = false;
    this.clearForm();
  }

  clearForm() {
    this.email.patchValue('');
    this.password.patchValue('');
  }

  toggleTheme() {
    this.themeService.toggleDarkTheme();
  }
}
