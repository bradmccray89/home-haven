import { ThemeService } from './../../services/theme.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { DropdownData } from 'src/app/shared/models/dropdown';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({ height: '0px', opacity: 0.5 }),
        animate('200ms ease-in', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('200ms ease-in', style({ height: '0px', opacity: 0.5 })),
      ]),
    ]),
  ],
})
export class DropdownComponent {
  @Input() data: DropdownData[] = [];
  @Input() showThemeSwitch: boolean = false;
  @Input() showLogout: boolean = false;
  @Output() logoutEmitter = new EventEmitter<boolean>();
  @Output() dropdownIsOpenEmitter = new EventEmitter<boolean>();
  @ViewChild('toggleButton')
  toggleButton!: ElementRef;
  @ViewChild('dropdown')
  dropdown!: ElementRef;
  public isDarkTheme: Observable<boolean> = this.themeService.isDarkTheme;
  public faMoon = faMoon;
  public faSun = faSun;
  public dropdownOpen = false;

  constructor(private themeService: ThemeService, private renderer: Renderer2) {
    // listens for clicks outside of the dropdown
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.toggleButton?.nativeElement.contains(e.target) &&
        !this.dropdown?.nativeElement.contains(e.target)
      ) {
        this.dropdownOpen = false;
        this.dropdownIsOpenEmitter.emit(this.dropdownOpen);
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleDarkTheme();
  }

  toggleDropdown() {
    if (this.data.length > 0) {
      this.dropdownOpen = !this.dropdownOpen;
      this.dropdownIsOpenEmitter.emit(this.dropdownOpen);
    }
  }

  logout() {
    this.logoutEmitter.emit(true);
  }
}
