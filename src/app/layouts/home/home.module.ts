import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomeNavComponent } from 'src/app/components/home-nav/home-nav.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  exports: [],
  declarations: [HomeComponent, HomeNavComponent, SidebarComponent],
  providers: [],
})
export class HomeModule {}
