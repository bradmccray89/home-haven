import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
      {
        path: 'tenants',
        loadChildren: () =>
          import('../../pages/tenant-management/tenant-management.module').then(
            (m) => m.TenantManagementModule
          ),
      },
      {
        path: 'properties',
        loadChildren: () =>
          import(
            '../../pages/property-management/property-management.module'
          ).then((m) => m.PropertyManagementModule),
      },
      {
        path: 'leases',
        loadChildren: () =>
          import('../../pages/lease-management/lease-management.module').then(
            (m) => m.LeaseManagementModule
          ),
      },
      {
        path: 'rent-management',
        loadChildren: () =>
          import('../../pages/rent-management/rent-management.module').then(
            (m) => m.RentManagementModule
          ),
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('../../pages/maintenance/maintenance.module').then(
            (m) => m.MaintenanceModule
          ),
      },
      {
        path: 'financials',
        loadChildren: () =>
          import('../../pages/financials/financials.module').then(
            (m) => m.FinancialsModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../../pages/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'documents',
        loadChildren: () =>
          import('../../pages/documents/documents.module').then(
            (m) => m.DocumentsModule
          ),
      },
      {
        path: 'communications',
        loadChildren: () =>
          import('../../pages/communications/communications.module').then(
            (m) => m.CommunicationsModule
          ),
      },
      {
        path: 'help',
        loadChildren: () =>
          import('../../pages/support/support.module').then(
            (m) => m.SupportModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
