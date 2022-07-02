import { NgModule } from '@angular/core';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./layouts/home/home.module').then((m) => m.HomeModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin,
    },
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
