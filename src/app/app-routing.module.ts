import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './shared/guard/authguard.service';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./layouts/home/home.module').then((m) => m.HomeModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./layouts/public/public.module').then((m) => m.PublicModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
