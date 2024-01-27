import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { fadeInOut } from 'src/app/animations/fade';
import { Tenant } from 'src/app/shared/models/tenant.model';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css'],
  animations: [fadeInOut],
})
export class AddTenantComponent implements OnInit {
  tenant: Tenant = new Tenant();
  newTenantForm: FormGroup;

  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.title.setTitle('Add Tenant');
    this.newTenantForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      leaseStartDate: [''],
      leaseEndDate: [''],
      rentAmount: [''],
      paymentStatus: [''],
    });
  }

  ngOnInit() {
    console.log('AddTenantComponent', this.tenant);
  }

  onSubmit() {
    // remove more than single space from name
    this.newTenantForm.value.name = this.newTenantForm.value.name.replace(
      /\s\s+/g,
      ' '
    );
    // add +1 to phone number
    this.newTenantForm.value.phone = '+1' + this.newTenantForm.value.phone;
    this.tenant = new Tenant(this.newTenantForm.value);
    console.log('AddTenantComponent', this.tenant);
  }

  onCancel() {
    this.newTenantForm.reset();
    this.router.navigate(['/app/tenants']);
  }
}
