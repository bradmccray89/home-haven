import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantManagementComponent } from './tenant-management.component';
import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TenantDetailsComponent } from 'src/app/components/tenant-details/tenant-details.component';
import { AddTenantComponent } from 'src/app/pages/add-tenant/add-tenant.component';
import { TenantProfileComponent } from 'src/app/components/tenant-profile/tenant-profile.component';
import { TenantPaymentsComponent } from '../../components/tenant-payments/tenant-payments.component';
import { TenantLeasesComponent } from 'src/app/components/tenant-leases/tenant-leases.component';
import { TenantMaintenanceComponent } from 'src/app/components/tenant-maintenance/tenant-maintenance.component';
import { TenantDocumentsComponent } from 'src/app/components/tenant-documents/tenant-documents.component';

@NgModule({
  imports: [CommonModule, TenantManagementRoutingModule, SharedModule],
  declarations: [
    TenantManagementComponent,
    TenantDetailsComponent,
    AddTenantComponent,
    TenantProfileComponent,
    TenantPaymentsComponent,
    TenantLeasesComponent,
    TenantMaintenanceComponent,
    TenantDocumentsComponent,
  ],
})
export class TenantManagementModule {}
