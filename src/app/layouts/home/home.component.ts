import { Subscription } from 'rxjs';
import { UserProfile } from './../../shared/models/user-profile';
import { Routes } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public sidebarOpen = true;
  public links: Routes = [];
  public currentUserProfile: UserProfile = new UserProfile();
  public subscriptions: Subscription[] = [];
  public dropdownOpen = false;

  constructor(
    private userService: UserService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    const uid = localStorage.getItem('uid') || '';
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  logout() {
    this.userService.logout();
  }

  public toggleSidebar(open = true) {
    this.sidebarOpen = open;
  }

  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
