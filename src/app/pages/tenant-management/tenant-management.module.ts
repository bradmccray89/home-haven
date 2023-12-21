import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantManagementComponent } from './tenant-management.component';
import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TenantDetailsComponent } from 'src/app/components/tenant-details/tenant-details.component';
import { AddTenantComponent } from 'src/app/components/add-tenant/add-tenant.component';

@NgModule({
  imports: [CommonModule, TenantManagementRoutingModule, SharedModule],
  declarations: [
    TenantManagementComponent,
    TenantDetailsComponent,
    AddTenantComponent,
  ],
})
export class TenantManagementModule {}
