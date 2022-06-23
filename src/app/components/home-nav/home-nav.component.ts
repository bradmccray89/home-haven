import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ThemeService } from './../../services/theme.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
})
export class HomeNavComponent {
  @Input() sidebarOpen = true;
  @Output() toggleSidebarEmit = new EventEmitter<boolean>(true);
  public isDarkTheme: Observable<boolean> = this.themeService.isDarkTheme;
  public faSun = faSun;
  public faMoon = faMoon;

  constructor(
    private themeService: ThemeService,
    private auth: AngularFireAuth,
    private titleService: Title
  ) {
    this.titleService.setTitle('HomeHaven');
  }

  public toggleTheme() {
    this.themeService.toggleDarkTheme();
  }

  public toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.toggleSidebarEmit.emit(this.sidebarOpen);
  }

  public logout() {
    console.log('logout');
    this.auth.signOut().then(() => {
      console.log('logout success');
      window.location.reload();
    });
  }

  public darkThemeToggleHandler(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
