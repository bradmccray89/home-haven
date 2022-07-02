import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Notification } from './../../shared/models/notification';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-dropdown',
  templateUrl: './notification-dropdown.component.html',
  styleUrls: ['./notification-dropdown.component.scss'],
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({ height: '0px', opacity: 0.5 }),
        animate('200ms ease-in', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('200ms ease-in', style({ height: '0px', opacity: 0.5 })),
      ]),
    ]),
  ],
})
export class NotificationDropdownComponent {
  @Input() data: Notification[] = [];
  @Output() dropdownIsOpenEmitter = new EventEmitter<boolean>();
  @ViewChild('toggleButton')
  toggleButton!: ElementRef;
  @ViewChild('dropdown')
  dropdown!: ElementRef;
  public dropdownOpen: boolean = false;
  public faXmark = faXmark;

  constructor(
    private renderer: Renderer2,
    private notificationService: NotificationService
  ) {
    // listens for clicks outside of the dropdown
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.toggleButton?.nativeElement.contains(e.target) &&
        !this.dropdown?.nativeElement.contains(e.target)
      ) {
        this.dropdownOpen = false;
        this.dropdownIsOpenEmitter.emit(this.dropdownOpen);
      }
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownIsOpenEmitter.emit(this.dropdownOpen);
  }

  clearNotifications() {
    this.notificationService.dismissAllNotifications(this.data);
    this.toggleDropdown();
  }

  dismissNotification(notification: Notification) {
    this.notificationService.dismissNotification(notification);
  }
}
