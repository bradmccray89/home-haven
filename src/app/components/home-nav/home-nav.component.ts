import { AuthService } from 'src/app/services/auth.service';
import { fadeFromRight, fadeFromLeft } from './../../animations/fade';
import { NotificationService } from './../../services/notification.service';
import { User } from '../../shared/models/user.model';
import { ThemeService } from './../../services/theme.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DropdownData } from 'src/app/shared/models/dropdown.model';
import { Notification } from 'src/app/shared/models/notification.model';
import { ToastrService } from 'ngx-toastr';
import { UserProfile } from 'src/app/shared/models/profile.model';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
  animations: [fadeFromLeft, fadeFromRight],
})
export class HomeNavComponent implements OnInit, OnDestroy {
  @Input() sidebarOpen = true;
  @Input() currentUserProfile: UserProfile = new UserProfile();
  @Output() toggleSidebarEmit = new EventEmitter<boolean>(true);
  public subscriptions: Subscription[] = [];
  public isDarkTheme: Observable<boolean> = this.themeService.isDarkTheme;
  public notificationDropdownOpen: boolean = false;
  public menuDropdownOpen: boolean = false;
  public notificationData = this.notificationService.notificationList;
  public notificationDropdownData: Notification[] = [];
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
    private authService: AuthService,
    private themeService: ThemeService,
    private titleService: Title,
    private router: Router,
    private notificationService: NotificationService,
    private toastr: ToastrService
  ) {
    this.titleService.setTitle('HomeHaven');
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // const uid = localStorage.getItem('uid');
    // if (uid) {
    //   this.subscriptions.push(
    //     this.notificationService
    //       .getNotificationsForUser(uid)
    //       .subscribe((data) => {
    //         data.map((item) => {
    //           item.elapsedTime = this.getDateDifference(
    //             new Date(item.createdAt.toDate())
    //           );
    //         });
    //         this.notificationDropdownData = data;
    //         this.notificationCount = data.length;
    //       })
    //   );
    // }
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

  async signOut() {
    try {
      const result = await this.authService.signOut();
      this.router.navigate(['/login']);
    } catch (error: any) {
      this.toastr.error(error.message);
    }
  }
}
