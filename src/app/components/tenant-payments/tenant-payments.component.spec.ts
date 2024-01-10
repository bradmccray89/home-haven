import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantPaymentsComponent } from './tenant-payments.component';

describe('TenantPaymentsComponent', () => {
  let component: TenantPaymentsComponent;
  let fixture: ComponentFixture<TenantPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantPaymentsComponent]
    });
    fixture = TestBed.createComponent(TenantPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
