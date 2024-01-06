import { ThemeService } from './services/theme.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { TenantService } from './services/tenant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'home-haven';
  isDarkTheme: Observable<boolean> = this.themeService.isDarkTheme;
  themeStored: string | null = '';

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    localStorage.setItem(
      'isSignedIn',
      JSON.stringify(this.authService.isSignedIn.value)
    );
    localStorage.setItem(
      'tenantList',
      JSON.stringify(this.tenantService.tenantList)
    );
  }

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private tenantService: TenantService
  ) {}

  ngOnInit() {
    this.themeStored = localStorage.getItem('theme');
    if (this.themeStored) {
      const dark = this.themeStored === 'dark';
      this.themeService.setDarkTheme(dark);
    }
  }
}
