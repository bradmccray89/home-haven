import { Component, Input, OnChanges } from '@angular/core';
import { Tenant } from 'src/app/shared/models/tenant.model';

@Component({
  selector: 'app-tenant-maintenance',
  templateUrl: './tenant-maintenance.component.html',
  styleUrl: './tenant-maintenance.component.scss',
})
export class TenantMaintenanceComponent implements OnChanges {
  @Input() tenant: Tenant = new Tenant();

  constructor() {}

  ngOnChanges() {
    console.log('tenant', this.tenant);
  }
}
