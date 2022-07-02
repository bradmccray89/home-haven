import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Notification } from '../shared/models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationCollection:
    | AngularFirestoreCollection<Notification>
    | undefined;
  public notificationList = new Observable<Notification[]>();

  constructor(private firestore: AngularFirestore) {}

  public getNotificationsForUser(userId: string) {
    this.notificationCollection = this.firestore.collection(
      'notifications',
      (ref) => {
        return ref.where('userId', '==', userId).where('unread', '==', true);
      }
    );
    return this.notificationCollection.valueChanges({ idField: 'id' });
  }

  public dismissAllNotifications(notifications: Notification[]) {
    notifications.forEach((notification) => {
      notification.unread = false;
      this.notificationCollection
        ?.doc(notification.id)
        .update({ unread: false });
    });
  }

  public dismissNotification(notification: Notification) {
    this.notificationCollection?.doc(notification.id).update({ unread: false });
  }
}
