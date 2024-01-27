export class Tenant {
  id: number;
  name: string;
  email: string;
  phone?: string;
  propertyId?: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  leaseStartDate?: Date;
  leaseEndDate?: Date;
  rentAmount?: number;
  paymentStatus?: string;
  profilePicture?: string;

  constructor(data: any = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.propertyId = data.property || 0;
    this.address = data.address || '';
    this.city = data.city || '';
    this.state = data.state || '';
    this.zip = data.zip || '';
    this.leaseStartDate = data.leaseStartDate || null;
    this.leaseEndDate = data.leaseEndDate || null;
    this.rentAmount = data.rentAmount || 0;
    this.paymentStatus = data.paymentStatus || '';
    this.profilePicture = data.profilePicture || '';
  }
}
