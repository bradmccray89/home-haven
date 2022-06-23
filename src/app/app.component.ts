import { ThemeService } from './services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'home-haven';
  isDarkTheme: Observable<boolean> = this.themeService.isDarkTheme;
  themeStored: string | null = '';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeStored = localStorage.getItem('theme');
    if (this.themeStored) {
      const dark = this.themeStored === 'dark';
      this.themeService.setDarkTheme(dark);
    }
  }
}
