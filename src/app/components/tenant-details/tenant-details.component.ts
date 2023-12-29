import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantService } from 'src/app/services/tenant.service';
import { Tenant } from 'src/app/shared/models/tenant.model';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css'],
})
export class TenantDetailsComponent implements OnInit {
  tenantId: number = 0;
  tenantDetails: Tenant = new Tenant();

  constructor(
    private route: ActivatedRoute,
    private tenantService: TenantService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tenantId = params['id'];
      this.tenantDetails = this.tenantService.getTenantById(this.tenantId)!;
    });
  }
}
