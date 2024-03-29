import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from 'src/app/animations/fade';
import { TenantService } from 'src/app/services/tenant.service';
import { TenantProfile } from 'src/app/shared/models/profile.model';
import { Tenant } from 'src/app/shared/models/tenant.model';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css'],
  animations: [fadeInOut],
})
export class TenantDetailsComponent implements OnInit {
  tenantId: number = 0;
  tenant: Tenant = new Tenant();
  tenantProfile: TenantProfile = new TenantProfile();
  tenantPayments: any = {};
  tenantLeaseInfo: any = {};
  tenantMaintenance: any = {};
  tenantDocuments: any = {};

  constructor(
    private route: ActivatedRoute,
    private tenantService: TenantService,
    private title: Title
  ) {
    this.title.setTitle('Tenant Details');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tenantId = params['id'];
      this.tenant = this.tenantService.getTenantById(this.tenantId)!;
      this.title.setTitle(this.tenant.name);
      this.handleSelectedTabChange(0);
    });
  }

  handleSelectedTabChange(tabIndex: number) {
    switch (tabIndex) {
      case 0:
        this.tenantProfile = this.tenantService.getTenantProfileById(
          this.tenantId
        )!;
        break;
      case 1:
        this.tenantPayments = this.tenantService.getTenantPaymentsById(
          this.tenantId
        )!;
        break;
      case 2:
        this.tenantLeaseInfo = this.tenantService.getTenantLeaseInfoById(
          this.tenantId
        )!;
        break;
      case 3:
        this.tenantMaintenance = this.tenantService.getTenantMaintenanceById(
          this.tenantId
        )!;
        break;
      case 4:
        this.tenantDocuments = this.tenantService.getTenantDocumentsById(
          this.tenantId
        )!;
        break;
      default:
        break;
    }
  }

  handleTenantUpdated(event: any) {
    console.log('Tenant updated: ', event);
  }
}
