import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyManagementRoutingModule } from './property-management-routing.module';
import { PropertyManagementComponent } from './property-management.component';

@NgModule({
  declarations: [PropertyManagementComponent],
  imports: [CommonModule, PropertyManagementRoutingModule, SharedModule],
})
export class PropertyManagementModule {}
