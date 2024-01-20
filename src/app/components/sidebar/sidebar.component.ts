import { fadeFromLeft } from './../../animations/fade';
import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';
import { UserProfile } from 'src/app/shared/models/profile.model';
import { User } from 'src/app/shared/models/user.model';

interface NavItem {
  name: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fadeFromLeft],
})
export class SidebarComponent {
  @Input() currentUserProfile: UserProfile | undefined;
  @Input() links: Routes | undefined;
  navItems: NavItem[] = [
    {
      name: 'Dashboard',
      icon: 'bootstrapSpeedometer',
      route: 'dashboard',
    },
    {
      name: 'Properties',
      icon: 'bootstrapHouses',
      route: 'properties',
    },
    {
      name: 'Tenants',
      icon: 'bootstrapPeople',
      route: 'tenants',
    },
    {
      name: 'Leases',
      icon: 'bootstrapClipboard',
      route: 'leases',
    },
    {
      name: 'Rent Management',
      icon: 'bootstrapCurrencyDollar',
      route: 'rent-management',
    },
    {
      name: 'Maintenance',
      icon: 'bootstrapWrench',
      route: 'maintenance',
    },
    {
      name: 'Financials',
      icon: 'bootstrapBarChart',
      route: 'financials',
    },
    {
      name: 'Reports',
      icon: 'bootstrapFileEarmarkBarGraph',
      route: 'reports',
    },
    {
      name: 'Documents',
      icon: 'bootstrapFolder',
      route: 'documents',
    },
    {
      name: 'Communications',
      icon: 'bootstrapChatRight',
      route: 'communications',
    },
    {
      name: 'Settings',
      icon: 'bootstrapGear',
      route: 'settings',
    },
    {
      name: 'Help/Support',
      icon: 'bootstrapQuestionCircle',
      route: 'help',
    },
  ];

  constructor() {}
}
