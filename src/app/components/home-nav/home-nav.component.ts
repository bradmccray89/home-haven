import { fadeFromRight, fadeFromLeft } from './../../animations/fade';
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
import { Observable, Subscription, Timestamp } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';
import { DropdownData } from 'src/app/shared/models/dropdown';
import { Notification } from 'src/app/shared/models/notification';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeFromLeft, fadeFromRight],
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
  public faMagnifyingGlass = faMagnifyingGlass;
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
            data.map((item) => {
              item.elapsedTime = this.getDateDifference(
                new Date(item.createdAt.toDate())
              );
            });
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

  public onSearchIconClick(searchBar: HTMLInputElement) {
    searchBar.focus();
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

  private getDateDifference(date: Date) {
    const timeDifference = Math.abs(date.getTime() - new Date().getTime());
    const diffDays = Math.floor(timeDifference / (1000 * 3600 * 24));
    const diffHours = Math.floor(timeDifference / (1000 * 3600));
    const diffMinutes = Math.floor(timeDifference / (1000 * 60));
    if (diffDays <= 1) {
      if (diffDays === 1) {
        return `${diffDays} day ago`;
      } else {
        if (diffHours <= 1) {
          if (diffHours === 1) {
            return `${diffHours} hour ago`;
          } else {
            if (diffMinutes <= 1) {
              if (diffMinutes === 1) {
                return `${diffMinutes} minute ago`;
              } else {
                return 'Less than a minute ago';
              }
            } else {
              return `${diffMinutes} minutes ago`;
            }
          }
        } else {
          return `${diffHours} hours ago`;
        }
      }
    } else {
      return `${diffDays} days ago`;
    }
  }
}
