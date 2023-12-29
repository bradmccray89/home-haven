import { Injectable } from '@angular/core';
import { Tenant } from '../shared/models/tenant.model';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  public tenantList!: Tenant[];

  constructor() {}

  getTenantById(id: number): Tenant | undefined {
    const tenant = this.tenantList.find((tenant) => tenant.id == id);
    return tenant;
  }
}
