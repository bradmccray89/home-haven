import { fadeFromLeft } from './../../animations/fade';
import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { UserProfile } from 'src/app/shared/models/user-profile';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fadeFromLeft],
})
export class SidebarComponent implements OnInit {
  @Input() currentUserProfile: UserProfile | undefined;
  @Input() links: Routes | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.links);
  }
}
