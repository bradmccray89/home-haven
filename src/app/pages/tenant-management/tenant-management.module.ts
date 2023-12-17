import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantManagementComponent } from './tenant-management.component';
import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, TenantManagementRoutingModule, SharedModule],
  declarations: [TenantManagementComponent],
})
export class TenantManagementModule {}
