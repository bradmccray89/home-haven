import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fadeInOut } from 'src/app/animations/fade';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Tenant } from 'src/app/shared/models/tenant.model';
import { TenantService } from 'src/app/services/tenant.service';

@Component({
  selector: 'app-tenant-management',
  templateUrl: './tenant-management.component.html',
  styleUrls: ['./tenant-management.component.css'],
  animations: [fadeInOut],
})
export class TenantManagementComponent implements AfterViewInit {
  searchText: string = '';
  currentSearch: string = '';
  tenantList: Tenant[] = [];
  displayedColumns: string[] = [
    'name',
    'property',
    'leaseStartDate',
    'leaseEndDate',
    'rentAmount',
    'paymentStatus',
  ];
  dataSource: MatTableDataSource<Tenant>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Predefined realistic names and addresses
  names = [
    'Alice Smith',
    'Bob Johnson',
    'Charlie Brown',
    'Diana King',
    'Ethan Davis',
    'Frank Miller',
    'Gina Wilson',
    'Harry Jones',
    'Irene Garcia',
    'Jack Young',
    'Kathy Hernandez',
    'Larry Martinez',
    'Mary Gonzalez',
    'Nick Robinson',
    'Olivia Walker',
    'Peter Allen',
    'Quinn Scott',
    'Rachel Green',
    'Steve Baker',
    'Tina Thompson',
    'Ulysses Adams',
    'Vicky Campbell',
    'Walter Hall',
    'Xena Mitchell',
    'Yolanda Phillips',
    'Zachary Rodriguez',
  ];
  properties = [
    '123 Maple St',
    '456 Oak Ave',
    '789 Pine Rd',
    '101 Elm Blvd',
    '202 Birch Ln',
    '303 Cedar Dr',
    '404 Spruce Ct',
    '505 Willow Way',
    '606 Ash Pl',
    '707 Poplar Ave',
    '808 Sycamore St',
    '909 Walnut Ave',
    '1011 Magnolia Rd',
    '1112 Chestnut Blvd',
    '1213 Locust Ln',
    '1314 Hemlock Dr',
    '1415 Acorn Ct',
    '1516 Aspen Way',
    '1617 Cedar Pl',
    '1718 Elm Ave',
    '1819 Fir St',
    '1920 Oak Rd',
    '2021 Pine Blvd',
    '2122 Spruce Ln',
    '2223 Willow Dr',
    '2324 Ash Ct',
  ];
  cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    'Austin',
    'Jacksonville',
    'Fort Worth',
    'Columbus',
    'Charlotte',
    'San Francisco',
    'Indianapolis',
    'Seattle',
    'Denver',
    'Washington',
    'Boston',
    'El Paso',
    'Nashville',
    'Detroit',
    'Oklahoma City',
    'Portland',
    'Las Vegas',
    'Memphis',
    'Louisville',
    'Baltimore',
    'Milwaukee',
    'Albuquerque',
    'Tucson',
    'Fresno',
    'Mesa',
    'Sacramento',
    'Atlanta',
    'Kansas City',
    'Colorado Springs',
    'Miami',
    'Raleigh',
    'Omaha',
    'Long Beach',
    'Virginia Beach',
    'Oakland',
    'Minneapolis',
    'Tulsa',
    'Tampa',
    'Arlington',
    'New Orleans',
  ];
  states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'VI',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];
  paidStatuses = ['Paid', 'Unpaid', 'Partial'];

  // Helper functions
  randomDate = (after: string = '') => {
    if (after) {
      return new Date(
        +new Date(after) + Math.floor(Math.random() * 10000000000)
      );
    } else {
      return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
    }
  };
  randomAmount = () => Math.floor(Math.random() * 10000);
  randomFromArray = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)];
  randomIndexFromArray = (array: any[]) => {
    return Math.floor(Math.random() * array.length);
  };
  randomPhoneNumber = () => {
    return Math.floor(Math.random() * 10000000000)
      .toString()
      .padStart(10, '0');
  };
  randomZipCode = () => {
    const zip = Math.floor(Math.random() * 100000);
    return zip.toString().padStart(5, '0');
  };

  constructor(private router: Router, private tenantService: TenantService) {
    // make 100 rows of data with randomized values
    for (let i = 0; i < 100; i++) {
      const startDate = this.randomDate();
      const endDate = this.randomDate(startDate.toString());
      const name = this.randomFromArray(this.names);
      this.tenantList.push({
        id: i,
        name: name,
        email: name.replace(' ', '.').toLowerCase() + '@gmail.com',
        phone: this.randomPhoneNumber(),
        propertyId: this.randomIndexFromArray(this.properties),
        address: this.randomFromArray(this.properties),
        city: this.randomFromArray(this.cities),
        state: this.randomFromArray(this.states),
        zip: this.randomZipCode(),
        leaseStartDate: startDate,
        leaseEndDate: endDate,
        rentAmount: this.randomAmount(),
        paymentStatus: this.randomFromArray(this.paidStatuses),
        profilePicture: '',
      });
    }
    this.tenantService.tenantList = this.tenantList;
    this.dataSource = new MatTableDataSource(this.tenantList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchTenants() {
    this.dataSource.filter = '';
    this.currentSearch = this.searchText;
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  clearSearch() {
    this.searchText = '';
    this.currentSearch = '';
    this.dataSource.filter = '';
  }

  addTenant() {
    this.router.navigate(['/tenants', 'add']);
  }

  selectTenant(tenant: Tenant) {
    this.router.navigate(['/tenants', tenant.id]);
  }
}
