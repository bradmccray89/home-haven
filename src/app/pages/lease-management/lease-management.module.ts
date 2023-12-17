import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaseManagementComponent } from './lease-management.component';
import { LeaseManagementRoutingModule } from './lease-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, LeaseManagementRoutingModule, SharedModule],
  declarations: [LeaseManagementComponent],
})
export class LeaseManagementModule {}
