import { DropdownData } from './../../shared/models/dropdown';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public propertyList = [];

  constructor() {}
}
