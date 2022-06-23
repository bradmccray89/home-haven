import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sidebarOpen = true;
  public links: Routes = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.links = this.route.routeConfig?.children || [];
  }

  logout() {
    localStorage.removeItem('token');
  }

  public toggleSidebar(open = true) {
    this.sidebarOpen = open;
  }
}
