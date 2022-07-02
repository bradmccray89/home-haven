import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { UserProfile } from './../../shared/models/user-profile';
import { Routes } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public sidebarOpen = true;
  public links: Routes = [];
  public currentUserProfile: UserProfile | undefined;
  public subscriptions: Subscription[] = [];
  public dropdownOpen = false;

  constructor(
    private userService: UserService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    const uid = localStorage.getItem('uid') || '';
    const user = this.auth.currentUser;
    this.subscriptions.push(
      this.userService.getUserProfile(uid).subscribe((profile: any) => {
        if (profile) {
          this.currentUserProfile = profile;
        }
      })
    );
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
