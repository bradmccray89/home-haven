import { DropdownComponent } from './../components/dropdown/dropdown.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationDropdownComponent } from '../components/notification-dropdown/notification-dropdown.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

//Icon Imports
import { heroXMark, heroBell, heroHome } from '@ng-icons/heroicons/outline';
import {
  heroMoonSolid,
  heroSunSolid,
  heroEyeSolid,
  heroEyeSlashSolid,
} from '@ng-icons/heroicons/solid';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapSpeedometer,
  bootstrapHouses,
  bootstrapPeople,
  bootstrapClipboard,
  bootstrapCurrencyDollar,
  bootstrapWrench,
  bootstrapBarChart,
  bootstrapFileEarmarkBarGraph,
  bootstrapFolder,
  bootstrapChatRight,
  bootstrapGear,
  bootstrapQuestionCircle,
  bootstrapX,
  bootstrapArrowLeft,
} from '@ng-icons/bootstrap-icons';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const icons = {
  heroXMark,
  heroEyeSolid,
  heroEyeSlashSolid,
  heroSunSolid,
  heroMoonSolid,
  heroBell,
  heroHome,
  bootstrapSpeedometer,
  bootstrapHouses,
  bootstrapPeople,
  bootstrapClipboard,
  bootstrapCurrencyDollar,
  bootstrapWrench,
  bootstrapBarChart,
  bootstrapFileEarmarkBarGraph,
  bootstrapFolder,
  bootstrapChatRight,
  bootstrapGear,
  bootstrapQuestionCircle,
  bootstrapX,
  bootstrapArrowLeft,
};

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgIconsModule.withIcons(icons),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatInputModule,
  ],
  exports: [
    DropdownComponent,
    NotificationDropdownComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgIconsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatInputModule,
  ],
  declarations: [DropdownComponent, NotificationDropdownComponent],
  providers: [provideNgxMask()],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
