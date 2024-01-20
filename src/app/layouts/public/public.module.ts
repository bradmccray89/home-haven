import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmSignupComponent } from 'src/app/pages/confirm-signup/confirm-signup.component';

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ConfirmSignupComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
})
export class PublicModule {}
