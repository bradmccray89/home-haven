import { UserProfile } from 'src/app/shared/models/profile.model';
import { Subscription } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { Router, Routes } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

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
    private authService: AuthService,
    private loadingService: LoadingService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.authService.isSignedIn.value) {
      this.router.navigate(['/login']);
    }
    this.userService
      .fetchUserAttributes()
      .then((result) => {
        const userProfile = {
          email: result.email,
          phone: result.phone_number,
          name: result.name,
          username: result.preferred_username,
        };
        this.currentUserProfile = new UserProfile(userProfile);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.toastr.error(error.message);
        if (error.name === 'UserUnAuthenticatedException') {
          this.router.navigate(['/login']);
        }
      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  signOut() {
    this.authService
      .signOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }

  toggleSidebar(open = true) {
    this.sidebarOpen = open;
  }

  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
