import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme = this._darkTheme.asObservable();

  constructor() {}

  setDarkTheme(isDark: boolean) {
    this._darkTheme.next(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.classList.toggle('dark', isDark);
  }

  toggleDarkTheme() {
    this.setDarkTheme(!this.getReadableDarkTheme());
  }

  getReadableDarkTheme() {
    return this._darkTheme.value;
  }
}
