import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationsComponent } from './communications.component';
import { CommunicationsRoutingModule } from './communications-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, CommunicationsRoutingModule, SharedModule],
  declarations: [CommunicationsComponent],
})
export class CommunicationsModule {}
