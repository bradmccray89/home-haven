import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  public getUserProfile(uid: string): Observable<unknown> {
    return this.firestore.doc(`/profiles/${uid}`).valueChanges();
  }

  public logout() {
    const theme = localStorage.getItem('theme') || 'light';
    localStorage.clear();
    localStorage.setItem('theme', theme);
  }
}
