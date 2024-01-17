import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Tenant } from 'src/app/shared/models/tenant.model';

interface Payment {
  date: Date;
  amount: number;
  method: string;
  status: string;
}

@Component({
  selector: 'app-tenant-payments',
  templateUrl: './tenant-payments.component.html',
  styleUrls: ['./tenant-payments.component.scss'],
})
export class TenantPaymentsComponent implements OnChanges, AfterViewInit {
  @Input() tenant: Tenant = new Tenant();
  paymentList: Payment[] = [];
  displayedColumns: string[] = ['date', 'amount', 'method', 'status'];
  dataSource!: MatTableDataSource<Payment>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnChanges() {
    // create a list of payments
    for (let i = 0; i < 125; i++) {
      const date = new Date(new Date().setMonth(new Date().getMonth() - i));
      this.paymentList.push({
        date: date,
        amount: this.tenant.rentAmount || 1000,
        method: i % 2 === 0 ? 'Cash' : 'Credit Card',
        status: this.tenant.paymentStatus || 'Paid',
      });
    }

    this.dataSource = new MatTableDataSource(this.paymentList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectPayment(payment: Payment) {
    console.log('selected payment', payment);
  }
}
