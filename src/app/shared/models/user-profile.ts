export class UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  middleInitial: string;
  profilePicture: string;
  gender: string;
  uid: string;
  preferredName: string;
  socials: {};
  theme: string;
  phoneNumber: string;
  creationTime: string;
  lastSignInTime: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;

  constructor() {
    this.email = 'email@example.com';
    this.firstName = 'First';
    this.lastName = 'Last';
    this.middleInitial = 'M';
    this.profilePicture = '';
    this.gender = 'Male';
    this.uid = '1234567890';
    this.preferredName = 'First';
    this.socials = {};
    this.theme = 'light';
    this.phoneNumber = '1234567890';
    this.creationTime = '2021-01-01';
    this.lastSignInTime = '2021-01-01';
    this.isEmailVerified = false;
    this.isPhoneVerified = false;
  }
}
