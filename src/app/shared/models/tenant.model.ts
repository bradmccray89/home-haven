export class Tenant {
  id: number;
  name: string;
  email: string;
  property?: string;
  leaseStartDate?: Date;
  leaseEndDate?: Date;
  rentAmount?: number;
  paymentStatus?: string;
  contactInfo: string;
  profilePicture?: string;

  constructor(data: any = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
    this.property = data.property || '';
    this.leaseStartDate = data.leaseStartDate || new Date();
    this.leaseEndDate = data.leaseEndDate || new Date();
    this.rentAmount = data.rentAmount || 0;
    this.paymentStatus = data.paymentStatus || '';
    this.contactInfo = data.contactInfo || '';
    this.profilePicture = data.profilePicture || '';
  }
}
