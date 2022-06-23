import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  @Output() closeForgotPassword: EventEmitter<any> = new EventEmitter();
  @Input() showForgotPassword: boolean = false;
  public faXmark = faXmark;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public forgotPasswordForm = new FormGroup({
    email: this.email,
  });

  constructor(private auth: AngularFireAuth, private toastr: ToastrService) {}

  sendForgotPassword() {
    this.auth
      .sendPasswordResetEmail(this.email.value)
      .then((response) => {
        this.toastr.success('A reset link has been sent to your email');
        this.close();
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.toastr.error('Invalid email');
            break;
          case 'auth/user-not-found':
            this.toastr.error('User not found');
            break;
          default:
            this.toastr.error('Something went wrong');
            break;
        }
      });
  }

  close() {
    this.closeForgotPassword.emit();
  }
}
