import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss'],
})
export class PropertyManagementComponent implements OnInit {
  propertyList: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
