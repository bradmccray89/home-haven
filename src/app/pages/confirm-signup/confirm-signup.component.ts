import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  type ConfirmSignUpInput,
  confirmSignUp,
  autoSignIn,
} from 'aws-amplify/auth';
import { ToastrService } from 'ngx-toastr';
import { fadeFromBottom } from 'src/app/animations/fade';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrl: './confirm-signup.component.scss',
  animations: [fadeFromBottom],
})
export class ConfirmSignupComponent implements OnInit {
  email: string = '';
  confirmSignUpForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
    this.confirmSignUpForm = new FormGroup({
      code: new FormControl(''),
    });
  }

  ngOnInit(): void {
    if (this.authService.isSignedIn.value) {
      this.authService
        .signOut()
        .then(() => {
          return;
        })
        .catch((error) => {
          this.toastr.error(error.message);
        });
    }

    this.route.queryParams.subscribe((params) => {
      this.email = params['username'];
    });
  }

  protected async handleSignUpConfirmation(code: string) {
    try {
      const confirmSignUpInput: ConfirmSignUpInput = {
        username: this.email,
        confirmationCode: code,
      };
      const { nextStep } = await confirmSignUp(confirmSignUpInput);

      this.authService.handleSignUpNextStep(nextStep.signUpStep);
    } catch (error: any) {
      this.toastr.error(error.message);
    }
  }
}
