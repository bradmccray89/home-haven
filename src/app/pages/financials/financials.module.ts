import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialsComponent } from './financials.component';
import { FinancialsRoutingModule } from './financials-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FinancialsRoutingModule, SharedModule],
  declarations: [FinancialsComponent],
})
export class FinancialsModule {}
