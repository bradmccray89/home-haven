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
  public currentUserProfile: User = new User();
  public subscriptions: Subscription[] = [];
  public dropdownOpen = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      const result = await this.userService.fetchUserAttributes();
      if (!result) {
        throw new Error('No user found');
      }
    } catch (error: any) {
      this.toastr.error(error.message);
      this.signOut();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  async signOut() {
    try {
      await this.authService.signOut();
      this.router.navigate(['/login']);
    } catch (error: any) {
      this.toastr.error(error.message);
    }
  }

  public toggleSidebar(open = true) {
    this.sidebarOpen = open;
  }

  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
