import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private ownerCollection: any = null;
  private tenantCollection: any = null;
  public ownerList = new Observable<any[]>();
  public tenantList = new Observable<any[]>();

  constructor() {}

  getOwnerList(userId: string) {
    // this.ownerCollection = this.firestore.collection('properties', (ref) => {
    //   return ref.where('owner', '==', userId);
    // });
    // return this.ownerCollection.valueChanges({ idField: 'id' });
  }

  getTenantList(userId: string) {
    // this.tenantCollection = this.firestore.collection('properties', (ref) => {
    //   return ref.where('tenant', '==', userId);
    // });
    // return this.tenantCollection.valueChanges({ idField: 'id' });
  }

  getThumbnail(propertyId: string) {
    // return this.firestore.doc(`properties/${propertyId}`).valueChanges();
  }
}
