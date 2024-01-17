export class Profile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(data: any = {}) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.email = data.email || '';
    this.phone = data.phone || null;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || null;
  }
}

export class TenantProfile extends Profile {
  rentalHistory: Array<{
    address: string;
    duration: string;
    landlordContact: string;
  }>;
  currentAddress: string;
  creditScore: number;
  employmentHistory: Array<{
    employer: string;
    jobTitle: string;
    duration: string;
  }>;
  references: Array<{
    name: string;
    contact: string;
    relation: string;
  }>;

  constructor(data: any = {}) {
    super(data);
    this.rentalHistory = data.rentalHistory || [];
    this.currentAddress = data.currentAddress || '';
    this.creditScore = data.creditScore || 0;
    this.employmentHistory = data.employmentHistory || [];
    this.references = data.references || [];
  }
}

export class UserProfile extends Profile {
  username: string;
  lastLogin?: Date;
  preferences: { [key: string]: any };
  profilePicture?: string;
  bio?: string;

  constructor(data: any = {}) {
    super(data);
    this.username = data.username || '';
    this.lastLogin = data.lastLogin || null;
    this.preferences = data.preferences || {};
    this.profilePicture = data.profilePicture || null;
    this.bio = data.bio || '';
  }
}
