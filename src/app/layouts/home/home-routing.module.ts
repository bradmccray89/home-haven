import { PropertyListComponent } from './../../pages/property-list/property-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../pages/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../../pages/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
