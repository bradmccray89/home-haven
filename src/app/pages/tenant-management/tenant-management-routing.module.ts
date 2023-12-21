import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantManagementComponent } from './tenant-management.component';
import { TenantDetailsComponent } from 'src/app/components/tenant-details/tenant-details.component';
import { AddTenantComponent } from 'src/app/components/add-tenant/add-tenant.component';

const routes: Routes = [
  { path: '', component: TenantManagementComponent },
  {
    path: 'add',
    component: AddTenantComponent,
  },
  {
    path: ':id',
    component: TenantDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantManagementRoutingModule {}
