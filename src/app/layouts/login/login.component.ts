import { fadeFromBottom } from './../../animations/fade';
import { ThemeService } from './../../services/theme.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  faEye,
  faEyeSlash,
  faMoon,
  faSun,
} from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeFromBottom],
})
export class LoginComponent implements OnInit, OnDestroy {
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);
  public loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });
  public showPassword: boolean = false;
  public showSignup: boolean = false;
  public showForgotPassword: boolean = false;
  public isDarkTheme: Observable<boolean> = this.themeService.isDarkTheme;
  public faSun = faSun;
  public faMoon = faMoon;
  public authSubscribe: Subscription | undefined;

  constructor(
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private themeService: ThemeService,
    private titleService: Title,
    private userService: UserService
  ) {
    this.titleService.setTitle('Login | HomeHaven');
  }

  ngOnInit(): void {
    this.authSubscribe = this.auth.authState.subscribe((user) => {
      if (user && user.metadata.lastSignInTime) {
        this.auth.signOut();
        this.userService.logout();
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubscribe?.unsubscribe();
  }

  login() {
    if (this.loginForm.invalid || !this.email.value || !this.password.value)
      return;
    this.auth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then((response) => {
        this.authSubscribe?.unsubscribe();
        if (response.user) {
          localStorage.setItem('uid', response.user.uid);
        }
        this.router.navigate(['/']);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.toastr.error('Invalid login');
            break;
          case 'auth/user-disabled':
            this.toastr.error('User disabled');
            break;
          case 'auth/user-not-found':
            this.toastr.error('User not found');
            break;
          case 'auth/wrong-password':
            this.toastr.error('Invalid login');
            break;
          default:
            this.toastr.error('Something went wrong');
            break;
        }
      });
  }

  signup() {
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
