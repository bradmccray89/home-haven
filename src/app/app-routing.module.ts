import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layouts/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
