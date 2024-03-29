import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { fadeFromBottom } from 'src/app/animations/fade';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeFromBottom],
})
export class ForgotPasswordComponent {
  public email = new FormControl('', [Validators.required, Validators.email]);
  public forgotPasswordForm = new FormGroup({
    email: this.email,
  });

  constructor(private toastr: ToastrService) {}

  sendForgotPassword() {
    // if (this.forgotPasswordForm.invalid || !this.email.value) return;
    // this.auth
    //   .sendPasswordResetEmail(this.email.value)
    //   .then((response) => {
    //     this.toastr.success('A reset link has been sent to your email');
    //     this.close();
    //   })
    //   .catch((error) => {
    //     switch (error.code) {
    //       case 'auth/invalid-email':
    //         this.toastr.error('Invalid email');
    //         break;
    //       case 'auth/user-not-found':
    //         this.toastr.error('User not found');
    //         break;
    //       default:
    //         this.toastr.error('Something went wrong');
    //         break;
    //     }
    //   });
  }
}
