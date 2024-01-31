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
  currentLease: Lease;
  leaseList: Lease[];

  constructor() {
    // create list of leases for tenant
    this.leaseList = [
      new Lease({
        id: 1,
        propertyId: 1,
        tenantId: this.tenant.id,
        startDate: new Date('2020-01-01'),
        endDate: new Date('2021-01-01'),
        rent: 1000,
        deposit: 1000,
        pets: false,
        leaseType: '12 month',
        notes: 'No pets allowed',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      new Lease({
        id: 2,
        propertyId: 2,
        tenantId: this.tenant.id,
        startDate: new Date('2021-01-01'),
        endDate: new Date('2022-01-01'),
        rent: 1200,
        deposit: 1200,
        pets: true,
        leaseType: '12 month',
        notes: 'Pets allowed',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      new Lease({
        id: 3,
        propertyId: 3,
        tenantId: this.tenant.id,
        startDate: new Date('2022-01-01'),
        endDate: new Date('2023-01-01'),
        rent: 1500,
        deposit: 1500,
        pets: false,
        leaseType: '12 month',
        notes: 'No pets allowed',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ];

    this.currentLease =
      this.leaseList.find((lease) => lease.isActive) || new Lease();
  }

  ngOnChanges() {
    console.log('tenant', this.tenant, this.currentLease);
  }
}
