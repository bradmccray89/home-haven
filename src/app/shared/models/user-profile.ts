export interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  middleInitial: string;
  profilePicture: string;
  gender: string;
  uid: string;
  preferredName: string;
  preferredPronouns: {
    singular: string;
    plural: string;
  };
  socials: {};
  theme: string;
  phoneNumber: string;
  creationTime: string;
  lastSignInTime: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
}
