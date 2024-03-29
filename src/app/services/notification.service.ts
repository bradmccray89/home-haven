import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../shared/models/notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationCollection: any = null;
  public notificationList = new Observable<Notification[]>();

  constructor() {}

  public getNotificationsForUser(userId: string) {
    // this.notificationCollection = this.firestore.collection(
    //   'notifications',
    //   (ref) => {
    //     return ref
    //       .where('userId', '==', userId)
    //       .where('unread', '==', true)
    //       .orderBy('createdAt', 'desc');
    //   }
    // );
    // return this.notificationCollection.valueChanges({ idField: 'id' });
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
