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
        title: 'Dashboard | HomeHaven',
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../pages/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
        title: 'Profile | HomeHaven',
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../../pages/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
        title: 'Settings | HomeHaven',
      },
      {
        path: 'tenants',
        loadChildren: () =>
          import('../../pages/tenant-management/tenant-management.module').then(
            (m) => m.TenantManagementModule
          ),
        title: 'Tenants | HomeHaven',
      },
      {
        path: 'properties',
        loadChildren: () =>
          import(
            '../../pages/property-management/property-management.module'
          ).then((m) => m.PropertyManagementModule),
        title: 'Properties | HomeHaven',
      },
      {
        path: 'leases',
        loadChildren: () =>
          import('../../pages/lease-management/lease-management.module').then(
            (m) => m.LeaseManagementModule
          ),
        title: 'Leases | HomeHaven',
      },
      {
        path: 'rent-management',
        loadChildren: () =>
          import('../../pages/rent-management/rent-management.module').then(
            (m) => m.RentManagementModule
          ),
        title: 'Rent Management | HomeHaven',
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('../../pages/maintenance/maintenance.module').then(
            (m) => m.MaintenanceModule
          ),
        title: 'Maintenance | HomeHaven',
      },
      {
        path: 'financials',
        loadChildren: () =>
          import('../../pages/financials/financials.module').then(
            (m) => m.FinancialsModule
          ),
        title: 'Financials | HomeHaven',
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../../pages/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
        title: 'Reports | HomeHaven',
      },
      {
        path: 'documents',
        loadChildren: () =>
          import('../../pages/documents/documents.module').then(
            (m) => m.DocumentsModule
          ),
        title: 'Documents | HomeHaven',
      },
      {
        path: 'communications',
        loadChildren: () =>
          import('../../pages/communications/communications.module').then(
            (m) => m.CommunicationsModule
          ),
        title: 'Communications | HomeHaven',
      },
      {
        path: 'help',
        loadChildren: () =>
          import('../../pages/support/support.module').then(
            (m) => m.SupportModule
          ),
        title: 'Help | HomeHaven',
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
