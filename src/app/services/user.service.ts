import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  public getUserProfile(uid: string) {
    // return this.firestore.doc(`/profiles/${uid}`).valueChanges();
  }

  public logout() {
    const theme = localStorage.getItem('theme') || 'light';
    localStorage.clear();
    localStorage.setItem('theme', theme);
  }
}
