import { DropdownComponent } from './../components/dropdown/dropdown.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationDropdownComponent } from '../components/notification-dropdown/notification-dropdown.component';

//Icon Imports
import { heroXMark, heroBell } from '@ng-icons/heroicons/outline';
import {
  heroMoonSolid,
  heroSunSolid,
  heroEyeSolid,
  heroEyeSlashSolid,
} from '@ng-icons/heroicons/solid';
import { NgIconsModule } from '@ng-icons/core';

const icons = {
  heroXMark,
  heroEyeSolid,
  heroEyeSlashSolid,
  heroSunSolid,
  heroMoonSolid,
  heroBell,
};

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgIconsModule.withIcons(icons),
  ],
  exports: [
    DropdownComponent,
    NotificationDropdownComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgIconsModule,
  ],
  declarations: [DropdownComponent, NotificationDropdownComponent],
  providers: [],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
