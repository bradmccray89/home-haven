import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  constructor(private firestore: AngularFirestore) {}

  getPropertyList() {
    this.firestore.collection('properties');
  }
}
