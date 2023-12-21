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
  public propertyList: any[] = [
    {
      id: '1',
      tenantFullName: 'John Doe',
      streetAddress: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      occupied: true,
      rentAmount: 2000,
      lastPaymentDate: '2021-01-01',
      onTimePercentage: 0.98,
    },
    {
      id: '2',
      tenantFullName: 'Jane Smith',
      streetAddress: '456 Park Ave',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      occupied: true,
      rentAmount: 2500,
      lastPaymentDate: '2021-02-01',
      onTimePercentage: 0.95,
    },
    {
      id: '3',
      tenantFullName: 'Bob Johnson',
      streetAddress: '789 Elm St',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      occupied: true,
      rentAmount: 3000,
      lastPaymentDate: '2021-03-01',
      onTimePercentage: 0.92,
    },
    {
      id: '4',
      tenantFullName: 'Emily Davis',
      streetAddress: '321 Oak St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      occupied: true,
      rentAmount: 3500,
      lastPaymentDate: '2021-04-01',
      onTimePercentage: 0.89,
    },
    {
      id: '5',
      tenantFullName: 'Michael Brown',
      streetAddress: '654 Pine St',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
      occupied: true,
      rentAmount: 4000,
      lastPaymentDate: '2021-05-01',
      onTimePercentage: 0.86,
    },
    {
      id: '6',
      tenantFullName: 'Sarah Miller',
      streetAddress: '987 Cedar St',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19107',
      occupied: true,
      rentAmount: 4500,
      lastPaymentDate: '2021-06-01',
      onTimePercentage: 0.83,
    },
    {
      id: '7',
      tenantFullName: 'David Anderson',
      streetAddress: '246 Maple St',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      occupied: true,
      rentAmount: 5000,
      lastPaymentDate: '2021-07-01',
      onTimePercentage: 0.8,
    },
    {
      id: '8',
      tenantFullName: 'Jessica Thompson',
      streetAddress: '369 Birch St',
      city: 'San Antonio',
      state: 'TX',
      zipCode: '78201',
      occupied: true,
      rentAmount: 5500,
      lastPaymentDate: '2021-08-01',
      onTimePercentage: 0.77,
    },
    {
      id: '9',
      tenantFullName: 'James Moore',
      streetAddress: '159 Willow St',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101',
      occupied: true,
      rentAmount: 6000,
      lastPaymentDate: '2021-09-01',
      onTimePercentage: 0.74,
    },
    {
      id: '10',
      tenantFullName: 'Matthew Taylor',
      streetAddress: '753 Cherry St',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201',
      occupied: true,
      rentAmount: 6500,
      lastPaymentDate: '2021-10-01',
      onTimePercentage: 0.71,
    },
    {
      id: '11',
      tenantFullName: 'Daniel Hernandez',
      streetAddress: '951 Oak St',
      city: 'San Jose',
      state: 'CA',
      zipCode: '95101',
      occupied: true,
      rentAmount: 7000,
      lastPaymentDate: '2021-11-01',
      onTimePercentage: 0.68,
    },
    {
      id: '12',
      tenantFullName: 'Jennifer Gonzalez',
      streetAddress: '143 Elm St',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      occupied: true,
      rentAmount: 7500,
      lastPaymentDate: '2021-12-01',
      onTimePercentage: 0.65,
    },
    {
      id: '13',
      tenantFullName: 'William Anderson',
      streetAddress: '369 Pine St',
      city: 'Jacksonville',
      state: 'FL',
      zipCode: '32210',
      occupied: true,
      rentAmount: 8000,
      lastPaymentDate: '2022-01-01',
      onTimePercentage: 0.62,
    },
    {
      id: '14',
      tenantFullName: 'Ashley Thomas',
      streetAddress: '159 Cedar St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      occupied: true,
      rentAmount: 8500,
      lastPaymentDate: '2022-02-01',
      onTimePercentage: 0.59,
    },
    {
      id: '15',
      tenantFullName: 'Jessica Hernandez',
      streetAddress: '753 Birch St',
      city: 'Indianapolis',
      state: 'IN',
      zipCode: '46201',
      occupied: true,
      rentAmount: 9000,
      lastPaymentDate: '2022-03-01',
      onTimePercentage: 0.56,
    },
    {
      id: '16',
      tenantFullName: 'Joshua Moore',
      streetAddress: '951 Cherry St',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      occupied: true,
      rentAmount: 9500,
      lastPaymentDate: '2022-04-01',
      onTimePercentage: 0.53,
    },
    {
      id: '17',
      tenantFullName: 'Amanda Taylor',
      streetAddress: '143 Oak St',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
      occupied: true,
      rentAmount: 10000,
      lastPaymentDate: '2022-04-01',
      onTimePercentage: 1.0,
    },
    {
      id: '18',
      tenantFullName: 'Andrew Hernandez',
      streetAddress: '369 Maple St',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19107',
      occupied: true,
      rentAmount: 10500,
      lastPaymentDate: '2022-05-01',
      onTimePercentage: 0.5,
    },
    {
      id: '19',
      tenantFullName: 'Emily Gonzalez',
      streetAddress: '159 Cedar St',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      occupied: true,
      rentAmount: 11000,
      lastPaymentDate: '2022-06-01',
      onTimePercentage: 0.47,
    },
    {
      id: '20',
      tenantFullName: 'Jacob Anderson',
      streetAddress: '753 Pine St',
      city: 'San Antonio',
      state: 'TX',
      zipCode: '78201',
      occupied: true,
      rentAmount: 11500,
      lastPaymentDate: '2022-07-01',
      onTimePercentage: 0.44,
    },
    {
      id: '21',
      tenantFullName: 'Matthew Thomas',
      streetAddress: '951 Oak St',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101',
      occupied: true,
      rentAmount: 12000,
      lastPaymentDate: '2022-08-01',
      onTimePercentage: 0.41,
    },
    {
      id: '22',
      tenantFullName: 'Nicholas Hernandez',
      streetAddress: '143 Elm St',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201',
      occupied: true,
      rentAmount: 12500,
      lastPaymentDate: '2022-09-01',
      onTimePercentage: 0.38,
    },
    {
      id: '23',
      tenantFullName: 'Rachel Gonzalez',
      streetAddress: '369 Pine St',
      city: 'San Jose',
      state: 'CA',
      zipCode: '95101',
      occupied: true,
      rentAmount: 13000,
      lastPaymentDate: '2022-10-01',
      onTimePercentage: 0.35,
    },
    {
      id: '24',
      tenantFullName: 'Michael Anderson',
      streetAddress: '159 Cedar St',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      occupied: true,
      rentAmount: 13500,
      lastPaymentDate: '2022-11-01',
      onTimePercentage: 0.32,
    },
    {
      id: '25',
      tenantFullName: 'Sarah Thomas',
      streetAddress: '753 Birch St',
      city: 'Jacksonville',
      state: 'FL',
      zipCode: '32210',
      occupied: true,
      rentAmount: 14000,
      lastPaymentDate: '2022-12-01',
      onTimePercentage: 0.29,
    },
  ];

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
}
