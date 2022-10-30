import { fadeFromBottom } from './../../animations/fade';
import { PropertyService } from './../../services/property.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    fadeFromBottom,
    trigger('fadeImage', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('show <=> hide', animate('500ms ease-in-out')),
    ]),
  ],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  public ownerList: any[] = [];
  public tenantList: any[] = [];

  constructor(
    private propertyService: PropertyService,
    private storage: AngularFireStorage,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    const uid = localStorage.getItem('uid');
    if (uid) {
      this.subscriptions.push(
        this.propertyService.getOwnerList(uid).subscribe((data) => {
          this.ownerList = data;
          this.loadingService.setInitialLoading(false);
          this.ownerList.map((item) => {
            this.subscriptions.push(
              this.storage
                .ref(`home-images/${item.id}/thumbnail.jpg`)
                .getDownloadURL()
                .subscribe((url) => {
                  item.thumbnail = url;
                })
            );
          });
        }),
        this.propertyService.getTenantList(uid).subscribe((data) => {
          this.tenantList = data;
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onImageLoad(event: any, property: any): void {
    console.log('property', property);
  }
}
