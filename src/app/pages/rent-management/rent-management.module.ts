import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentManagementComponent } from './rent-management.component';
import { RentManagementRoutingModule } from './rent-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, RentManagementRoutingModule, SharedModule],
  declarations: [RentManagementComponent],
})
export class RentManagementModule {}
