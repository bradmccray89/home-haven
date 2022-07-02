import { NotificationService } from './../../services/notification.service';
import { UserProfile } from './../../shared/models/user-profile';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ThemeService } from './../../services/theme.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';
import { DropdownData } from 'src/app/shared/models/dropdown';
import { Notification } from 'src/app/shared/models/notification';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeFromLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate(
          '500ms 100ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 0, transform: 'translateX(-20px)' })
        ),
      ]),
    ]),
    trigger('fadeFromRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate(
          '500ms 100ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 0, transform: 'translateX(20px)' })
        ),
      ]),
    ]),
  ],
})
export class HomeNavComponent implements OnInit, OnDestroy {
  @Input() sidebarOpen = true;
  @Input() currentUserProfile: UserProfile | undefined;
  @Output() toggleSidebarEmit = new EventEmitter<boolean>(true);
  public subscriptions: Subscription[] = [];
  public isDarkTheme: Observable<boolean> = this.themeService.isDarkTheme;
  public notificationDropdownOpen: boolean = false;
  public menuDropdownOpen: boolean = false;
  public faBell = faBell;
  public notificationData = this.notificationService.notificationList;
  public notificationDropdownData!: Notification[];
  public notificationCount: number = 0;
  public showNotifications: boolean = false;
  public dropdownData: DropdownData[] = [
    {
      message: 'Profile',
      route: 'profile',
      clickable: true,
    },
    {
      message: 'Settings',
      route: 'settings',
      clickable: true,
    },
    {
      message: 'Not Found',
      route: 'profile1',
      clickable: true,
    },
  ];

  constructor(
    private themeService: ThemeService,
    private auth: AngularFireAuth,
    private titleService: Title,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.titleService.setTitle('HomeHaven');
  }

  ngOnInit(): void {
    const uid = localStorage.getItem('uid');
    if (uid) {
      this.subscriptions.push(
        this.notificationService
          .getNotificationsForUser(uid)
          .subscribe((data) => {
            this.notificationDropdownData = data;
            this.notificationCount = data.length;
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  public toggleTheme() {
    this.themeService.toggleDarkTheme();
  }

  public toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.toggleSidebarEmit.emit(this.sidebarOpen);
  }

  public setDropdown(isOpen: boolean, type: string = '') {
    if (type === 'notificationDropdown') {
      this.notificationDropdownOpen = isOpen;
    } else if (type === 'menuDropdown') {
      this.menuDropdownOpen = isOpen;
    }
  }

  public logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      const theme = localStorage.getItem('theme') || 'light';
      localStorage.clear();
      localStorage.setItem('theme', theme);
      this.themeService.setDarkTheme(theme === 'dark');
    });
  }
}
