import { Component, Input, OnChanges } from '@angular/core';
import { Tenant } from 'src/app/shared/models/tenant.model';

@Component({
  selector: 'app-tenant-documents',
  templateUrl: './tenant-documents.component.html',
  styleUrl: './tenant-documents.component.scss',
})
export class TenantDocumentsComponent implements OnChanges {
  @Input() tenant: Tenant = new Tenant();

  constructor() {}

  ngOnChanges() {
    console.log('tenant', this.tenant);
  }
}
