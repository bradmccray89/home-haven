export interface Notification {
  id: string;
  userId: string;
  message: string;
  createdAt: any;
  unread: boolean;
  route?: string;
  elapsedTime?: string;
}
