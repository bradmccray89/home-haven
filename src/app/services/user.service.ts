import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  getCurrentUser,
  type AuthUser,
  fetchUserAttributes,
  type FetchUserAttributesOutput,
} from 'aws-amplify/auth';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  public getUserProfile(uid: string) {
    // return this.firestore.doc(`/profiles/${uid}`).valueChanges();
  }

  getCurrentUser(): Promise<AuthUser> {
    return getCurrentUser();
  }

  fetchUserAttributes(): Promise<FetchUserAttributesOutput> {
    return fetchUserAttributes();
  }

  public logout() {
    const theme = localStorage.getItem('theme') || 'light';
    localStorage.clear();
    localStorage.setItem('theme', theme);
  }
}
