import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Tenant } from 'src/app/shared/models/tenant.model';

@Component({
  selector: 'app-tenant-profile',
  templateUrl: './tenant-profile.component.html',
  styleUrls: ['./tenant-profile.component.scss'],
})
export class TenantProfileComponent implements OnInit {
  @Input() tenant: Tenant = new Tenant();
  tenantProfileForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tenantProfileForm = this.formBuilder.group({
      name: new FormControl(this.tenant.name, [Validators.required]),
      email: new FormControl(this.tenant.email, [Validators.required]),
      phone: new FormControl(this.tenant.phone),
      propertyId: new FormControl(this.tenant.propertyId),
      address: new FormControl(this.tenant.address, [Validators.required]),
      city: new FormControl(this.tenant.city, [Validators.required]),
      state: new FormControl(this.tenant.state, [Validators.required]),
      zip: new FormControl(this.tenant.zip, [Validators.required]),
      leaseStartDate: new FormControl(this.tenant.leaseStartDate),
      leaseEndDate: new FormControl(this.tenant.leaseEndDate),
      rentAmount: new FormControl(this.tenant.rentAmount),
      paymentStatus: new FormControl(this.tenant.paymentStatus),
    });

    if (this.tenant.leaseStartDate) {
      this.tenantProfileForm.controls['leaseStartDate'].setValue(
        this.formatDate(this.tenant.leaseStartDate)
      );
    }
    if (this.tenant.leaseEndDate) {
      this.tenantProfileForm.controls['leaseEndDate'].setValue(
        this.formatDate(this.tenant.leaseEndDate)
      );
    }
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
