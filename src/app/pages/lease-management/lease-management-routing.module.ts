import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaseManagementComponent } from './lease-management.component';

const routes: Routes = [{ path: '', component: LeaseManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaseManagementRoutingModule {}
