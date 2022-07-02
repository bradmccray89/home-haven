import { DropdownComponent } from './../components/dropdown/dropdown.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationDropdownComponent } from '../components/notification-dropdown/notification-dropdown.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    DropdownComponent,
    NotificationDropdownComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
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
