import { Injectable } from '@angular/core';
import { Tenant } from '../shared/models/tenant.model';
import { TenantProfile } from '../shared/models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  public tenantList: Tenant[];

  constructor() {
    const localTenantList = localStorage.getItem('tenantList');
    if (localTenantList == null || localTenantList === 'undefined') {
      this.tenantList = [];
    } else {
      this.tenantList = JSON.parse(localTenantList);
    }
    localStorage.removeItem('tenantList');
  }

  getTenantById(id: number): Tenant | undefined {
    const tenant = this.tenantList.find((tenant) => tenant.id == id);
    return tenant;
  }

  getTenantProfileById(id: number): any {
    const tenant = this.tenantList.find((tenant) => tenant.id == id);
    return new TenantProfile(tenant);
  }

  getTenantPaymentsById(id: number): any {
    const tenant = this.tenantList.find((tenant) => tenant.id == id);
    return tenant;
  }

  getTenantLeaseInfoById(id: number): any {
    const tenant = this.tenantList.find((tenant) => tenant.id == id);
    return tenant;
  }

  getTenantMaintenanceById(id: number): any {
    const tenant = this.tenantList.find((tenant) => tenant.id == id);
    return tenant;
  }

  getTenantDocumentsById(id: number): any {
    const tenant = this.tenantList.find((tenant) => tenant.id == id);
    return tenant;
  }
}
