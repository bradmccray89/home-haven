import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @Output() closeSignup: EventEmitter<any> = new EventEmitter();
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public faXmark = faXmark;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);
  public confirmPassword = new FormControl('', [Validators.required]);
  public signupForm: FormGroup;
  public showPassword: boolean = false;

  constructor(
    private auth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.signupForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: [this.passwordMatchValidator] }
    );
  }

  signup() {
    this.auth
      .createUserWithEmailAndPassword(
        this.signupForm.value.email,
        this.signupForm.value.password
      )
      .then((response) => {
        if (response.user) {
          this.toastr.success('Account created for ' + response.user.email);
        }
        this.close();
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.toastr.error('Email already in use');
            break;
          case 'auth/invalid-email':
            this.toastr.error('Invalid email');
            break;
          case 'auth/weak-password':
            this.toastr.error('Weak password');
            break;
          default:
            this.toastr.error('Something went wrong');
            break;
        }
      });
  }

  close() {
    this.closeSignup.emit();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  passwordMatchValidator() {
    return (formGroup: FormGroup) => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      if (password !== null && confirmPassword !== null) {
        return password === confirmPassword ? null : { mismatch: true };
      } else {
        return null;
      }
    };
  }
}
