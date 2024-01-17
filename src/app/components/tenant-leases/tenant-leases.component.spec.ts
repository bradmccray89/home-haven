import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantLeasesComponent } from './tenant-leases.component';

describe('TenantLeasesComponent', () => {
  let component: TenantLeasesComponent;
  let fixture: ComponentFixture<TenantLeasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantLeasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenantLeasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
