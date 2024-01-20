import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { ConfirmSignupComponent } from 'src/app/pages/confirm-signup/confirm-signup.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login | HomeHaven' },
      {
        path: 'signup',
        component: SignupComponent,
        title: 'Sign Up | HomeHaven',
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Forgot Password | HomeHaven',
      },
      {
        path: 'confirm-signup',
        component: ConfirmSignupComponent,
        title: 'Confirm Sign Up | HomeHaven',
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Not Found | HomeHaven',
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
