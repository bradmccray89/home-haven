import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  type ConfirmSignUpInput,
  confirmSignUp,
  signUp,
} from 'aws-amplify/auth';
import { fadeFromBottom } from 'src/app/animations/fade';
import { UserProfile } from 'src/app/shared/models/profile.model';
import { matchValidator } from 'src/app/shared/helpers/form-validators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [fadeFromBottom],
})
export class SignupComponent {
  public signUpProfile: UserProfile = new UserProfile();
  public signUpForm: FormGroup;
  public showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      phone: [''],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          matchValidator('confirmPassword', true),
        ],
      ],
      confirmPassword: ['', [Validators.required, matchValidator('password')]],
    });

    // TODO: Remove this
    this.signUpForm.patchValue({
      email: 'bradmccray89@gmail.com',
      name: 'Brandon McCray',
      username: 'bradmccray89',
      phone: '7579953444',
      password: '#Testing!things098',
      confirmPassword: '#Testing!things098',
    });
  }

  async signup() {
    try {
      if (this.signUpForm.invalid) {
        throw new Error('Please fill out all fields');
      }
      if (this.authService.isSignedIn.value) {
        await this.authService.signOut();
      }
      const { email, password } = this.signUpForm.value;
      const username = email;

      const attributes = {
        email: email,
        phone_number: '+1' + this.signUpForm.value?.phone,
        preferred_username: this.signUpForm.value.username,
        name: this.signUpForm.value.name,
      };

      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: { userAttributes: attributes, autoSignIn: true },
      });

      this.authService.handleSignUpNextStep(nextStep.signUpStep, username);
    } catch (error: any) {
      this.toastr.error(error.message);
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
