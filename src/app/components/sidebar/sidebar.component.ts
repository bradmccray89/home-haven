import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() links: Routes | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.links);
  }
}
