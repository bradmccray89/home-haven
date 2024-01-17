export class Lease {
  id: number;
  unitId: number;
  tenantId: number;
  startDate: Date;
  endDate: Date;
  rent: number;
  deposit: number;
  pets: boolean;
  leaseType: string;
  notes: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(lease: any = {}) {
    this.id = lease.id || 0;
    this.unitId = lease.unitId || 0;
    this.tenantId = lease.tenantId || 0;
    this.startDate = lease.startDate || new Date();
    this.endDate = lease.endDate || new Date();
    this.rent = lease.rent || 0;
    this.deposit = lease.deposit || 0;
    this.pets = lease.pets || false;
    this.leaseType = lease.leaseType || '';
    this.notes = lease.notes || '';
    this.isActive = lease.isActive || false;
    this.createdAt = lease.createdAt || new Date();
    this.updatedAt = lease.updatedAt || new Date();
  }
}
