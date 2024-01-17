import { Component, Input, OnChanges } from '@angular/core';
import { Tenant } from 'src/app/shared/models/tenant.model';
import { Lease } from '../../shared/models/lease.model';

@Component({
  selector: 'app-tenant-leases',
  templateUrl: './tenant-leases.component.html',
  styleUrl: './tenant-leases.component.scss',
})
export class TenantLeasesComponent implements OnChanges {
  @Input() tenant: Tenant = new Tenant();
  currentLease: Lease = new Lease();

  constructor() {}

  ngOnChanges() {
    console.log('tenant', this.tenant, this.currentLease);
  }
}
